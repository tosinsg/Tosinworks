// Shared registry of DOM elements that should cast real 3D shadows.
// Glass cards, buttons, and the nav pill register here.
// Portraits intentionally do NOT use this — per direction, the hero/about
// photos sit plainly on the page with no spotlight/shadow interaction.

export type CasterRegistry = Map<string, HTMLElement>

export const casterRegistry: CasterRegistry = new Map()

export function registerCaster(id: string, el: HTMLElement | null) {
  if (el) {
    casterRegistry.set(id, el)
  } else {
    casterRegistry.delete(id)
  }
}
