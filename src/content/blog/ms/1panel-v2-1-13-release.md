---
title: "1Panel v2.1.13 dilancarkan: pemuat turun model, File Browser dan pembetulan Runtime"
description: "1Panel v2.1.13 menambah pemuat turun model, memperbaiki sejarah fail, saiz direktori dan pemilihan dalam File Browser, menyemak ruang cakera semasa naik taraf, serta membetulkan Runtime, laluan, lesen dan snapshot."
pubDate: 2026-05-26
updatedDate: 2026-05-26
tags:
  - 1Panel
  - Release Notes
  - Models
  - File Browser
  - Runtime
  - Panel Settings
---

1Panel v2.1.13 kini tersedia. Keluaran ini menambah pemuat turun model terbina dalam, memperhalus File Browser dan aliran naik taraf, serta pembetulan untuk persekitaran Runtime dan tetapan panel.

## Highlights

- **Pemuat turun model** — Muat turun dan urus model dari modul Models tanpa meninggalkan panel
- **File Browser** — Ralat sejarah fail lebih jelas, pengiraan saiz direktori lebih pantas dengan kawalan serentak, pemilihan lebih lancar
- **Naik taraf lebih selamat** — Aliran naik taraf menyemak ruang cakera yang tinggal
- **Runtime** — Direktori projek tidak lagi dipadam apabila penciptaan persekitaran gagal; pemetaan hos boleh dipadam semula
- **Tetapan panel** — Pengikatan semula lesen dan pemulihan snapshot diperbaiki

## New Features

### Models

- **Pemuat turun model** — Muat turun model terus dalam 1Panel ([`#12694`](https://github.com/1Panel-dev/1Panel/pull/12694)).

## Enhancements

### File Browser

- **Ralat sejarah fail** — Pengendalian ralat lebih stabil semasa memuatkan kandungan sejarah ([`#12736`](https://github.com/1Panel-dev/1Panel/pull/12736)).
- **Saiz direktori** — Logik pengiraan dioptimumkan dengan kawalan serentak ([`#12737`](https://github.com/1Panel-dev/1Panel/pull/12737)).
- **UX pemilihan** — UI pengurusan fail dan operasi pemilihan diperhalus ([`#12740`](https://github.com/1Panel-dev/1Panel/pull/12740)).

### Panel Settings

- **Pengikatan semula lesen** — Logik diperbaiki dalam beberapa senario ([`#12778`](https://github.com/1Panel-dev/1Panel/pull/12778)).

### System

- **Semakan cakera naik taraf** — Ruang kosong disahkan sebelum meneruskan ([`#12708`](https://github.com/1Panel-dev/1Panel/pull/12708)).

## Bug Fixes

| Kawasan | Pembetulan |
|---|---|
| **Runtime** | Direktori projek tidak lagi dipadam apabila penciptaan persekitaran gagal ([`#12756`](https://github.com/1Panel-dev/1Panel/pull/12756)). |
| **Runtime** | Pemetaan hos Runtime boleh dipadam semula ([`#12779`](https://github.com/1Panel-dev/1Panel/pull/12779)). |
| **File Browser** | Memuatkan direktori yang tidak wujud tidak lagi menyebabkan ralat tidak dijangka ([`#12744`](https://github.com/1Panel-dev/1Panel/pull/12744)). |
| **Panel Settings** | Pemulihan snapshot dibetulkan dalam senario yang sebelum ini gagal ([`#12777`](https://github.com/1Panel-dev/1Panel/pull/12777)). |

## How to Upgrade

Klik butang `Update` di penjuru kanan bawah pada papan pemuka.

Baru mengenali 1Panel? Lawati [1panel.pro](https://1panel.pro/).

## Source

Nota keluaran penuh: [1Panel v2.1.13 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.13)
