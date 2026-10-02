import test from 'node:test';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {createInterface} from 'node:readline';
import {once} from 'node:events';
import {parseManifest} from '@snowball/plugin-sdk';
import {opencodeManifest} from '../dist/index.js';

test('independent worker uses SDK protocol and exits on EOF without launching a harness', async () => {
  const m = parseManifest(await opencodeManifest());
  const child = spawn(process.execPath, [m.entrypoint], {
    stdio: 'pipe',
    windowsHide: true,
    env: { ...process.env, NODE_OPTIONS: '' }
  });
  const exited = once(child, 'exit');
  const lines = createInterface({ input: child.stdout });
  const output = [];
  child.stderr.resume();
  lines.on('line', line => output.push(JSON.parse(line)));
  const timeout = setTimeout(() => child.kill(), 15000);
  try {
    child.stdin.write(JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'plugin.initialize', params: { apiVersion: '1.0.0', pluginId: m.id } }) + '\n');
    const deadline = Date.now() + 12000;
    while (!output.length && Date.now() < deadline) await new Promise(r => setTimeout(r, 10));
    assert.equal(output[0]?.result?.pluginId, m.id);
    assert.equal(output[0]?.result?.apiVersion, '1.0.0');
    child.stdin.end();
    const [code] = await exited;
    assert.equal(code, 0);
  } finally {
    clearTimeout(timeout);
    lines.close();
    if (child.exitCode === null) child.kill();
  }
});
