---
title: "1Panel v2.1.11 출시: DeepSeek V4 기본값, File Browser 작업, 안정성 수정"
description: "1Panel v2.1.11은 DeepSeek 모델 풀 V4 지원, File Browser 압축 해제 중단 및 VS Code SSH 안내 개선, 컨테이너 로그 다운로드 타임아웃 조정, 터미널 레이아웃, IPv6 자체 서명 SSL, 버그 수정 12건을 포함합니다."
pubDate: 2026-05-07
updatedDate: 2026-05-07
tags:
  - 1Panel
  - Release Notes
  - Agents
  - File Browser
  - Containers
  - DeepSeek
  - Multi-Node
---

1Panel v2.1.11이 배포되었습니다. Agents, File Browser, 컨테이너, 패널 설정의 사용성 개선과 함께 Overview, 웹사이트, 멀티 노드 등 광범위한 버그 수정이 포함됩니다.

## Highlights

- **DeepSeek V4 모델 풀** — DeepSeek 계정 모델 풀이 기본으로 최신 **V4** 모델을 지원
- **File Browser 압축 해제 제어** — 진행 중인 압축 해제 작업 중단 및 장시간 아카이브용 작업 UI 개선
- **SSH를 통한 VS Code** — 연결 안내 정리 및 SSH 설정 스크립트 내용 보강
- **컨테이너 로그 다운로드** — 타임아웃 조정. 타임아웃 후 Docker 프로세스 정리는 Bug Fixes 참고
- **IPv6 패널 SSL** — IPv6 전용 또는 듀얼 스택에서도 패널 자체 서명 인증서 사용 가능
- **터미널 레이아웃** — 내부 높이 조정으로 임베디드 터미널의 바깥 스크롤바 감소

## Enhancements

### Agents

- **DeepSeek 모델 풀** — DeepSeek 계정 풀이 기본으로 최신 **V4**를 포함해 신규 구성 시 수동 풀 편집이 줄어듭니다 ([`#12622`](https://github.com/1Panel-dev/1Panel/pull/12622)).

### Containers

- **로그 다운로드 타임아웃** — 컨테이너 로그 다운로드 대기 시간을 실제 네트워크·디스크 상황에 맞게 조정 ([`#12632`](https://github.com/1Panel-dev/1Panel/pull/12632)).

### File Browser

- **압축 해제 중지** — 실행 중인 압축 해제 작업 취소 가능. 병렬 작업 관리용 작업 목록 UI 개선 ([`#12582`](https://github.com/1Panel-dev/1Panel/pull/12582)).
- **VS Code 및 SSH** — VS Code 연결 가이드 명확화 및 SSH 설정 스크립트 확장 ([`#12613`](https://github.com/1Panel-dev/1Panel/pull/12613)).

### Terminal

- **임베디드 터미널 높이** — 일반적인 뷰포트에서 바깥 스크롤이 덜 생기도록 레이아웃 조정 ([`#12630`](https://github.com/1Panel-dev/1Panel/pull/12630)).

### Panel Settings

- **IPv6 및 자체 서명 SSL** — 서버가 IPv6로 접근될 때도 패널 HTTPS에 자체 서명 인증서 지원 ([`#12652`](https://github.com/1Panel-dev/1Panel/pull/12652)).

## Bug Fixes

| 영역 | 수정 |
|---|---|
| **Overview** | 홈 모니터링 차트 로딩 이상 수정 ([`#12591`](https://github.com/1Panel-dev/1Panel/pull/12591)). |
| **Overview** | 일부 언어 환경에서 메모 위젯 표시 수정 ([`#12629`](https://github.com/1Panel-dev/1Panel/pull/12629)). |
| **App Store** | 앱 업그레이드 파일 비교 화면 화살표 누락 수정 ([`#12663`](https://github.com/1Panel-dev/1Panel/pull/12663)). |
| **Websites** | 리다이렉트 설정에 와일드카드 도메인 지원 ([`#12625`](https://github.com/1Panel-dev/1Panel/pull/12625)). |
| **Containers** | 로그 다운로드 타임아웃 후 Docker 관련 프로세스 정리 ([`#12607`](https://github.com/1Panel-dev/1Panel/pull/12607)). |
| **Containers** | 오케스트레이션(Compose) 저장 후 대화상자 버튼 동작 수정 ([`#12631`](https://github.com/1Panel-dev/1Panel/pull/12631)). |
| **Containers** | Arch Linux에서 Docker 서비스 감지 오류 수정 ([`#12651`](https://github.com/1Panel-dev/1Panel/pull/12651)). |
| **File Browser** | 편집기 컨텍스트 메뉴 및 필터 엣지 케이스 수정 ([`#12612`](https://github.com/1Panel-dev/1Panel/pull/12612)). |
| **File Browser** | 파일 서비스 API 반환 타입 수정 ([`#12648`](https://github.com/1Panel-dev/1Panel/pull/12648)). |
| **Multi-Node** | 자식 노드가 다시 메인 노드의 호스트 연결을 사용할 수 있음 ([`#12659`](https://github.com/1Panel-dev/1Panel/pull/12659)). |
| **Website Monitoring** | OpenResty 미가동 시 웹사이트 모니터링 안내가 실제 상태와 일치. |
| **System** | 테이블 열 정렬 오류 수정 ([`#12658`](https://github.com/1Panel-dev/1Panel/pull/12658)). |

## How to Upgrade

대시보드 오른쪽 아래 `Update` 버튼으로 업그레이드할 수 있습니다.

처음이신가요? [1panel.pro](https://1panel.pro/)를 방문해 보세요.

## Source

전체 릴리스 노트: [1Panel v2.1.11 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.11)
