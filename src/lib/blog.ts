import type { CollectionEntry } from 'astro:content';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from '../i18n/config';

export type BlogPost = CollectionEntry<'blog'>;

/** BCP-47 locale strings for `toLocaleDateString` */
export const BLOG_DATE_LOCALE: Record<Locale, string> = {
  en: 'en-US',
  ja: 'ja-JP',
  pt: 'pt-BR',
  ko: 'ko-KR',
  es: 'es-ES',
  ms: 'ms-MY',
  tr: 'tr-TR',
  ru: 'ru-RU',
};

/** Paths match `build.format: 'file'` output (e.g. `/blog.html`, `/en/blog/post-slug.html`). */
export function blogListPath(lang: string | undefined): string {
  return lang ? `/${lang}/blog.html` : '/blog.html';
}

/** `articleSlug` is the filename without locale (e.g. `deploy-wordpress-php-runtime`). */
export function blogPostPath(lang: string | undefined, articleSlug: string): string {
  return lang ? `/${lang}/blog/${articleSlug}.html` : `/blog/${articleSlug}.html`;
}

export function sortPostsByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/**
 * Content lives at `src/content/blog/{locale}/{articleSlug}.md`
 * → collection `slug` is `{locale}/{articleSlug}`.
 */
export function parseBlogEntrySlug(entrySlug: string): { locale: string; articleSlug: string } | null {
  const idx = entrySlug.indexOf('/');
  if (idx === -1) return null;
  const locale = entrySlug.slice(0, idx);
  const articleSlug = entrySlug.slice(idx + 1);
  if (!SUPPORTED_LOCALES.includes(locale as Locale)) return null;
  return { locale, articleSlug };
}

export function getPostsForLocale(all: BlogPost[], locale: string): BlogPost[] {
  return all.filter((e) => e.slug.startsWith(`${locale}/`));
}

export function collectArticleSlugs(all: BlogPost[]): string[] {
  const slugs = new Set<string>();
  for (const e of all) {
    const p = parseBlogEntrySlug(e.slug);
    if (p) slugs.add(p.articleSlug);
  }
  return [...slugs];
}

/** Prefer requested locale; fall back to default locale article. */
export function resolvePost(all: BlogPost[], locale: string, articleSlug: string): BlogPost | undefined {
  const exact = all.find((e) => e.slug === `${locale}/${articleSlug}`);
  if (exact) return exact;
  return all.find((e) => e.slug === `${DEFAULT_LOCALE}/${articleSlug}`);
}

export function articleSlugFromEntry(entry: BlogPost): string {
  const p = parseBlogEntrySlug(entry.slug);
  return p?.articleSlug ?? entry.slug;
}

export function absoluteBlogPostUrl(site: URL | string | undefined, lang: string | undefined, articleSlug: string): string {
  const baseStr = typeof site === 'string' ? site : site?.href ?? 'https://1panel.pro/';
  const base = new URL(baseStr.endsWith('/') ? baseStr : `${baseStr}/`);
  return new URL(blogPostPath(lang, articleSlug), base).href;
}

/** JSON-LD `inLanguage` (BCP 47) */
export function schemaInLanguage(locale: string): string {
  const loc = locale as Locale;
  return BLOG_DATE_LOCALE[loc] ?? locale;
}
