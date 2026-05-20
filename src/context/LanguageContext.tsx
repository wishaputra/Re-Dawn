"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n";

interface LanguageContextType {
  locale: Locale;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "id",
  toggleLocale: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("id");

  const toggleLocale = () => {
    setLocale((prev) => (prev === "id" ? "en" : "id"));
  };

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
