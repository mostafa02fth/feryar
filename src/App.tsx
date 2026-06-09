import { useTranslation } from "react-i18next"
import { ModeToggle } from "@/components/theme/mode-toggle"
import { LanguageToggle } from "@/components/language-toggle"

function App() {
  const { t } = useTranslation()
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center gap-4 bg-background text-foreground">
      <div className="absolute end-4 top-4 flex items-center gap-1">
        <LanguageToggle />
        <ModeToggle />
      </div>
      <h1 className="text-2xl font-semibold">Feryar</h1>
      <p className="text-muted-foreground">{t("tagline")}</p>
    </div>
  )
}

export default App