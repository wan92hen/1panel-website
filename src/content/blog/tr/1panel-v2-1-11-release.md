---
title: "1Panel v2.1.11 yayinlandi: DeepSeek V4 varsayilan, File Browser gorevleri ve duzeltmeler"
description: "1Panel v2.1.11, DeepSeek model havuzlarini V4 icin gunceller, File Browser acma ve VS Code SSH yonergelerini iyilestirir, konteyner log indirme zaman asimlarini, terminal yerlesimini, IPv6 ozel imzali SSL'i gelistirir ve on iki hata duzeltmesi icerir."
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

1Panel v2.1.11 kullanima sunuldu. Surum; Agents, File Browser, konteynerler ve panel ayarlarinda pratik iyilestirmelere odaklanir; Overview, web siteleri, coklu dugum ve diger alanlarda hata duzeltmeleri icerir.

## Highlights

- **DeepSeek V4 model havuzlari** — DeepSeek hesaplari varsayilan olarak en guncel **V4** modellerini kullanir
- **File Browser acma kontrolu** — devam eden acma islerini durdurma ve buyuk arsivler icin daha net gorev arayuzu
- **SSH uzerinden VS Code** — baglanti talimatlari netlestirildi, SSH kurulum betigi genisletildi
- **Konteyner log indirme** — zaman asimi ayarlari; zaman asimindan sonra Docker sureclerinin temizligi (Bug Fixes)
- **IPv6 panel SSL** — yalnizca IPv6 veya cift yigin sunucularda panel icin ozel imzali sertifika
- **Terminal yerlesimi** — ic yukseklik ayarlari ile gereksiz dis kaydirma cubuklari azalir

## Enhancements

### Agents

- **DeepSeek model havuzlari** — DeepSeek hesap havuzlari varsayilan olarak en son **V4** modellerini destekler ([`#12622`](https://github.com/1Panel-dev/1Panel/pull/12622)).

### Containers

- **Log indirme zaman asimlari** — konteyner log indirmesi bekleme suresi gercek ag ve disk kosullarina uyarlanir ([`#12632`](https://github.com/1Panel-dev/1Panel/pull/12632)).

### File Browser

- **Acmayi durdur** — acma gorevleri calisirken iptal edilebilir; paralel isler icin gorev listesi iyilestirildi ([`#12582`](https://github.com/1Panel-dev/1Panel/pull/12582)).
- **VS Code ve SSH** — VS Code baglanti rehberi netlestirildi, SSH betik icerigi genisletildi ([`#12613`](https://github.com/1Panel-dev/1Panel/pull/12613)).

### Terminal

- **Gomulu terminal yuksekligi** — yaygin gorunum boyutlarinda fazla dis kaydirma engellenir ([`#12630`](https://github.com/1Panel-dev/1Panel/pull/12630)).

### Panel Settings

- **IPv6 ve ozel imzali SSL** — sunucuya IPv6 uzerinden erisildiginde panel HTTPS icin ozel imzali sertifika destegi ([`#12652`](https://github.com/1Panel-dev/1Panel/pull/12652)).

## Bug Fixes

| Alan | Duzeltme |
|---|---|
| **Overview** | Ana sayfa izleme grafiklerinin yuklenmesi normale dondu ([`#12591`](https://github.com/1Panel-dev/1Panel/pull/12591)). |
| **Overview** | Bazi dil ortamlarinda not widget gorunumu duzeltildi ([`#12629`](https://github.com/1Panel-dev/1Panel/pull/12629)). |
| **App Store** | Uygulama yukseltme dosya karsilastirma sayfasindaki oklar geri geldi ([`#12663`](https://github.com/1Panel-dev/1Panel/pull/12663)). |
| **Websites** | Yonlendirme kurallari uygun oldugunda joker alan adlarini destekler ([`#12625`](https://github.com/1Panel-dev/1Panel/pull/12625)). |
| **Containers** | Log indirme zaman asimindan sonra Docker yardimci surecleri temizlenir ([`#12607`](https://github.com/1Panel-dev/1Panel/pull/12607)). |
| **Containers** | Orkestrasyon (Compose) degisiklikleri kaydedildikten sonra iletisim kutusu dugmeleri duzeltildi ([`#12631`](https://github.com/1Panel-dev/1Panel/pull/12631)). |
| **Containers** | Arch Linux altinda Docker servis algilama duzeltildi ([`#12651`](https://github.com/1Panel-dev/1Panel/pull/12651)). |
| **File Browser** | Editor baglam menusu ve filtreleme uc durumlarda duzeltildi ([`#12612`](https://github.com/1Panel-dev/1Panel/pull/12612)). |
| **File Browser** | Dosya servisi API donus turleri duzeltildi ([`#12648`](https://github.com/1Panel-dev/1Panel/pull/12648)). |
| **Multi-Node** | Alt dugumler ana dugumdeki host baglantilarini yeniden kullanabilir ([`#12659`](https://github.com/1Panel-dev/1Panel/pull/12659)). |
| **Website Monitoring** | OpenResty calismiyorken web sitesi izleme uyarilari gercek duruma uyuyor. |
| **System** | Tablo sutun siralama duzeltildi ([`#12658`](https://github.com/1Panel-dev/1Panel/pull/12658)). |

## How to Upgrade

Kontrol panelinde sag alttaki `Update` dugmesine tiklayin.

Yeni misiniz? [1panel.pro](https://1panel.pro/) adresine bakin.

## Source

Tam surum notlari: [1Panel v2.1.11 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.11)
