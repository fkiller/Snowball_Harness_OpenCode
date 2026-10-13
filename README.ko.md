<p align="center">
  <img src="assets/banner.png" alt="Snowball Banner" width="100%">
</p>

<h1 align="center">
  <img src="assets/icon.png" width="48" height="48" valign="middle" alt="Snowball Icon">
  Snowball Harness · OpenCode — Preview
</h1>

<p align="center"><strong>로컬 OpenCode 연동 플러그인</strong></p>

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
## Snowball 한 번에 설치

**PC마다 Snowball을 한 번 설치하세요.** 기본 설치에 Web UI, MK20 검색·연결·음성 런타임, M5Stack 검색·게이트웨이, Codex·Antigravity·OpenCode 하네스 플러그인 3종이 모두 포함됩니다. 기기 프로필을 고르거나 USB 기기를 연결할 필요가 없습니다.

사용하는 OS를 펼친 뒤 명령을 복사하세요.

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

설치가 끝나면 트레이 아이콘에서 **http://127.0.0.1:8765/** Web UI와 설정·일시정지/재개·로그인 자동 시작을 관리합니다. Windows는 Node/Git/Python을 준비합니다. macOS/Linux는 curl·Git·venv/pip을 포함한 Python >=3.12가 필요하며 Linux는 그래픽 데스크톱과 Electron 시스템 라이브러리도 필요합니다. 네이티브 하네스 앱 설치와 로그인은 각 공급자를 통해 준비하세요.

<a id="update-snowball"></a>
## Snowball 업데이트

### 1. PC 소프트웨어 업데이트

**기존에 설치한 폴더를 사용하세요.** 아래는 기본 경로 예시입니다. 다른 폴더(예: `Snowball-LAN`)에 설치했다면 첫 줄을 그 경로로 바꾸세요. 기기 프로필 옵션은 넣지 않습니다.

<details open>
<summary><strong>Windows · PowerShell</strong></summary>

```powershell
$installRoot = Join-Path $env:LOCALAPPDATA 'Snowball'
& ([scriptblock]::Create((irm 'https://raw.githubusercontent.com/fkiller/Snowball_Middleware/main/install.ps1'))) -InstallRoot $installRoot -Update
```

</details>

<details>
<summary><strong>macOS · Terminal</strong></summary>

```bash
install_root="$HOME/Library/Application Support/Snowball"
curl -fsSL https://raw.githubusercontent.com/fkiller/Snowball_Middleware/main/install.sh | bash -s -- --root "$install_root" --update
```

</details>

<details>
<summary><strong>Linux · Terminal</strong></summary>

```bash
install_root="${XDG_DATA_HOME:-$HOME/.local/share}/Snowball"
curl -fsSL https://raw.githubusercontent.com/fkiller/Snowball_Middleware/main/install.sh | bash -s -- --root "$install_root" --update
```

</details>

업데이트는 기기 설정·페어링 키·컨트롤러 상태·음성 캐시·API 포트·로그인 자동 시작 선택을 보존합니다. 이전 단일 기기 설치에도 두 기기 어댑터를 포함합니다. PC 업데이트로 **Included(제공)** 후보를 갱신한 뒤, 기기 펌웨어는 아래 절차로 적용합니다.

<a id="update-device"></a>
### 2. 기기 펌웨어 업데이트

1. PC 업데이트 후 기기를 USB 데이터 케이블로 연결하고 트레이에서 **기기 설정…** 메뉴를 엽니다.
2. 기기를 선택하고 **Installed(현재) → Included(제공)** 버전과 개선 사항을 확인합니다.
3. 기종을 확인한 뒤 **설치 / 업데이트**를 선택합니다. 복구 백업 검증과 설정 보존 절차를 거쳐 쓰기를 진행합니다.
4. 재기동과 실행 버전 확인이 끝날 때까지 USB 연결을 유지합니다. 필요하면 같은 창의 Wi-Fi 안내를 따릅니다.

