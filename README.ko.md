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
  <img src="https://img.shields.io/badge/Platforms-Windows%20%7C%20macOS-orange.svg" alt="Platforms">
  <a href="https://github.com/fkiller/Snowball_Middleware#one-shot-install"><img src="https://img.shields.io/badge/Install-Snowball-purple.svg" alt="Install Snowball"></a>
</p>

---

<a id="one-shot-install"></a>
## Snowball 한 번에 설치

**Snowball Middleware가 공통 설치와 PC 실행을 담당합니다.** Snowball Control은 MK20 펌웨어·HUD·기기 도구를, Snowball Device · M5Stack은 ESP32 펌웨어와 게이트웨이를 담당합니다. Web UI와 M5Stack에는 Control 체크아웃이 필요 없습니다. 세 Snowball Harness 저장소의 Codex·Antigravity·OpenCode 플러그인은 모든 프로필에 함께 설치됩니다.

Windows PowerShell에서 원하는 구성의 명령 **하나만** 실행하세요.

| 내 구성 | 함께 설치하는 구성 요소 | 명령 |
| --- | --- | --- |
| MK20 | MK20 런타임 + Middleware + 하네스 플러그인 3종 | `& ([scriptblock]::Create((irm 'https://raw.githubusercontent.com/fkiller/Snowball_Middleware/main/install.ps1'))) -Profile mk20` |
| M5Stack + FACES | M5Stack 펌웨어/게이트웨이 + Middleware + 하네스 플러그인 3종 | `& ([scriptblock]::Create((irm 'https://raw.githubusercontent.com/fkiller/Snowball_Middleware/main/install.ps1'))) -Profile m5stack` |
| Web UI만 | Middleware + 하네스 플러그인 3종 | `& ([scriptblock]::Create((irm 'https://raw.githubusercontent.com/fkiller/Snowball_Middleware/main/install.ps1'))) -Profile web` |

설치기는 Node/Git(기기 프로필은 Python 포함) 준비, 저장소 빌드, 격리된 플러그인 프로세스의 실제 초기화 검증, **Start-Snowball.ps1** 실행 파일·바탕화면 바로가기 생성까지 수행합니다. 실제 API 응답을 확인한 뒤 **http://127.0.0.1:8765/**를 엽니다. 기본 설치 위치는 `%LOCALAPPDATA%\Snowball`이며, 이후 실행 파일은 다운로드 없이 설치된 구성을 다시 시작합니다.

M5Stack은 첫 설치 시 USB로 연결하세요. 플래시 용량 탐지, 기존 전체 플래시 비공개 백업, 펌웨어 업로드, 실제 FACES 응답 확인 후 등록합니다. MK20은 같은 사설 LAN에 연결하세요. ADB 탐지 또는 SD/Wi-Fi 초기 설정과 물리 QMK DFU 단계를 설치기에서 안내합니다. MK20 변경 전 전체 SD 디스크 이미지 백업을 보관해야 합니다. USB 재연결·부트로더 진입·네이티브 하네스 로그인은 사용자가 수행해야 하며, 네이티브 앱이 없으면 해당 공급자는 사용 불가로 표시합니다.

옵션: `-InstallRoot 경로`, `-Serial COM번호`, `-Bind PC의_사설_IP`, `-Mk20Address 기기_IP:5555`, `-Port 8765`, `-NoStart`, `-NoFlash`(이미 설치된 펌웨어 확인). 여러 USB 포트나 LAN 어댑터가 있으면 해당 옵션으로 지정하세요. 오류가 나면 완료로 처리하지 않습니다. 원샷 부트스트랩은 현재 **Windows** 대상입니다. Node/Git가 설치된 macOS 개발 환경에서는 같은 부모 폴더의 체크아웃 구성으로 `npm run setup -- --profile web` 또는 `--profile m5stack`을 사용할 수 있습니다. Linux 전체 플러그인 런타임은 아직 지원하지 않습니다.

[공통 아키텍처와 저장소 역할](https://github.com/fkiller/Snowball_Control/blob/main/docs/ARCHITECTURE.md)

[Control · MK20](https://github.com/fkiller/Snowball_Control) · [Middleware · Installer / Web UI](https://github.com/fkiller/Snowball_Middleware) · [Device · M5Stack](https://github.com/fkiller/Snowball_Device_M5Stack) · Harness: [Codex](https://github.com/fkiller/Snowball_Harness_Codex), [Antigravity](https://github.com/fkiller/Snowball_Harness_Antigravity), [OpenCode](https://github.com/fkiller/Snowball_Harness_OpenCode)

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
