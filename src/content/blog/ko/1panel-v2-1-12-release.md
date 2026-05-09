---
title: "1Panel v2.1.12 출시: Overview 다듬기, File Browser 수정, OpenWRT 업그레이드"
description: "1Panel v2.1.12는 홈 모니터링 차트 표시를 개선하고, 메모 편집 시 캐러셀 일시 정지, File Browser의 ZIP 해제와 상위 디렉터리 권한, 대용량 바이너리 이동, 자식 노드 터미널 기본 호스트 연결, OpenWRT 업그레이드를 수정합니다."
pubDate: 2026-05-09
updatedDate: 2026-05-09
tags:
  - 1Panel
  - Release Notes
  - Overview
  - File Browser
  - Terminal
  - Multi-Node
  - OpenWRT
---

1Panel v2.1.12가 배포되었습니다. 이번 버전은 Overview 경험을 다듬고, File Browser, 자식 노드 터미널, OpenWRT 환경 업그레이드 안정성을 집중적으로 개선합니다.

## Highlights

- **모니터링 차트** — 홈 모니터링 차트가 한눈에 읽기 쉽게 표시됩니다
- **메모 편집 UX** — 메모를 편집하는 동안 홈 캐러셀이 올바르게 일시 정지합니다
- **File Browser 안정성** — ZIP 해제 안전성, 압축 해제 및 업로드 후 상위 디렉터리 권한 유지, 대용량 바이너리 이동 시 연결 문제 완화
- **자식 노드 터미널** — 자식 노드 터미널의 기본 호스트 연결이 다시 정상 동작합니다
- **OpenWRT 업그레이드** — OpenWRT 기반 배포에서도 패널 업그레이드가 완료됩니다

## Enhancements

### Overview

- **모니터링 차트 표시** — 홈 모니터링 차트의 레이아웃과 가독성을 조정했습니다 ([`#12673`](https://github.com/1Panel-dev/1Panel/pull/12673)).

## Bug Fixes

| 영역 | 수정 |
|---|---|
| **Overview** | 메모 편집 중 홈 캐러셀이 일시 정지합니다 ([`#12680`](https://github.com/1Panel-dev/1Panel/pull/12680)). |
| **File Browser** | 일부 ZIP 아카이브 압축 해제가 예기치 않게 실패하던 문제를 수정했습니다 ([`#12684`](https://github.com/1Panel-dev/1Panel/pull/12684)). |
| **File Browser** | 압축 해제 후 상위 디렉터리 권한이 바뀌지 않도록 수정했습니다 ([`#12684`](https://github.com/1Panel-dev/1Panel/pull/12684)). |
| **File Browser** | 매우 큰 바이너리 파일 이동 시 서버가 끊기지 않도록 수정했습니다 ([`#12683`](https://github.com/1Panel-dev/1Panel/pull/12683)). |
| **File Browser** | 파일 업로드 후에도 상위 디렉터리 권한이 유지됩니다 ([`#12672`](https://github.com/1Panel-dev/1Panel/pull/12672)). |
| **Terminal** | 자식 노드 터미널이 올바른 기본 호스트 연결을 사용합니다 ([`#12676`](https://github.com/1Panel-dev/1Panel/pull/12676)). |
| **System** | OpenWRT에서 1Panel 업그레이드가 다시 동작합니다 ([`#12670`](https://github.com/1Panel-dev/1Panel/pull/12670)). |

## How to Upgrade

대시보드 오른쪽 아래 `Update`를 눌러 업그레이드하세요.

처음이신가요? [1panel.pro](https://1panel.pro/)를 참고하세요.

## Source

전체 릴리스 노트: [1Panel v2.1.12 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.12)
