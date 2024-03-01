import i18n from "i18next";
import Backend from "i18next-http-backend"
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import translations_en from "../public/locales/en/translations.json";
import translations_es from "../public/locales/es/translations.json";
import translations_cat from "../public/locales/cat/translations.json";

i18n.use(Backend).use(initReactI18next).use(LanguageDetector).init({
    fallbackLng: "en",
    debug: true,
    returnObjects: true,
    resources: {
        en: {
            translations: translations_en,
        },
        es: {
            translations: translations_es,
        },
        cat: {
            translations: translations_cat,
        },

    }
})


export default i18n;