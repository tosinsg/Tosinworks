import Reveal from "@/components/reveal"
import { GlassPanel } from "@/components/glass-panel"
import { SKILLS } from "@/lib/content"

export default function Skills() {
  return (
    <section id="skills" className="container-custom section-padding">
      <Reveal>
        <div className="eyebrow" style={{ textAlign: "center" }}>
          Skills
        </div>
        <h2 style={{ fontSize: 30, textAlign: "center" }}>Foundations</h2>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 22, marginTop: 46 }} className="responsive-grid">
        {SKILLS.map(([category, items], i) => (
          <Reveal key={category as string} delay={i * 0.08}>
            <GlassPanel id={`skill-${i}`} style={{ padding: 26 }}>
              <h3
                style={{
                  fontSize: 16,
                  marginBottom: 16,
                  color: "#9a9a96",
                  fontFamily: "JetBrains Mono, monospace",
                  letterSpacing: ".04em",
                }}
              >
                {category}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {(items as readonly (readonly [string, number])[]).map(([name, level]) => (
                  <div key={name}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13.5, marginBottom: 6 }}>
                      <span>{name}</span>
                      <span style={{ color: "#9a9a96" }}>{level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{ width: `${level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
