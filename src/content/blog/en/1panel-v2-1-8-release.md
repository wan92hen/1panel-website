---
title: "1Panel v2.1.8 Released: AI File Search, Agent Role Management, and File Link Sharing"
description: "1Panel v2.1.8 adds AI-powered file search, shareable file links, agent role management, multi-account channel support, Bark alerts, vLLM status sync, and 2FA suspicious IP protection."
pubDate: 2026-04-10
updatedDate: 2026-04-10
tags:
  - 1Panel
  - Release Notes
  - AI Search
  - Agent
  - File Browser
  - OpenClaw
  - vLLM
  - Security
---

1Panel v2.1.8 was officially released on April 10, 2026. This release delivers a major expansion of the Agents module — adding role-based access control, multi-account channel support, and website binding — alongside two highly requested File Browser features: AI-powered search and shareable file links. Security hardening, vLLM improvements, and a wave of stability fixes round out the update.

## Table of Contents

- [Highlights](#highlights)
- [New Features](#new-features)
- [Enhancements](#enhancements)
- [Bug Fixes](#bug-fixes)
- [How to Upgrade](#how-to-upgrade)

---

## Highlights

- **AI File Search** in the File Browser: find any file on your server using natural language queries
- **File Link Sharing**: generate shareable links directly from the File Browser — no third-party tools needed
- **Agent Role Management**: define and assign roles across your AI agents for team-level access control
- **Multi-Account Channel Support**: connect multiple accounts to a single agent channel (QQ, Feishu, DingTalk, Discord, and more)
- **Agent Website Binding**: bind agents directly to specific websites managed in 1Panel
- **Bark Alert Channel**: add Bark as a push notification destination for panel alerts
- **Suspicious IP Protection for 2FA**: block unusual IP addresses during two-factor authentication login
- **vLLM Status Sync**: keep vLLM inference server state in sync with the panel in real time

---

## New Features

### File Browser

**AI Search** ([`#12415`](https://github.com/1panel-dev/1panel/pull/12415)) brings natural language file lookup to the server. Instead of remembering exact paths or filenames, describe the file you're looking for and the panel finds it.

**File Link Sharing** ([`#12453`](https://github.com/1panel-dev/1panel/pull/12453)) lets you generate direct download links for any file from the File Browser UI. Useful for sharing build artifacts, config backups, or log files without setting up a separate file server.

### Agents

**Role Management** ([`#12364`](https://github.com/1panel-dev/1panel/pull/12364)) adds a dedicated role system to the Agents module. You can now create named roles with specific permissions and assign them to agent configurations — a critical step for teams running multiple agents on shared infrastructure.

**Multi-Account Channel Support** ([`#12369`](https://github.com/1panel-dev/1panel/pull/12369)) removes the one-account-per-channel limit. A single channel (e.g. Feishu or QQ) can now be connected to multiple accounts, which is useful for organizations that separate agents by team or environment.

**Website Binding** ([`#12413`](https://github.com/1panel-dev/1panel/pull/12413)) connects an agent to a specific website configured in 1Panel. When an agent needs to operate in the context of a web property — for example, an OpenClaw agent answering questions about a hosted site — this binding makes the relationship explicit and manageable.

**Agent Remarks** ([`#12361`](https://github.com/1panel-dev/1panel/pull/12361)) add a free-text notes field to each agent, so you can document its purpose, configuration context, or owner without external documentation.

**ClawHub China Mirror** ([`#12396`](https://github.com/1panel-dev/1panel/pull/12396)) adds a domestic mirror of the ClawHub skill marketplace, improving skill download reliability for users in mainland China.

### App Store

A **unified external port access switch** ([`#12426`](https://github.com/1panel-dev/1panel/pull/12426)) gives you a single toggle to control whether apps installed via the App Store are accessible on their external ports. Previously this required per-app configuration.

### Panel Settings

**Bark Alert Channel** ([`#12338`](https://github.com/1panel-dev/1panel/pull/12338)) adds Bark — a popular iOS push notification service for self-hosters — as a supported alert destination alongside existing channels like email and webhooks.

---

## Enhancements

### Agents and OpenClaw

- OpenClaw plugin setup options are now more granular, with backup model configuration support ([`#12386`](https://github.com/1panel-dev/1panel/pull/12386)) so agents can fall back to a secondary model if the primary is unavailable
- OpenClaw plugin uninstallation and upgrades are now supported directly from the panel ([`#12373`](https://github.com/1panel-dev/1panel/pull/12373))
- QQ and Feishu channels have been migrated to their respective official plugins (`#12369`), improving compatibility and long-term stability
- DingTalk channel settings for OpenClaw are now more configurable ([`#12440`](https://github.com/1panel-dev/1panel/pull/12440))
- The model-related menu structure has been reorganized for faster navigation ([`#12407`](https://github.com/1panel-dev/1panel/pull/12407))
- Default model configuration has been updated to reflect current recommended models ([`#12403`](https://github.com/1panel-dev/1panel/pull/12403))
- API call stability improvements reduce intermittent failures in high-frequency agent workflows ([`#12443`](https://github.com/1panel-dev/1panel/pull/12443))

### Models

- Model pull logs now display with cleaner formatting ([`#12414`](https://github.com/1panel-dev/1panel/pull/12414)), making it easier to track progress when pulling large LLMs like Qwen or DeepSeek
- vLLM status sync logic ensures the panel accurately reflects the running state of local inference servers

### Security

- **Suspicious IP protection for 2FA** ([`#12365`](https://github.com/1panel-dev/1panel/pull/12365)): the panel now detects and blocks login attempts from unusual IP addresses during the two-factor authentication flow
- Auth lock handling and login feedback have been improved so users see clear, actionable messages when accounts are locked ([`#12377`](https://github.com/1panel-dev/1panel/pull/12377))
- Login security checks and panel entrance access flow have been hardened ([`#12378`](https://github.com/1panel-dev/1panel/pull/12378))

### File Browser and SSH

- File operation stability improvements reduce the chance of interrupted transfers or failed writes under load ([`#12358`](https://github.com/1panel-dev/1panel/pull/12358))
- SSH config file editing experience is now smoother with better in-panel validation ([`#12398`](https://github.com/1panel-dev/1panel/pull/12398))

### Websites and Runtime

- The OpenResty Other Settings page has a cleaner layout ([`#12429`](https://github.com/1panel-dev/1panel/pull/12429))
- OpenClaw website deletion now has stronger validation to prevent accidental removal of bound resources ([`#12433`](https://github.com/1panel-dev/1panel/pull/12433))
- Website binding configuration has been simplified ([`#12435`](https://github.com/1panel-dev/1panel/pull/12435))
- Node.js runtime script selection is now more reliable ([`#12431`](https://github.com/1panel-dev/1panel/pull/12431))

### System

- AI Terminal update flow is more seamless ([`#12409`](https://github.com/1panel-dev/1panel/pull/12409))
- Code editor loading speed has been improved ([`#12401`](https://github.com/1panel-dev/1panel/pull/12401))
- Dialog display and interaction behavior is more consistent across the panel ([`#12400`](https://github.com/1panel-dev/1panel/pull/12400))
- Internationalization copy has been updated across all supported languages ([`#12350`](https://github.com/1panel-dev/1panel/pull/12350))

---

## Bug Fixes

- **Overview**: Fixed abnormal delta values in the monitoring charts ([`#12402`](https://github.com/1panel-dev/1panel/pull/12402))
- **Agents**: Fixed incorrect OpenClaw Discord channel configuration ([`#12456`](https://github.com/1panel-dev/1panel/pull/12456))
- **Certificates**: Fixed a bug in automatic certificate renewal logic that caused renewals to fail in some edge cases ([`#12430`](https://github.com/1panel-dev/1panel/pull/12430))
- **Panel Settings**: Fixed an issue where proxy health checks continued running after the proxy was disabled ([`#12388`](https://github.com/1panel-dev/1panel/pull/12388))
- **Panel Settings**: Fixed a flow where users could not navigate back to the login page when 2FA required a CAPTCHA ([`#12438`](https://github.com/1panel-dev/1panel/pull/12438))

---

## How to Upgrade

Simply click the 'Update' button in the lower right corner.

New to 1Panel? Visit [1panel.pro](https://1panel.pro/) to get started.

---

## Source

Full release notes: [1Panel v2.1.8 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.8)
