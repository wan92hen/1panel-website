---
title: "1Panel v2.1.9 출시: Hermes Agent, MongoDB 관리, 파일 히스토리 추가"
description: "1Panel v2.1.9는 Hermes Agent 지원, MongoDB 통합 관리, File Browser 히스토리를 추가하고 Agents, 컨테이너, S3 호환성 등 운영 안정성을 강화했습니다."
pubDate: 2026-04-23
updatedDate: 2026-04-23
tags:
  - 1Panel
  - Release Notes
  - Hermes Agent
  - MongoDB
  - File Browser
  - OpenClaw
  - AWS S3
---

1Panel v2.1.9가 정식 배포되었습니다. 이번 버전은 Agents, Databases, File Browser 영역에 3가지 신규 기능을 추가하고, 운영 품질 개선과 5건의 버그 수정을 포함합니다.

## Highlights

- Agents 모듈에 **Hermes Agent** 지원 추가
- Databases 화면에서 **MongoDB 통합 관리** 지원
- File Browser에 **파일 히스토리 관리** 추가
- OpenClaw 채널 봇 설정 흐름 단순화
- AWS S3 및 호환 엔드포인트 연결 안정성 개선

## New Features

### Agents
이제 1Panel에서 **Hermes Agent**를 직접 구성할 수 있어 로컬 AI 에이전트 운영 선택지가 넓어졌습니다.

### Databases
**MongoDB**를 MySQL, PostgreSQL, Redis와 같은 인터페이스에서 일관되게 관리할 수 있습니다.

### File Browser
**File History** 기능으로 파일 변경 이력을 추적하고 실수로 덮어쓴 내용을 복구하기 쉬워졌습니다.

## Enhancements

- Agents: 웹사이트 바인딩 해제 절차 개선, OpenClaw 채널 봇 추가 절차 간소화
- App Store: Compose 변경 감지 로직 개선
- File Browser: 압축 작업 중단 지원, Dockerfile 문법 지원, 공유 링크 헤더 설정, 메타데이터 검증 강화
- Containers: 데이터 처리와 상태 동기화 신뢰성 향상
- Panel Settings: S3 호환성 및 비표준 설정 처리 개선
- System/Websites: 테이블/이름 배지 UI 가독성 개선

## Bug Fixes

| Area | Fix |
|---|---|
| Runtime | 편집 세션 중 runtime 디렉터리 수정 가능하던 문제 수정 |
| File Browser | QR 공유 파일 다운로드 실패 문제 수정 |
| Firewall | 생성 후 규칙 설명 수정 불가 문제 수정 |
| Firewall | Listening 상태 오표시 문제 수정 |
| Tamper Protection | 다국어 번역 오류 수정 |

## How to Upgrade

대시보드 우측 하단의 `Update` 버튼을 클릭하세요.

처음이라면 [1panel.pro](https://1panel.pro/)에서 시작할 수 있습니다.

## Source

전체 릴리스 노트: [1Panel v2.1.9 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.9)
