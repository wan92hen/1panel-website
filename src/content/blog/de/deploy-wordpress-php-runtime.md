---
title: WordPress mit der 1Panel-PHP-Laufzeit bereitstellen
description: OpenResty und MySQL installieren, PHP-Laufzeit anlegen, WordPress deployen, Domain einbinden und HTTPS mit ACME in 1Panel aktivieren.
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

Diese Anleitung führt durch die Bereitstellung einer WordPress-Site mit **1Panels PHP-Laufzeit** — inklusive OpenResty, MySQL, Domain und HTTPS. 1Panel ist ein modernes Linux-Serverpanel mit durchgängigem Workflow für PHP-Anwendungen.

Mit **PHP-Laufzeit-Verwaltung** erhalten Sie:

- **Mehrere PHP-Versionen** — z. B. 5.6, 7.x, 8.0–8.3 (je nach Unterstützung), passend zur Anwendung.
- **Erweiterungen** — gängige Extensions (mysqli, gd, curl, zip, mbstring) über die Oberfläche.
- **Feintuning** — Upload-Limits, Speicher, Laufzeit, deaktivierte Funktionen ohne manuelles `php.ini`.

## Voraussetzungen

1. Linux-Server mit **öffentlicher IP** (z. B. Cloud-VPS).
2. **1Panel** installiert und im Browser erreichbar.
3. **Domain** mit DNS-Zugriff.
4. Firewall: **HTTP (80)** und **HTTPS (443)** freigegeben.

## Schritt 1 — Laufzeit-Stack installieren

### 1.1 OpenResty

OpenResty ist die Web-Plattform für Sites in 1Panel (Nginx + Lua).

1. In 1Panel anmelden.
2. **App Store** öffnen.
3. **OpenResty** suchen, mit Standardoptionen installieren.

![OpenResty-Installation](/blog/install-openresty.png)

### 1.2 MySQL

WordPress braucht eine Datenbank; MySQL ist üblich.

1. Im **App Store** **MySQL** installieren.
2. Warten auf Abschluss.

![MySQL-Installation](/blog/install-mysql.png)

### 1.3 PHP-Laufzeit anlegen

1. **Websites** → **PHP-Laufzeit**.
2. **PHP** wählen → **Laufzeit erstellen**.
3. Name, PHP-Version (z. B. **PHP 8.4**).
4. **Erweiterungsvorlage** — z. B. **WordPress** für typische Extensions.
5. Bestätigen und warten.

![PHP-Laufzeit erstellen](/blog/create-php-runtime.png)

## Schritt 2 — Website anlegen

### 2.1 Site an PHP-Laufzeit binden

1. **Websites** → **Website erstellen**.
2. **Laufzeit** → erstellte PHP-Laufzeit wählen.
3. **Name**, **Primärdomain** (z. B. `www.example.com`), **Alias** (Verzeichnisname).
4. Optional als **Standard-Site** für diese IP.

![Website erstellen](/blog/create-website.png)

![Standard-Website](/blog/default-website.png)

### 2.2 Kurztest

Server-**IP** im Browser öffnen — erscheint PHP-Info, sind Laufzeit und Site korrekt verbunden.

![Test-Website](/blog/test-website.png)

## Schritt 3 — WordPress

### 3.1 Paket laden und entpacken

1. **Dokumentenroot** der Site öffnen.
2. **Remote-Download** — `https://wordpress.org/latest.zip`.
3. Entpacken; oft entsteht ein Unterordner `wordpress`.
4. In den Site-Einstellungen **Laufzeitverzeichnis** auf `wordpress` setzen, **Speichern und neu laden**.

![Site-Root](/blog/install-wordpress-1.png)

![WordPress herunterladen](/blog/install-wordpress-2.png)

![WordPress herunterladen](/blog/install-wordpress-3.png)

![Entpacken](/blog/install-wordpress-4.png)

![Laufzeitverzeichnis ändern](/blog/modify-website-runtime-directory.png)

### 3.2 Datenbank

1. **Datenbanken** → **Datenbank erstellen** (MySQL).
2. Name, Benutzer, Passwort notieren.
3. **Verbindungsinformationen** für den WordPress-Installer.

![Datenbank erstellen](/blog/create-database.png)

![Verbindungsinformationen](/blog/database-connection-information.png)

### 3.3 Installer

1. Browser zur IP/Domain — WordPress-Assistent.
2. Sprache, Datenbankdaten aus der vorherigen Schritt.
3. Seitentitel, Admin-Benutzer abschließen.

![WordPress-Setup](/blog/setup-wordpress-1.png)

![WordPress-Setup](/blog/setup-wordpress-2.png)

![WordPress-Setup](/blog/setup-wordpress-3.png)

## Schritt 4 — Domain

### 4.1 DNS

Beim DNS-Provider (z. B. Cloudflare):

- **A**-Record für `@` oder `www` auf die öffentliche IP.
- Sinnvolles TTL (z. B. 600 s).

![DNS-Record](/blog/dns-record.png)

### 4.2 Prüfen

Domain im Browser — WordPress-Startseite sichtbar.

![DNS prüfen](/blog/verify-dns-record.png)

## Schritt 5 — HTTPS

### 5.1 ACME-Konto

1. **Zertifikat** → **ACME-Konten verwalten**.
2. E-Mail, Kontotyp, Schlüsselalgorithmus — Konto erstellen.

![ACME-Konto](/blog/acme-account.png)

### 5.2 DNS-Provider (DNS-01)

1. **DNS-Provider verwalten**.
2. Anbieter wählen (z. B. Tencent Cloud) und API-Zugang hinterlegen.

![DNS-Provider](/blog/dns-provider.png)

### 5.3 Zertifikat ausstellen

1. **Antrag** — Primärdomain, ACME-Konto, **DNS-Validierung**, Provider.
2. Warten bis ausgestellt.

![SSL beantragen](/blog/apply-ssl-certificate.png)

### 5.4 HTTPS an die Site

1. Site-Einstellungen → **SSL**.
2. Zertifikat wählen, HTTPS erzwingen optional.
3. Speichern.

![HTTPS aktivieren](/blog/enable-https.png)

`https://ihre-domain` prüfen.

![HTTPS verifiziert](/blog/verify-https.png)

## Links

- [1Panel-Dokumentation](https://1panel.pro/docs/)
- [1Panel-Diskussionen](https://github.com/1Panel-dev/1Panel/discussions)

---

*Hinweis: Anleitung orientiert sich an aktuellen 1Panel-Versionen; für Details immer offizielle Dokumentation und Community.*
