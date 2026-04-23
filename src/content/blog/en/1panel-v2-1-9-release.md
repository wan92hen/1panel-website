---
title: "1Panel v2.1.9 Released: Hermes Agent, MongoDB Management, and File History"
description: "1Panel v2.1.9 adds Hermes Agent support, MongoDB management, and File History, plus enhancements across Agents, File Browser, Containers, and AWS S3 compatibility updates."
pubDate: 2026-04-23
updatedDate: 2026-04-23
tags:
  - 1Panel
  - Release Notes
  - Hermes Agent
  - MongoDB
  - File Browser
  - OpenClaw
  - AWS S3
---

1Panel v2.1.9 is now available. This release introduces three new capabilities across Agents, Databases, and File Browser workflows, followed by targeted improvements and five bug fixes focused on day-to-day reliability.

## Table of Contents

- [Highlights](#highlights)
- [New Features](#new-features)
- [Enhancements](#enhancements)
- [Bug Fixes](#bug-fixes)
- [How to Upgrade](#how-to-upgrade)

---

## Highlights

- **Hermes Agent support** in the Agents module, expanding local AI agent deployment options
- **MongoDB management** integrated into the Databases interface alongside MySQL, PostgreSQL, and Redis
- **File History tracking** in File Browser for recoverable file changes and safer collaboration
- **OpenClaw channel bot workflow improvements** to reduce setup friction
- **Improved AWS S3 compatibility** for object storage integrations and custom endpoint setups

---

## New Features

### Agents

**Hermes Agent support** is now available in the Agents module. This expands the in-panel AI agent ecosystem beyond OpenClaw and gives teams another option for local, controllable AI deployment in server environments.

### Databases

**MongoDB management** is now integrated directly into 1Panel. You can create, monitor, and operate MongoDB instances from the same Databases interface used for MySQL, PostgreSQL, and Redis.

### File Browser

**File History management** is now built into File Browser. File changes made through the panel are tracked, making it easier to recover from accidental overwrites and maintain an auditable operation trail.

---

## Enhancements

### Agents
- **Website unbinding** — Agents can now be cleanly unbound from websites without manual intervention.
- **OpenClaw channel bot workflow** — The process for adding bots to OpenClaw channels has been streamlined, reducing the number of steps required during initial configuration.

### App Store
- **Compose file change detection** — The logic that detects changes in app Compose files has been rewritten to reduce false positives and missed updates during app lifecycle management.

### File Browser
- **Stop compression tasks** — You can now cancel an in-progress compression job mid-run, which matters for large archives on resource-constrained servers.
- **Dockerfile syntax support** — The built-in file editor now recognizes Dockerfile as a language, with appropriate syntax highlighting.
- **Configurable request headers for file sharing** — File sharing links now support optional custom header configuration, improving compatibility in localized or proxied environments.
- **Metadata validation** — File and recycle bin services now perform stricter metadata validation, reducing edge-case data integrity issues.

### Containers
- **Data handling and status sync** — Container data processing and status synchronization logic has been revised to handle edge cases more reliably, particularly for containers with rapid lifecycle transitions.

### Panel Settings
- **AWS S3 compatibility** — Object storage connections to AWS S3 (and compatible endpoints like MinIO and Backblaze B2) are now more stable, with improved handling of non-standard configurations.

### System
- **Table styles** — System-wide table UI has been polished for improved readability across different screen densities.

### Websites
- **Name badge styles** — Website name badges in the management interface have been restyled for cleaner visual hierarchy.

---

## Bug Fixes

| Area | Fix |
|---|---|
| **Runtime** | Fixed a bug where the runtime environment directory remained editable while an edit session was active, allowing unintended path changes. |
| **File Browser** | Fixed an issue where files shared via QR code could not be downloaded by recipients. |
| **Firewall** | Fixed a bug preventing users from modifying firewall rule descriptions after creation. |
| **Firewall** | Fixed an abnormal listening status display on the Firewall page that showed incorrect port states. |
| **Tamper Protection** | Fixed translation errors affecting several non-English locales in the Tamper module. |

---

## How to Upgrade

Simply click the 'Update' button in the lower right corner on your 1Panel dashboard.

New to 1Panel? Visit [1panel.pro](https://1panel.pro/) to get started.

---

## Source

Full release notes: [1Panel v2.1.9 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.9)
