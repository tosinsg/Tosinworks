"use client"

import Reveal from "@/components/reveal"
import { GlassPanel } from "@/components/glass-panel"

export default function About() {
  return (
    <section id="about" className="container-custom section-padding">
      <div className="about-grid" style={{ display: "grid", gridTemplateColumns: ".8fr 1.2fr", gap: 50, alignItems: "center" }}>
        {/* Hidden until this section scrolls into view, then fades in.
            Same plain treatment as Hero — no glass, no lighting. */}
        <Reveal>
          <div style={{ maxWidth: 420, aspectRatio: "4/5", position: "relative" }}>
            <img
              src="/images/tosin-profile.png"
              alt="Olulana Tosin"
              className="portrait-plain"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="eyebrow">About</div>
          <h2 style={{ fontSize: 30, marginBottom: 16 }}>Creative Developer &amp; Designer</h2>
          <p style={{ color: "#9a9a96", lineHeight: 1.7, maxWidth: 500, marginBottom: 16 }}>
            I am a passionate full-stack developer and UI/UX designer with certifications from prestigious
            organizations like BrightChamps. My journey in technology has been marked by innovation and
            excellence, earning me top awards in science and robotics.
          </p>
          <p style={{ color: "#9a9a96", lineHeight: 1.7, maxWidth: 500, marginBottom: 20 }}>
            With expertise in web development, app creation, and bot design, I bring a unique blend of
            technical skill and creative vision to every project I undertake.
          </p>
          <GlassPanel style={{ padding: 22 }}>
            <div style={{ fontWeight: 600, marginBottom: 6 }}>My Mission</div>
            <p style={{ fontStyle: "italic", color: "#cfcfcb", fontSize: 14.5 }}>
              &quot;I aim to help create a better future for now and the next — making life a better place
              with impactful tech solutions.&quot;
            </p>
          </GlassPanel>
        </Reveal>
      </div>
    </section>
  )
}
