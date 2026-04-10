---
title: "1Panel v2.1.8 Yayınlandı: AI Dosya Arama, Agent Rol Yönetimi ve Dosya Linki Paylaşımı"
description: "1Panel v2.1.8 ile AI destekli dosya arama, paylaşılabilir dosya linkleri, agent rol yönetimi, çoklu hesap kanal desteği, Bark bildirimleri, vLLM durum senkronizasyonu ve 2FA için şüpheli IP koruması geldi."
pubDate: 2026-04-10
updatedDate: 2026-04-10
tags:
  - 1Panel
  - Sürüm Notları
  - AI Search
  - Agent
  - Security
---

1Panel v2.1.8, 10 Nisan 2026 tarihinde resmi olarak yayınlandı. Bu sürüm, Agents modülünü önemli ölçüde genişletiyor (rol yönetimi, çoklu hesap kanalları, web sitesi bağlama), Dosya Yöneticisine AI arama ve link paylaşımı getiriyor, ayrıca güvenlik ve kararlılığı güçlendiriyor.

## Öne Çıkanlar

- Dosya Yöneticisinde doğal dille **AI dosya arama**
- Dosya Yöneticisinden doğrudan **dosya linki paylaşımı**
- Ekip erişim kontrolü için **agent rol yönetimi**
- **Çoklu hesap kanal desteği** (QQ, Feishu, DingTalk, Discord vb.)
- **Agent web sitesi bağlama**
- **Bark bildirim kanalı**
- 2FA akışında **şüpheli IP koruması**
- **vLLM durum senkronizasyonu**

## Yeni Özellikler

### Dosya Yöneticisi

