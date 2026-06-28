import Reveal from "@/components/reveal"
import { GlassLink } from "@/components/glass-panel"
import { SOCIALS } from "@/lib/content"

export default function Contact() {
  return (
    <footer
      className="container-custom"
      style={{ paddingTop: 80, paddingBottom: 100, borderTop: "1px solid rgba(255,255,255,.08)", position: "relative", zIndex: 2 }}
    >
      <Reveal>
        <div className="eyebrow">Get in touch</div>
        <h2 style={{ fontSize: 30, maxWidth: 500 }}>Have a project in mind? Let&apos;s build it.</h2>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 30 }}>
          {SOCIALS.map(([label, href], i) => (
            <GlassLink
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ color: "#f3f3f0", fontFamily: "JetBrains Mono, monospace", fontSize: 13 }}
            >
              {label} →
            </GlassLink>
          ))}
        </div>
      </Reveal>
    </footer>
  )
}
