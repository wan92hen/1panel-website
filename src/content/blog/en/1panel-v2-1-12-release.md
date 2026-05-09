---
title: "1Panel v2.1.12 Released: Overview polish, File Browser fixes, and OpenWRT upgrades"
description: "1Panel v2.1.12 improves homepage monitoring charts, fixes memo carousel behavior, hardens File Browser zip handling and directory permissions, stabilizes child-node terminals, and restores upgrades on OpenWRT."
pubDate: 2026-05-09
updatedDate: 2026-05-09
tags:
  - 1Panel
  - Release Notes
  - Overview
  - File Browser
  - Terminal
  - Multi-Node
  - OpenWRT
---

1Panel v2.1.12 is now available. This release refines the Overview experience and delivers focused reliability fixes for File Browser, child-node terminals, and upgrades on OpenWRT.

## Table of Contents

- [Highlights](#highlights)
- [Enhancements](#enhancements)
- [Bug Fixes](#bug-fixes)
- [How to Upgrade](#how-to-upgrade)

---

## Highlights

- **Overview charts** — Homepage monitoring charts render more clearly for at-a-glance system insight
- **Memo editing UX** — The homepage carousel pauses correctly while you edit memos, so content stays readable
- **File Browser stability** — Safer zip extraction, preserved parent directory permissions after extract and upload, and a fix for large binary moves that could disrupt panel connectivity
- **Child-node terminals** — Default host connections for terminals on child nodes behave as expected again
- **OpenWRT upgrades** — Panel upgrades complete successfully on OpenWRT-based deployments

---

## Enhancements

### Overview

- **Monitoring chart display** — The homepage monitoring chart presentation has been tuned for clearer layout and readability ([`#12673`](https://github.com/1Panel-dev/1Panel/pull/12673)).

---

## Bug Fixes

| Area | Fix |
|---|---|
| **Overview** | The homepage carousel now pauses while memos are being edited ([`#12680`](https://github.com/1Panel-dev/1Panel/pull/12680)). |
| **File Browser** | Decompression for certain ZIP archives no longer fails unexpectedly ([`#12684`](https://github.com/1Panel-dev/1Panel/pull/12684)). |
| **File Browser** | Parent directory permissions are no longer altered after extracting archives ([`#12684`](https://github.com/1Panel-dev/1Panel/pull/12684)). |
| **File Browser** | Moving very large binary files no longer risks taking the server offline ([`#12683`](https://github.com/1Panel-dev/1Panel/pull/12683)). |
| **File Browser** | Parent directory permissions stay intact after file uploads ([`#12672`](https://github.com/1Panel-dev/1Panel/pull/12672)). |
| **Terminal** | Child node terminals use correct default host connections ([`#12676`](https://github.com/1Panel-dev/1Panel/pull/12676)). |
| **System** | 1Panel upgrades work again on OpenWRT ([`#12670`](https://github.com/1Panel-dev/1Panel/pull/12670)). |

---

## How to Upgrade

Simply click the 'Update' button in the lower right corner on your 1Panel dashboard.

New to 1Panel? Visit [1panel.pro](https://1panel.pro/) to get started.

---

## Source

Full release notes: [1Panel v2.1.12 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.12)
