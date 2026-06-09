import { useTranslation } from "react-i18next";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { LanguageToggle } from "@/components/language-toggle";

function App() {
  const { t } = useTranslation();
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center gap-5 bg-background px-6 text-center text-foreground">
      <div className="absolute inset-e-4 top-4 flex items-center gap-1">
        <LanguageToggle />
        <ModeToggle />
      </div>

      <h1 className="text-6xl font-bold tracking-tight sm:text-7xl">Feryar</h1>
      <p className="max-w-xl text-lg text-muted-foreground sm:text-xl">
        {t("tagline")}
      </p>
    </div>
  );
}

export default App;
