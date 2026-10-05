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

**Snowball Middleware is the common installer and PC runtime.** Snowball Control owns the MK20 firmware, HUD and device tools; Snowball Device · M5Stack owns the ESP32 firmware and gateway. Web UI and M5Stack do not require a Control checkout. The three Snowball Harness repositories provide the Codex, Antigravity and OpenCode plugins, included in every profile.

Run **one** command in Windows PowerShell:

| Your setup | Installed together | Command |
| --- | --- | --- |
| MK20 | MK20 runtime + Middleware + all three harness plugins | `& ([scriptblock]::Create((irm 'https://raw.githubusercontent.com/fkiller/Snowball_Middleware/main/install.ps1'))) -Profile mk20` |
| M5Stack + FACES | M5Stack firmware/gateway + Middleware + all three harness plugins | `& ([scriptblock]::Create((irm 'https://raw.githubusercontent.com/fkiller/Snowball_Middleware/main/install.ps1'))) -Profile m5stack` |
| Web UI only | Middleware + all three harness plugins | `& ([scriptblock]::Create((irm 'https://raw.githubusercontent.com/fkiller/Snowball_Middleware/main/install.ps1'))) -Profile web` |

The installer prepares Node/Git (Python for hardware profiles), builds the selected repositories, verifies each isolated plugin's handshake, creates a **Start-Snowball.ps1** launcher and desktop shortcut, then opens **http://127.0.0.1:8765/** after the real API responds. Default location: `%LOCALAPPDATA%\Snowball`. The launcher runs the installed suite again without downloading dependencies.

Connect M5Stack by USB for first installation; flash size is detected, existing flash is backed up privately, and the actual firmware/FACES handshake is checked before enrollment. Connect MK20 to the same private LAN; its guided installer discovers ADB or walks through SD/Wi-Fi bootstrap and the physical QMK DFU step. Keep a full MK20 SD disk image before modifying it. Hardware access/USB reconnects and native harness sign-in require the owner; installed plugins do not fabricate a working provider when its native app is absent.

Options: `-InstallRoot PATH`, `-Serial COMx`, `-Bind PRIVATE_PC_IP`, `-Mk20Address DEVICE_IP:5555`, `-Port 8765`, `-NoStart`, `-NoFlash` (verify an already installed firmware). On ambiguous adapters or USB ports supply the matching option; installation stops on errors. The one-command bootstrap currently targets **Windows**; macOS developers with Node/Git can run `npm run setup -- --profile web` or `--profile m5stack` from a sibling checkout layout. Linux suite workers are not yet supported.

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
