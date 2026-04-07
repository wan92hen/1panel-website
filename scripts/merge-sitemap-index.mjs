/**
 * After `astro build`, @astrojs/sitemap writes dist/sitemap-index.xml (and sitemap-0.xml, …).
 * This script appends external sitemap URLs (e.g. docs) to that index so crawlers see one entry point.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

/** Absolute URLs of additional sitemap documents (not URL lists). */
const EXTRA_SITEMAPS = [
  'https://1panel.pro/docs/v2/sitemap.xml',
  'https://1panel.pro/docs/v1/sitemap.xml',
];

const distIndex = join(process.cwd(), 'dist', 'sitemap-index.xml');

if (!existsSync(distIndex)) {
  console.warn('[merge-sitemap-index] dist/sitemap-index.xml missing — skip (no site build?)');
  process.exit(0);
}

let xml = readFileSync(distIndex, 'utf8');
if (!xml.includes('</sitemapindex>')) {
  console.error('[merge-sitemap-index] dist/sitemap-index.xml has no </sitemapindex>');
  process.exit(1);
}

const existing = new Set();
for (const m of xml.matchAll(/<sitemap>[\s\S]*?<loc>([^<]+)<\/loc>[\s\S]*?<\/sitemap>/g)) {
  existing.add(m[1].trim());
}

const toAdd = EXTRA_SITEMAPS.filter((u) => !existing.has(u));
if (toAdd.length === 0) {
  console.log('[merge-sitemap-index] all extra sitemaps already present');
  process.exit(0);
}

const insert = toAdd
  .map((url) => `  <sitemap>\n    <loc>${url}</loc>\n  </sitemap>`)
  .join('\n');

xml = xml.replace('</sitemapindex>', `${insert}\n</sitemapindex>`);
writeFileSync(distIndex, xml, 'utf8');
console.log('[merge-sitemap-index] appended:', toAdd.join(', '));
