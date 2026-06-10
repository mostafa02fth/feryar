import { useRef, useState, type ChangeEvent } from "react"
import { useTranslation } from "react-i18next"
import { ModeToggle } from "@/components/theme/mode-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { Button } from "@/components/ui/button"
import { VideoPlayer } from "@/features/player/video-player"

function App() {
  const { t } = useTranslation()
  const inputRef = useRef<HTMLInputElement>(null)
  const [video, setVideo] = useState<{ url: string; type: string; name: string } | null>(null)

  function onPick(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setVideo((prev) => {
      if (prev) URL.revokeObjectURL(prev.url)
      return { url: URL.createObjectURL(file), type: file.type, name: file.name }
    })
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 py-12 text-center text-foreground">
      <div className="absolute inset-e-4 top-4 flex items-center gap-1">
        <LanguageToggle />
        <ModeToggle />
      </div>

      <h1 className="text-6xl font-bold tracking-tight sm:text-7xl">Feryar</h1>
      <p className="max-w-xl text-lg text-muted-foreground sm:text-xl">{t("tagline")}</p>

      <input ref={inputRef} type="file" accept="video/*" className="hidden" onChange={onPick} />
      <Button onClick={() => inputRef.current?.click()}>
        {video ? "Change video" : "Add a video"}
      </Button>

      {video && (
        <div className="w-full max-w-3xl">
          <VideoPlayer src={video.url} type={video.type} title={video.name} />
        </div>
      )}
    </div>
  )
}

export default App