import Reveal from "@/components/reveal"
import { GlassPanel } from "@/components/glass-panel"
import { EDUCATION } from "@/lib/content"

export default function Education() {
  return (
    <section id="education" className="container-custom section-padding">
      <Reveal>
        <div className="eyebrow" style={{ textAlign: "center" }}>
          Education
        </div>
        <h2 style={{ fontSize: 30, textAlign: "center" }}>Academic Journey</h2>
      </Reveal>
      <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 46, maxWidth: 800, marginLeft: "auto", marginRight: "auto" }}>
        {EDUCATION.map(([inst, deg, loc, period, current], i) => (
          <Reveal key={inst} delay={i * 0.08}>
            <GlassPanel id={`edu-${i}`} style={{ padding: 26 }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                <div>
                  <h3 style={{ fontSize: 16 }}>{inst}</h3>
                  <p style={{ color: "#9a9a96", fontSize: 14, marginTop: 4 }}>{deg}</p>
                  <p style={{ color: "#7a7a76", fontSize: 12.5, marginTop: 4, fontFamily: "JetBrains Mono, monospace" }}>{loc}</p>
                </div>
                <div
                  style={{
                    fontSize: 12.5,
                    color: current ? "#f3f3f0" : "#7a7a76",
                    fontFamily: "JetBrains Mono, monospace",
                    whiteSpace: "nowrap",
                  }}
                >
                  {period}
                </div>
              </div>
            </GlassPanel>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
