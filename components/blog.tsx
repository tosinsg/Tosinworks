import Reveal from "@/components/reveal"
import { GlassPanel } from "@/components/glass-panel"
import { BLOG_POSTS } from "@/lib/content"

export default function Blog() {
  return (
    <section id="blog" className="container-custom section-padding">
      <Reveal>
        <div className="eyebrow" style={{ textAlign: "center" }}>
          Blog
        </div>
        <h2 style={{ fontSize: 30, textAlign: "center" }}>Notes &amp; Writing</h2>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22, marginTop: 46 }} className="responsive-grid">
        {BLOG_POSTS.map(([title, desc, readTime], i) => (
          <Reveal key={title} delay={i * 0.08}>
            <GlassPanel id={`blog-${i}`} style={{ padding: 26 }}>
              <h3 style={{ fontSize: 16, marginBottom: 8 }}>{title}</h3>
              <p style={{ color: "#9a9a96", fontSize: 13.5, lineHeight: 1.6, marginBottom: 10 }}>{desc}</p>
              <span style={{ fontSize: 11.5, fontFamily: "JetBrains Mono, monospace", color: "#7a7a76" }}>{readTime}</span>
            </GlassPanel>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
