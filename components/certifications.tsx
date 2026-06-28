import Reveal from "@/components/reveal"
import { GlassPanel } from "@/components/glass-panel"
import { CERTIFICATIONS } from "@/lib/content"

export default function Certifications() {
  return (
    <section id="certifications" className="container-custom section-padding">
      <Reveal>
        <div className="eyebrow" style={{ textAlign: "center" }}>
          Certifications &amp; Awards
        </div>
        <h2 style={{ fontSize: 30, textAlign: "center" }}>Recognition</h2>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 22, marginTop: 46 }} className="responsive-grid">
        {CERTIFICATIONS.map(([title, desc, year], i) => (
          <Reveal key={title} delay={i * 0.08}>
            <GlassPanel style={{ padding: 26 }}>
              <div style={{ fontSize: 12, fontFamily: "JetBrains Mono, monospace", color: "#9a9a96", marginBottom: 8 }}>{year}</div>
              <h3 style={{ fontSize: 16, marginBottom: 8 }}>{title}</h3>
              <p style={{ color: "#9a9a96", fontSize: 13.5, lineHeight: 1.6 }}>{desc}</p>
            </GlassPanel>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
