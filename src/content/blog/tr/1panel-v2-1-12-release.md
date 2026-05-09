---
title: "1Panel v2.1.12 yayinlandi: Overview iyilestirmeleri, File Browser duzeltmeleri ve OpenWRT"
description: "1Panel v2.1.12 ana sayfa izleme grafiklerini iyilestirir, not duzenlerken karusel duraklamasini duzeltir, File Browser ZIP cikarma ve ust dizin izinlerini guclendirir, alt dugum terminallerini ve OpenWRT yukseltmelerini stabilize eder."
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

1Panel v2.1.12 kullanima sunuldu. Surum; Overview deneyimini inceltir ve File Browser, alt dugum terminalleri ile OpenWRT uzerindeki yukseltmeler icin odakli guvenilirlik duzeltmeleri getirir.

## Highlights

- **Izleme grafikleri** — Ana sayfa izleme grafikleri daha net okunur
- **Not duzenleme** — Notlar duzenlenirken ana sayfa karuseli dogru sekilde durur
- **File Browser kararliligi** — Daha guvenli ZIP cikarma, cikarma ve yukleme sonrasi ust dizin izinlerinin korunmasi, cok buyuk ikili dosya tasimasi icin duzeltme
- **Alt dugum terminalleri** — Alt dugum terminallerinde varsayilan host baglantilari yeniden beklenen davranista
- **OpenWRT yukseltmeleri** — OpenWRT tabanli kurulumlarda panel yukseltmeleri tamamlanir

## Enhancements

### Overview

- **Izleme grafigi gorunumu** — Ana sayfa izleme grafiklerinin duzeni ve okunabilirligi iyilestirildi ([`#12673`](https://github.com/1Panel-dev/1Panel/pull/12673)).

## Bug Fixes

| Alan | Duzeltme |
|---|---|
| **Overview** | Notlar duzenlenirken ana sayfa karuseli artik duruyor ([`#12680`](https://github.com/1Panel-dev/1Panel/pull/12680)). |
| **File Browser** | Bazi ZIP arsivlerinin acilmasi beklenmedik sekilde basarisiz olmuyor ([`#12684`](https://github.com/1Panel-dev/1Panel/pull/12684)). |
| **File Browser** | Arsiv cikarildiktan sonra ust dizin izinleri degismiyor ([`#12684`](https://github.com/1Panel-dev/1Panel/pull/12684)). |
| **File Browser** | Cok buyuk ikili dosyalari tasimak sunucuyu erisilemez yapmiyor ([`#12683`](https://github.com/1Panel-dev/1Panel/pull/12683)). |
| **File Browser** | Dosya yuklemelerinden sonra ust dizin izinleri korunuyor ([`#12672`](https://github.com/1Panel-dev/1Panel/pull/12672)). |
| **Terminal** | Alt dugum terminalleri dogru varsayilan host baglantilarini kullaniyor ([`#12676`](https://github.com/1Panel-dev/1Panel/pull/12676)). |
| **System** | OpenWRT uzerinde 1Panel yukseltmeleri yeniden calisiyor ([`#12670`](https://github.com/1Panel-dev/1Panel/pull/12670)). |

## How to Upgrade

Kontrol panelinde sag alttaki `Update` dugmesine tiklayin.

1Panel'e yeni misiniz? [1panel.pro](https://1panel.pro/) adresine bakin.

## Source

Tam surum notlari: [1Panel v2.1.12 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.12)
