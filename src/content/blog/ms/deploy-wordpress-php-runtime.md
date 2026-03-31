---
title: Melaksanakan WordPress dengan runtime PHP 1Panel
description: Pelajari cara memasang OpenResty dan MySQL, mencipta runtime PHP, melaksanakan WordPress, mengikat domain, dan mendayakan HTTPS dengan ACME pada 1Panel.
pubDate: 2025-03-15
updatedDate: 2025-03-15
heroImage: /blog/setup-wordpress-1.png
tags:
  - PHP
  - WordPress
  - 1Panel
  - OpenResty
  - SSL
  - MySQL
---

Tutorial ini menerangkan cara melaksanakan tapak WordPress menggunakan **runtime PHP 1Panel**, termasuk OpenResty, MySQL, domain dan HTTPS. 1Panel ialah panel pelayan Linux moden yang menyediakan aliran lengkap untuk menghos aplikasi PHP.

Dengan **pengurusan runtime PHP** dalam 1Panel anda boleh:

- **Pelbagai versi PHP** — PHP 5.6, 7.x, 8.0–8.3 (dan versi baharu yang disokong), mengikut keperluan aplikasi.
- **Pengurusan sambungan** — Pasang mysqli, gd, curl, zip, mbstring dan lain-lain melalui UI.
- **Penalaan visual** — Had muat naik, memori, masa pelaksanaan, fungsi dilumpuhkan, tanpa mengedit `php.ini` secara manual.

## Syarat awal

Sebelum mula, pastikan anda mempunyai:

1. Pelayan Linux dengan **IP awam** (contohnya VPS awan).
2. **1Panel** dipasang dan boleh diakses dalam pelayar.
3. **Domain** yang anda kawal untuk rekod DNS.
4. Peraturan firewall membenarkan **HTTP (80)** dan **HTTPS (443)**.

## Langkah 1 — Pasang tindanan runtime

### 1.1 Pasang OpenResty

OpenResty ialah platform web yang 1Panel gunakan untuk pengurusan tapak, berasaskan Nginx dengan Lua dan modul.

1. Log masuk ke 1Panel.
2. Buka **Kedai Aplikasi**.
3. Cari **OpenResty**, kekalkan lalai dan pasang.

![Pasang OpenResty](/blog/install-openresty.png)

### 1.2 Pasang MySQL

WordPress memerlukan pangkalan data; MySQL ialah pilihan biasa.

1. Dalam **Kedai Aplikasi**, cari **MySQL**.
2. Pasang dengan lalai dan tunggu selesai.

![Pasang MySQL](/blog/install-mysql.png)

### 1.3 Cipta runtime PHP

WordPress berjalan pada PHP, jadi cipta runtime khusus.

1. Pergi ke **Laman web** → **Runtime PHP**.
2. Pilih **PHP** dan klik **Cipta runtime**.
3. Tetapkan nama dan versi PHP (contoh ini menggunakan **PHP 8.4** terkini).
4. Untuk **templat sambungan**, pilih **WordPress** dan tambah sambungan lain jika perlu.
5. Sahkan dan tunggu siap.

![Cipta runtime PHP](/blog/create-php-runtime.png)

## Langkah 2 — Cipta laman web

### 2.1 Cipta tapak terikat pada runtime PHP

1. Buka **Laman web** → **Cipta laman web**.
2. Pilih **Runtime** dan pilih runtime PHP yang anda cipta.
3. Isi:
   - **Nama** — nama paparan.
   - **Domain utama** — contoh `www.example.com`.
   - **Alias** — nama direktori (selalunya sama dengan domain).
4. Pilihan: tetapkan sebagai **tapak lalai** untuk IP tersebut.

![Cipta laman](/blog/create-website.png)

![Tapak lalai](/blog/default-website.png)

### 2.2 Ujian pantas

Lawati **IP** pelayan dalam pelayar. Jika maklumat persekitaran PHP dipaparkan, tapak dan runtime bersambung dengan betul.

![Uji tapak](/blog/test-website.png)

