import Reveal from "@/components/reveal"
import { GlassPanel } from "@/components/glass-panel"
import { SERVICES } from "@/lib/content"

export default function Services() {
  return (
    <section id="services" className="container-custom section-padding">
      <Reveal>
        <div className="eyebrow" style={{ textAlign: "center" }}>
          Services
        </div>
        <h2 style={{ fontSize: 30, textAlign: "center" }}>What I Do</h2>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22, marginTop: 46 }} className="responsive-grid">
        {SERVICES.map(([title, desc], i) => (
          <Reveal key={title} delay={i * 0.08}>
            <GlassPanel id={`svc-${i}`} style={{ padding: 26 }}>
              <h3 style={{ fontSize: 17, marginBottom: 8 }}>{title}</h3>
              <p style={{ color: "#9a9a96", fontSize: 14, lineHeight: 1.6 }}>{desc}</p>
            </GlassPanel>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
