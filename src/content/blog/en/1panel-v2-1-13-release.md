---
title: "1Panel v2.1.13 Released: Model downloader, File Browser upgrades, and runtime fixes"
description: "1Panel v2.1.13 adds a model downloader, improves File Browser history handling, directory sizing, and selection UI, adds upgrade disk checks, and fixes runtime, file path, license, and snapshot issues."
pubDate: 2026-05-26
updatedDate: 2026-05-26
tags:
  - 1Panel
  - Release Notes
  - Models
  - File Browser
  - Runtime
  - Panel Settings
---

1Panel v2.1.13 is now available. This release introduces a built-in model downloader, refines File Browser and upgrade workflows, and ships targeted fixes for runtime environments and panel settings.

## Table of Contents

- [Highlights](#highlights)
- [New Features](#new-features)
- [Enhancements](#enhancements)
- [Bug Fixes](#bug-fixes)
- [How to Upgrade](#how-to-upgrade)

---

## Highlights

- **Model downloader** — Pull and manage models from the Models module without leaving the panel
- **File Browser polish** — Clearer errors for file history, faster and safer directory size calculation, and smoother multi-select in the file manager
- **Safer upgrades** — The upgrade flow now checks remaining disk space before proceeding
- **Runtime reliability** — Project directories are no longer removed when runtime creation fails; host mappings delete correctly
- **Panel settings** — Improved license rebinding and snapshot recovery in edge cases

---

## New Features

### Models

- **Model downloader** — Download models directly in 1Panel to simplify local model setup and updates ([`#12694`](https://github.com/1Panel-dev/1Panel/pull/12694)).

---

## Enhancements

### File Browser

- **File history errors** — Error handling when loading file history content is more predictable ([`#12736`](https://github.com/1Panel-dev/1Panel/pull/12736)).
- **Directory size calculation** — Size calculation logic is optimized with concurrency control for large trees ([`#12737`](https://github.com/1Panel-dev/1Panel/pull/12737)).
- **Selection UX** — The file management UI and selection operations are refined ([`#12740`](https://github.com/1Panel-dev/1Panel/pull/12740)).

### Panel Settings

- **License rebinding** — License rebinding logic is improved in several real-world scenarios ([`#12778`](https://github.com/1Panel-dev/1Panel/pull/12778)).

### System

- **Upgrade disk checks** — The upgrade process verifies remaining disk space before continuing ([`#12708`](https://github.com/1Panel-dev/1Panel/pull/12708)).

---

## Bug Fixes

| Area | Fix |
|---|---|
| **Runtime** | Project directories are no longer deleted when runtime environment creation fails in some scenarios ([`#12756`](https://github.com/1Panel-dev/1Panel/pull/12756)). |
| **Runtime** | Runtime host mappings can be removed again when deletion previously failed ([`#12779`](https://github.com/1Panel-dev/1Panel/pull/12779)). |
| **File Browser** | Loading a non-existent directory no longer throws unexpected errors ([`#12744`](https://github.com/1Panel-dev/1Panel/pull/12744)). |
| **Panel Settings** | Snapshot recovery behaves correctly in scenarios where it previously failed ([`#12777`](https://github.com/1Panel-dev/1Panel/pull/12777)). |

---

## How to Upgrade

Simply click the 'Update' button in the lower right corner on your 1Panel dashboard.

New to 1Panel? Visit [1panel.pro](https://1panel.pro/) to get started.

---

## Source

Full release notes: [1Panel v2.1.13 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.13)
