export const supportedLocales = ["id", "en"] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "id";

export const localeNames: Record<Locale, string> = {
  id: "Bahasa Indonesia",
  en: "English",
};

/**
 * Builds a localized path while keeping Indonesian routes unprefixed.
 * It also accepts an already-localized path, which is useful for the
 * language switcher because the visitor stays on the equivalent page.
 */
export function getLocalizedPath(locale: Locale, pathname = "/") {
  const normalizedPath = pathname.startsWith("/")
    ? pathname
    : `/${pathname}`;
  const pathWithoutLocale = normalizedPath.replace(/^\/en(?=\/|$)/, "") || "/";

  if (locale === defaultLocale) {
    return pathWithoutLocale;
  }

  return pathWithoutLocale === "/" ? "/en/" : `/en${pathWithoutLocale}`;
}
