import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from "@/locales/en"
import fa from "@/locales/fa"

const STORAGE_KEY = "feryar-lang"

function applyDir(lng: string) {
  document.documentElement.lang = lng
  document.documentElement.dir = lng === "fa" ? "rtl" : "ltr"
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fa: { translation: fa },
  },
  lng: localStorage.getItem(STORAGE_KEY) || "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
})

i18n.on("languageChanged", (lng) => {
  localStorage.setItem(STORAGE_KEY, lng)
  applyDir(lng)
})

applyDir(i18n.language)

export default i18n