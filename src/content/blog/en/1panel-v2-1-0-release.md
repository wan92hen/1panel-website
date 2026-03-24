---
title: 1Panel v2.1.0 Released with OpenClaw Agent Management
description: 1Panel v2.1.0 introduces OpenClaw agent management, enterprise alert channels, passkey login, memo support, and broad improvements across website, app store, container, and security capabilities.
pubDate: 2026-02-13
updatedDate: 2026-02-13
tags:
  - 1Panel
  - Release Notes
  - OpenClaw
  - Passkey
  - Alerts
---

1Panel v2.1.0 was officially released on February 12, 2026, with major feature additions around AI/Agent workflows, panel settings, and system security.

## Highlights

- OpenClaw agent management is now built into 1Panel.
- Panel settings now support enterprise alert channels (WeCom, DingTalk, Feishu; X-Pack).
- Passkey login support reduces dependency on password-only sign-in.
- Overview module adds Memo capability.

## New Features

- Overview: add memo function.
- AI: add OpenClaw agent management.
- Certificate: support custom ACME account verification.
- Container: support bulk image import.
- File: support notes in file management.
- WAF (X-Pack): support export of block records.
- Panel Settings (X-Pack): support WeCom, DingTalk, and Feishu notifications.
- System: support passkey login.

## Improvements

- App Store: improved remote app update tasks, icon storage, caching, and installed app dialogs.
- Website: improved directory structure support, redirect logic, browser cache behavior, and list hierarchy display.
- Certificate: certificate request retry mechanism.
- Container: log timestamps and force-pull option during compose creation.
- File: switched file downloads to streaming to reduce memory usage.
- System and toolbox: improved API parameter checks and status checks.

## Bug Fixes

- Fixed host name cache refresh issue in Overview.
- Fixed plaintext password exposure when viewing installed app passwords.
- Fixed multiple website redirect and HTTPS-port prompt issues.
- Fixed IPv6 certificate request issues in some scenarios.
- Fixed container compose environment variable loading in some cases.
- Fixed timeout risks during bulk file/directory permission changes.
- Fixed terminal sshd process residue after terminal close on certain systems.
- Fixed scheduled task execution failures in specific scenarios.
- Fixed several X-Pack and panel setting related known issues.

## Source

- Original announcement: [支持OpenClaw智能体管理，新增企业微信、钉钉和飞书告警通知，1Panel v2.1.0版本发布](https://blog.fit2cloud.com/?p=019c5408-2593-73f0-8ed5-718d5023fb20)
