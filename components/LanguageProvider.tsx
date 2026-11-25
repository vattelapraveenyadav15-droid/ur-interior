"use client";

import { createContext, useContext, useMemo, useState } from "react";

type Lang = "en" | "te";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; switched: boolean };

const LanguageContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  switched: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [switched, setSwitched] = useState(false);

  const value = useMemo(
    () => ({
      lang,
      switched,
      setLang: (l: Lang) => {
        setSwitched(true);
        setLang(l);
      },
    }),
    [lang, switched],
  );
  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

/** Renders the English or Telugu string for the active language. */
export function T({ en, te }: { en: string; te: string }) {
  const { lang } = useLang();
  return <>{lang === "en" ? en : te}</>;
}
