---
title: "1Panel v2.1.11 dilancarkan: DeepSeek V4 lalai, tugas File Browser dan pembetulan"
description: "1Panel v2.1.11 mengemas kini kumpulan model DeepSeek ke V4, memperbaiki nyahampat File Browser dan panduan VS Code SSH, melaraskan masa tamat muat turun log kontena, susun atur terminal, SSL tandatangan sendiri IPv6, serta 12 pembetulan pepijat."
pubDate: 2026-05-07
updatedDate: 2026-05-07
tags:
  - 1Panel
  - Release Notes
  - Agents
  - File Browser
  - Containers
  - DeepSeek
  - Multi-Node
---

1Panel v2.1.11 kini tersedia. Keluaran ini menumpukan penambahbaikan praktikal pada Agents, File Browser, kontena dan tetapan panel, bersama pembetulan untuk Overview, laman web, multi-nod dan lain-lain.

## Highlights

- **DeepSeek V4 dalam kumpulan model** — akaun DeepSeek secara lalai menggunakan model **V4** terkini dalam kumpulan
- **Kawalan nyahampat File Browser** — hentikan tugas nyahampat yang sedang berjalan dan UI pengurusan tugas yang lebih jelas
- **VS Code melalui SSH** — arahan sambungan diperjelas dan skrip persediaan SSH diluaskan
- **Muat turun log kontena** — masa tamat dilaraskan; pembersihan proses Docker selepas masa tamat (rujuk Bug Fixes)
- **SSL panel IPv6** — sijil ditandatangani sendiri untuk panel pada pelayan IPv6 sahaja atau dwi-tindanan
- **Susun atur terminal** — pelarasan ketinggian dalaman mengurangkan bar skrol luaran yang tidak perlu

## Enhancements

### Agents

- **Kumpulan model DeepSeek** — kumpulan untuk akaun DeepSeek menyokong secara lalai model **V4** terkini ([`#12622`](https://github.com/1Panel-dev/1Panel/pull/12622)).

### Containers

- **Masa tamat muat turun log** — tetingkap menunggu muat turun log diselaraskan dengan rangkaian dan cakera sebenar ([`#12632`](https://github.com/1Panel-dev/1Panel/pull/12632)).

### File Browser

- **Hentikan nyahampat** — tugas boleh dibatalkan semasa berjalan; UI senarai tugas diperhalusi ([`#12582`](https://github.com/1Panel-dev/1Panel/pull/12582)).
- **VS Code dan SSH** — panduan sambungan VS Code diperjelas dan kandungan skrip SSH ditambah ([`#12613`](https://github.com/1Panel-dev/1Panel/pull/12613)).

### Terminal

- **Ketinggian terminal terbenam** — pelarasan susun atur mengurangkan skrol luaran tambahan ([`#12630`](https://github.com/1Panel-dev/1Panel/pull/12630)).

### Panel Settings

- **IPv6 dan SSL tandatangan sendiri** — HTTPS panel dengan sijil tandatangan sendiri apabila pelayan dicapai melalui IPv6 ([`#12652`](https://github.com/1Panel-dev/1Panel/pull/12652)).

## Bug Fixes

| Kawasan | Pembetulan |
|---|---|
| **Overview** | Memuatkan carta pemantauan laman utama dengan normal ([`#12591`](https://github.com/1Panel-dev/1Panel/pull/12591)). |
| **Overview** | Paparan widget memo dalam beberapa persekitaran bahasa ([`#12629`](https://github.com/1Panel-dev/1Panel/pull/12629)). |
| **App Store** | Anak panah perbandingan dipulihkan pada paparan diff naik taraf apl ([`#12663`](https://github.com/1Panel-dev/1Panel/pull/12663)). |
| **Websites** | Peraturan lencong menyokong domain wildcard ([`#12625`](https://github.com/1Panel-dev/1Panel/pull/12625)). |
| **Containers** | Proses Docker dibersihkan selepas masa tamat muat turun log ([`#12607`](https://github.com/1Panel-dev/1Panel/pull/12607)). |
| **Containers** | Butang dialog betul selepas menyimpan perubahan orkestrasi (Compose) ([`#12631`](https://github.com/1Panel-dev/1Panel/pull/12631)). |
| **Containers** | Pengesanan perkhidmatan Docker pada Arch Linux diperbetulkan ([`#12651`](https://github.com/1Panel-dev/1Panel/pull/12651)). |
| **File Browser** | Menu konteks editor dan penapisan dalam kes tepi ([`#12612`](https://github.com/1Panel-dev/1Panel/pull/12612)). |
| **File Browser** | Jenis pulangan API perkhidmatan fail diperbetulkan ([`#12648`](https://github.com/1Panel-dev/1Panel/pull/12648)). |
| **Multi-Node** | Nod anak boleh menggunakan sambungan hos nod utama semula ([`#12659`](https://github.com/1Panel-dev/1Panel/pull/12659)). |
| **Website Monitoring** | Gesaan pemantauan laman web sepadan apabila OpenResty tidak berjalan. |
| **System** | Isihan lajur jadual dipulihkan ([`#12658`](https://github.com/1Panel-dev/1Panel/pull/12658)). |

## How to Upgrade

Klik butang `Update` di penjuru kanan bawah pada papan pemuka.

Baru mengenali 1Panel? Lawati [1panel.pro](https://1panel.pro/).

## Source

Nota keluaran penuh: [1Panel v2.1.11 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.11)
