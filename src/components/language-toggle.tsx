import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const { i18n } = useTranslation()
  const isFa = i18n.language === "fa"
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => i18n.changeLanguage(isFa ? "en" : "fa")}
      aria-label="Toggle language"
    >
      {isFa ? "EN" : "فا"}
    </Button>
  )
}