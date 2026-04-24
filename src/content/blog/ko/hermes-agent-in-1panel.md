---
title: "1Panel로 서버에 Hermes Agent 설치하기"
description: "Nous Research의 Hermes Agent(자가 개선형 AI)를 1Panel에서 설치하는 방법. Model Accounts와 Agents 기반 설정, WebUI 접속, 운영 단계 조정까지 정리."
pubDate: 2026-04-24
updatedDate: 2026-04-24
tags:
  - 1Panel
  - Hermes Agent
  - AI Agent
  - Deployment
  - Self-hosted
---

## Hermes Agent란?

**Hermes Agent**는 [Nous Research](https://nousresearch.com/)가 개발한 자가 개선형 AI 에이전트입니다. **학습 루프**를 내장해 실제 사용 과정에서 **스킬 생성/개선**, **장기 기억** 유지, **과거 세션 조회**, 그리고 여러 대화에 걸친 사용자 이해 고도화를 수행합니다.

Hermes Agent는 **한 대의 로컬 PC에 묶이지 않습니다**. **VPS**, **GPU 클러스터** 등에서 실행할 수 있고, **명령줄**, **WebUI**, **메시징 채널**을 통해 상호작용할 수 있습니다.

1Panel 경로로 배포하면 **브라우저 WebUI**에서 **설정**과 **API Key**를 관리하고, **실행 상태**와 **세션 정보**를 확인할 수 있습니다. 1Panel에서는 배포와 일상 운영을 **AI -> Agents** 및 **Model Accounts** 흐름으로 관리합니다.

## 왜 1Panel로 Hermes Agent를 운영하나?

**모델 인증정보**, **에이전트 정의**(타입/버전/포트/모델), **WebUI 진입점**을 하나의 워크플로로 관리할 수 있습니다. 즉흥 스크립트를 줄이고 반복 가능한 운영을 만들기 쉽습니다.

## 사전 준비

배포 전에 아래를 확인하세요.

- **1Panel**이 설치되어 있고 대시보드 접속이 가능함
- 사용 가능한 **LLM API Key** 또는 1Panel에 연결된 **로컬 모델**이 있음
- 서버가 **인터넷 접속 가능**함(완전 로컬 운용 제외)

## 1단계: 모델 계정 추가

1. **AI** -> **Model Accounts** 이동
2. **Add Model Account** 클릭
3. 사용할 **모델 공급자** 선택 후 필수 항목 입력
4. 계정 **저장**
5. 목록에 신규 계정이 정상 표시되는지 확인

![Create Model Account in 1Panel](/blog/create-model-account.png)

여러 계정/모델을 운영한다면, 이후 Hermes Agent 생성 화면에서 **Model Account / Model** 조합을 선택합니다.

## 2단계: Hermes Agent 생성

1. **AI** -> **Agents** 이동
2. **Create** 클릭
3. **Agent Type**을 **Hermes Agent**로 설정

배포 폼 주요 항목:

| 항목 | 입력 가이드 |
| --- | --- |
| **Agent Type** | **Hermes Agent** |
| **Name** | 기본 예시는 `hermes-agent`, 필요에 맞게 변경 가능 |
| **App Version** | 설치할 Hermes Agent 버전 선택 |
| **Access Port / WebUI Port** | 기본값 사용 또는 네트워크 계획에 맞게 지정 |
| **Model Provider** | 1단계에서 추가한 계정과 일치하는 공급자 선택 |
| **Model Account / Model** | 실제 사용할 계정과 모델 선택 |
| **Other Parameters** | 보통 기본값 유지, 필요할 때만 조정 |

![Create Hermes Agent in 1Panel](/blog/create-hermes-agent.png)

공급자를 선택하면 1Panel이 해당 공급자의 **Model Accounts**를 자동 로드합니다.

모델이 여러 개면 이 화면에서 정확한 **모델**을 선택하세요. 추가 옵션이 보이면 화면 안내를 따릅니다.

제출 전 **이름/버전/포트/모델**을 다시 확인하세요.

## 3단계: 설치 실행 및 완료 확인

설정이 맞으면 **Confirm**을 눌러 설치를 시작합니다.

작업 중에는 **페이지 상태 표시**를 보면서, UI가 **완료**를 표시할 때까지 기다립니다. 성공 상태가 보이면 배포가 끝난 것입니다.

실패 시 패널 오류 메시지(이미지 pull, 포트 충돌, 인증, 디스크 등)를 확인해 원인을 해결한 뒤 재실행하세요.

## 4단계: Hermes Agent WebUI 열기 또는 TUI 채팅

**Agents** 목록으로 돌아가 Hermes Agent 항목의 **WebUI**를 클릭합니다.

**첫 접속**에서는 초기화 중일 수 있습니다. 잠시 기다렸다가 1~2회 새로고침하세요.

WebUI에서 **설정**, **키 관리**, **세션 뷰**를 지속적으로 점검할 수 있습니다.

또는 **Chat** 버튼을 눌러 TUI에서 Hermes Agent와 바로 대화할 수 있습니다.

![Chat with Hermes Agent in TUI](/blog/hermes-agent-tui.png)

## 5단계: 1Panel 내 후속 설정

초기 배포 후에는 실제 워크로드에 맞춰 조정합니다. **모델/계정 바인딩** 변경, **접근 방식**(내부 전용 vs 공개 도메인) 정리, 폼/WebUI의 **런타임 파라미터** 튜닝이 핵심입니다.

인터넷 노출이 있다면 **방화벽 범위 최소화**, 도메인 접근 시 **HTTPS**, 그리고 티켓/로그/스크린샷에서 **API Key 보호**를 기본 운영 원칙으로 적용하세요.

## 빠른 점검 체크리스트

- 초기화 후 WebUI가 안정적으로 열린다.
- 스모크 테스트가 **의도한 모델**을 호출한다.
- **포트**가 다른 서비스와 충돌하지 않는다.
- 정책이 요구하면 **백업/스냅샷** 체계가 있다.

## 요약

Hermes Agent는 셀프호스팅 가능한 **장기 실행형, 스킬 중심** 에이전트 런타임입니다. 1Panel에서는  
**Model Accounts** -> **Agents -> Create (Hermes Agent)** -> **Confirm** -> **WebUI** 순서로 배포하고, 이후 **모델/접근/파라미터**를 운영에 맞게 고도화하면 됩니다.

1Panel이 처음이라면 [1panel.pro](https://1panel.pro/)에서 시작하세요.
