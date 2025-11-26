"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  Locale,
  TranslationKey,
  defaultLocale,
  normalizeLocale,
  translate,
} from "@/i18n/core";

const STORAGE_KEY = "coding-farm.locale";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (
    key: TranslationKey,
    params?: Record<string, string | number>
  ) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  // Initial locale detection is driven by browser/localStorage; keeping it here
  // avoids coupling render output to the availability of global objects.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const saved =
      typeof window !== "undefined"
        ? localStorage.getItem(STORAGE_KEY)
        : null;

    const browserPref =
      typeof navigator !== "undefined"
        ? navigator.languages?.[0] || navigator.language
        : null;

    const nextLocale = normalizeLocale(saved || browserPref || defaultLocale);
    if (nextLocale !== locale) {
      setLocale(nextLocale);
    }

    if (saved !== nextLocale && typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, nextLocale);
    }
  }, [locale]);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale: (next) => {
        setLocale(next);
        if (typeof window !== "undefined") {
          localStorage.setItem(STORAGE_KEY, next);
        }
      },
      t: (key, params) => translate(locale, key, params),
    }),
    [locale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}
