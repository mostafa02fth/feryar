import { useEffect, useRef, useState, type ComponentProps } from "react"
import { MediaPlayer, MediaProvider, type MediaPlayerInstance } from "@vidstack/react"
import "@vidstack/react/player/styles/default/theme.css"
import { Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

type PlayerSrc = NonNullable<ComponentProps<typeof MediaPlayer>["src"]>

export function VideoPlayer({ src, type, title }: { src: string; type: string; title?: string }) {
  const playerRef = useRef<MediaPlayerInstance | null>(null)
  const [paused, setPaused] = useState(true)

  useEffect(() => {
    const p = playerRef.current
    if (!p) return
    return p.subscribe((state) => setPaused(state.paused))
  }, [])

  function toggle() {
    const p = playerRef.current
    if (!p) return
    if (p.paused) p.play().catch(() => {})
    else p.pause()
  }

  return (
    <div className="w-full overflow-hidden rounded-xl border border-input bg-black">
      <MediaPlayer
        ref={playerRef}
        title={title}
        src={{ src, type } as PlayerSrc}
        aspectRatio="16/9"
        className="w-full"
      >
        <MediaProvider />
      </MediaPlayer>
      <div className="flex items-center gap-3 border-t border-input bg-card p-3">
        <Button size="icon" variant="secondary" onClick={toggle} aria-label="Play/Pause">
          {paused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
        </Button>
        {title && <span className="truncate text-sm text-muted-foreground">{title}</span>}
      </div>
    </div>
  )
}