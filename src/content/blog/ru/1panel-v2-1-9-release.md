---
title: "Релиз 1Panel v2.1.9: Hermes Agent, управление MongoDB и история файлов"
description: "1Panel v2.1.9 добавляет поддержку Hermes Agent, встроенное управление MongoDB и историю файлов, а также улучшения в Agents, File Browser, контейнерах и совместимости с S3."
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

1Panel v2.1.9 уже доступен. В этой версии добавлены три новые возможности в модулях Agents, Databases и File Browser, а также точечные улучшения и пять исправлений ошибок.

## Highlights

- Поддержка **Hermes Agent** в модуле Agents
- **Управление MongoDB** в общем интерфейсе Databases
- **История файлов** в File Browser для отката изменений
- Упрощенный процесс добавления channel-ботов OpenClaw
- Повышенная стабильность подключения к AWS S3

## New Features

### Agents
1Panel теперь поддерживает **Hermes Agent**, расширяя возможности локального AI-агентного стека.

### Databases
**MongoDB** теперь управляется нативно наравне с MySQL, PostgreSQL и Redis.

### File Browser
Функция **File History** позволяет отслеживать изменения и восстанавливать файлы после ошибочных действий.

## Enhancements

- Agents: аккуратная отвязка от сайтов и упрощенный flow для OpenClaw channel-ботов
- App Store: доработана логика определения изменений в Compose-файлах
- File Browser: остановка сжатия, поддержка Dockerfile, настраиваемые заголовки при шаринге, усиленная валидация метаданных
- Containers: улучшены обработка данных и синхронизация статусов
- Panel Settings: улучшена совместимость с AWS S3 и S3-совместимыми endpoint
- System/Websites: визуальные улучшения таблиц и бейджей сайтов

## Bug Fixes

| Area | Fix |
|---|---|
| Runtime | Исправлено: директорию runtime можно было менять во время активного редактирования |
| File Browser | Исправлено: файлы по QR-шерингу не скачивались |
| Firewall | Исправлено: нельзя было редактировать описание правила после создания |
| Firewall | Исправлено: некорректное отображение listening-статуса |
| Tamper Protection | Исправлены ошибки перевода в нескольких локалях |

## How to Upgrade

Нажмите `Update` в правом нижнем углу панели.

Впервые с 1Panel? [1panel.pro](https://1panel.pro/)

## Source

Полные заметки релиза: [1Panel v2.1.9 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.9)
