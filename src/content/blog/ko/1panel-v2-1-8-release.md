---
title: "1Panel v2.1.8 출시: AI 파일 검색, 에이전트 역할 관리, 파일 링크 공유"
description: "1Panel v2.1.8은 AI 파일 검색, 공유 가능한 파일 링크, 에이전트 역할 관리, 멀티 계정 채널, Bark 알림, vLLM 상태 동기화, 2FA 의심 IP 보호를 추가했습니다."
pubDate: 2026-04-10
updatedDate: 2026-04-10
tags:
  - 1Panel
  - 릴리스 노트
  - AI Search
  - Agent
  - Security
---

1Panel v2.1.8이 2026-04-10에 공식 출시되었습니다. 이번 버전은 Agents 모듈(역할 권한, 멀티 계정 채널, 웹사이트 바인딩)을 크게 확장하고, 파일 브라우저에 AI 검색과 링크 공유를 추가했으며, 보안과 안정성도 함께 강화했습니다.

## 주요 변경 사항

- 파일 브라우저 **AI 파일 검색**(자연어 검색)
- 파일 브라우저 **파일 링크 공유**
- 팀 단위 접근 제어를 위한 **에이전트 역할 관리**
- **멀티 계정 채널 지원**(QQ, Feishu, DingTalk, Discord 등)
- **에이전트 웹사이트 바인딩**
- **Bark 알림 채널** 추가
- 2FA 로그인 시 **의심 IP 보호**
- **vLLM 상태 동기화** 개선

## 새 기능

### 파일 브라우저

- **AI Search** ([`#12415`](https://github.com/1panel-dev/1panel/pull/12415)): 정확한 경로나 파일명을 몰라도 자연어로 파일 검색 가능
- **File Link Sharing** ([`#12453`](https://github.com/1panel-dev/1panel/pull/12453)): 파일 브라우저에서 직접 다운로드 링크 생성

### Agents

- **Role Management** ([`#12364`](https://github.com/1panel-dev/1panel/pull/12364)): 권한이 포함된 역할 생성 및 에이전트 설정에 할당
- **Multi-Account Channel Support** ([`#12369`](https://github.com/1panel-dev/1panel/pull/12369)): 하나의 채널에 여러 계정 연결
- **Website Binding** ([`#12413`](https://github.com/1panel-dev/1panel/pull/12413)): 에이전트를 1Panel 내 특정 웹사이트에 연결
- **Agent Remarks** ([`#12361`](https://github.com/1panel-dev/1panel/pull/12361)): 에이전트 목적/담당자 기록용 메모 필드 추가
- **ClawHub China Mirror** ([`#12396`](https://github.com/1panel-dev/1panel/pull/12396)): 중국 본토 환경에서 스킬 다운로드 안정성 향상

### App Store

- **외부 포트 접근 통합 스위치** ([`#12426`](https://github.com/1panel-dev/1panel/pull/12426)): 앱 외부 포트 노출 여부를 한 곳에서 제어

### 패널 설정

- **Bark Alert Channel** ([`#12338`](https://github.com/1panel-dev/1panel/pull/12338)): Bark를 푸시 알림 채널로 지원

## 개선 사항

- OpenClaw 플러그인 설정 세분화 및 백업 모델 구성 지원 ([`#12386`](https://github.com/1panel-dev/1panel/pull/12386))
- OpenClaw 플러그인 제거/업그레이드 패널 내 지원 ([`#12373`](https://github.com/1panel-dev/1panel/pull/12373))
- QQ/Feishu 채널 공식 플러그인 전환 ([`#12369`](https://github.com/1panel-dev/1panel/pull/12369))
- DingTalk 채널 설정 항목 확장 ([`#12440`](https://github.com/1panel-dev/1panel/pull/12440))
- 모델 메뉴 구조 재정리 ([`#12407`](https://github.com/1panel-dev/1panel/pull/12407)) 및 기본 모델 설정 업데이트 ([`#12403`](https://github.com/1panel-dev/1panel/pull/12403))
- 고빈도 에이전트 워크플로우에서 API 호출 안정성 향상 ([`#12443`](https://github.com/1panel-dev/1panel/pull/12443))
- 모델 pull 로그 가독성 개선 ([`#12414`](https://github.com/1panel-dev/1panel/pull/12414)) 및 vLLM 상태 동기화 보완
- 파일 작업 안정성 향상 ([`#12358`](https://github.com/1panel-dev/1panel/pull/12358)), SSH 설정 파일 편집 검증 개선 ([`#12398`](https://github.com/1panel-dev/1panel/pull/12398))
- OpenResty 설정 페이지 UI 개선 ([`#12429`](https://github.com/1panel-dev/1panel/pull/12429)), OpenClaw 사이트 삭제 검증 강화 ([`#12433`](https://github.com/1panel-dev/1panel/pull/12433))
- 웹사이트 바인딩 구성 단순화 ([`#12435`](https://github.com/1panel-dev/1panel/pull/12435)), Node.js 런타임 스크립트 선택 안정화 ([`#12431`](https://github.com/1panel-dev/1panel/pull/12431))
- AI Terminal 업데이트 흐름 개선 ([`#12409`](https://github.com/1panel-dev/1panel/pull/12409)), 코드 에디터 로딩 속도 개선 ([`#12401`](https://github.com/1panel-dev/1panel/pull/12401))
- 대화상자 동작 일관성 향상 ([`#12400`](https://github.com/1panel-dev/1panel/pull/12400)), 다국어 문구 업데이트 ([`#12350`](https://github.com/1panel-dev/1panel/pull/12350))

## 버그 수정

- **Overview**: 모니터링 차트의 비정상 delta 값 수정 ([`#12402`](https://github.com/1panel-dev/1panel/pull/12402))
- **Agents**: OpenClaw Discord 채널 구성 오류 수정 ([`#12456`](https://github.com/1panel-dev/1panel/pull/12456))
- **Certificates**: 자동 인증서 갱신 로직 오류 수정 ([`#12430`](https://github.com/1panel-dev/1panel/pull/12430))
- **Panel Settings**: 프록시 비활성화 후에도 헬스체크가 계속 동작하던 문제 수정 ([`#12388`](https://github.com/1panel-dev/1panel/pull/12388))
- **Panel Settings**: 2FA + CAPTCHA 환경에서 로그인 페이지 복귀 문제 수정 ([`#12438`](https://github.com/1panel-dev/1panel/pull/12438))

## 업그레이드 방법

오른쪽 하단의 "Update" 버튼을 클릭하면 됩니다.

처음 사용한다면 [1panel.pro](https://1panel.pro/)에서 시작하세요.

## Source

- 전체 릴리스 노트: [1Panel v2.1.8 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.8)