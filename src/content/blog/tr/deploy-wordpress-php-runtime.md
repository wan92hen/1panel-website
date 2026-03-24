---
title: 1Panel PHP çalışma ortamıyla WordPress’i dağıtma
description: OpenResty ve MySQL kurulumu, PHP çalışma ortamı oluşturma, WordPress dağıtımı, alan adı bağlama ve 1Panel’de ACME ile HTTPS’i etkinleştirme adımları.
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

Bu öğretici, **1Panel PHP çalışma ortamı** ile WordPress sitesi yayınlamayı anlatır; OpenResty, MySQL, alan adı ve HTTPS dahildir. 1Panel, PHP uygulamaları barındırmak için modern bir Linux sunucu yönetim panelidir.

1Panel’de **PHP çalışma ortamı yönetimi** ile şunları yapabilirsiniz:

- **Birden fazla PHP sürümü** — PHP 5.6, 7.x, 8.0–8.3 (ve desteklenen yeni sürümler), uygulamanıza göre seçim.
- **Uzantı yönetimi** — mysqli, gd, curl, zip, mbstring gibi uzantıları arayüzden kurun.
- **Görsel ayarlar** — yükleme limiti, bellek, çalışma süresi, devre dışı fonksiyonlar; `php.ini` düzenlemeden.

## Ön koşullar

Başlamadan önce şunlara sahip olun:

1. **Genel IP** adresli bir Linux sunucusu (ör. bulut VPS).
2. Tarayıcıdan erişilebilen **1Panel**.
3. DNS kayıtlarını yönetebileceğiniz bir **alan adı**.
4. Güvenlik duvarında **HTTP (80)** ve **HTTPS (443)** izinleri.

## Adım 1 — Çalışma zamanı yığınını kurun

### 1.1 OpenResty kurulumu

OpenResty, 1Panel’in site yönetiminde kullandığı; Nginx ve Lua ile modüllere dayalı web platformudur.

1. 1Panel’e giriş yapın.
2. **Uygulama Mağazası**’nı açın.
3. **OpenResty**’yi bulun, varsayılanları koruyun ve kurun.

![OpenResty kurulumu](/blog/install-openresty.png)

### 1.2 MySQL kurulumu

WordPress veritabanı gerektirir; MySQL yaygındır.

1. **Uygulama Mağazası**’nda **MySQL**’i bulun.
2. Varsayılanlarla kurun ve bitmesini bekleyin.

![MySQL kurulumu](/blog/install-mysql.png)

### 1.3 PHP çalışma ortamı oluşturma

WordPress PHP üzerinde çalışır; özel bir çalışma ortamı oluşturun.

1. **Web siteleri** → **PHP çalışma ortamı**’na gidin.
2. **PHP** seçin ve **Çalışma ortamı oluştur**’a tıklayın.
3. Ad verin ve PHP sürümünü seçin (bu örnekte güncel **PHP 8.4**).
4. **Uzantı şablonu** olarak **WordPress** seçin; tema/eklenti için ek uzantı ekleyin.
5. Onaylayın ve hazır olana kadar bekleyin.

![PHP çalışma ortamı](/blog/create-php-runtime.png)

## Adım 2 — Web sitesi oluşturun

### 2.1 PHP çalışma ortamına bağlı site

1. **Web siteleri** → **Web sitesi oluştur**’u açın.
2. **Çalışma ortamı** seçin ve oluşturduğunuz PHP ortamını belirleyin.
3. Doldurun:
   - **Ad** — görünen ad.
   - **Birincil alan adı** — örn. `www.example.com`.
   - **Takma ad** — dizin adı (genelde alan adıyla aynı).
4. İsteğe bağlı: bu IP için **varsayılan site** yapın.

![Site oluştur](/blog/create-website.png)

![Varsayılan site](/blog/default-website.png)

### 2.2 Hızlı test

Tarayıcıda sunucu **IP**’sine gidin. PHP ortam bilgisi görünüyorsa bağlantı doğrudur.

![Site testi](/blog/test-website.png)

## Adım 3 — WordPress’i dağıtın

### 3.1 WordPress indir ve çıkar

