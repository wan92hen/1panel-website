---
title: "1Panel v2.1.9 dilancarkan: Hermes Agent, pengurusan MongoDB dan sejarah fail"
description: "1Panel v2.1.9 menambah sokongan Hermes Agent, pengurusan MongoDB bersepadu, dan sejarah fail, bersama penambahbaikan pada Agents, File Browser, Containers dan keserasian S3."
pubDate: 2026-04-23
updatedDate: 2026-04-23
tags:
  - 1Panel
  - Release Notes
  - Hermes Agent
  - MongoDB
  - File Browser
  - OpenClaw
  - AWS S3
---

1Panel v2.1.9 kini tersedia. Keluaran ini membawa tiga ciri baharu merentas modul Agents, Databases dan File Browser, serta penambahbaikan berfokus dan lima pembaikan pepijat.

## Highlights

- Sokongan **Hermes Agent** dalam modul Agents
- **Pengurusan MongoDB** dalam antaramuka Databases yang sama
- **File History** dalam File Browser untuk jejak perubahan fail
- Aliran tambah bot saluran OpenClaw yang lebih ringkas
- Keserasian AWS S3 dan endpoint serasi yang lebih stabil

## New Features

### Agents
1Panel kini menyokong **Hermes Agent**, menambah pilihan ekosistem ejen AI tempatan terus dari panel.

### Databases
**MongoDB** kini boleh diurus secara natif bersama MySQL, PostgreSQL dan Redis.

### File Browser
**File History** membolehkan perubahan fail dikesan dan dipulihkan dengan lebih mudah.

## Enhancements

- Agents: nyahikat laman web lebih kemas, aliran bot saluran OpenClaw dipermudahkan
- App Store: logik pengesanan perubahan Compose ditambah baik
- File Browser: boleh hentikan tugas pemampatan, sokongan sintaks Dockerfile, header perkongsian boleh dikonfigurasi, validasi metadata lebih ketat
- Containers: pengendalian data dan penyegerakan status dipertingkat
- Panel Settings: kestabilan sambungan AWS S3 dipertingkat
- System/Websites: kemasan gaya jadual dan lencana nama laman

## Bug Fixes

| Area | Fix |
|---|---|
| Runtime | Isu direktori runtime masih boleh diubah semasa sesi edit aktif diperbaiki |
| File Browser | Isu fail kongsi melalui QR tidak boleh dimuat turun diperbaiki |
| Firewall | Isu deskripsi peraturan tidak boleh diubah selepas dicipta diperbaiki |
| Firewall | Isu paparan status listening yang tidak normal diperbaiki |
| Tamper Protection | Ralat terjemahan untuk beberapa bahasa diperbaiki |

## How to Upgrade

Klik butang `Update` di penjuru kanan bawah papan pemuka 1Panel.

Baru menggunakan 1Panel? Lawati [1panel.pro](https://1panel.pro/).

## Source

Nota keluaran penuh: [1Panel v2.1.9 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.9)
