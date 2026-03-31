---
title: 1Panel PHP 런타임으로 WordPress 배포하기
description: OpenResty와 MySQL 설치, PHP 런타임 생성, WordPress 배포, 도메인 연결, 1Panel에서 ACME로 HTTPS까지 설정하는 방법을 안내합니다.
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

이 튜토리얼에서는 **1Panel의 PHP 런타임**을 사용해 WordPress 사이트를 배포하는 과정을 설명합니다. OpenResty, MySQL, 도메인, HTTPS까지 다룹니다. 1Panel은 PHP 애플리케이션 호스팅을 위한 현대적인 Linux 서버 관리 패널입니다.

1Panel의 **PHP 런타임 관리**에서는 다음을 사용할 수 있습니다.

- **여러 PHP 버전** — PHP 5.6, 7.x, 8.0–8.3(및 지원되는 최신 버전)으로 애플리케이션에 맞게 선택합니다.
- **확장 관리** — mysqli, gd, curl, zip, mbstring 등 일반 확장을 UI에서 설치·설정합니다.
- **시각적 튜닝** — `php.ini`를 직접 수정하지 않고 업로드 한도, 메모리, 실행 시간, 비활성 함수 등을 조정합니다.

## 사전 요구 사항

시작하기 전에 다음을 준비하세요.

1. **공인 IP**가 있는 Linux 서버(클라우드 VPS 등).
2. 브라우저에서 접속 가능한 **1Panel**.
3. DNS를 관리할 수 있는 **도메인**.
4. 방화벽에서 **HTTP(80)** 및 **HTTPS(443)** 허용.

## 1단계 — 런타임 스택 설치

### 1.1 OpenResty 설치

OpenResty는 1Panel이 사이트 관리에 사용하는 웹 플랫폼으로, Nginx와 Lua 및 모듈을 결합한 것입니다.

1. 1Panel에 로그인합니다.
2. **앱 스토어**를 엽니다.
3. **OpenResty**를 찾아 기본값으로 설치합니다.

![OpenResty 설치](/blog/install-openresty.png)

### 1.2 MySQL 설치

WordPress에는 데이터베이스가 필요하며 MySQL이 일반적입니다.

1. **앱 스토어**에서 **MySQL**을 찾습니다.
2. 기본값으로 설치하고 완료될 때까지 기다립니다.

![MySQL 설치](/blog/install-mysql.png)

### 1.3 PHP 런타임 생성

WordPress는 PHP에서 실행되므로 전용 런타임을 만듭니다.

1. **웹사이트** → **PHP 런타임**으로 이동합니다.
2. **PHP**를 선택하고 **런타임 생성**을 클릭합니다.
3. 이름을 지정하고 PHP 버전을 선택합니다(예: 최신 **PHP 8.4**).
4. **확장 템플릿**에서 **WordPress**를 선택하고 테마·플러그인에 필요한 확장을 추가합니다.
5. 확인 후 생성이 끝날 때까지 기다립니다.

![PHP 런타임 생성](/blog/create-php-runtime.png)

## 2단계 — 웹사이트 생성

### 2.1 PHP 런타임에 연결된 사이트 만들기

1. **웹사이트** → **웹사이트 만들기**를 엽니다.
2. **런타임**을 선택하고 방금 만든 PHP 런타임을 지정합니다.
3. 다음을 입력합니다.
   - **이름** — 표시 이름.
   - **기본 도메인** — 예: `www.example.com`.
   - **별칭** — 디렉터리 이름(보통 도메인과 동일).
4. 필요 시 해당 IP의 **기본 사이트**로 설정합니다.

![웹사이트 생성](/blog/create-website.png)

![기본 웹사이트](/blog/default-website.png)

### 2.2 동작 확인

브라우저에서 서버 **IP**로 접속합니다. PHP 환경 정보가 보이면 사이트와 런타임이 올바르게 연결된 것입니다.

![사이트 테스트](/blog/test-website.png)

## 3단계 — WordPress 배포

### 3.1 WordPress 다운로드 및 압축 해제

