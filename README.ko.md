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

**PC마다 Snowball을 한 번 설치하세요.** 기본 설치에 Web UI, MK20 검색·연결·음성 런타임, M5Stack 검색·게이트웨이, Codex·Antigravity·OpenCode 하네스 플러그인 3종이 모두 포함됩니다. 기기 프로필을 고르거나 USB 기기를 연결할 필요가 없습니다.

Windows PowerShell에서 실행하세요.

```powershell
& ([scriptblock]::Create((irm 'https://raw.githubusercontent.com/fkiller/Snowball_Middleware/main/install.ps1')))
```

설치기는 Node/Git/Python과 구성 요소를 준비하고 실제 격리 하네스 워커를 확인한 뒤, 트레이 아이콘이 있는 사용자별 숨김 백그라운드 앱을 시작합니다. 소유 런타임이 응답하면 설치 터미널로 돌아옵니다. 트레이에서 Web UI, 상태, 설정, 일시정지/재개, 재시작, 종료, 로그인 자동 시작을 제공합니다. Web UI는 **http://127.0.0.1:8765/**이며 기본 설치 위치는 `%LOCALAPPDATA%\Snowball`입니다. **Start-Snowball.ps1**은 다운로드 없이 다시 실행합니다. 네이티브 하네스 앱과 로그인은 공급자를 통해 준비하며, 없으면 사용 불가로 표시합니다.

기존 설치 업데이트는 같은 `-InstallRoot`에 `-Update`를 추가하고 `-Profile`은 생략하세요. 기존 단일 기기 설치에도 두 어댑터를 준비하며 기기 설정·페어링 키·컨트롤러 상태·음성 캐시·사용자 지정 API 포트·로그인 자동 시작 설정을 보존합니다. 사설 LAN이 없거나 선택이 모호하면 자동 검색은 대기·재시도하고 Web UI는 유지합니다. 필요하면 `-Bind PC의_사설_IP`를 지정하세요.

독립 MK20은 Wi-Fi에 연결한 뒤 K17(Machines)에서 PC를 페어링·선택합니다. PC 추가에 USB·ADB·SD 변경은 필요 없습니다. M5Stack 게이트웨이도 이미 설치돼 있지만, 기존 보안 경계에 따라 미등록 PC에는 최초 USB 등록이 필요하고 여러 PC 전환에는 펌웨어 0.3.0이 필요합니다. 설치 루트의 **Register-M5Stack.ps1**(선택: `-Serial COM번호`)로 재설치·다운로드·플래싱 없이 설치된 도구를 사용해 기존 펌웨어를 확인하고 USB 등록을 준비하세요. 최초 펌웨어 설치·업그레이드가 필요할 때만 `-Flash`를 추가하면 전체 플래시 백업 뒤 업로드합니다. macOS는 **Register-M5Stack.sh**와 선택 옵션 `--serial` / `--flash`를 사용합니다. 실행 중이던 트레이는 재시작하며, 멈춰 있었다면 USB 연결 상태로 실행해 등록을 마칩니다. 설치기에 준비를 함께 요청하는 고급 옵션은 각각 `-PrepareM5Stack -NoFlash`, `-PrepareM5Stack`입니다. 일반 설치와 `-Update`는 USB를 조사하거나 펌웨어를 쓰지 않습니다. 설치기의 `-Serial`과 `-NoFlash`는 `-PrepareM5Stack`과 함께 사용합니다. 등록 뒤 USB를 분리하고 기기의 Machine 목록에서 PC를 선택하세요. 검색만으로 미등록 PC를 자동 등록하지 않습니다.

옵션: `-Update`, `-InstallRoot 경로`, `-Bind PC의_사설_IP`, `-Port 8765`, `-NoStart`, `-NoShortcut`. `-Profile web|mk20|m5stack`은 개발·진단용 명시적 부분 구성으로 유지하며 일반 설치에서는 필요 없습니다. 같은 루트에 이미 설치된 어댑터는 유지합니다. Node/Git/Python이 준비된 macOS 소스 환경에서는 같은 부모 폴더 체크아웃으로 `npm run setup --`을 실행하며, USB 준비는 `--prepare-m5stack [--no-flash]`로 명시합니다. Linux 전체 워커 런타임은 아직 지원하지 않습니다. 프로토콜·인증·실물 검증 범위는 중앙 명세를 확인하세요.

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
