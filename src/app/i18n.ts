import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { embeddedLocales, languages } from "./locales";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: embeddedLocales,
    fallbackLng: "vi",
    supportedLngs: languages,
    load: "languageOnly",
    lng: "vi",
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
