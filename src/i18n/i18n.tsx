import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";
import { en } from "./en";
import { zh } from "./zh";

export const LANGUAGES = [
  {
    language: "en" as const,
    indicator: "EN",
    content: en,
  },
  {
    language: "zh" as const,
    indicator: "中",
    content: zh,
  },
];

const SUPPORT_LANGUAGES = LANGUAGES.map((l) => l.language);

type SupportedLanguage = typeof SUPPORT_LANGUAGES[number];

const DEFAULT_LANGUAGE =
  navigator.languages
    .map((lang) => lang.split("-")[0])
    .find((lang): lang is SupportedLanguage =>
      SUPPORT_LANGUAGES.includes(lang as SupportedLanguage)
    ) ?? SUPPORT_LANGUAGES[0];

const I18NContext = createContext<{
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
}>({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {
    return;
  },
});

export function I18NProvider({ children }: { children: ReactNode }) {
  let lang = new URLSearchParams(location.search).get("lang");

  console.log("###", lang);

  if (!lang || !SUPPORT_LANGUAGES.includes(lang as SupportedLanguage)) {
    lang =
      navigator.languages
        .map((lang) => lang.split("-")[0])
        .find((lang): lang is SupportedLanguage =>
          SUPPORT_LANGUAGES.includes(lang as SupportedLanguage)
        ) ?? SUPPORT_LANGUAGES[0];
  }

  const [language, setLanguage] = useState<SupportedLanguage>(
    lang as SupportedLanguage
  );

  return (
    <I18NContext.Provider value={{ language, setLanguage }}>
      {children}
    </I18NContext.Provider>
  );
}

export function useI18N() {
  const lang = useContext(I18NContext);

  const content = useMemo(() => {
    return LANGUAGES.find((l) => l.language === lang.language)?.content;
  }, [lang.language]);

  return {
    content,
    lang,
  };
}
