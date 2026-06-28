"use client"

import { useEffect } from "react"

// Stars are written directly onto document.body's own backgroundImage.
// This is deliberate: a separate floating layer depends on z-index
// stacking behaving a particular way. Baking it into body's own
// background guarantees nothing can paint over it, because it's part
// of the same box everything else already renders correctly against.
export default function Starfield() {
  useEffect(() => {
    const layer = (count: number, minR: number, maxR: number, alpha: number) =>
      Array.from({ length: count }, () => {
        const x = (Math.random() * 100).toFixed(2)
        const y = (Math.random() * 100).toFixed(2)
        const r = (minR + Math.random() * (maxR - minR)).toFixed(2)
        return `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,${alpha}) 0px, rgba(255,255,255,${alpha}) ${r}px, transparent ${r}px)`
      }).join(",")

    const stars = `${layer(90, 0.6, 1.1, 0.85)},${layer(160, 0.3, 0.7, 0.6)}`
    document.body.style.backgroundImage = stars
    document.body.style.backgroundAttachment = "fixed"
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "100% 100%"
  }, [])

  return null
}
