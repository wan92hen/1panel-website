---
title: "1Panel v2.1.8 Dilancarkan: Carian Fail AI, Pengurusan Peranan Ejen, dan Perkongsian Pautan Fail"
description: "1Panel v2.1.8 membawa carian fail berkuasa AI, pautan fail boleh kongsi, pengurusan peranan ejen, sokongan saluran berbilang akaun, amaran Bark, penyegerakan status vLLM, dan perlindungan IP mencurigakan untuk 2FA."
pubDate: 2026-04-10
updatedDate: 2026-04-10
tags:
  - 1Panel
  - Nota Keluaran
  - AI Search
  - Agent
  - Security
---

1Panel v2.1.8 telah dikeluarkan secara rasmi pada 10 April 2026. Keluaran ini memperluas modul Agents secara besar-besaran (peranan, saluran berbilang akaun, dan pengikatan laman web), menambah carian AI serta pautan perkongsian dalam File Browser, dan turut memperkukuh keselamatan serta kestabilan sistem.

## Sorotan

- **Carian Fail AI** dalam File Browser menggunakan bahasa semula jadi
- **Perkongsian Pautan Fail** terus dari File Browser
- **Pengurusan Peranan Ejen** untuk kawalan akses peringkat pasukan
- **Sokongan Saluran Berbilang Akaun** (QQ, Feishu, DingTalk, Discord, dll.)
- **Pengikatan Laman Web untuk Ejen**
- **Saluran Amaran Bark**
- **Perlindungan IP Mencurigakan untuk 2FA**
- **Penyegerakan Status vLLM** masa nyata

## Ciri Baharu

### File Browser

