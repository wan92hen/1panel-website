import appStoreData from '../1panel.json';

export type AppStoreAppItem = {
  icon?: string;
  name: string;
  readMe?: string;
  additionalProperties?: {
    key?: string;
    name?: string;
    shortDescEn?: string;
    shortDescZh?: string;
    description?: Record<string, string>;
    tags?: string[];
    website?: string;
    document?: string;
    github?: string;
    architectures?: string[];
    type?: string;
  };
  versions?: { name: string }[];
};

const DESCRIPTION_KEY_FALLBACK: Record<string, string[]> = {
  en: ['en'],
  de: ['de', 'en'],
  ja: ['ja', 'en'],
  pt: ['pt-br', 'pt', 'en'],
  ko: ['ko', 'en'],
  es: ['es-es', 'es', 'en'],
  ms: ['ms', 'en'],
  tr: ['tr', 'en'],
  ru: ['ru', 'en'],
  'zh-hant': ['zh-Hant', 'zh', 'en'],
};

export function getAppStoreApps(): AppStoreAppItem[] {
  return ((appStoreData as { apps?: AppStoreAppItem[] }).apps ?? []) as AppStoreAppItem[];
}

export function getAppStoreAppStaticParams(): {
  params: { app: string };
  props: { app: AppStoreAppItem };
}[] {
  const apps = getAppStoreApps();
  const out: { params: { app: string }; props: { app: AppStoreAppItem } }[] = [];
  for (const app of apps) {
    const key = app?.additionalProperties?.key;
    if (!key) continue;
    out.push({ params: { app: String(key) }, props: { app } });
  }
  return out;
}

export function pickLocalizedDescription(
  description: Record<string, string> | undefined,
  lang: string,
): string | undefined {
  if (!description || typeof description !== 'object') return undefined;
  const order = DESCRIPTION_KEY_FALLBACK[lang] ?? ['en'];
  for (const k of order) {
    const v = description[k];
    if (typeof v === 'string' && v.trim()) return v;
  }
  const en = description.en;
  if (typeof en === 'string' && en.trim()) return en;
  const other = Object.values(description).find((v) => typeof v === 'string' && v.trim());
  return typeof other === 'string' ? other : undefined;
}

function shortDescForLang(app: AppStoreAppItem, lang: string): string {
  const en = app.additionalProperties?.shortDescEn?.trim() ?? '';
  const zh = app.additionalProperties?.shortDescZh?.trim() ?? '';
  if (lang === 'zh-hant') {
    return zh || en;
  }
  return en || zh;
}

/** Summary line from 1panel.json for the given UI locale. */
export function appSummaryText(app: AppStoreAppItem, lang: string): string {
  const desc = app.additionalProperties?.description;
  const fromRecord = pickLocalizedDescription(desc, lang);
  if (fromRecord) return fromRecord;
  return shortDescForLang(app, lang);
}

export function ogLocaleForLang(lang: string): string {
  const map: Record<string, string> = {
    en: 'en_US',
    de: 'de_DE',
    ja: 'ja_JP',
    pt: 'pt_BR',
    ko: 'ko_KR',
    es: 'es_ES',
    ms: 'ms_MY',
    tr: 'tr_TR',
    ru: 'ru_RU',
    'zh-hant': 'zh_HK',
  };
  return map[lang] ?? 'en_US';
}