## Langkah 3 — Laksanakan WordPress

### 3.1 Muat turun dan ekstrak WordPress

1. Buka **akar dokumen** tapak dari UI.
2. Gunakan **muat turun jauh** untuk `https://wordpress.org/latest.zip`.
3. Ekstrak di akar. Biasanya fail berada dalam `wordpress`.
4. Dalam tetapan tapak, tetapkan **direktori runtime** kepada `wordpress`, kemudian **Simpan dan muat semula**.

![Akar tapak](/blog/install-wordpress-1.png)

![Muat turun WordPress](/blog/install-wordpress-2.png)

![Muat turun WordPress](/blog/install-wordpress-3.png)

![Ekstrak WordPress](/blog/install-wordpress-4.png)

![Tukar direktori runtime](/blog/modify-website-runtime-directory.png)

### 3.2 Cipta pangkalan data

1. Buka **Pangkalan data**.
2. Di bawah MySQL, klik **Cipta pangkalan data**.
3. Tetapkan nama, pengguna dan kata laluan (simpan kata laluan).
4. Selepas cipta, buka **Maklumat sambungan** untuk hos, port, nama DB, pengguna dan kata laluan pemasang.

![Cipta pangkalan data](/blog/create-database.png)

![Maklumat sambungan](/blog/database-connection-information.png)

### 3.3 Jalankan pemasang WordPress

1. Lawati semula IP pelayan dan pastikan wizard pemasangan muncul.
2. Pilih bahasa, masukkan butiran DB dan hantar.
3. Lengkapkan tajuk tapak, pentadbir, dll.

![WordPress setup](/blog/setup-wordpress-1.png)

![WordPress setup](/blog/setup-wordpress-2.png)

![WordPress setup](/blog/setup-wordpress-3.png)

## Langkah 4 — Halakan domain

### 4.1 Tambah rekod DNS

Di penyedia DNS (Cloudflare, Alibaba Cloud, dll.):

- Cipta rekod **A** untuk `@` atau `www` ke IP awam pelayan.
- TTL munasabah (contoh 600 saat).

![Rekod DNS](/blog/dns-record.png)

### 4.2 Sahkan penguraian

Buka **domain** dalam pelayar. Jika halaman utama WordPress dimuatkan, DNS betul.

![Sahkan DNS](/blog/verify-dns-record.png)

## Langkah 5 — Dayakan HTTPS

### 5.1 Cipta akaun ACME

1. Buka pengurusan **Sijil**.
2. Pergi ke **Urus akaun ACME**.
3. Tambah e-mel, jenis akaun dan algoritma kunci, cipta akaun.

![Akaun ACME](/blog/acme-account.png)

### 5.2 Konfigurasi penyedia DNS (DNS-01)

1. Buka **Urus penyedia DNS**.
2. Pilih penyedia (contoh Tencent Cloud) dan masukkan API.

![Penyedia DNS](/blog/dns-provider.png)

### 5.3 Keluarkan sijil

1. Di halaman sijil, klik **Mohon**.
2. Domain utama, akaun ACME, **pengesahan DNS** dan akaun DNS yang dikonfigurasi.
3. Tunggu sijil dikeluarkan.

![Mohon sijil SSL](/blog/apply-ssl-certificate.png)

### 5.4 Pasang HTTPS pada tapak

1. Buka tetapan tapak.
2. Di bawah **SSL**, dayakan HTTPS, pilih sijil, dan **paksa HTTPS** jika mahu.
3. Simpan.

![Dayakan HTTPS](/blog/enable-https.png)

Lawati `https://domain-anda` dan sahkan TLS.

![HTTPS disahkan](/blog/verify-https.png)

## Pautan berkaitan

- [Dokumentasi 1Panel](https://1panel.pro/docs/)
- [Forum komuniti 1Panel](https://github.com/1Panel-dev/1Panel/discussions)

---

*Panduan ini berdasarkan keluaran 1Panel terkini. Untuk tingkah laku terkini, rujuk dokumentasi rasmi dan komuniti.*