1. Arayüzden sitenin **belge kökünü** açın.
2. **Uzak indirme** ile `https://wordpress.org/latest.zip` alın.
3. Kök dizine çıkarın; genelde `wordpress` alt klasörüne düşer.
4. Site ayarlarında **çalışma zamanı dizinini** `wordpress` yapın ve **Kaydet ve yeniden yükle**.

![Site kökü](/blog/install-wordpress-1.png)

![WordPress indir](/blog/install-wordpress-2.png)

![WordPress indir](/blog/install-wordpress-3.png)

![WordPress çıkar](/blog/install-wordpress-4.png)

![Çalışma dizini](/blog/modify-website-runtime-directory.png)

### 3.2 Veritabanı oluştur

1. **Veritabanları**’nı açın.
2. MySQL altında **Veritabanı oluştur**’a tıklayın.
3. Ad, kullanıcı ve parola belirleyin (parolayı kaydedin).
4. Sonra **Bağlantı bilgisi** ile host, port, DB adı, kullanıcı ve parolayı yükleyiciye yazın.

![Veritabanı oluştur](/blog/create-database.png)

![Bağlantı bilgisi](/blog/database-connection-information.png)

### 3.3 WordPress kurulum sihirbazı

1. Tekrar sunucu IP’sine gidin; kurulum sihirbazı görünmeli.
2. Dil seçin, önceki adımdaki DB bilgilerini girin ve gönderin.
3. site başlığı, yönetici kullanıcı vb. tamamlayın.

![WordPress kurulum](/blog/setup-wordpress-1.png)

![WordPress kurulum](/blog/setup-wordpress-2.png)

![WordPress kurulum](/blog/setup-wordpress-3.png)

## Adım 4 — Alan adını yönlendirin

### 4.1 DNS kayıtları

DNS sağlayıcınızda (Cloudflare, Alibaba Cloud vb.):

- `@` veya `www` için **A kaydı** ile sunucu genel IP’sini gösterin.
- TTL makul olsun (ör. 600 sn).

![DNS kaydı](/blog/dns-record.png)

### 4.2 Çözümlemeyi doğrulayın

Tarayıcıda **alan adınızı** açın. WordPress ana sayfası yükleniyorsa DNS doğrudur.

![DNS doğrula](/blog/verify-dns-record.png)

## Adım 5 — HTTPS’i etkinleştirin

### 5.1 ACME hesabı oluştur

1. **Sertifika** yönetimini açın.
2. **ACME hesaplarını yönet**’e gidin.
3. E-posta, hesap türü ve anahtar algoritması seçip hesap oluşturun.

![ACME hesabı](/blog/acme-account.png)

### 5.2 DNS sağlayıcı yapılandır (DNS-01)

1. **DNS sağlayıcıları yönet**’i açın.
2. Sağlayıcıyı (ör. Tencent Cloud) seçin ve API kimlik bilgilerini girin.

![DNS sağlayıcı](/blog/dns-provider.png)

### 5.3 Sertifika al

1. Sertifika sayfasında **Başvur**’a tıklayın.
2. Birincil alan adı, ACME hesabı, **DNS doğrulaması** ve yapılandırılmış DNS hesabı.
3. Sertifikanın yayınlanmasını bekleyin.

![SSL başvurusu](/blog/apply-ssl-certificate.png)

### 5.4 Siteye HTTPS bağla

1. Site ayarlarını açın.
2. **SSL** altında HTTPS’i açın, sertifikayı seçin ve istenirse **HTTPS’e zorla yönlendir**’i açın.
3. Kaydedin.

![HTTPS etkin](/blog/enable-https.png)

`https://alan-adiniz` ile TLS’i doğrulayın.

![HTTPS doğrulandı](/blog/verify-https.png)

## İlgili bağlantılar

- [1Panel dokümantasyonu](https://docs.1panel.pro/)
- [1Panel topluluk forumu](https://github.com/1Panel-dev/1Panel/discussions)

---

*Bu rehber güncel 1Panel sürümlerine dayanır. En güncel davranış için resmi belgelere ve topluluğa bakın.*
