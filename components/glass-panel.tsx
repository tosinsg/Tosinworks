import type { CSSProperties, ReactNode } from "react"

export function GlassPanel({
  className = "",
  style,
  children,
}: {
  className?: string
  style?: CSSProperties
  children?: ReactNode
}) {
  return (
    <div className={`glass ${className}`} style={style}>
      <span className="glass-sheen" />
      {children}
    </div>
  )
}

export function GlassLink({
  href,
  className = "",
  style,
  children,
  target,
  rel,
}: {
  href: string
  className?: string
  style?: CSSProperties
  children?: ReactNode
  target?: string
  rel?: string
}) {
  return (
    <a href={href} target={target} rel={rel} className={`glass ${className}`} style={style}>
      <span className="glass-sheen" />
      {children}
    </a>
  )
}
