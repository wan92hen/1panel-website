---
title: 1Panel v2.1.2 Released with Stronger Agent Support
description: 1Panel v2.1.2 adds CoPaw agent type support, Telegram and Discord channels, installed-app sorting, terminal appearance customization, and multiple stability fixes.
pubDate: 2026-03-06
updatedDate: 2026-03-06
tags:
  - 1Panel
  - Release Notes
  - Agent
  - App Store
  - Terminal
---

1Panel v2.1.2 was officially released on March 4, 2026, with updates across the App Store, Agent, Website, Container, File, and System modules.

## New Features

- App Store: support sorting for installed applications.
- Agent: support creating CoPaw-type agents.
- Agent: add Telegram channel support.
- Agent: add Discord channel support.
- Agent: support browser configuration.
- Agent: support timezone configuration.
- Agent: Ollama account supports API type selection.
- Agent: add Z.ai model account support.
- Agent: add Ark Coding Plan model account support.
- Agent: add Alibaba Cloud Bailian Coding Plan model account support.
- Agent: add `anthropic-messages` API type for custom model accounts.
- Certificate: DNS account supports Technitium.
- Terminal: support custom fonts.
- Terminal: support custom foreground and background colors.
- Panel Settings: support switching panel running region.

## Improvements

- App Store: optimized remote app sync logic and installed app card styles.
- Agent: improved model account creation flow and mapping preservation.
- Website: improved domain handling and proxy/log processing.
- Website: main domain supports wildcard-based certificate requests.
- Database: support one-click copy of full connection URL.
- Container: improved compose layout, log viewer, log download, and `extra_hosts` support.
- File: improved file manager layout, unzip flow, and remembered last opened file.
- Monitoring and panel settings: improved hints, passkey login, and refresh prompts.
- System: optional sorting parameters for APIs, caching enhancements, SQLite config and command optimizations, plus security updates.

## Bug Fixes

- App Store: fixed partial app restore failures and README rendering issues.
- Website: fixed sub-site restart issues and reverse-proxy operations under special configs.
- Database: fixed startup failures after app restore in specific scenarios.
- Container: fixed compose creation failures in some cases.
- File: fixed compressed file preview exceptions.
- Terminal: fixed extra blank lines after terminal setting changes.
- Website monitoring: fixed date-based request log search failures in specific scenarios.
- Audit logs: fixed abnormal login log recording in some cases.

## Source

- Original announcement: [智能体支持能力持续增强，应用商店体验升级，1Panel v2.1.2版本发布](https://blog.fit2cloud.com/?p=019cc34b-3a17-774d-8198-c4707b4cf898)
