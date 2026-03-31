---
title: Deploy WordPress with the 1Panel PHP Runtime
description: Learn how to install OpenResty and MySQL, create a PHP runtime, deploy WordPress, point your domain, and enable HTTPS with ACME on 1Panel.
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

This tutorial walks you through deploying a WordPress site using **1Panel’s PHP runtime**—including OpenResty, MySQL, domain setup, and HTTPS. 1Panel is a modern Linux server panel that gives you a complete workflow for hosting PHP applications.

With **PHP runtime management** in 1Panel you get:

- **Multiple PHP versions** — PHP 5.6, 7.x, 8.0–8.3 (and newer as supported), so you can match your app’s requirements.
- **Extension management** — Install and configure common extensions (e.g. mysqli, gd, curl, zip, mbstring) from the UI.
- **Visual tuning** — Adjust upload limits, memory limits, execution time, disabled functions, and more without editing `php.ini` by hand.

## Prerequisites

Before you start, make sure you have:

1. A Linux server with a **public IP** (e.g. a cloud VPS).
2. **1Panel** installed and reachable in the browser.
3. A **domain** you control (for DNS records).
4. Firewall rules allowing **HTTP (80)** and **HTTPS (443)**.

## Step 1 — Install the runtime stack

### 1.1 Install OpenResty

OpenResty is the web platform 1Panel uses for site management. It builds on Nginx with Lua and extra modules.

1. Sign in to 1Panel.
2. Open **App Store**.
3. Find **OpenResty**, keep the default options, and install.

![OpenResty installation](/blog/install-openresty.png)

### 1.2 Install MySQL

WordPress needs a database; MySQL is a common choice.

1. In **App Store**, find **MySQL**.
2. Install with the defaults and wait until it finishes.

![MySQL installation](/blog/install-mysql.png)

### 1.3 Create a PHP runtime

WordPress runs on PHP, so you create a dedicated runtime:

1. Go to **Websites** → **PHP runtime**.
2. Choose **PHP** and click **Create runtime**.
3. Set a name, pick a PHP version (this example uses a recent **PHP 8.4** build).
4. For **extension template**, choose **WordPress** to pull in typical extensions; add any others your theme or plugins need.
5. Confirm and wait until the runtime is ready.

![PHP runtime creation](/blog/create-php-runtime.png)

## Step 2 — Create the website

### 2.1 Create a site bound to the PHP runtime

1. Open **Websites** → **Create website**.
2. Choose **Runtime** and select the PHP runtime you just created.
3. Fill in:
   - **Name** — display name for the site.
   - **Primary domain** — e.g. `www.example.com`.
   - **Alias** — directory name (often the same as the domain).
4. Optionally set this site as the **default site** for that IP.

![Create website](/blog/create-website.png)

![Default website](/blog/default-website.png)

### 2.2 Smoke-test the site

Visit the server **IP** in a browser. If you see PHP environment information, the site and runtime are wired correctly.

![Test website](/blog/test-website.png)

## Step 3 — Deploy WordPress

### 3.1 Download and extract WordPress

1. Open the site’s **document root** from the UI.
2. Use **remote download** to fetch the latest package from `https://wordpress.org/latest.zip`.
3. Unzip it in the root. Files usually land in a `wordpress` subdirectory.
4. In the site settings, set the **runtime directory** to `wordpress`, then **Save and reload**.

![Site root](/blog/install-wordpress-1.png)

![Download WordPress](/blog/install-wordpress-2.png)

![Download WordPress](/blog/install-wordpress-3.png)

![Extract WordPress](/blog/install-wordpress-4.png)

![Change runtime directory](/blog/modify-website-runtime-directory.png)

### 3.2 Create a database

1. Open **Databases**.
2. Under MySQL, click **Create database**.
3. Set database name, username, and password (save the password).
4. After creation, open **Connection info** and note host, port, database name, user, and password for the WordPress installer.

![Create database](/blog/create-database.png)

![Database connection info](/blog/database-connection-information.png)

### 3.3 Run the WordPress installer

1. Browse to your server IP again. You should see the WordPress setup wizard.
2. Pick a language, enter the database details from the previous step, and submit.
3. Complete site title, admin user, and final steps.

![WordPress setup](/blog/setup-wordpress-1.png)

![WordPress setup](/blog/setup-wordpress-2.png)

![WordPress setup](/blog/setup-wordpress-3.png)

## Step 4 — Point your domain

### 4.1 Add DNS records

At your DNS provider (e.g. Cloudflare, Alibaba Cloud):

- Create an **A** record for `@` or `www` pointing to your server’s public IP.
- Use a sensible TTL (e.g. 600 seconds).

![DNS record](/blog/dns-record.png)

### 4.2 Verify resolution

Open your **domain** in a browser. If the WordPress front page loads, DNS is correct.

![Verify DNS](/blog/verify-dns-record.png)

## Step 5 — Enable HTTPS

### 5.1 Create an ACME account

1. Open **Certificate** management.
2. Go to **Manage ACME accounts**.
3. Add an email, pick account type and key algorithm, and create the account.

![ACME account](/blog/acme-account.png)

### 5.2 Configure a DNS provider (for DNS-01)

1. Open **Manage DNS providers**.
2. Select your provider (Tencent Cloud is shown as an example) and enter API credentials.

![DNS provider](/blog/dns-provider.png)

### 5.3 Issue a certificate

1. On the certificate page, click **Apply**.
2. Enter the primary domain, choose the ACME account, **DNS validation**, and the DNS provider account you configured.
3. Wait until the certificate is issued.

![Apply SSL certificate](/blog/apply-ssl-certificate.png)

### 5.4 Attach HTTPS to the site

1. Open the site’s settings.
2. Under **SSL**, enable HTTPS, select the new certificate, and enable **force HTTPS** if you want HTTP → HTTPS redirects.
3. Save.

![Enable HTTPS](/blog/enable-https.png)

Visit `https://your-domain` and confirm the site loads over TLS.

![HTTPS verified](/blog/verify-https.png)

## Related links

- [1Panel documentation](https://1panel.pro/docs/)
- [1Panel community forum](https://github.com/1Panel-dev/1Panel/discussions)

---

*This guide reflects recent 1Panel releases. For the latest behavior, refer to the official docs and community.*
