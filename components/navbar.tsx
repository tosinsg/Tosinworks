"use client"

import { useState, useEffect, useCallback } from "react"
import { registerCaster } from "@/lib/lighting"
import { NAV } from "@/lib/content"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      document.body.classList.toggle("nav-scrolled", window.scrollY > 60)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.body.classList.remove("nav-scrolled")
    }
  }, [])

  const pillRef = useCallback((el: HTMLDivElement | null) => {
    registerCaster("navbar-pill", el)
  }, [])

  return (
    <>
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 70 }}>
        <div className="container-custom">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 80 }}>
            <a href="#home" style={{ fontWeight: 700, fontSize: 18 }}>
              Tosin<span style={{ color: "#9a9a96" }}>.olulana</span>
            </a>

            <nav className="nav-flat nav-flat-wrap" style={{ display: "none" }} id="desktop-nav">
              {NAV.map(([label, href]) => (
                <a key={label} href={href}>
                  {label}
                </a>
              ))}
            </nav>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              style={{
                display: "inline-flex",
                background: "transparent",
                border: "none",
                color: "#f3f3f0",
                cursor: "pointer",
              }}
              className="mobile-toggle"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      <div ref={pillRef} className="nav-pill glass">
        <span className="glass-sheen" />
        {NAV.map(([label, href]) => (
          <a key={label} href={href}>
            {label}
          </a>
        ))}
      </div>

      {isOpen && (
        <div
          className="glass"
          style={{ position: "fixed", top: 90, left: 16, right: 16, zIndex: 75, padding: 8 }}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {NAV.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                style={{ padding: "12px 16px", fontSize: 14 }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          #desktop-nav { display: flex !important; align-items: center; gap: 4px; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  )
}
