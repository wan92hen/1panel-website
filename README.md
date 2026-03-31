# 1Panel Website

基于 [Astro](https://astro.build/) 的 1Panel 官方网站静态站点：多语言首页、定价、博客等页面，使用 Tailwind CSS 与内容集合（Content Collections）管理文章。

## 环境要求

- [Node.js](https://nodejs.org/)（建议 LTS）
- [pnpm](https://pnpm.io/)（本项目统一使用 pnpm）

## 常用命令

```bash
pnpm install          # 安装依赖
pnpm dev              # 本地开发 http://localhost:4321
pnpm build            # 生产构建（含拉取 1Panel 应用 JSON）
pnpm preview          # 预览构建产物
```

构建产物在 `dist/`。站点 URL 在 `astro.config.mjs` 中通过 `site` 配置（用于 sitemap、绝对链接等）。

## 项目结构（简要）

| 路径 | 说明 |
|------|------|
| `src/pages/` | 路由页面（含 `[lang]` 下的多语言页面） |
| `src/layouts/` | 页面布局 |
| `src/components/` | UI 组件（含 `blog/`） |
| `src/content/blog/` | 博客 Markdown（按语言分子目录） |
| `src/content/config.ts` | 内容集合 schema |
| `src/i18n/` | 多语言与翻译 JSON |
| `src/styles/global.css` | 全局样式（含 `.blog-content` 正文排版） |
| `public/` | 静态资源（如 `public/blog/` 下的图片） |

支持的语言代码见 `src/i18n/config.ts` 中的 `SUPPORTED_LOCALES`（当前包含：`en`、`ja`、`pt`、`ko`、`es`、`ms`、`tr`、`ru`）。

## 如何新增博客文章（多语言）

> **说明**：请勿在仓库根目录使用 `blog/` 存放文章或图片；正文与资源分别以 `src/content/blog/` 与 `public/blog/` 为准。

博客使用 Astro **Content Collection**，集合名为 `blog`。每篇文章在**每种语言**下各有一个 Markdown 文件，文件名（不含 `.md`）即为 **文章 slug**，所有语言必须**同名**，否则无法正确匹配语言切换与 `hreflang`。

### 1. 目录与命名

```
src/content/blog/
├── en/
│   └── my-new-post.md
├── ja/
│   └── my-new-post.md
├── pt/
│   └── my-new-post.md
└── ...（其余语言各一份同名的 my-new-post.md）
```

- **第一级目录**：必须是 `SUPPORTED_LOCALES` 中的语言代码。
- **文件名**：`{article-slug}.md`，例如 `deploy-wordpress-php-runtime.md`。  
  生成的集合内 `slug` 为 `{locale}/{article-slug}`（如 `en/deploy-wordpress-php-runtime`）。

根路径英文列表 `/blog.html` 只展示 **`en/`** 下的文章；`/{lang}/blog.html` 只展示该语言目录下的文章。

### 2. Frontmatter（必填）

在 `src/content/config.ts` 中定义，例如：

```yaml
---
title: 文章标题（该语言）
description: 用于 SEO 与列表摘要的简短说明
pubDate: 2025-03-15
updatedDate: 2025-03-15   # 可选
heroImage: /blog/hero.png # 可选，用于 Open Graph 等，建议用站点根路径
tags:
  - Tag1
  - Tag2
---
```

### 3. 正文与图片

- 正文使用 Markdown；正文样式由 `src/styles/global.css` 中 `.blog-content` 统一控制。
- 图片放在 **`public`** 下（例如 `public/blog/screenshot.png`），正文中引用为 **`/blog/screenshot.png`**（以站点根路径开头）。

### 4. 未提供某语言译文时

若某语言缺少对应文件（例如只有 `en/my-new-post.md`，没有 `ja/my-new-post.md`），访问 `/{lang}/blog/my-new-post.html` 时会**自动回退到英语正文**，并在页面顶部显示提示（文案键：`blog.fallbackToEnglish`）。建议重要文章尽量补全各语言，或至少提供英语。

### 5. 构建与验证

新增或修改 `src/content/blog/` 后执行：

```bash
pnpm build
```

确认无报错；本地可用 `pnpm preview` 检查各语言列表与详情页、文末语言切换链接。

### 6. 相关代码（进阶）

- 博客列表过滤、文章解析、回退逻辑：`src/lib/blog.ts`
- 博客列表页：`src/pages/blog/index.astro`、`src/pages/[lang]/blog/index.astro`
- 博客详情页：`src/pages/blog/[slug].astro`（英文）、`src/pages/[lang]/blog/[slug].astro`（带语言前缀）
- 文末多语言切换：`src/components/blog/BlogLanguageSwitcher.astro`

---

如有问题，可结合 [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) 官方文档对照本仓库实现。