- **AI Search** ([`#12415`](https://github.com/1panel-dev/1panel/pull/12415)): Tam yol veya dosya adı bilmeden, doğal dil ile dosya bulun.
- **File Link Sharing** ([`#12453`](https://github.com/1panel-dev/1panel/pull/12453)): Dosyalar için doğrudan indirme bağlantısı oluşturun.

### Agents

- **Role Management** ([`#12364`](https://github.com/1panel-dev/1panel/pull/12364)): Yetkili roller tanımlayın ve agent yapılandırmalarına atayın.
- **Multi-Account Channel Support** ([`#12369`](https://github.com/1panel-dev/1panel/pull/12369)): Tek kanala birden fazla hesap bağlayın.
- **Website Binding** ([`#12413`](https://github.com/1panel-dev/1panel/pull/12413)): Agent'ı 1Panel'de yönetilen belirli bir web sitesine bağlayın.
- **Agent Remarks** ([`#12361`](https://github.com/1panel-dev/1panel/pull/12361)): Her agent için amaç/sahip bilgisini tutacak serbest not alanı.
- **ClawHub China Mirror** ([`#12396`](https://github.com/1panel-dev/1panel/pull/12396)): Çin anakarasında skill indirme güvenilirliği artırıldı.

### App Store

- **Birleşik dış port erişim anahtarı** ([`#12426`](https://github.com/1panel-dev/1panel/pull/12426)): Uygulamaların dış port erişimini tek noktadan yönetin.

### Panel Ayarları

- **Bark Alert Channel** ([`#12338`](https://github.com/1panel-dev/1panel/pull/12338)): Bark, push bildirim hedefi olarak eklendi.

## İyileştirmeler

### Agents ve OpenClaw

- OpenClaw eklenti kurulumunda daha ayrıntılı seçenekler, yedek model desteği ([`#12386`](https://github.com/1panel-dev/1panel/pull/12386))
- OpenClaw eklenti kaldırma ve yükseltme panelden destekleniyor ([`#12373`](https://github.com/1panel-dev/1panel/pull/12373))
- QQ ve Feishu, resmi eklentilere taşındı ([`#12369`](https://github.com/1panel-dev/1panel/pull/12369))
- DingTalk kanal ayarları daha esnek hale getirildi ([`#12440`](https://github.com/1panel-dev/1panel/pull/12440))
- Model menü yapısı yeniden düzenlendi ([`#12407`](https://github.com/1panel-dev/1panel/pull/12407))
- Varsayılan model yapılandırması güncellendi ([`#12403`](https://github.com/1panel-dev/1panel/pull/12403))
- Yoğun agent iş akışlarında API kararlılığı artırıldı ([`#12443`](https://github.com/1panel-dev/1panel/pull/12443))

### Modeller

- Model çekme günlükleri daha okunabilir ([`#12414`](https://github.com/1panel-dev/1panel/pull/12414))
- vLLM durum senkronizasyon mantığı iyileştirildi

### Güvenlik

- 2FA sırasında şüpheli IP engelleme ([`#12365`](https://github.com/1panel-dev/1panel/pull/12365))
- Kimlik doğrulama kilidi ve giriş geri bildirimi iyileştirildi ([`#12377`](https://github.com/1panel-dev/1panel/pull/12377))
- Giriş güvenliği ve panel erişim akışı güçlendirildi ([`#12378`](https://github.com/1panel-dev/1panel/pull/12378))

### Dosya Yöneticisi ve SSH

- Yük altında dosya işlemlerinde kararlılık iyileştirildi ([`#12358`](https://github.com/1panel-dev/1panel/pull/12358))
- SSH yapılandırma dosyası düzenlemede doğrulama geliştirildi ([`#12398`](https://github.com/1panel-dev/1panel/pull/12398))

### Web Siteleri ve Runtime

- OpenResty Other Settings sayfa düzeni sadeleştirildi ([`#12429`](https://github.com/1panel-dev/1panel/pull/12429))
- OpenClaw web sitesi silmede doğrulama güçlendirildi ([`#12433`](https://github.com/1panel-dev/1panel/pull/12433))
- Web sitesi bağlama yapılandırması sadeleştirildi ([`#12435`](https://github.com/1panel-dev/1panel/pull/12435))
- Node.js runtime script seçimi daha güvenilir hale geldi ([`#12431`](https://github.com/1panel-dev/1panel/pull/12431))

### Sistem

- AI Terminal güncelleme akışı iyileştirildi ([`#12409`](https://github.com/1panel-dev/1panel/pull/12409))
- Kod editörü yükleme hızı artırıldı ([`#12401`](https://github.com/1panel-dev/1panel/pull/12401))
- Diyalog görüntüleme/etkileşim davranışı daha tutarlı ([`#12400`](https://github.com/1panel-dev/1panel/pull/12400))
- Tüm desteklenen dillerde i18n metinleri güncellendi ([`#12350`](https://github.com/1panel-dev/1panel/pull/12350))

## Hata Düzeltmeleri

- **Overview**: İzleme grafiklerindeki anormal delta değerleri düzeltildi ([`#12402`](https://github.com/1panel-dev/1panel/pull/12402))
- **Agents**: OpenClaw Discord kanal yapılandırma hatası düzeltildi ([`#12456`](https://github.com/1panel-dev/1panel/pull/12456))
- **Certificates**: Otomatik sertifika yenileme mantığındaki hata düzeltildi ([`#12430`](https://github.com/1panel-dev/1panel/pull/12430))
- **Panel Settings**: Proxy kapatıldıktan sonra health check'in çalışmaya devam etmesi düzeltildi ([`#12388`](https://github.com/1panel-dev/1panel/pull/12388))
- **Panel Settings**: 2FA + CAPTCHA durumunda giriş sayfasına dönememe sorunu düzeltildi ([`#12438`](https://github.com/1panel-dev/1panel/pull/12438))

## Nasıl Yükseltilir

Sağ alt köşedeki "Update" düğmesine tıklamanız yeterli.

1Panel'e yeni misiniz? [1panel.pro](https://1panel.pro/) adresinden başlayın.

## Kaynak

- Tam sürüm notları: [GitHub'da 1Panel v2.1.8](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.8)

