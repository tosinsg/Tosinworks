// Plain, visible DOM dots. No box-shadow trick, no background-image
// trick, no JS writing to document.body — those each broke in
// different ways. This is the dumbest, most bulletproof version:
// real elements, real inline styles, nothing clever that can
// silently fail to render.
//
// Deterministic positions (seeded by index) so server and client
// render the exact same markup — no hydration mismatch warnings.

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

const STAR_COUNT = 130

const stars = Array.from({ length: STAR_COUNT }, (_, i) => {
  const top = seededRandom(i * 12.9898) * 100
  const left = seededRandom(i * 78.233) * 100
  const size = 1 + seededRandom(i * 37.719) * 1.6
  const opacity = 0.4 + seededRandom(i * 94.321) * 0.5
  return { top, left, size, opacity }
})

export default function Starfield() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {stars.map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            opacity: s.opacity,
          }}
        />
      ))}
    </div>
  )
}
