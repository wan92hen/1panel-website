---
title: "Как управлять MongoDB на VPS через 1Panel"
description: "Пошаговая работа с MongoDB в 1Panel: установка из App Store, создание БД, данные подключения, встроенный mongosh, backup/restore и управление удаленными инстансами."
pubDate: 2026-04-24
updatedDate: 2026-04-24
tags:
  - 1Panel
  - MongoDB
  - Database
  - VPS
  - Self-hosted
---

В 1Panel можно вести полный цикл MongoDB на VPS из одного интерфейса: установка, создание БД, подключение, проверки, резервные копии и восстановление.

## Что доступно в 1Panel

- Установка MongoDB через **App Store**
- Создание БД и пользователей с правами
- Встроенный браузерный **mongosh**
- Просмотр параметров подключения
- Backup/restore и плановые задания
- Подключение удаленных MongoDB-серверов

## Предварительные условия

- 1Panel установлен и доступен
- На сервере достаточно памяти для MongoDB
- Есть интернет-доступ для загрузки образов

## Шаг 1: Установить MongoDB из App Store

Откройте **App Store**, отфильтруйте **Database**, выберите **MongoDB**, нажмите **Install**.

![1Panel App Store - Install MongoDB](/blog/install-mongodb.png)

Ключевые поля:

| Поле | Рекомендация |
|---|---|
| Name | Идентификатор инстанса (`mongodb` по умолчанию) |
| Version | Нужная версия MongoDB |
| Username / Password | Первичные учетные данные |
| Port | Стандартно `27017` |
| External Access | Включать только при необходимости |
| Restart Policy | Для продакшена обычно `always` |

Подтвердите через **Confirm**.

## Шаг 2: Создать базу MongoDB

Перейдите в **Databases** -> **MongoDB** и нажмите **Create**.

![1Panel - Create MongoDB Database](/blog/create-db-mongodb.png)

Заполните:

- **Name**
- **Username**
- **Password**
- **Change Permissions**
- **Description** (опционально)

Нажмите **Confirm**.

## Шаг 3: Проверить данные подключения

Через **Connection** смотрите host, port и credentials.

Формат:

`mongodb://username:password@host:27017/databasename`

## Шаг 4: Использовать встроенный терминал

Кнопка **Terminal** открывает `mongosh`.

![1Panel - MongoDB Built-in Terminal](/blog/terminal-mongodb.png)

Примеры:

```javascript
show databases
use testdb
show collections
db.users.find({ active: true }).limit(10)
db.adminCommand({ serverStatus: 1 })
```

## Шаг 5: Backup и restore

В списке БД откройте действие резервного копирования.

![1Panel - MongoDB Backup Management](/blog/backup-mongodb.png)

- **Back up**: создать снимок
- **Restore**: восстановить снимок
- **Settings** -> **Backup Accounts**: добавить облачное хранилище
- **Cron Jobs**: настроить автоматический график

## Шаг 6: Управление удаленными серверами

Через **Remote server** добавляйте внешние MongoDB-инстансы.

Если изменения делались вне панели, используйте **Sync from server**.

## Рекомендации по безопасности

- Минимизируйте прямую публичную экспозицию MongoDB
- Ограничивайте firewall только известными источниками
- Предпочитайте приватный доступ (VPN/туннель)
- Ротируйте учетные данные и храните off-site backup

## Быстрый чек-лист

- Инстанс в здоровом состоянии
- URI подключения проверен
- Тест восстановления выполнен хотя бы один раз
- Политика доступа соответствует вашему baseline

## Итог

1Panel упрощает полный операционный цикл MongoDB на VPS в одном UI.

Начать можно с [1panel.pro](https://1panel.pro/).
