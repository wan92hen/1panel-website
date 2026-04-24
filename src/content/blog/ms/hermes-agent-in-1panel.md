---
title: "Cara memasang Hermes Agent pada server dengan 1Panel"
description: "Hermes Agent oleh Nous Research: AI yang boleh menambah baik diri dengan memori dan kemahiran. Panduan langkah demi langkah di 1Panel menggunakan Model Accounts dan Agents."
pubDate: 2026-04-24
updatedDate: 2026-04-24
tags:
  - 1Panel
  - Hermes Agent
  - AI Agent
  - Deployment
  - Self-hosted
---

## Apa itu Hermes Agent?

**Hermes Agent** ialah ejen AI daripada [Nous Research](https://nousresearch.com/) yang boleh memperbaiki diri. Ia mempunyai **gelung pembelajaran terbina dalam**: dari penggunaan sebenar, ia boleh **mencipta dan menambah baik kemahiran**, mengekalkan **memori jangka panjang**, merujuk **sesi lama**, dan membina kefahaman pengguna merentas banyak perbualan.

Ia **tidak terikat pada satu laptop** sahaja. Anda boleh jalankan pada **VPS**, **kluster GPU**, atau persekitaran setara, dan berinteraksi melalui **baris arahan**, **WebUI**, atau **saluran pemesejan**.

Melalui 1Panel, anda mendapat **WebUI berasaskan pelayar** untuk urus **konfigurasi** dan **API key**, serta semak **status runtime** dan **maklumat sesi**. Dalam 1Panel, aliran utama ialah **AI -> Agents** bersama **Model Accounts**.

## Kenapa guna 1Panel untuk Hermes Agent?

Anda boleh satukan **kredensial model**, **definisi ejen** (jenis, versi, port, model), dan pintu masuk **WebUI** dalam satu aliran kerja. Kurang skrip ad-hoc, lebih mudah operasi berulang.

## Prasyarat

Sebelum deploy, pastikan:

- **1Panel** sudah dipasang dan dashboard boleh diakses.
- Anda ada **LLM API key** yang sah, atau **model tempatan** yang sudah disambungkan dalam 1Panel.
- Server ada **akses internet** (kecuali operasi 100% lokal).

## Langkah 1: Tambah akaun model

1. Buka **AI** -> **Model Accounts**.
2. Klik **Add Model Account**.
3. Pilih **penyedia model** dan isi medan yang diperlukan.
4. **Simpan** akaun.
5. Sahkan entri baru muncul dalam senarai.

![Create Model Account in 1Panel](/blog/create-model-account.png)

Jika anda urus banyak akaun/model, kombinasi tepat **Model Account / Model** dipilih kemudian semasa cipta Hermes Agent.

## Langkah 2: Cipta Hermes Agent

1. Buka **AI** -> **Agents**.
2. Klik **Create**.
3. Tetapkan **Agent Type** kepada **Hermes Agent**.

Isi borang deploy:

| Medan | Panduan |
| --- | --- |
| **Agent Type** | **Hermes Agent** |
| **Name** | Contoh lalai `hermes-agent`; boleh guna nama sendiri. |
| **App Version** | Pilih versi Hermes Agent yang hendak dipasang. |
| **Access Port / WebUI Port** | Guna lalai atau tetapkan ikut pelan rangkaian. |
| **Model Provider** | Penyedia yang sepadan dengan akaun dalam Langkah 1. |
| **Model Account / Model** | Pilih akaun dan model yang tepat. |
| **Other Parameters** | Biasanya kekal lalai; ubah hanya bila perlu. |

![Create Hermes Agent in 1Panel](/blog/create-hermes-agent.png)

Selepas memilih provider, 1Panel akan memuatkan **Model Accounts** bagi provider tersebut.

Jika ada banyak model, pastikan model yang betul dipilih di halaman ini. Jika ada pilihan tambahan, ikut panduan pada skrin.

Sebelum hantar, semak semula **nama, versi, port, dan model**.

## Langkah 3: Jalankan pemasangan hingga selesai

Jika semua betul, klik **Confirm** untuk mula pemasangan.

Semasa tugas berjalan, perhatikan **status pada halaman** dan tunggu sehingga UI menunjukkan **selesai**. Bila status berjaya dipaparkan, Hermes Agent telah dideploy.

Jika gagal, semak mesej ralat panel (image pull, konflik port, auth, disk, dan lain-lain), betulkan punca, kemudian cuba lagi.

## Langkah 4: Buka WebUI Hermes Agent atau chat melalui TUI

Kembali ke senarai **Agents**, cari entri Hermes Agent, dan klik **WebUI**.

Pada **akses pertama**, halaman mungkin masih initializing. Tunggu seketika dan refresh 1-2 kali.

Daripada WebUI, anda boleh terus urus **tetapan**, **key**, dan **paparan sesi**.

Atau anda boleh klik butang **Chat** untuk berbual dengan Hermes Agent melalui TUI.

![Chat with Hermes Agent in TUI](/blog/hermes-agent-tui.png)

## Langkah 5: Konfigurasi susulan dalam 1Panel

Selepas deploy awal berjaya, laraskan ikut beban sebenar: tukar **model** atau binding akaun, ketatkan **corak akses** (dalaman sahaja vs domain awam), dan tala **parameter runtime** daripada borang/WebUI.

Jika perkhidmatan terdedah ke internet, gunakan kawalan biasa: skop **firewall** minimum, **HTTPS** untuk akses domain, dan pengurusan **API key** yang berhati-hati dalam tiket, log, dan tangkap layar.

## Senarai semak ringkas

- WebUI dibuka stabil selepas fasa awal.
- Ujian ringkas memanggil **model yang dimaksudkan**.
- **Port** tidak bercanggah dengan servis lain.
- Ada perlindungan **backup/snapshot** jika polisi memerlukannya.

## Ringkasan

Hermes Agent ialah runtime ejen **berjalan berterusan dan berasaskan kemahiran** yang boleh anda hos sendiri. Dalam 1Panel, alirannya: **Model Accounts** -> **Agents -> Create (Hermes Agent)** -> **Confirm** -> **WebUI** -> kemudian iterasi **model, akses, dan parameter** ikut keperluan produksi.

Jika baru dengan 1Panel, mula di [1panel.pro](https://1panel.pro/).
