---
title: "Cara urus MongoDB di VPS dengan 1Panel"
description: "Panduan MongoDB di 1Panel: pemasangan App Store, cipta database, maklumat sambungan, terminal mongosh terbina dalam, backup/restore dan pengurusan pelayan remote."
pubDate: 2026-04-24
updatedDate: 2026-04-24
tags:
  - 1Panel
  - MongoDB
  - Database
  - VPS
  - Self-hosted
---

Dengan 1Panel, operasi MongoDB di VPS boleh dibuat dari satu dashboard: pasang, cipta database, sambung aplikasi, buat query, backup dan restore.

## Apa yang boleh dibuat dalam 1Panel

- Pasang MongoDB dari **App Store**
- Cipta database dan pengguna dengan permission
- Guna **mongosh** terbina dalam pelayar
- Semak maklumat sambungan aplikasi
- Jalankan backup/restore dan jadual automatik
- Urus instance MongoDB remote

## Prasyarat

- 1Panel telah dipasang dan boleh diakses
- RAM server mencukupi untuk setup MongoDB
- Server ada akses internet untuk tarik image

## Langkah 1: Pasang MongoDB dari App Store

Buka **App Store**, tapis **Database**, pilih **MongoDB**, klik **Install**.

![1Panel App Store - Install MongoDB](/blog/install-mongodb.png)

Medan penting:

| Medan | Panduan |
|---|---|
| Name | Pengecam instance (lalai `mongodb`) |
| Version | Versi MongoDB untuk deploy |
| Username / Password | Kredensial awal |
| Port | Lalai `27017` |
| External Access | Aktifkan hanya jika perlu |
| Restart Policy | `always` lazim untuk production |

Klik **Confirm**.

## Langkah 2: Cipta database MongoDB

Pergi ke **Databases** -> **MongoDB**, klik **Create**.

![1Panel - Create MongoDB Database](/blog/create-db-mongodb.png)

Isi:

- **Name**
- **Username**
- **Password**
- **Change Permissions**
- **Description** (opsyenal)

Klik **Confirm**.

## Langkah 3: Lihat maklumat sambungan

Klik **Connection** untuk lihat host, port dan kredensial.

Format URI:

`mongodb://username:password@host:27017/databasename`

## Langkah 4: Guna terminal terbina dalam

Klik **Terminal** untuk buka `mongosh`.

![1Panel - MongoDB Built-in Terminal](/blog/terminal-mongodb.png)

Contoh:

```javascript
show databases
use testdb
show collections
db.users.find({ active: true }).limit(10)
db.adminCommand({ serverStatus: 1 })
```

## Langkah 5: Backup dan restore

Buka aksi backup pada senarai database.

![1Panel - MongoDB Backup Management](/blog/backup-mongodb.png)

- **Back up**: cipta snapshot
- **Restore**: pulihkan snapshot
- **Settings** -> **Backup Accounts**: tambah destinasi cloud
- **Cron Jobs**: jadualkan backup automatik

## Langkah 6: Urus pelayan remote

Guna **Remote server** untuk tambah instance MongoDB luar.

Jika ada perubahan manual di luar panel, guna **Sync from server**.

## Cadangan keselamatan

- Kurangkan pendedahan port MongoDB ke internet
- Hadkan firewall kepada sumber yang diketahui
- Utamakan laluan private (VPN/tunnel)
- Putar kredensial dan simpan backup off-site

## Checklist ringkas

- Instance berjalan normal
- URI sambungan telah diuji
- Sekurang-kurangnya satu ujian restore dibuat
- Polisi akses selari dengan baseline keselamatan

## Ringkasan

1Panel memudahkan kitaran penuh operasi MongoDB di VPS dalam satu UI.

Mula di [1panel.pro](https://1panel.pro/).
