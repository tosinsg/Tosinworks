import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./globals.css"
import Starfield from "@/components/starfield"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Olulana Tosin — Full-Stack Developer & UI/UX Designer",
  description: "Portfolio of Olulana Tosin: full-stack developer, UI/UX designer, tech educator, bot & app creator.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Starfield />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
