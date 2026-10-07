"use client";

import { useCallback, useEffect, useState } from "react";
import type { Language } from "./site-content";

const LANGUAGE_STORAGE_KEY = "saint-dimitrie-language";

export function useLanguagePreference() {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    try {
      const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (savedLanguage === "en" || savedLanguage === "ro") {
        setLanguageState(savedLanguage);
        document.documentElement.lang = savedLanguage;
      }
    } catch {
      // Keep English as the default when browser storage is unavailable.
    }
  }, []);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    document.documentElement.lang = nextLanguage;

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    } catch {
      // The current page still changes language even if storage is unavailable.
    }
  }, []);

  return [language, setLanguage] as const;
}
