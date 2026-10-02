<p align="center">
  <img src="assets/banner.png" alt="Snowball Banner" width="100%">
</p>

# @snowball/harness-opencode

<p align="left">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License: Apache-2.0"></a>
  <img src="https://img.shields.io/badge/Node.js-%3E%3D22.12-brightgreen.svg" alt="Node.js: >=22.12">
  <img src="https://img.shields.io/badge/Platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey.svg" alt="Platform">
</p>

Official standalone harness plugin for **OpenCode** in the [Snowball Local Control ecosystem](https://github.com/fkiller/Snowball_Control).

This plugin provides seamless, sandbox-isolated orchestration between the [Snowball Middleware](https://github.com/fkiller/Snowball_Middleware) host and the local `opencode` native execution environment.

---

## Key Capabilities

- **Zero Simulation**: Direct native interaction with live local CLI processes and runtime sessions without fake/mock delays or synthetic responses.
- **Living Source of Truth**: Scans local caches and native CLI models/variants dynamically; never hardcodes models or supported reasoning effort tiers.
- **Local-First & Sandbox Isolation**: Strictly bounded JSON-RPC protocol over `@snowball/plugin-sdk`, running isolated worker processes with entrypoint digest verification.
- **Cross-Platform**: Tested and verified across Windows, macOS, and Linux.

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
