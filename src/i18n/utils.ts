import type { Locale } from './config';
import { DEFAULT_LOCALE, isValidLocale } from './config';

export type TranslationDict = Record<string, string | Record<string, unknown>>;

const translationCache: Partial<Record<Locale, TranslationDict>> = {};

function deepGet(obj: Record<string, unknown>, path: string): string | undefined {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current == null || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === 'string' ? current : undefined;
}

export function getTranslations(locale: string): TranslationDict {
  const loc = isValidLocale(locale) ? locale : DEFAULT_LOCALE;
  if (translationCache[loc]) return translationCache[loc] as TranslationDict;

  try {
    const mod = import.meta.glob<{ default: TranslationDict }>('./translations/*.json', { eager: true });
    const key = Object.keys(mod).find((k) => k.endsWith(`${loc}.json`));
    if (key && mod[key]) {
      const data = mod[key].default;
      translationCache[loc] = data;
      return data;
    }
  } catch {
    // fallback to en
  }
  return getTranslations(DEFAULT_LOCALE);
}

export function t(translations: TranslationDict, path: string): string {
  const value = deepGet(translations as Record<string, unknown>, path);
  return value ?? path;
}

export function getBasePath(lang: string | undefined): string {
  return lang ? '../' : './';
}