- **AI Search** ([`#12415`](https://github.com/1panel-dev/1panel/pull/12415)): cari fail dengan menerangkan apa yang anda perlukan tanpa laluan/nama fail tepat.
- **File Link Sharing** ([`#12453`](https://github.com/1panel-dev/1panel/pull/12453)): jana pautan muat turun terus untuk fail seperti artifak binaan, sandaran konfigurasi, atau log.

### Agents

- **Role Management** ([`#12364`](https://github.com/1panel-dev/1panel/pull/12364)): cipta peranan dengan keizinan tertentu dan tetapkan pada ejen.
- **Multi-Account Channel Support** ([`#12369`](https://github.com/1panel-dev/1panel/pull/12369)): satu saluran boleh dipautkan kepada beberapa akaun.
- **Website Binding** ([`#12413`](https://github.com/1panel-dev/1panel/pull/12413)): pautkan ejen kepada laman web tertentu dalam 1Panel.
- **Agent Remarks** ([`#12361`](https://github.com/1panel-dev/1panel/pull/12361)): medan nota bebas untuk dokumentasi ringkas setiap ejen.
- **ClawHub China Mirror** ([`#12396`](https://github.com/1panel-dev/1panel/pull/12396)): meningkatkan kebolehpercayaan muat turun skill di tanah besar China.

### App Store

- **Suis akses port luaran bersepadu** ([`#12426`](https://github.com/1panel-dev/1panel/pull/12426)): kawal pendedahan port luaran aplikasi dari satu tempat.

### Tetapan Panel

- **Bark Alert Channel** ([`#12338`](https://github.com/1panel-dev/1panel/pull/12338)): tambah Bark sebagai destinasi notifikasi push.

## Penambahbaikan

### Agents dan OpenClaw

- Pilihan tetapan plugin OpenClaw lebih terperinci dengan model sandaran ([`#12386`](https://github.com/1panel-dev/1panel/pull/12386))
- Nyahpasang dan naik taraf plugin OpenClaw terus dari panel ([`#12373`](https://github.com/1panel-dev/1panel/pull/12373))
- Saluran QQ dan Feishu dipindahkan ke plugin rasmi ([`#12369`](https://github.com/1panel-dev/1panel/pull/12369))
- Tetapan DingTalk dalam OpenClaw lebih boleh dikonfigurasi ([`#12440`](https://github.com/1panel-dev/1panel/pull/12440))
- Struktur menu berkaitan model disusun semula ([`#12407`](https://github.com/1panel-dev/1panel/pull/12407))
- Konfigurasi model lalai dikemas kini ([`#12403`](https://github.com/1panel-dev/1panel/pull/12403))
- Kestabilan panggilan API dipertingkat untuk aliran kerja ejen berintensiti tinggi ([`#12443`](https://github.com/1panel-dev/1panel/pull/12443))

### Model

- Paparan log pull model lebih kemas ([`#12414`](https://github.com/1panel-dev/1panel/pull/12414))
- Logik penyegerakan status vLLM dipertingkat

### Keselamatan

- Perlindungan IP mencurigakan ketika aliran 2FA ([`#12365`](https://github.com/1panel-dev/1panel/pull/12365))
- Pengendalian kunci akaun dan maklum balas log masuk dipertingkat ([`#12377`](https://github.com/1panel-dev/1panel/pull/12377))
- Pemeriksaan keselamatan log masuk dan aliran akses panel diperketat ([`#12378`](https://github.com/1panel-dev/1panel/pull/12378))

### File Browser dan SSH

- Kestabilan operasi fail dipertingkat di bawah beban ([`#12358`](https://github.com/1panel-dev/1panel/pull/12358))
- Pengalaman edit fail konfigurasi SSH lebih lancar dengan validasi lebih baik ([`#12398`](https://github.com/1panel-dev/1panel/pull/12398))

### Laman Web dan Runtime

- Susun atur halaman OpenResty Other Settings lebih kemas ([`#12429`](https://github.com/1panel-dev/1panel/pull/12429))
- Validasi lebih ketat semasa memadam laman OpenClaw ([`#12433`](https://github.com/1panel-dev/1panel/pull/12433))
- Konfigurasi website binding dipermudah ([`#12435`](https://github.com/1panel-dev/1panel/pull/12435))
- Pemilihan skrip runtime Node.js lebih boleh dipercayai ([`#12431`](https://github.com/1panel-dev/1panel/pull/12431))

### Sistem

- Aliran kemas kini AI Terminal lebih lancar ([`#12409`](https://github.com/1panel-dev/1panel/pull/12409))
- Kelajuan pemuatan editor kod dipertingkat ([`#12401`](https://github.com/1panel-dev/1panel/pull/12401))
- Tingkah laku paparan/interaksi dialog lebih konsisten ([`#12400`](https://github.com/1panel-dev/1panel/pull/12400))
- Teks i18n dikemas kini merentasi semua bahasa disokong ([`#12350`](https://github.com/1panel-dev/1panel/pull/12350))

## Pembaikan Pepijat

- **Overview**: membetulkan nilai delta tidak normal pada carta pemantauan ([`#12402`](https://github.com/1panel-dev/1panel/pull/12402))
- **Agents**: membetulkan konfigurasi saluran Discord OpenClaw yang tidak tepat ([`#12456`](https://github.com/1panel-dev/1panel/pull/12456))
- **Certificates**: membetulkan pepijat logik pembaharuan sijil automatik ([`#12430`](https://github.com/1panel-dev/1panel/pull/12430))
- **Panel Settings**: pemeriksaan kesihatan proksi masih berjalan selepas proksi dilumpuhkan ([`#12388`](https://github.com/1panel-dev/1panel/pull/12388))
- **Panel Settings**: membetulkan aliran kembali ke halaman log masuk apabila 2FA memerlukan CAPTCHA ([`#12438`](https://github.com/1panel-dev/1panel/pull/12438))

## Cara Naik Taraf

Cuma klik butang "Update" di penjuru kanan bawah.

Baru dengan 1Panel? Lawati [1panel.pro](https://1panel.pro/).

## Sumber

- Nota keluaran penuh: [1Panel v2.1.8 di GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.8)

