---
title: "Релиз 1Panel v2.1.8: AI-поиск файлов, управление ролями агентов и обмен ссылками"
description: "В 1Panel v2.1.8 добавлены AI-поиск файлов, общие ссылки на файлы, ролевое управление агентами, мультиаккаунты в каналах, уведомления Bark, синхронизация статуса vLLM и защита 2FA от подозрительных IP."
pubDate: 2026-04-10
updatedDate: 2026-04-10
tags:
  - 1Panel
  - Примечания к релизу
  - AI Search
  - Agent
  - Security
---

1Panel v2.1.8 официально выпущен 10 апреля 2026 года. Обновление заметно расширяет модуль Agents (роли, мультиаккаунты каналов, привязка сайтов), добавляет AI-поиск и шаринг ссылок в файловом браузере, а также усиливает безопасность и стабильность.

## Основные изменения

- **AI-поиск файлов** в File Browser на естественном языке
- **Обмен ссылками на файлы** прямо из File Browser
- **Управление ролями агентов** для командного контроля доступа
- **Поддержка мультиаккаунтов в каналах** (QQ, Feishu, DingTalk, Discord и др.)
- **Привязка агентов к сайтам**
- **Канал уведомлений Bark**
- **Защита от подозрительных IP при 2FA**
- **Синхронизация статуса vLLM** в реальном времени

## Новые функции

### File Browser

- **AI Search** ([`#12415`](https://github.com/1panel-dev/1panel/pull/12415)): находите файлы по описанию, без точного знания пути и имени.
- **File Link Sharing** ([`#12453`](https://github.com/1panel-dev/1panel/pull/12453)): создавайте прямые ссылки для скачивания файлов, бэкапов и логов.

### Agents

- **Role Management** ([`#12364`](https://github.com/1panel-dev/1panel/pull/12364)): создавайте роли с правами и назначайте их конфигурациям агентов.
- **Multi-Account Channel Support** ([`#12369`](https://github.com/1panel-dev/1panel/pull/12369)): подключайте несколько аккаунтов к одному каналу.
- **Website Binding** ([`#12413`](https://github.com/1panel-dev/1panel/pull/12413)): связывайте агента с конкретным сайтом в 1Panel.
- **Agent Remarks** ([`#12361`](https://github.com/1panel-dev/1panel/pull/12361)): свободное поле заметок для назначения и контекста агента.
- **ClawHub China Mirror** ([`#12396`](https://github.com/1panel-dev/1panel/pull/12396)): повышена надежность загрузки навыков в материковом Китае.

### App Store

- **Единый переключатель внешних портов** ([`#12426`](https://github.com/1panel-dev/1panel/pull/12426)): централизованное управление внешней доступностью приложений.

### Настройки панели

- **Bark Alert Channel** ([`#12338`](https://github.com/1panel-dev/1panel/pull/12338)): Bark добавлен как новый канал push-уведомлений.

## Улучшения

### Agents и OpenClaw

- Более гибкая настройка плагинов OpenClaw с резервной моделью ([`#12386`](https://github.com/1panel-dev/1panel/pull/12386))
- Удаление и обновление плагинов OpenClaw прямо из панели ([`#12373`](https://github.com/1panel-dev/1panel/pull/12373))
- Каналы QQ и Feishu переведены на официальные плагины ([`#12369`](https://github.com/1panel-dev/1panel/pull/12369))
- Расширена настраиваемость DingTalk в OpenClaw ([`#12440`](https://github.com/1panel-dev/1panel/pull/12440))
- Переработана структура меню моделей ([`#12407`](https://github.com/1panel-dev/1panel/pull/12407))
- Обновлена конфигурация моделей по умолчанию ([`#12403`](https://github.com/1panel-dev/1panel/pull/12403))
- Повышена стабильность API-вызовов в интенсивных сценариях ([`#12443`](https://github.com/1panel-dev/1panel/pull/12443))

### Модели

- Улучшен формат логов загрузки моделей ([`#12414`](https://github.com/1panel-dev/1panel/pull/12414))
- Улучшена логика синхронизации состояния vLLM

### Безопасность

- Блокировка подозрительных IP в 2FA-потоке ([`#12365`](https://github.com/1panel-dev/1panel/pull/12365))
- Улучшены сообщения при блокировке и входе ([`#12377`](https://github.com/1panel-dev/1panel/pull/12377))
- Усилен поток проверки безопасности входа и доступа к панели ([`#12378`](https://github.com/1panel-dev/1panel/pull/12378))

### File Browser и SSH

- Повышена стабильность операций с файлами под нагрузкой ([`#12358`](https://github.com/1panel-dev/1panel/pull/12358))
- Улучшена валидация при редактировании SSH-конфигураций ([`#12398`](https://github.com/1panel-dev/1panel/pull/12398))

### Сайты и runtime

- Обновлен интерфейс OpenResty Other Settings ([`#12429`](https://github.com/1panel-dev/1panel/pull/12429))
- Усилена проверка при удалении сайтов OpenClaw ([`#12433`](https://github.com/1panel-dev/1panel/pull/12433))
- Упрощена настройка привязки сайтов ([`#12435`](https://github.com/1panel-dev/1panel/pull/12435))
- Повышена надежность выбора скриптов Node.js runtime ([`#12431`](https://github.com/1panel-dev/1panel/pull/12431))

### Система

- Более плавный процесс обновления AI Terminal ([`#12409`](https://github.com/1panel-dev/1panel/pull/12409))
- Ускорена загрузка редактора кода ([`#12401`](https://github.com/1panel-dev/1panel/pull/12401))
- Более единообразное поведение диалоговых окон ([`#12400`](https://github.com/1panel-dev/1panel/pull/12400))
- Обновлены i18n-тексты во всех поддерживаемых языках ([`#12350`](https://github.com/1panel-dev/1panel/pull/12350))

## Исправления ошибок

- **Overview**: исправлены аномальные delta-значения в графиках мониторинга ([`#12402`](https://github.com/1panel-dev/1panel/pull/12402))
- **Agents**: исправлена некорректная конфигурация Discord-канала OpenClaw ([`#12456`](https://github.com/1panel-dev/1panel/pull/12456))
- **Certificates**: исправлена ошибка логики автообновления сертификатов ([`#12430`](https://github.com/1panel-dev/1panel/pull/12430))
- **Panel Settings**: health-check прокси продолжал работать после отключения ([`#12388`](https://github.com/1panel-dev/1panel/pull/12388))
- **Panel Settings**: исправлен возврат на страницу входа при 2FA + CAPTCHA ([`#12438`](https://github.com/1panel-dev/1panel/pull/12438))

## Как обновить

Просто нажмите кнопку "Update" в правом нижнем углу.

Новые пользователи: [1panel.pro](https://1panel.pro/).

## Источник

- Полные заметки к релизу: [1Panel v2.1.8 на GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.1.8)

