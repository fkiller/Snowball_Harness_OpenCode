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

MK20은 Wi-Fi에 독립적으로 연결한 뒤 K17(Machines)에서 PC를 선택해 페어링합니다. M5Stack 펌웨어 **0.4.0 이상**은 같은 LAN의 등록 PC와 새 미들웨어를 자동 검색합니다. 머신 목록에서 새 PC를 선택하면 Wi-Fi로 페어링합니다. PC 추가에는 전체 미들웨어 설치만 필요하며 기기별 추가 설치·USB 연결·등록 스크립트는 필요하지 않습니다. 같은 브로드캐스트 서브넷, 기기 포트 허용, 클라이언트 격리 해제 상태의 신뢰하는 사설 LAN을 사용하세요.

M5Stack 최초 준비나 펌웨어 갱신은 **USB 연결 시 자동으로 열리는 기기 설정 창**에서 진행합니다. 트레이의 **기기 설정…**에서도 열 수 있습니다. 현재/제공 버전과 개선 사항을 보여주며, 사용자가 설치·업데이트를 선택해야 전체 플래시 비공개 백업 → 펌웨어 쓰기 → Wi-Fi·페어링 저장 영역 보존 검증 → 자동 재기동 확인을 수행합니다. 현재 제공 펌웨어는 **0.5.0**입니다. 저장된 네트워크가 없으면 기본 선택된 가져오기 옵션으로 업데이트 후 PC의 연결된 Wi-Fi를 OS가 허용하는 범위에서 이관하고, 기존 정보가 있으면 덮어쓰지 않습니다. OS 비밀번호는 해당 선택 이후에만 읽으며 UI·로그에 표시하지 않습니다. 가져올 수 없으면 같은 창에서 설정 → Wi-Fi, 네트워크 선택, FACES 키보드 비밀번호 입력을 그림으로 안내합니다. 최초 ESP32 Core 4MB/16MB만 지원합니다. CP210x만으로 기종을 확정하지 않으며 Snowball 응답이 없는 기기는 사용자가 실제 기종을 확인해야 합니다. 빌드는 누락된 도구를 다운로드할 수 있습니다. 0.3.0 이하는 새 PC LAN 검색을 위해 기기 펌웨어를 한 번 업그레이드해야 합니다. `Register-M5Stack.ps1` / `.sh`는 선택적 레거시 유지보수 도구로 남으며 일반 설치와 `-Update`가 기기를 자동 플래싱하지 않습니다.

MK20과 미래 기기를 포함한 모든 디바이스는 같은 **기기 설정…** 여정(감지·버전/개선 사항·동의·검증한 복구 백업·설정 보존·업데이트·재기동·네트워크 설정/시각 안내)을 따릅니다. 지원 어댑터는 기본 설치에 포함하며 별도 등록 스크립트가 필요 없습니다. MK20은 같은 창에서 QMK DFU와 T113/SD 런타임을 각각 다룹니다. QMK는 변경할 앱·설정 영역 전체를, SD는 카드 전체 이미지를 쓰기 전에 백업합니다. SD를 기기에 돌려 넣는 동작은 시각적으로 안내하며 실제 LAN 부팅·버전·실행 파일 해시 응답을 받아야 완료됩니다. 일반 MK20 LAN 페어링은 USB/ADB 없이 동작합니다. 실물 플래싱·SD 재삽입·macOS 인수 검증은 별도입니다. 네이티브 창은 검색된 기기 종류를 함께 표시하며 MK20의 실제 LAN 검색도 받습니다. 구 펌웨어가 버전을 응답하지 않으면 추정하지 않고 미확인으로 표시합니다.

Windows가 Node.js 네트워크 접근을 요청하면 미들웨어가 사용할 개인 네트워크 접근을 허용합니다. 거절하면 백그라운드 미들웨어·USB 감지가 동작해도 LAN 검색과 선택은 차단될 수 있습니다. 로컬 Web UI는 계속 루프백 전용입니다.

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
