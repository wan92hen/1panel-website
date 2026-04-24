---
title: "1Panel로 VPS에서 MongoDB 관리하기"
description: "1Panel 기반 MongoDB 운영 가이드: App Store 설치, DB 생성, 연결 정보 확인, 내장 mongosh, 백업/복구, 원격 인스턴스 관리."
pubDate: 2026-04-24
updatedDate: 2026-04-24
tags:
  - 1Panel
  - MongoDB
  - Database
  - VPS
  - Self-hosted
---

1Panel을 사용하면 VPS의 MongoDB를 하나의 대시보드에서 운영할 수 있습니다. 설치부터 연결, 질의, 백업/복구까지 순서대로 처리 가능합니다.

## 1Panel에서 가능한 작업

- **App Store**에서 MongoDB 설치
- 권한 포함 데이터베이스/사용자 생성
- 브라우저 내장 **mongosh** 사용
- 앱 연동용 연결 정보 확인
- 백업/복구 및 스케줄 실행
- 원격 MongoDB 인스턴스 등록 및 관리

## 사전 준비

- 1Panel 사용 가능 상태
- MongoDB 운영에 필요한 메모리 확보
- 이미지 다운로드를 위한 인터넷 연결

## 1단계: App Store에서 MongoDB 설치

**App Store**에서 **Database** 필터를 선택하고 **MongoDB**를 **Install**합니다.

![1Panel App Store - Install MongoDB](/blog/install-mongodb.png)

핵심 항목:

| 항목 | 가이드 |
|---|---|
| Name | 인스턴스 식별자 (`mongodb` 기본값) |
| Version | 배포할 MongoDB 버전 |
| Username / Password | 초기 인증 정보 |
| Port | 기본 `27017` |
| External Access | 필요 시에만 활성화 |
| Restart Policy | 운영 환경에서는 `always`가 일반적 |

확인 후 **Confirm**.

## 2단계: MongoDB 데이터베이스 생성

**Databases** -> **MongoDB**에서 **Create**를 클릭합니다.

![1Panel - Create MongoDB Database](/blog/create-db-mongodb.png)

입력 항목:

- **Name**
- **Username**
- **Password**
- **Change Permissions**
- **Description**(선택)

**Confirm**으로 저장합니다.

## 3단계: 연결 정보 확인

툴바의 **Connection**에서 host, port, 자격 정보를 확인합니다.

형식:

`mongodb://username:password@host:27017/databasename`

## 4단계: 내장 터미널 사용

**Terminal** 버튼으로 `mongosh`를 엽니다.

![1Panel - MongoDB Built-in Terminal](/blog/terminal-mongodb.png)

예시:

```javascript
show databases
use testdb
show collections
db.users.find({ active: true }).limit(10)
db.adminCommand({ serverStatus: 1 })
```

## 5단계: 백업 및 복구

데이터베이스 목록에서 백업 작업을 엽니다.

![1Panel - MongoDB Backup Management](/blog/backup-mongodb.png)

- **Back up**: 스냅샷 생성
- **Restore**: 스냅샷 복원
- **Settings** -> **Backup Accounts**: 외부 저장소 연결
- **Cron Jobs**: 정기 백업 스케줄 설정

## 6단계: 원격 서버 관리

**Remote server**로 외부 MongoDB를 등록합니다.

패널 밖에서 변경한 경우 **Sync from server**로 UI 상태를 동기화합니다.

## 보안 권장사항

- MongoDB 공개 포트 노출 최소화
- 방화벽 허용 대상을 최소 범위로 제한
- VPN/터널 등 사설 경로 우선 사용
- 자격증명 주기적 교체 및 오프사이트 백업 유지

## 점검 체크리스트

- 인스턴스 상태 정상
- 연결 URI 검증 완료
- 최소 1회 복구 테스트 수행
- 접근 제어가 보안 기준과 일치

## 요약

1Panel은 VPS 환경의 MongoDB 운영 전 과정을 단일 UI로 단순화합니다.

시작은 [1panel.pro](https://1panel.pro/)에서 확인하세요.
