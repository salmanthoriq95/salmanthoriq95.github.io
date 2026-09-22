export const supportedLocales = ["en", "id"] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  id: "Bahasa Indonesia",
};

/**
 * Builds a localized path while keeping the default locale unprefixed.
 * It also accepts an already-localized path, which is useful for the
 * language switcher because the visitor stays on the equivalent page.
 */
export function getLocalizedPath(locale: Locale, pathname = "/") {
  const normalizedPath = pathname.startsWith("/")
    ? pathname
    : `/${pathname}`;
  const localePrefix = new RegExp(`^/(?:${supportedLocales.join("|")})(?=/|$)`);
  const pathWithoutLocale = normalizedPath.replace(localePrefix, "") || "/";

  if (locale === defaultLocale) {
    return pathWithoutLocale;
  }

  return pathWithoutLocale === "/" ? `/${locale}/` : `/${locale}${pathWithoutLocale}`;
}
