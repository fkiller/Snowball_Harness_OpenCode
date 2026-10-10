<p align="center">
  <img src="assets/banner.png" alt="Snowball Banner" width="100%">
</p>

<h1 align="center">
  <img src="assets/icon.png" width="48" height="48" valign="middle" alt="Snowball Icon">
  Snowball Harness · OpenCode — Preview
</h1>

<p align="center"><strong>Local OpenCode integration plugin</strong></p>

<p align="center">
  <a href="README.md">English</a> | <a href="README.ko.md">한국어</a>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" alt="License"></a>
  <img src="https://img.shields.io/badge/Node.js-%3E%3D22.12-green.svg" alt="Node.js">
  <img src="https://img.shields.io/badge/Platforms-Windows%20%7C%20macOS-orange.svg" alt="Platforms">
  <a href="https://github.com/fkiller/Snowball_Middleware#one-shot-install"><img src="https://img.shields.io/badge/Install-Snowball-purple.svg" alt="Install Snowball"></a>
</p>

---

<a id="one-shot-install"></a>
## Install Snowball

**Install Snowball once per PC.** The default installation includes the Web UI, MK20 discovery/transport and speech runtime, M5Stack discovery/gateway, and all three Codex/Antigravity/OpenCode harness plugins. No device profile selection or connected USB device is needed.

Run in Windows PowerShell:

```powershell
& ([scriptblock]::Create((irm 'https://raw.githubusercontent.com/fkiller/Snowball_Middleware/main/install.ps1')))
```

The installer prepares Node/Git/Python, builds the companion components, checks the actual isolated harness workers, and starts a hidden per-user background application with a tray icon. The terminal returns after the owned runtime responds. The tray provides Web UI, status, Settings, Pause/Resume, Restart, Quit and login startup. Web UI stays on **http://127.0.0.1:8765/**. Default location: `%LOCALAPPDATA%\Snowball`; **Start-Snowball.ps1** restarts it without downloading dependencies. Missing native harness applications remain unavailable until installed and signed in through their vendors.

For updates, use the same `-InstallRoot` with `-Update` and omit `-Profile`. Old single-device installs gain both adapters while preserving device settings, pairing keys, controller state, speech caches, custom API port and login startup preference. An absent or ambiguous private LAN leaves automatic discovery waiting while the Web UI remains available; use `-Bind PRIVATE_PC_IP` when needed.

MK20 joins Wi-Fi independently: press K17 (Machines), choose a PC and pair/select it. M5Stack firmware **0.4.0** automatically discovers running middleware on the same LAN, including unknown PCs. Open Machine or Settings → Find middleware, then select a **New** PC to pair over Wi-Fi; registered PCs remain available for switching. Adding a PC requires only the complete middleware installation: no device-specific install, USB connection or registration script. Existing Wi-Fi and registered PC keys are retained. Firmware 0.3.0 and earlier cannot discover unknown PCs; upgrade the device once to 0.4.0. The installed **Register-M5Stack.ps1** / **Register-M5Stack.sh** remain optional maintenance tools for USB verification or explicit firmware preparation, not the normal PC onboarding path. Default verification never flashes; `-Flash` / `--flash` makes a full private flash backup before upload. Firmware builds may fetch missing toolchains. Normal installation and `-Update` do not flash devices. Discovery is inventory; only explicit device selection starts LAN pairing. Use a trusted private LAN with device ports allowed and client isolation disabled.

Options: `-Update`, `-InstallRoot PATH`, `-Bind PRIVATE_PC_IP`, `-Port 8765`, `-NoStart`, `-NoShortcut`. `-Profile web|mk20|m5stack` remains an explicit development/diagnostic subset option, not the normal installation flow; it retains adapters already installed in that root. macOS source users with Node/Git/Python can run `npm run setup --` from a sibling checkout layout; explicit USB preparation uses `--prepare-m5stack [--no-flash]`. Linux suite workers are not yet supported. See the central specification for protocol, authentication and field-verification limits.

[Common architecture and repository ownership](https://github.com/fkiller/Snowball_Control/blob/main/docs/ARCHITECTURE.md)

[Control · MK20](https://github.com/fkiller/Snowball_Control) · [Middleware · Installer / Web UI](https://github.com/fkiller/Snowball_Middleware) · [Device · M5Stack](https://github.com/fkiller/Snowball_Device_M5Stack) · Harness: [Codex](https://github.com/fkiller/Snowball_Harness_Codex), [Antigravity](https://github.com/fkiller/Snowball_Harness_Antigravity), [OpenCode](https://github.com/fkiller/Snowball_Harness_OpenCode)

---

## Key Capabilities

- **Zero Simulation**: Direct native interaction with live local CLI processes and runtime sessions without fake/mock delays or synthetic responses.
- **Living Source of Truth**: Scans local caches and native CLI models/variants dynamically; never hardcodes models or supported reasoning effort tiers.
- **Local-First & Sandbox Isolation**: Strictly bounded JSON-RPC protocol over `@snowball/plugin-sdk`, running isolated worker processes with entrypoint digest verification.
- **Cross-Platform**: Worker runtime targets Windows and macOS; protocol tests also run independently of hardware.

---

## Getting Started

### Prerequisites

- Node.js >= 22.12
- Local `opencode` native CLI environment

### Installation & Build

```bash
# Clone repository
git clone https://github.com/fkiller/Snowball_Harness_OpenCode.git
cd Snowball_Harness_OpenCode

# Install dependencies (using vendored SDK)
npm ci --ignore-scripts

# Build TypeScript
npm run build
```

### Running Tests

```bash
# Run protocol and adapter test suites
npm test

# Verify release package integrity and manifest digests
npm run test:package
```

---

## Architecture & Integration

This plugin implements the Snowball Plugin SDK protocol v1. Detailed specifications and lifecycle hooks are documented in [`docs/INTEGRATION.md`](docs/INTEGRATION.md).

Ownership and isolation evidence gates are documented in [`docs/OWNERSHIP.md`](docs/OWNERSHIP.md).

---

## License

This project is licensed under the Apache-2.0 License - see the [LICENSE](LICENSE) file for details.
