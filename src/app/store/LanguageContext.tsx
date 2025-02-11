"use client";

import { createContext, useState } from "react";

import { translations } from "../constants/translations";

type Language = "en" | "zh";
type TranslationType = typeof translations;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: keyof TranslationType["en"]) => string;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  toggleLanguage: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "zh" : "en"));
  };

  const t = (key: keyof TranslationType["en"]) => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
