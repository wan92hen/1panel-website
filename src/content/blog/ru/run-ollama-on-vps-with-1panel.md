---
title: "Как запустить Ollama на VPS через 1Panel: приватная AI-лаборатория за 10 минут"
description: "Пошаговая инструкция по установке Ollama через 1Panel, запуску приватных LLM и базовому усилению безопасности."
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

С Ollama вы можете запускать модели Llama 3 и Mistral на собственном VPS. Через App Store в 1Panel установка занимает несколько минут.

## Установка через 1Panel

### Step 1: Установите 1Panel
```bash
bash -c "$(curl -sSL https://resource.1panel.pro/v2/quick_start.sh)"
```

### Step 2: Найдите Ollama в App Store
Откройте **App Store**, найдите **Ollama** и нажмите **Install**.

### Step 3: Настройте параметры
- Порт по умолчанию: `11434`
- Ограничения CPU/RAM (при необходимости)
- Каталог хранения моделей
- Для внешнего доступа включите `External Access`

![Install Ollama in 1Panel App Store](/blog/install-ollama.png)

### Step 4: Запустите первую модель
Перейдите в `AI` > `Local Models` > `Ollama`, нажмите `Add` и укажите модель. Каталог: <https://ollama.com/search>.

![Run Model in Ollama](/blog/run-ollama-model.png)

### Step 5: Проверьте работу модели
```bash
curl http://{SERVER_IP}:11434/api/generate -d '{
  "model": "llama3",
  "prompt": "Explain self-hosted LLMs in one sentence.",
  "stream": false
}'
```

### Step 6: Усильте безопасность
Для публичного доступа включите `AI Proxy Enhancement`, чтобы настроить reverse proxy + HTTPS.

![Secure Ollama](/blog/ollama-proxy-enhancement.png)
