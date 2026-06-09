import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/theme/mode-toggle"

function App() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center gap-4 bg-background text-foreground">
      <div className="absolute end-4 top-4">
        <ModeToggle />
      </div>
      <h1 className="text-2xl font-semibold">Feryar</h1>
      <Button>It works</Button>
    </div>
  )
}

export default App