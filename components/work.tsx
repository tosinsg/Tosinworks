import Reveal from "@/components/reveal"
import { GlassPanel, GlassLink } from "@/components/glass-panel"
import { PROJECTS } from "@/lib/content"

export default function Work() {
  return (
    <section id="work" className="container-custom section-padding">
      <Reveal>
        <div className="eyebrow" style={{ textAlign: "center" }}>
          Selected Work
        </div>
        <h2 style={{ fontSize: 30, textAlign: "center" }}>Projects &amp; Upcoming Ideas</h2>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 22, marginTop: 46 }} className="responsive-grid">
        {PROJECTS.map(([title, desc, tech], i) => (
          <Reveal key={title} delay={i * 0.08}>
            <GlassPanel style={{ padding: 26 }}>
              <h3 style={{ fontSize: 17, marginBottom: 8 }}>{title}</h3>
              <p style={{ color: "#9a9a96", fontSize: 14, lineHeight: 1.6, marginBottom: 12 }}>{desc}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {(tech as readonly string[]).map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 11,
                      fontFamily: "JetBrains Mono, monospace",
                      padding: "4px 10px",
                      borderRadius: 99,
                      background: "rgba(255,255,255,.06)",
                      border: "1px solid rgba(255,255,255,.1)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </GlassPanel>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <div style={{ textAlign: "center", marginTop: 36 }}>
          <GlassLink
            href="https://github.com/tosinsg"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ color: "#f3f3f0" }}
          >
            See all projects on GitHub →
          </GlassLink>
        </div>
      </Reveal>
    </section>
  )
}
