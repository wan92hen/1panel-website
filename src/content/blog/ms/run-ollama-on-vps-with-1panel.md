---
title: "Jalankan Ollama pada VPS dengan 1Panel: makmal AI peribadi dalam 10 minit"
description: "Panduan ringkas untuk memasang Ollama melalui 1Panel, menjalankan LLM peribadi, dan mengukuhkan keselamatan tanpa konfigurasi rumit."
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

Dengan Ollama, anda boleh jalankan model seperti Llama 3 dan Mistral pada VPS sendiri. Melalui App Store 1Panel, pemasangan siap dalam beberapa minit dan persediaan asas boleh disiapkan dalam kurang daripada 10 minit.

## Langkah pemasangan dengan 1Panel

### Step 1: Pasang 1Panel
```bash
bash -c "$(curl -sSL https://resource.1panel.pro/v2/quick_start.sh)"
```

### Step 2: Cari Ollama dalam App Store
Pada bar sisi, buka **App Store**, cari **Ollama**, kemudian klik **Install**.

### Step 3: Tetapkan pilihan pemasangan
- Port lalai: `11434`
- Had CPU/RAM (pilihan)
- Direktori data model
- Aktifkan `External Access` jika perlu capaian luar

![Install Ollama in 1Panel App Store](/blog/install-ollama.png)

### Step 4: Jalankan model pertama
Pergi ke `AI` > `Local Models` > `Ollama`, klik `Add` dan masukkan nama model. Senarai model: <https://ollama.com/search>.

![Run Model in Ollama](/blog/run-ollama-model.png)

### Step 5: Uji model
```bash
curl http://{SERVER_IP}:11434/api/generate -d '{
  "model": "llama3",
  "prompt": "Explain self-hosted LLMs in one sentence.",
  "stream": false
}'
```

### Step 6: Kuatkan keselamatan
Untuk pendedahan awam, aktifkan `AI Proxy Enhancement` bagi reverse proxy + HTTPS.

![Secure Ollama](/blog/ollama-proxy-enhancement.png)
