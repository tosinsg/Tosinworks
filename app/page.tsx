import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Work from "@/components/work"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Certifications from "@/components/certifications"
import Blog from "@/components/blog"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <Skills />
      <Education />
      <Certifications />
      <Blog />
      <Contact />
    </main>
  )
}
