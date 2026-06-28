"use client"

import { useState, useEffect } from "react"
import { GlassLink } from "@/components/glass-panel"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "I bring ideas to life through code, design, and innovation."
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => setTypedText(fullText.slice(0, typedText.length + 1)), 80)
      return () => clearTimeout(timeout)
    } else {
      setIsTypingComplete(true)
    }
  }, [typedText, fullText])

  return (
    <section
      id="home"
      className="container-custom"
      style={{ paddingTop: 200, paddingBottom: 80, minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", zIndex: 2 }}
    >
      <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 60, alignItems: "center", width: "100%" }}>
        <div>
          <div className="eyebrow">Full-Stack Developer · UI/UX Designer · Tech Educator</div>
          <h1 style={{ fontSize: "clamp(38px,5vw,64px)", lineHeight: 1.08, fontWeight: 600 }}>
            Hi, I&apos;m Olulana Tosin —{" "}
            <span style={{ color: "#9a9a96" }}>
              {typedText}
              <span
                style={{
                  display: "inline-block",
                  width: 2,
                  height: "1em",
                  background: "currentColor",
                  marginLeft: 4,
                  animation: isTypingComplete ? "blink 1s step-end infinite" : "none",
                }}
              />
            </span>
          </h1>
          <p style={{ color: "#9a9a96", fontSize: 17, marginTop: 20, maxWidth: 480, lineHeight: 1.6 }}>
            Full-stack Developer · UI/UX Designer · Tech Educator · Bot &amp; App Creator
          </p>
          <div style={{ display: "flex", gap: 16, marginTop: 34, flexWrap: "wrap" }}>
            <a href="#contact" className="btn btn-primary">
              Let&apos;s Collaborate
            </a>
            <GlassLink href="#work" className="btn" style={{ color: "#f3f3f0" }}>
              View My Projects →
            </GlassLink>
          </div>
        </div>

        {/* Plain portrait. No glass wrapper, no shadow caster, no lighting
            interaction — it just sits on the page, blending into the
            dark background via its own transparent cutout. */}
        <div style={{ maxWidth: 340, margin: "0 auto", aspectRatio: "4/5", position: "relative" }}>
          <img
            src="/images/tosin-profile.png"
            alt="Olulana Tosin"
            className="portrait-plain"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>

      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </section>
  )
}
