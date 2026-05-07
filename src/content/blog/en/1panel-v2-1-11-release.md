---
title: "1Panel v2.1.11 Released: DeepSeek V4 defaults, File Browser tasks, and reliability fixes"
description: "1Panel v2.1.11 updates DeepSeek model pools for V4, improves File Browser decompression and VS Code SSH guidance, refines container log downloads and Terminal layout, adds IPv6 self-signed SSL, and ships twelve bug fixes."
pubDate: 2026-05-07
updatedDate: 2026-05-07
tags:
  - 1Panel
  - Release Notes
  - Agents
  - File Browser
  - Containers
  - DeepSeek
  - Multi-Node
---

1Panel v2.1.11 is now available. This release focuses on practical quality-of-life improvements across Agents, File Browser, Containers, and Panel Settings, together with a broad set of bug fixes for Overview, Websites, Multi-Node, and more.

## Table of Contents

- [Highlights](#highlights)
- [Enhancements](#enhancements)
- [Bug Fixes](#bug-fixes)
- [How to Upgrade](#how-to-upgrade)

---

## Highlights

- **DeepSeek V4 in model pools** — DeepSeek model accounts now default to the latest V4 models in the model pool configuration
- **File Browser decompression control** — Stop in-progress decompression jobs and a clearer task management UI for long-running archive work
- **VS Code over SSH** — Refined connection instructions and expanded SSH setup script content for remote editing workflows
- **Container log downloads** — Tuned timeout behavior so large log exports fail fast enough to stay predictable, with follow-up fixes for orphaned Docker processes
- **IPv6 panel SSL** — Self-signed certificates for the panel can be enabled on IPv6-only or dual-stack servers
- **Terminal layout** — Internal sizing adjustments reduce unnecessary outer scrollbars when using embedded terminals

---

## Enhancements

### Agents

- **DeepSeek model pools** — Model pools for DeepSeek accounts now support the latest **V4** models by default, so new configurations track the current generation without manual pool edits ([`#12622`](https://github.com/1Panel-dev/1Panel/pull/12622)).

### Containers

- **Log download timeouts** — The wait window for container log downloads has been tuned to better match real-world network and disk behavior ([`#12632`](https://github.com/1Panel-dev/1Panel/pull/12632)).

### File Browser

- **Stop decompression** — Decompression tasks can be cancelled mid-run; the task list UI has been refined for managing parallel jobs ([`#12582`](https://github.com/1Panel-dev/1Panel/pull/12582)).
- **VS Code and SSH** — Connection guidance for VS Code has been clarified, and the bundled SSH setup script content has been expanded ([`#12613`](https://github.com/1Panel-dev/1Panel/pull/12613)).

### Terminal

- **Embedded terminal height** — Layout tweaks to internal element heights help avoid an extra outer scrollbar in common viewport sizes ([`#12630`](https://github.com/1Panel-dev/1Panel/pull/12630)).

### Panel Settings

- **IPv6 and self-signed SSL** — Panel HTTPS using a self-signed certificate is supported when the server is addressed over IPv6 ([`#12652`](https://github.com/1Panel-dev/1Panel/pull/12652)).

---

## Bug Fixes

| Area | Fix |
|---|---|
| **Overview** | Restored normal loading for homepage monitoring charts ([`#12591`](https://github.com/1Panel-dev/1Panel/pull/12591)). |
| **Overview** | Memo widget display corrected in several non-default language environments ([`#12629`](https://github.com/1Panel-dev/1Panel/pull/12629)). |
| **App Store** | Restored comparison arrows on the app upgrade file diff view ([`#12663`](https://github.com/1Panel-dev/1Panel/pull/12663)). |
| **Websites** | Redirect rules now accept wildcard domain patterns where applicable ([`#12625`](https://github.com/1Panel-dev/1Panel/pull/12625)). |
| **Containers** | Docker helper processes are cleaned up when a log download hits a timeout ([`#12607`](https://github.com/1Panel-dev/1Panel/pull/12607)). |
| **Containers** | Dialog buttons behave correctly after saving orchestration (Compose) changes ([`#12631`](https://github.com/1Panel-dev/1Panel/pull/12631)). |
| **Containers** | Docker service detection on Arch Linux no longer mis-reports state ([`#12651`](https://github.com/1Panel-dev/1Panel/pull/12651)). |
| **File Browser** | Editor context menu and filtering behave correctly in edge cases ([`#12612`](https://github.com/1Panel-dev/1Panel/pull/12612)). |
| **File Browser** | File service API return types corrected for downstream callers ([`#12648`](https://github.com/1Panel-dev/1Panel/pull/12648)). |
| **Multi-Node** | Child nodes can again use host connections provisioned on the primary node ([`#12659`](https://github.com/1Panel-dev/1Panel/pull/12659)). |
| **Website Monitoring** | Website monitoring prompts accurately reflect when OpenResty is not running. |
| **System** | Table column sorting behaves correctly again ([`#12658`](https://github.com/1Panel-dev/1Panel/pull/12658)). |

---

## How to Upgrade

Simply click the 'Update' button in the lower right corner on your 1Panel dashboard.

New to 1Panel? Visit [1panel.pro](https://1panel.pro/) to get started.

---

## Source

Full release notes: [1Panel v2.1.11 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.11)