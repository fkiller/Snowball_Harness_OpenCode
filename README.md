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
  <img src="https://img.shields.io/badge/Platforms-Windows%20%7C%20macOS%20%7C%20Linux-orange.svg" alt="Platforms">
  <a href="https://github.com/fkiller/Snowball_Middleware#one-shot-install"><img src="https://img.shields.io/badge/Install-Snowball-purple.svg" alt="Install Snowball"></a>
</p>

---

<a id="one-shot-install"></a>
## Install Snowball

**Install Snowball once per PC.** The default installation includes the Web UI, MK20 discovery/transport and speech runtime, M5Stack discovery/gateway, and all three Codex/Antigravity/OpenCode harness plugins. No device profile selection or connected USB device is needed.

Choose your platform below, then use the code block’s **Copy** button on GitHub. README Markdown supports these expandable selectors; interactive tabs require a documentation website.

<details open>
<summary><strong>Windows · PowerShell</strong></summary>

```powershell
& ([scriptblock]::Create((irm 'https://raw.githubusercontent.com/fkiller/Snowball_Middleware/main/install.ps1')))
```

</details>

<details>
<summary><strong>macOS · Terminal</strong></summary>

```bash
curl -fsSL https://raw.githubusercontent.com/fkiller/Snowball_Middleware/main/install.sh | bash
```

</details>

<details>
<summary><strong>Linux · Terminal</strong></summary>

```bash
curl -fsSL https://raw.githubusercontent.com/fkiller/Snowball_Middleware/main/install.sh | bash
```

</details>

Windows prepares Node/Git/Python; macOS/Linux require curl, Git and Python >=3.12 with venv/pip and prepare a checksum-verified Node LTS locally. The installer builds the companion components, checks the actual isolated harness workers, and starts a hidden per-user background application with a tray icon. The terminal returns after the owned runtime responds. The tray provides Web UI, status, Settings, Pause/Resume, Restart, Quit and login startup. Web UI stays on **http://127.0.0.1:8765/**. Default locations: Windows `%LOCALAPPDATA%\Snowball`, macOS `~/Library/Application Support/Snowball`, Linux `${XDG_DATA_HOME:-~/.local/share}/Snowball`. **Start-Snowball.ps1** (Windows) / **Start-Snowball.sh** (macOS/Linux) restart it without downloading dependencies. Missing native harness applications remain unavailable until installed and signed in through their vendors.

For updates, use the same `-InstallRoot` with `-Update` on Windows, or `--root PATH --update` on macOS/Linux, and omit the profile option. For example, download `install.sh` and run `bash install.sh --root "$HOME/.local/share/Snowball" --update` on Linux (use your existing root). Old single-device installs gain both adapters while preserving device settings, pairing keys, controller state, speech caches, custom API port and login startup preference. An absent or ambiguous private LAN leaves automatic discovery waiting while the Web UI remains available; use `-Bind PRIVATE_PC_IP` (Windows) / `--bind PRIVATE_PC_IP` (macOS/Linux) when needed.

MK20 joins Wi-Fi independently: press K17 (Machines), choose a PC and pair/select it. M5Stack firmware **0.4.0 and later** automatically discovers registered and new middleware PCs on the same LAN. Select a New PC in Machines to pair over Wi-Fi. Adding a PC requires only the complete middleware installation: no device-specific install, USB connection or registration script. Use a trusted private LAN with device ports allowed, the same broadcast subnet and no client isolation.

For initial M5Stack preparation or firmware upgrades, **connect USB and use the automatically opened device setup window**, also available from the tray’s **Device setup…** menu. It shows installed/included versions and improvements; only your Install/Update selection starts a full private flash backup, firmware write, retained Wi-Fi/pairing storage verification and automatic reboot check. Current included firmware is **0.5.0**. If no network is saved, the default reviewed option imports this PC’s connected Wi-Fi after the update when the OS permits it; an existing network is never replaced. OS passwords are read only after that choice and never appear in the UI/logs. If import is unavailable, the same window visually guides Settings → Wi-Fi, network selection and password entry on the FACES keyboard. Original ESP32 Core 4MB/16MB only; CP210x alone does not prove the model, and firmware without a Snowball response requires physical model confirmation. Builds may download missing toolchains. Firmware 0.3.0 and earlier need one device upgrade for LAN discovery of new PCs. Optional `Register-M5Stack.ps1` / `.sh` remain legacy maintenance tools; ordinary installation and `-Update` never silently flash a device.

All devices, including MK20 and future devices, follow the same **Device setup…** journey: detection, version/improvements, consent, verified recovery backup, preserved settings, update/reboot and network setup/visual guidance. Supported adapters are bundled by default; no per-device registration script is required. MK20 runtime 0.2.5 adds a USB receiver: the SD card stays inside while the entire affected runtime partition is backed up, fixed runtime files are transferred and an automatic reboot is verified against running-image hashes. QMK retains its separate DFU/readback path. A card reader is an advanced recovery tool, not a normal journey step. Existing firmware without the USB receiver still needs initial migration; a middleware update cannot install a receiver into unreachable legacy firmware. The common guide now shows MK20’s actual 20-key/two-knob matrix and M5Stack Core’s A/B/C plus FACES controls with interactive instructions. Tutorial navigation never controls hardware or claims a live connection. Physical USB update/reboot acceptance remains unverified; ordinary LAN pairing and all three harness contracts are unchanged.

On Windows, allow the middleware Node.js process on your private network when Windows asks. Denying network access can block LAN discovery and selection even while the background middleware and USB detection work. The local Web UI remains loopback-only.

Options: `-Update`, `-InstallRoot PATH`, `-Bind PRIVATE_PC_IP`, `-Port 8765`, `-NoStart`, `-NoShortcut`. `-Profile web|mk20|m5stack` remains an explicit development/diagnostic subset option, not the normal installation flow; it retains adapters already installed in that root. macOS/Linux: `--update`, `--root PATH`, `--bind PRIVATE_PC_IP`, `--port 8765`, `--no-start`, `--no-shortcut`, `--python PATH`, `--data-dir PATH`; `bash install.sh --help` lists all options. Linux requires a graphical desktop, Electron system libraries and user access to device USB/serial interfaces; no sandbox bypass or automatic USB permission changes are used. Linux Wi-Fi import may be unavailable: use the common device setup guide. macOS/Linux interactive device acceptance remains separate from automated tests. See the central specification for protocol, authentication and field-verification limits.

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
