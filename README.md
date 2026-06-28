# Liquid Glass Portfolio

Minimal Next.js project. Dependencies are deliberately small:
next, react, react-dom, three, framer-motion, lucide-react — no shadcn/Radix.

## Run

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Structure

- `components/light-rig.tsx` — real Three.js spotlight rig + shadow-map shadows for glass surfaces
- `components/glass-panel.tsx` — the one reusable glass primitive (GlassPanel / GlassLink)
- `components/starfield.tsx` — writes the star background directly onto `<body>`
- `components/hero.tsx`, `about.tsx`, etc. — the 9 sections
- `lib/lighting.ts` — shared shadow-caster registry
- `lib/content.ts` — all real copy/data in one place

## Notes

- Hero and About portraits are plain images — no glass, no lighting/shadow
  interaction, by design. About's portrait only fades in once scrolled
  into view (see `components/reveal.tsx`).
- Shadow casting for glass cards is skipped on screens under 768px for
  performance; the glass look itself stays.
