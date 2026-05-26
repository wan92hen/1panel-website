---
title: "1Panel v2.1.13 yayinlandi: model indirici, File Browser ve Runtime duzeltmeleri"
description: "1Panel v2.1.13 model indirici ekler, File Browser dosya gecmisi, dizin boyutu ve secim islemlerini iyilestirir, yukseltmede disk alani kontrol eder ve Runtime, yol, lisans ve anlik goruntu sorunlarini duzeltir."
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

1Panel v2.1.13 kullanima sunuldu. Surum; yerlesik model indirici, File Browser ve yukseltme akisi iyilestirmeleri ile Runtime ortamlari ve panel ayarlari icin duzeltmeler icerir.

## Highlights

- **Model indirici** — Models modulunden panelden cikmadan model indirin ve yonetin
- **File Browser** — Dosya gecmisi hatalari daha net, dizin boyutu hesabi optimize ve eszamanlilik kontrollu, secim islemleri daha akici
- **Daha guvenli yukseltme** — Yukseltme oncesi kalan disk alani kontrol edilir
- **Runtime** — Ortam olusturma basarisiz oldugunda proje dizinleri silinmez; host eslemeleri yeniden kaldirilabilir
- **Panel ayarlari** — Lisans yeniden baglama ve anlik goruntu kurtarma iyilestirildi

## New Features

### Models

- **Model indirici** — Modelleri dogrudan 1Panel icinde indirin ([`#12694`](https://github.com/1Panel-dev/1Panel/pull/12694)).

## Enhancements

### File Browser

- **Dosya gecmisi hatalari** — Gecmis icerigi yuklerken hata isleme iyilestirildi ([`#12736`](https://github.com/1Panel-dev/1Panel/pull/12736)).
- **Dizin boyutu** — Hesaplama mantigi eszamanlilik kontrolu ile optimize edildi ([`#12737`](https://github.com/1Panel-dev/1Panel/pull/12737)).
- **Secim UX** — Dosya yonetimi arayuzu ve secim islemleri iyilestirildi ([`#12740`](https://github.com/1Panel-dev/1Panel/pull/12740)).

### Panel Settings

- **Lisans yeniden baglama** — Cesitli senaryolarda mantik iyilestirildi ([`#12778`](https://github.com/1Panel-dev/1Panel/pull/12778)).

### System

- **Yukseltme disk kontrolu** — Devam etmeden once bos alan dogrulanir ([`#12708`](https://github.com/1Panel-dev/1Panel/pull/12708)).

## Bug Fixes

| Alan | Duzeltme |
|---|---|
| **Runtime** | Ortam olusturma basarisiz oldugunda proje dizinleri yanlislikla silinmiyor ([`#12756`](https://github.com/1Panel-dev/1Panel/pull/12756)). |
| **Runtime** | Runtime host eslemeleri yeniden silinebiliyor ([`#12779`](https://github.com/1Panel-dev/1Panel/pull/12779)). |
| **File Browser** | Var olmayan dizin yuklenirken beklenmeyen hatalar olusmuyor ([`#12744`](https://github.com/1Panel-dev/1Panel/pull/12744)). |
| **Panel Settings** | Anlik goruntu kurtarma onceki basarisiz senaryolarda duzeltildi ([`#12777`](https://github.com/1Panel-dev/1Panel/pull/12777)). |

## How to Upgrade

Kontrol panelinde sag alttaki `Update` dugmesine tiklayin.

1Panel'e yeni misiniz? [1panel.pro](https://1panel.pro/) adresine bakin.

## Source

Tam surum notlari: [1Panel v2.1.13 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.13)
