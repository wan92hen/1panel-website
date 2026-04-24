---
title: "1Panel ile sunucuda Hermes Agent nasil kurulur?"
description: "Nous Research Hermes Agent: bellek ve beceri odakli, kendini gelistiren AI. 1Panel'de Model Accounts ve Agents ile kurulum, WebUI erisimi ve uretim ayarlari."
pubDate: 2026-04-24
updatedDate: 2026-04-24
tags:
  - 1Panel
  - Hermes Agent
  - AI Agent
  - Deployment
  - Self-hosted
---

## Hermes Agent nedir?

**Hermes Agent**, [Nous Research](https://nousresearch.com/) tarafindan gelistirilen kendini gelistiren bir AI ajandir. **Yerlesik ogrenme dongusu** sayesinde kullanimdan **beceri uretip gelistirebilir**, **uzun sureli bellek** tutabilir, **gecmis oturumlari** cagirabilir ve birden fazla gorusme boyunca kullaniciyi daha iyi anlayabilir.

**Tek bir dizustu cihaza bagli degildir**. **VPS**, **GPU kumesi** ve benzeri ortamlarda calisabilir; **komut satiri**, **WebUI** veya **mesajlasma kanallari** uzerinden kullanilabilir.

1Panel ile kurulumda, **tarayici tabanli WebUI** uzerinden **yapilandirma** ve **API key** yonetimi yapabilir; **calisma durumu** ve **oturum bilgilerini** panelden gorebilirsiniz. 1Panel'de ana akis **AI -> Agents** ve **Model Accounts** etrafinda ilerler.

## Neden Hermes Agent icin 1Panel?

**Model kimlik bilgileri**, **ajan tanimi** (tip, surum, port, model) ve **WebUI girisi** tek bir is akisinda toplanir. Boylece daginik script bagimliligi azalir, operasyon daha tekrar edilebilir hale gelir.

## On kosullar

Kurulumdan once sunlari dogrulayin:

- **1Panel** kurulu ve panel erisimi var.
- Gecerli bir **LLM API key** veya 1Panel'e bagli bir **yerel model** mevcut.
- Sunucu **internete erisebiliyor** (tamamen yerel senaryo haric).

## Adim 1: Model hesabi ekleme

1. **AI** -> **Model Accounts** acin.
2. **Add Model Account** tiklayin.
3. Kullandiginiz **model saglayiciyi** secin ve gerekli alanlari doldurun.
4. Hesabi **kaydedin**.
5. Listede yeni satirin olustugunu ve dogru oldugunu kontrol edin.

![Create Model Account in 1Panel](/blog/create-model-account.png)

Birden fazla hesap/model varsa, kesin **Model Account / Model** secimi Hermes Agent olusturma ekraninda yapilir.

## Adim 2: Hermes Agent olusturma

1. **AI** -> **Agents** sayfasina gidin.
2. **Create** tiklayin.
3. **Agent Type** alanini **Hermes Agent** secin.

Formdaki temel alanlar:

| Alan | Girilecek deger |
| --- | --- |
| **Agent Type** | **Hermes Agent** |
| **Name** | Varsayilan ornek `hermes-agent`; isterseniz ozellestirin. |
| **App Version** | Kurmak istediginiz Hermes Agent surumu. |
| **Access Port / WebUI Port** | Varsayilan veya ag planiniza uygun port. |
| **Model Provider** | 1. adimda eklediginiz hesapla uyumlu saglayici. |
| **Model Account / Model** | Bu ornek icin kullanilacak hesap ve model. |
| **Other Parameters** | Genelde varsayilan birakilir; yalnizca ihtiyac varsa degistirilir. |

![Create Hermes Agent in 1Panel](/blog/create-hermes-agent.png)

Saglayici secildiginde 1Panel, ilgili **Model Accounts** kayitlarini otomatik yukler.

Birden fazla model varsa bu sayfada dogru **modeli** secin. Ek ayarlar gorurseniz ekran yonergelerini izleyin.

Gondermeden once **isim, surum, portlar ve modeli** tekrar kontrol edin.

## Adim 3: Kurulumu baslatma ve bitmesini bekleme

Tum alanlar dogruysa **Confirm** tiklayin.

Gorev calisirken **sayfadaki durum bilgisini** izleyin ve UI'da **tamamlandi** gorunene kadar bekleyin. Basarili durumdan sonra Hermes Agent deploy edilmis olur.

Hata olursa panelin gosterdiği mesaji kullanin (image pull, port cakismasi, auth, disk vb.), nedeni duzeltip yeniden deneyin.

## Adim 4: Hermes Agent WebUI acma veya TUI uzerinden sohbet

**Agents** listesine donun, Hermes Agent satirini bulun ve **WebUI** tiklayin.

**Ilk acilista** arayuz hala baslatiliyor olabilir. Kisa sure bekleyip 1-2 kez yenileyin.

WebUI uzerinden **ayarlar**, **anahtarlar** ve **oturum gorunumleri** yonetilmeye devam edilir.

Ayrica **Chat** dugmesine tiklayarak TUI uzerinden Hermes Agent ile sohbet edebilirsiniz.

![Chat with Hermes Agent in TUI](/blog/hermes-agent-tui.png)

## Adim 5: 1Panel icinde sonraki ayarlar

Ilk basarili kurulumdan sonra gercek yuklere gore ayarlari gelistirin: **model** veya hesap bagini degistirme, **erisim modelini** netlestirme (yalnizca ic ag vs herkese acik alan adi), ve form/WebUI'daki **calisma parametrelerini** duzenleme.

Servis internete aciksa temel guvenlikleri uygulayin: en az yetkili **firewall** kapsami, alan adi erisimlerinde **HTTPS**, ve **API key** bilgisini tiket/log/ekran goruntulerinde dikkatli yonetim.

## Hizli kontrol listesi

- WebUI, ilk kisa baslangic suresinden sonra stabil aciliyor.
- Basit test, **hedef model**e gidiyor.
- **Portlar** diger servislerle cakismiyor.
- Politika gerektiriyorsa **yedek/snapshot** kapsami var.

## Ozet

Hermes Agent, kendi altyapinizda calisabilen **uzun omurlu ve beceri odakli** bir ajan runtime'idir. 1Panel'de akis: **Model Accounts** -> **Agents -> Create (Hermes Agent)** -> **Confirm** -> **WebUI** -> sonrasinda **model, erisim ve parametreleri** surekli iyilestirme.

1Panel'e yeniyseniz [1panel.pro](https://1panel.pro/) ile baslayin.
