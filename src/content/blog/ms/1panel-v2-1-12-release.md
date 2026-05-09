---
title: "1Panel v2.1.12 dilancarkan: penghalusan Overview, pembetulan File Browser dan OpenWRT"
description: "1Panel v2.1.12 memperhalus carta pemantauan laman utama, membetulkan jeda karusel semasa mengedit memo, menguatkan nyahzip dan keizinan direktori induk dalam File Browser, menstabilkan terminal nod anak dan naik taraf pada OpenWRT."
pubDate: 2026-05-09
updatedDate: 2026-05-09
tags:
  - 1Panel
  - Release Notes
  - Overview
  - File Browser
  - Terminal
  - Multi-Node
  - OpenWRT
---

1Panel v2.1.12 kini tersedia. Keluaran ini memperhalus pengalaman Overview serta membawa pembetulan kebolehpercayaan untuk File Browser, terminal nod anak dan naik taraf pada OpenWRT.

## Highlights

- **Carta pemantauan** — Carta pemantauan laman utama lebih jelas untuk dibaca sekilas
- **UX memo** — Karusel laman utama berhenti dengan betul semasa memo disunting
- **Kestabilan File Browser** — Nyahzip lebih selamat, keizinan direktori induk kekal selepas nyahzip dan muat naik, serta pembetulan untuk pemindahan binari besar
- **Terminal nod anak** — Sambungan hos lalai untuk terminal pada nod anak bertindak seperti dijangka
- **Naik taraf OpenWRT** — Naik taraf panel selesai dengan jayanya pada penyebaran berasaskan OpenWRT

## Enhancements

### Overview

- **Paparan carta pemantauan** — Susun atur dan kebolehbacaan carta pemantauan laman utama diperhalus ([`#12673`](https://github.com/1Panel-dev/1Panel/pull/12673)).

## Bug Fixes

| Kawasan | Pembetulan |
|---|---|
| **Overview** | Karusel laman utama kini berhenti semasa memo disunting ([`#12680`](https://github.com/1Panel-dev/1Panel/pull/12680)). |
| **File Browser** | Nyahampat untuk sesetengah arkib ZIP tidak lagi gagal secara tidak dijangka ([`#12684`](https://github.com/1Panel-dev/1Panel/pull/12684)). |
| **File Browser** | Keizinan direktori induk tidak lagi berubah selepas mengekstrak arkib ([`#12684`](https://github.com/1Panel-dev/1Panel/pull/12684)). |
| **File Browser** | Memindahkan fail binari sangat besar tidak lagi membawa risiko pelayan tidak boleh dicapai ([`#12683`](https://github.com/1Panel-dev/1Panel/pull/12683)). |
| **File Browser** | Keizinan direktori induk kekal selepas muat naik fail ([`#12672`](https://github.com/1Panel-dev/1Panel/pull/12672)). |
| **Terminal** | Terminal nod anak menggunakan sambungan hos lalai yang betul ([`#12676`](https://github.com/1Panel-dev/1Panel/pull/12676)). |
| **System** | Naik taraf 1Panel berfungsi semula pada OpenWRT ([`#12670`](https://github.com/1Panel-dev/1Panel/pull/12670)). |

## How to Upgrade

Klik butang `Update` di penjuru kanan bawah pada papan pemuka.

Baru mengenali 1Panel? Lawati [1panel.pro](https://1panel.pro/).

## Source

Nota keluaran penuh: [1Panel v2.1.12 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.12)