1. UI에서 사이트 **문서 루트**를 엽니다.
2. **원격 다운로드**로 `https://wordpress.org/latest.zip`을 받습니다.
3. 루트에 압축을 풉니다. 보통 `wordpress` 하위 폴더에 풀립니다.
4. 사이트 설정에서 **런타임 디렉터리**를 `wordpress`로 설정하고 **저장 후 다시 로드**합니다.

![사이트 루트](/blog/install-wordpress-1.png)

![WordPress 다운로드](/blog/install-wordpress-2.png)

![WordPress 다운로드](/blog/install-wordpress-3.png)

![WordPress 압축 해제](/blog/install-wordpress-4.png)

![런타임 디렉터리 변경](/blog/modify-website-runtime-directory.png)

### 3.2 데이터베이스 생성

1. **데이터베이스**를 엽니다.
2. MySQL에서 **데이터베이스 만들기**를 클릭합니다.
3. DB 이름, 사용자 이름, 비밀번호를 설정합니다(비밀번호는 저장).
4. 생성 후 **연결 정보**에서 호스트, 포트, DB 이름, 사용자, 비밀번호를 확인해 인스톨러에 사용합니다.

![데이터베이스 생성](/blog/create-database.png)

![연결 정보](/blog/database-connection-information.png)

### 3.3 WordPress 설치 마법사 실행

1. 다시 서버 IP로 접속해 설치 마법사가 나타나는지 확인합니다.
2. 언어를 선택하고 이전 단계의 DB 정보를 입력해 제출합니다.
3. 사이트 제목, 관리자 계정 등을 입력해 완료합니다.

![WordPress 설정](/blog/setup-wordpress-1.png)

![WordPress 설정](/blog/setup-wordpress-2.png)

![WordPress 설정](/blog/setup-wordpress-3.png)

## 4단계 — 도메인 연결

### 4.1 DNS 레코드 추가

DNS 공급자(Cloudflare, Alibaba Cloud 등)에서:

- `@` 또는 `www`에 대한 **A 레코드**를 서버 공인 IP로 지정합니다.
- TTL은 적절히(예: 600초).

![DNS 레코드](/blog/dns-record.png)

### 4.2 확인

브라우저에서 **도메인**을 엽니다. WordPress 첫 화면이 보이면 DNS가 올바릅니다.

![DNS 확인](/blog/verify-dns-record.png)

## 5단계 — HTTPS 활성화

### 5.1 ACME 계정 만들기

1. **인증서** 관리를 엽니다.
2. **ACME 계정 관리**로 이동합니다.
3. 이메일, 계정 유형, 키 알고리즘을 선택하고 계정을 만듭니다.

![ACME 계정](/blog/acme-account.png)

### 5.2 DNS 공급자 설정(DNS-01)

1. **DNS 공급자 관리**를 엽니다.
2. 공급자(예: Tencent Cloud)를 선택하고 API 자격 증명을 입력합니다.

![DNS 공급자](/blog/dns-provider.png)

### 5.3 인증서 발급

1. 인증서 페이지에서 **신청**을 클릭합니다.
2. 기본 도메인, ACME 계정, **DNS 검증**, 구성한 DNS 계정을 지정합니다.
3. 발급이 완료될 때까지 기다립니다.

![SSL 인증서 신청](/blog/apply-ssl-certificate.png)

### 5.4 사이트에 HTTPS 적용

1. 사이트 설정을 엽니다.
2. **SSL**에서 HTTPS를 켜고 새 인증서를 선택하며, 필요하면 **HTTPS 강제 리디렉션**을 켭니다.
3. 저장합니다.

![HTTPS 활성화](/blog/enable-https.png)

`https://your-domain`으로 접속해 TLS를 확인합니다.

![HTTPS 확인](/blog/verify-https.png)

## 관련 링크

- [1Panel 문서](https://1panel.pro/docs/)
- [1Panel 커뮤니티](https://github.com/1Panel-dev/1Panel/discussions)

---

*이 가이드는 배포 시점의 1Panel을 기준으로 합니다. 최신 동작은 공식 문서와 커뮤니티를 참고하세요.*
