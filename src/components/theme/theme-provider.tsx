import { useEffect, useState, type ReactNode } from "react"
import { ThemeProviderContext, type Theme } from "@/components/theme/theme-context"

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "feryar-theme",
}: {
  children: ReactNode
  defaultTheme?: Theme
  storageKey?: string
}) {
  const [theme, setThemeState] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    const resolved =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme
    root.classList.add(resolved)
  }, [theme])

  function setTheme(t: Theme) {
    localStorage.setItem(storageKey, t)
    setThemeState(t)
  }

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  )
}