[기기별 상세 절차와 복구](https://github.com/fkiller/Snowball_Middleware/blob/main/README.ko.md#update-device) · [현재 M5Stack 제공 버전과 개선 사항](https://github.com/fkiller/Snowball_Device_M5Stack/blob/main/firmware/release.json)

## 기기에서 PC 연결

MK20은 Wi-Fi 연결 후 **K17 · Machines**에서 PC를 선택합니다. M5Stack 펌웨어 0.4.0 이상은 **Machines**에서 등록 PC나 새 PC를 선택하여 LAN으로 페어링합니다. PC 추가에는 전체 PC 설치만 필요하며 USB 등록 스크립트는 필요 없습니다. 기기 포트를 허용하고 클라이언트 격리를 해제한 같은 신뢰 사설 LAN을 사용하세요.

<details>
<summary><strong>고급 옵션</strong></summary>

| 목적 | Windows | macOS / Linux |
| --- | --- | --- |
| 기존 설치 폴더 | `-InstallRoot 경로` | `--root 경로` |
| 사설 LAN 인터페이스 지정 | `-Bind PC의_사설_IP` | `--bind PC의_사설_IP` |
| API 포트 지정 | `-Port 포트` | `--port 포트` |
| 설치 후 실행하지 않기 | `-NoStart` | `--no-start` |
| 바로가기 생략 | `-NoShortcut` | `--no-shortcut` |
| 진단용 부분 구성 | `-Profile web\|mk20\|m5stack` | `--profile web\|mk20\|m5stack` |

일반 설치·업데이트는 두 기기와 하네스 3종을 함께 포함합니다. 사설 LAN이 없거나 선택이 모호하면 검색은 대기하고 로컬 Web UI는 유지합니다. Windows가 묻는 경우 미들웨어 Node.js의 개인 네트워크 접근을 허용하세요. Linux의 USB/시리얼 접근은 일반 OS 권한을 사용합니다. Unix 전체 옵션은 `bash install.sh --help`로 확인합니다. 설치 폴더의 **Start-Snowball.ps1** / **Start-Snowball.sh**는 다운로드 없이 다시 실행합니다.

</details>

[공통 아키텍처와 검증 범위](https://github.com/fkiller/Snowball_Control/blob/main/docs/ARCHITECTURE.ko.md)

[Control · MK20](https://github.com/fkiller/Snowball_Control) · [Middleware](https://github.com/fkiller/Snowball_Middleware) · [M5Stack](https://github.com/fkiller/Snowball_Device_M5Stack) · Harness: [Codex](https://github.com/fkiller/Snowball_Harness_Codex), [Antigravity](https://github.com/fkiller/Snowball_Harness_Antigravity), [OpenCode](https://github.com/fkiller/Snowball_Harness_OpenCode)

---

## 기능

실제 로컬 OpenCode 환경을 연결하는 독립 플러그인입니다. 모델·Effort·세션은 네이티브 CLI 또는 로컬 캐시에서 관찰하며, 플러그인 워커는 미들웨어의 다이제스트 검사와 선언된 JSON-RPC 작업 경계를 유지합니다. 네이티브 앱 설치·로그인 여부와 실제 지원 범위에 따라 사용할 수 있는 기능이 달라집니다.

## 플러그인 개발

```bash
git clone https://github.com/fkiller/Snowball_Harness_OpenCode.git
cd Snowball_Harness_OpenCode
npm ci --ignore-scripts
npm run build
npm test
npm run test:package
```

Node >=22.12가 필요합니다. 독립 빌드에는 저장소에 포함된 SDK 패키지를 사용합니다. 위 명령은 이 플러그인만 개발할 때의 절차이며, 전체 Snowball 설치는 위의 공통 설치 명령을 사용합니다.

[플러그인 통합 계약](docs/INTEGRATION.md) · [공통 아키텍처](https://github.com/fkiller/Snowball_Control/blob/main/docs/ARCHITECTURE.md)

## 라이선스

[Apache-2.0](LICENSE).
