import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import PtJson from "../languages/pt.json"
import EnJson from "../languages/en.json"

export const startLanguage = () => i18n
    .use(initReactI18next)
    .init({
        resources: {
            pt: {
                translation: PtJson
            },
            en: {
                translation: EnJson
            }
        },
        lng: "pt",
        fallbackLng: "pt",
        interpolation: {
            escapeValue: false
        }
    });

