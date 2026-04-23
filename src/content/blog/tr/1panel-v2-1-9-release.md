---
title: "1Panel v2.1.9 yayinlandi: Hermes Agent, MongoDB yonetimi ve dosya gecmisi"
description: "1Panel v2.1.9, Hermes Agent destegi, entegre MongoDB yonetimi ve dosya gecmisi ozelligi getiriyor; Agents, File Browser, Containers ve S3 uyumlulugunda da iyilestirmeler sunuyor."
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

1Panel v2.1.9 kullanima sunuldu. Bu surum, Agents, Databases ve File Browser modullerinde uc yeni ozellik getirirken, operasyonel kararliligi artiran iyilestirmeler ve bes hata duzeltmesi de iceriyor.

## Highlights

- Agents modulu icin **Hermes Agent** destegi
- Databases arayuzunde **MongoDB yonetimi**
- File Browser'da **dosya gecmisi** takibi
- OpenClaw kanal botu ekleme akisi sadeleştirildi
- AWS S3 ve uyumlu endpoint baglantilarinda daha iyi stabilite

## New Features

### Agents
1Panel artik **Hermes Agent** destekliyor ve yerel AI agent kurulum seceneklerini genisletiyor.

### Databases
**MongoDB**, MySQL/PostgreSQL/Redis ile ayni ekranda yonetilebilir hale geldi.

### File Browser
**File History** ile dosya degisiklikleri izlenebilir ve geri alinabilir.

## Enhancements

- Agents: web sitesi bagi temiz sekilde kaldirilabiliyor, OpenClaw kanal botu akisi kolaylastirildi
- App Store: Compose degisiklik algilama mantigi guclendirildi
- File Browser: sikistirma gorevi iptali, Dockerfile dil destegi, paylasimda ozel header, metadata dogrulamasi iyilestirmeleri
- Containers: veri isleme ve durum senkronizasyonu guclendirildi
- Panel Settings: AWS S3 uyumlulugu artirildi
- System/Websites: tablo ve isim rozeti gorunumu iyilestirildi

## Bug Fixes

| Area | Fix |
|---|---|
| Runtime | Aktif duzenleme sirasinda runtime dizininin degistirilebilmesi sorunu duzeltildi |
| File Browser | QR ile paylasilan dosyalarin indirilememesi sorunu duzeltildi |
| Firewall | Kural aciklamalarinin sonradan duzenlenememesi sorunu duzeltildi |
| Firewall | Listening durumu gostergesi hatasi duzeltildi |
| Tamper Protection | Coklu dil ceviri hatalari duzeltildi |

## How to Upgrade

Panelin sag alt kosesindeki `Update` dugmesine tiklayin.

1Panel'e yeniyseniz: [1panel.pro](https://1panel.pro/)

## Source

Tam surum notlari: [1Panel v2.1.9 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.9)
