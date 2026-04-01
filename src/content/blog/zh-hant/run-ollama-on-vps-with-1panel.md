---
title: "如何用 1Panel 在 VPS 上運行 Ollama：10 分鐘建立私有 AI 實驗室"
description: "以 1Panel 一鍵安裝 Ollama，在 VPS 快速部署私有 LLM，並完成必要的安全強化。"
pubDate: 2026-04-01
updatedDate: 2026-04-01
tags:
  - Ollama
  - VPS
  - 1Panel
  - LLM
  - 自託管
---

## TL;DR

透過 Ollama，你可以在自有 VPS 運行 Llama 3、Mistral 等開源模型。配合 1Panel App Store，安裝約 2 分鐘，整體部署可在 10 分鐘內完成。

## 用 1Panel 部署 Ollama

### Step 1：安裝 1Panel
```bash
bash -c "$(curl -sSL https://resource.1panel.pro/v2/quick_start.sh)"
```

### Step 2：在 App Store 搜尋 Ollama
進入 **App Store**，搜尋 **Ollama**，點擊 **Install**。

### Step 3：設定安裝選項
- 預設連接埠：`11434`
- 可選 CPU / RAM 限額
- 模型資料目錄
- 如需對外存取，勾選 `External Access`

![Install Ollama in 1Panel App Store](/blog/install-ollama.png)

### Step 4：啟動第一個模型
前往 `AI` > `Local Models` > `Ollama`，按 `Add`，輸入模型名稱即可啟動。模型列表：<https://ollama.com/search>。

![Run Model in Ollama](/blog/run-ollama-model.png)

### Step 5：測試模型
```bash
curl http://{SERVER_IP}:11434/api/generate -d '{
  "model": "llama3",
  "prompt": "Explain self-hosted LLMs in one sentence.",
  "stream": false
}'
```

### Step 6：加固安全
正式對外服務前，建議啟用 `AI Proxy Enhancement`，配置反向代理與 HTTPS。

![Secure Ollama](/blog/ollama-proxy-enhancement.png)
