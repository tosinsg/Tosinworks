"use client"

import { useCallback, useId, type CSSProperties, type ReactNode } from "react"
import { registerCaster } from "@/lib/lighting"

export function GlassPanel({
  id,
  className = "",
  style,
  children,
}: {
  id?: string
  className?: string
  style?: CSSProperties
  children?: ReactNode
}) {
  const autoId = useId()
  const castId = id ?? autoId
  const ref = useCallback((el: HTMLDivElement | null) => registerCaster(castId, el), [castId])
  return (
    <div ref={ref} className={`glass ${className}`} style={style}>
      <span className="glass-sheen" />
      {children}
    </div>
  )
}

export function GlassLink({
  id,
  href,
  className = "",
  style,
  children,
  target,
  rel,
}: {
  id?: string
  href: string
  className?: string
  style?: CSSProperties
  children?: ReactNode
  target?: string
  rel?: string
}) {
  const autoId = useId()
  const castId = id ?? autoId
  const ref = useCallback((el: HTMLAnchorElement | null) => registerCaster(castId, el), [castId])
  return (
    <a ref={ref} href={href} target={target} rel={rel} className={`glass ${className}`} style={style}>
      <span className="glass-sheen" />
      {children}
    </a>
  )
}
