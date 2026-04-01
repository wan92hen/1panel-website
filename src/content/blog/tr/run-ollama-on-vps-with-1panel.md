---
title: "1Panel ile VPS üzerinde Ollama: 10 dakikada özel yapay zeka ortamı"
description: "1Panel App Store ile Ollama kurulumunu hızlandırın, özel LLM çalıştırın ve güvenliği kolayca güçlendirin."
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

Ollama ile Llama 3 ve Mistral gibi açık kaynak LLM modellerini kendi VPS'inizde çalıştırabilirsiniz. 1Panel App Store ile kurulum birkaç dakikada tamamlanır.

## 1Panel ile kurulum adımları

### Step 1: 1Panel kurun
```bash
bash -c "$(curl -sSL https://resource.1panel.pro/v2/quick_start.sh)"
```

### Step 2: App Store'da Ollama'yı bulun
Sol menüden **App Store** açın, **Ollama** aratın ve **Install** seçin.

### Step 3: Kurulum seçeneklerini ayarlayın
- Varsayılan port: `11434`
- İsteğe bağlı CPU/RAM sınırları
- Model veri dizini
- Dış erişim gerekiyorsa `External Access` etkinleştirin

![Install Ollama in 1Panel App Store](/blog/install-ollama.png)

### Step 4: İlk modeli çalıştırın
`AI` > `Local Models` > `Ollama` bölümünde `Add` ile model adını girin. Model listesi: <https://ollama.com/search>.

![Run Model in Ollama](/blog/run-ollama-model.png)

### Step 5: Model testi
```bash
curl http://{SERVER_IP}:11434/api/generate -d '{
  "model": "llama3",
  "prompt": "Explain self-hosted LLMs in one sentence.",
  "stream": false
}'
```

### Step 6: Güvenliği güçlendirin
Yayın ortamı için `AI Proxy Enhancement` ile reverse proxy + HTTPS etkinleştirin.

![Secure Ollama](/blog/ollama-proxy-enhancement.png)
