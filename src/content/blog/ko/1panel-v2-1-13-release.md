---
title: "1Panel v2.1.13 출시: 모델 다운로더, File Browser 개선, Runtime 수정"
description: "1Panel v2.1.13은 모델 다운로더를 추가하고 File Browser의 파일 기록 오류 처리, 디렉터리 크기 계산, 선택 작업을 개선하며, 업그레이드 시 디스크 여유 공간을 확인하고 Runtime·스냅샷 관련 문제를 수정합니다."
pubDate: 2026-05-26
updatedDate: 2026-05-26
tags:
  - 1Panel
  - Release Notes
  - Models
  - File Browser
  - Runtime
  - Panel Settings
---

1Panel v2.1.13이 배포되었습니다. 내장 모델 다운로더를 추가하고 File Browser와 업그레이드 흐름을 다듬으며, Runtime 환경과 패널 설정 관련 수정을 포함합니다.

## Highlights

- **모델 다운로더** — Models 모듈에서 패널을 벗어나지 않고 모델 다운로드 및 관리
- **File Browser** — 파일 기록 오류 처리 개선, 디렉터리 크기 계산 최적화 및 동시성 제어, 선택 작업 개선
- **더 안전한 업그레이드** — 업그레이드 전 남은 디스크 공간 확인
- **Runtime 안정성** — 실행 환경 생성 실패 시 프로젝트 디렉터리가 삭제되지 않음, 호스트 매핑 삭제 수정
- **패널 설정** — 라이선스 재바인딩 및 스냅샷 복구 개선

## New Features

### Models

- **모델 다운로더** — 1Panel에서 모델을 직접 다운로드 ([`#12694`](https://github.com/1Panel-dev/1Panel/pull/12694)).

## Enhancements

### File Browser

- **파일 기록 오류** — 파일 기록 내용 로드 시 오류 처리 개선 ([`#12736`](https://github.com/1Panel-dev/1Panel/pull/12736)).
- **디렉터리 크기** — 계산 로직 최적화 및 동시성 제어 ([`#12737`](https://github.com/1Panel-dev/1Panel/pull/12737)).
- **선택 UX** — 파일 관리 UI 및 선택 작업 개선 ([`#12740`](https://github.com/1Panel-dev/1Panel/pull/12740)).

### Panel Settings

- **라이선스 재바인딩** — 여러 시나리오에서 재바인딩 로직 개선 ([`#12778`](https://github.com/1Panel-dev/1Panel/pull/12778)).

### System

- **업그레이드 디스크 확인** — 진행 전 남은 디스크 공간 확인 ([`#12708`](https://github.com/1Panel-dev/1Panel/pull/12708)).

## Bug Fixes

| 영역 | 수정 |
|---|---|
| **Runtime** | 실행 환경 생성 실패 시 프로젝트 디렉터리가 잘못 삭제되지 않도록 수정 ([`#12756`](https://github.com/1Panel-dev/1Panel/pull/12756)). |
| **Runtime** | 호스트 매핑을 다시 삭제할 수 있도록 수정 ([`#12779`](https://github.com/1Panel-dev/1Panel/pull/12779)). |
| **File Browser** | 존재하지 않는 디렉터리 로드 시 예기치 않은 오류 수정 ([`#12744`](https://github.com/1Panel-dev/1Panel/pull/12744)). |
| **Panel Settings** | 스냅샷 복구 이상 수정 ([`#12777`](https://github.com/1Panel-dev/1Panel/pull/12777)). |

## How to Upgrade

대시보드 오른쪽 아래 `Update`를 눌러 업그레이드하세요.

처음이신가요? [1panel.pro](https://1panel.pro/)를 참고하세요.

## Source

전체 릴리스 노트: [1Panel v2.1.13 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.13)
