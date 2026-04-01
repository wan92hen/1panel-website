---
title: "1Panel로 VPS에 Ollama 배포하기: 10분 만에 구축하는 프라이빗 AI 환경"
description: "1Panel App Store로 Ollama를 빠르게 설치하고, 프라이빗 LLM 운영 및 보안 강화를 간단히 진행하는 가이드입니다."
pubDate: 2026-04-01
updatedDate: 2026-04-01
tags:
  - Ollama
  - VPS
  - 1Panel
  - LLM
  - Self-hosted
---

## TL;DR

Ollama를 사용하면 Llama 3, Mistral 같은 오픈소스 LLM을 내 VPS에서 직접 실행할 수 있습니다. 1Panel App Store를 이용하면 몇 분 내 설치가 끝나며, 첫 모델 실행까지 10분 이내로 완료할 수 있습니다.

## 1Panel 설치 및 배포

### Step 1: 1Panel 설치
```bash
bash -c "$(curl -sSL https://resource.1panel.pro/v2/quick_start.sh)"
```

### Step 2: App Store에서 Ollama 검색
사이드바에서 **App Store**를 열고 **Ollama**를 검색해 **Install**을 클릭합니다.

### Step 3: 설치 옵션 설정
- 기본 포트: `11434`
- 선택 CPU/RAM 제한
- 모델 저장 디렉터리
- 외부 접속이 필요하면 `External Access` 활성화

![Install Ollama in 1Panel App Store](/blog/install-ollama.png)

### Step 4: 첫 모델 실행
`AI` > `Local Models` > `Ollama`에서 `Add`를 눌러 모델명을 입력합니다. 모델 목록: <https://ollama.com/search>.

![Run Model in Ollama](/blog/run-ollama-model.png)

### Step 5: 모델 테스트
```bash
curl http://{SERVER_IP}:11434/api/generate -d '{
  "model": "llama3",
  "prompt": "Explain self-hosted LLMs in one sentence.",
  "stream": false
}'
```

### Step 6: 보안 강화
외부 서비스 제공 시 `AI Proxy Enhancement`를 켜서 reverse proxy + HTTPS를 적용합니다.

![Secure Ollama](/blog/ollama-proxy-enhancement.png)
