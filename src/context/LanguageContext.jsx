import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { LANGUAGES, translations } from "../data/translations";

const LanguageContext = createContext(null);
const STORAGE_KEY = "portfolio-lang";
const SUPPORTED = LANGUAGES.map((language) => language.code);

const getInitialLanguage = () => {
  if (typeof window === "undefined") return "en";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
  } catch {
    /* ignore unavailable storage */
  }
  return "en";
};

/** Read a nested value from an object using a dot-separated path. */
const resolve = (source, path) =>
  path.split(".").reduce((value, key) => (value == null ? undefined : value[key]), source);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage);

  const dir = language === "ar" ? "rtl" : "ltr";

  // Translation function with a graceful English fallback.
  const t = useCallback(
    (path) => {
      const value = resolve(translations[language], path);
      if (value !== undefined) return value;
      const fallback = resolve(translations.en, path);
      return fallback !== undefined ? fallback : path;
    },
    [language],
  );

  const setLanguage = useCallback((next) => {
    if (SUPPORTED.includes(next)) setLanguageState(next);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.dir = dir;

    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      /* ignore unavailable storage */
    }

    // Localise document metadata as well.
    document.title = t("meta.title");
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", t("meta.description"));
  }, [language, dir, t]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      dir,
      isRTL: dir === "rtl",
      t,
      languages: LANGUAGES,
      currentLanguage: LANGUAGES.find((item) => item.code === language) || LANGUAGES[0],
    }),
    [language, setLanguage, dir, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside a LanguageProvider");
  return context;
}
