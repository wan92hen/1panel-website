---
title: "1Panel ile VPS uzerinde MongoDB nasil yonetilir?"
description: "1Panel'de MongoDB adim adim: App Store kurulumu, veritabani olusturma, baglanti bilgileri, entegre mongosh terminali, backup/restore ve remote sunucu yonetimi."
pubDate: 2026-04-24
updatedDate: 2026-04-24
tags:
  - 1Panel
  - MongoDB
  - Database
  - VPS
  - Self-hosted
---

1Panel ile MongoDB'nin VPS uzerindeki tum isletim dongusunu tek bir arayuzden yurutebilirsiniz: kurulum, olusturma, baglanti, sorgu, yedekleme ve geri yukleme.

## 1Panel ile neler yapabilirsiniz

- **App Store** uzerinden MongoDB kurulumu
- Yetkili veritabani ve kullanici olusturma
- Tarayici icinde **mongosh** kullanimi
- Uygulama baglanti bilgilerinin goruntulenmesi
- Backup/restore ve zamanlanmis gorevler
- Remote MongoDB instance yonetimi

## On kosullar

- 1Panel kurulu ve erisilebilir
- MongoDB icin yeterli RAM
- Image indirmek icin internet erisimi

## Adim 1: App Store'dan MongoDB kurun

**App Store** acin, **Database** filtresini secin, **MongoDB** bulun ve **Install** tiklayin.

![1Panel App Store - Install MongoDB](/blog/install-mongodb.png)

Temel alanlar:

| Alan | Aciklama |
|---|---|
| Name | Instance kimligi (`mongodb` varsayilan) |
| Version | Kurulacak MongoDB surumu |
| Username / Password | Ilk erisim bilgileri |
| Port | Varsayilan `27017` |
| External Access | Sadece gerekliyse acin |
| Restart Policy | Production icin genelde `always` |

Sonra **Confirm**.

## Adim 2: MongoDB veritabani olusturun

**Databases** -> **MongoDB** sayfasinda **Create** tiklayin.

![1Panel - Create MongoDB Database](/blog/create-db-mongodb.png)

Su alanlari doldurun:

- **Name**
- **Username**
- **Password**
- **Change Permissions**
- **Description** (opsiyonel)

**Confirm** ile kaydedin.

## Adim 3: Baglanti bilgisini goruntuleyin

**Connection** uzerinden host, port ve credentials bilgilerini alin.

Format:

`mongodb://username:password@host:27017/databasename`

## Adim 4: Entegre terminali kullanin

**Terminal** tiklayarak `mongosh` acin.

![1Panel - MongoDB Built-in Terminal](/blog/terminal-mongodb.png)

Ornekler:

```javascript
show databases
use testdb
show collections
db.users.find({ active: true }).limit(10)
db.adminCommand({ serverStatus: 1 })
```

## Adim 5: Backup ve restore

Veritabani listesinde backup aksiyonunu acin.

![1Panel - MongoDB Backup Management](/blog/backup-mongodb.png)

- **Back up**: snapshot olusturur
- **Restore**: snapshot'tan geri yukler
- **Settings** -> **Backup Accounts**: bulut hedeflerini baglar
- **Cron Jobs**: otomatik yedekleme planlar

## Adim 6: Remote sunuculari yonetin

**Remote server** ile dis MongoDB instance ekleyin.

Panel disi degisikliklerde **Sync from server** ile UI durumunu esitleyin.

## Guvenlik onerileri

- MongoDB'yi dogrudan internete acmayi minimumda tutun
- Firewall izinlerini bilinen kaynaklarla sinirlayin
- VPN/tunnel gibi ozel erisim yollarini tercih edin
- Kimlik bilgilerini duzenli dondurun ve off-site yedek tutun

## Hizli kontrol listesi

- Instance saglikli durumda
- Baglanti URI'si test edildi
- En az bir restore testi yapildi
- Erisim kurallari guvenlik baseline'inizla uyumlu

## Ozet

1Panel, VPS uzerinde MongoDB operasyonlarini tek bir UI'da sadeleştirir.

Baslangic icin [1panel.pro](https://1panel.pro/).
