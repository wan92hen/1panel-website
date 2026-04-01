/**
 * i18n configuration: default English, plus JA, PT, KO, ES, MS, TR, RU, ZH-HANT
 */
export const DEFAULT_LOCALE = 'en' as const;
export const SUPPORTED_LOCALES = [
  'en',
  'ja',
  'pt',
  'ko',
  'es',
  'ms',
  'tr',
  'ru',
  'zh-hant',
] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const NON_DEFAULT_LOCALES = SUPPORTED_LOCALES.filter((loc) => loc !== DEFAULT_LOCALE) as Exclude<Locale, typeof DEFAULT_LOCALE>[];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  ja: '日本語',
  pt: 'Português',
  ko: '한국어',
  es: 'Español',
  ms: 'Bahasa Melayu',
  tr: 'Türkçe',
  ru: 'Русский',
  'zh-hant': '繁體中文',
};

export function getLocaleLabel(locale: string): string {
  return LOCALE_LABELS[locale as Locale] ?? locale;
}

export function isValidLocale(locale: string): locale is Locale {
  return SUPPORTED_LOCALES.includes(locale as Locale);
}

/**
 * Map browser language tag (e.g. 'ja-JP', 'pt-BR') to our supported locale.
 * Used for auto-redirect on root index.
 */
export const BROWSER_LANG_TO_LOCALE: Record<string, Locale> = {
  en: 'en',
  'en-us': 'en',
  'en-gb': 'en',
  'en-au': 'en',
  ja: 'ja',
  'ja-jp': 'ja',
  pt: 'pt',
  'pt-br': 'pt',
  'pt-pt': 'pt',
  ko: 'ko',
  'ko-kr': 'ko',
  es: 'es',
  'es-es': 'es',
  'es-mx': 'es',
  'es-ar': 'es',
  ms: 'ms',
  'ms-my': 'ms',
  tr: 'tr',
  'tr-tr': 'tr',
  ru: 'ru',
  'ru-ru': 'ru',
  zh: 'zh-hant',
  'zh-hant': 'zh-hant',
  'zh-hk': 'zh-hant',
  'zh-mo': 'zh-hant',
  'zh-tw': 'zh-hant',
};

/**
 * Resolve the first browser-preferred language that we support.
 * languages: e.g. ['ja-JP', 'en-US', 'en'] from navigator.languages
 */
export function getPreferredLocaleFromBrowser(languages: string[]): Locale {
  for (const tag of languages) {
    const normalized = tag.toLowerCase().replace(/_/g, '-');
    const primary = normalized.split('-')[0];
    const locale = BROWSER_LANG_TO_LOCALE[normalized] ?? BROWSER_LANG_TO_LOCALE[primary];
    if (locale) return locale;
  }
  return DEFAULT_LOCALE;
}
