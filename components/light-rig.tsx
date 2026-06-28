"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { casterRegistry } from "@/lib/lighting"

/**
 * LightRig — the site's signature feature.
 *
 * Two real THREE.SpotLight fixtures (visible 3D housing + lens + beam +
 * mounting bracket), mounted top-left/top-right, fixed to the viewport.
 * On load they rotate from pointing straight up to their resting angle,
 * intensity ramping in, like a motor powering on.
 *
 * Every glass surface on the page (see lib/lighting.ts) registers an
 * invisible 3D box that mirrors its real screen position every frame.
 * Those boxes cast real shadow-map shadows onto a floor plane behind
 * the page. Portraits intentionally do NOT participate in this system —
 * they sit on the page plainly, by design.
 *
 * Mount this ONCE near the root of the app (app/layout.tsx).
 */
export default function LightRig() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const isMobile = window.innerWidth < 768

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 2))
    renderer.setClearColor(0x000000, 0)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x000000, 0.045)

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.set(0, 0, 12)

    function setSize() {
      const w = window.innerWidth
      const h = window.innerHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    setSize()

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(80, 80),
      new THREE.MeshStandardMaterial({ color: 0x121212, roughness: 1, metalness: 0 })
    )
    floor.position.z = -5
    floor.receiveShadow = true
    scene.add(floor)
    scene.add(new THREE.AmbientLight(0xffffff, 0.04))

    function makeFixture(xSign: number) {
      const group = new THREE.Group()
      group.position.set(xSign * 6.2, 8.5, 5.5)
      group.rotation.z = xSign * 0.18

      const housing = new THREE.Mesh(
        new THREE.CylinderGeometry(0.32, 0.42, 1.4, 24),
        new THREE.MeshStandardMaterial({ color: 0x0a0a0a, metalness: 0.85, roughness: 0.3 })
      )
      housing.rotation.x = Math.PI / 2
      group.add(housing)

      const bracketMat = new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.7, roughness: 0.4 })
      const yoke = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.5, 0.08), bracketMat)
      yoke.position.set(0, 0.32, 0)
      group.add(yoke)
      const plate = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.06, 0.32), bracketMat)
      plate.position.set(0, 0.58, 0)
      group.add(plate)

      const lens = new THREE.Mesh(
        new THREE.CircleGeometry(0.3, 24),
        new THREE.MeshStandardMaterial({ color: 0xf2f2f2, emissive: 0xeeeeee, emissiveIntensity: 0, roughness: 0.2 })
      )
      lens.position.z = -0.72
      group.add(lens)

      const beam = new THREE.Mesh(
        new THREE.ConeGeometry(2.6, 9, 24, 1, true),
        new THREE.MeshBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      )
      beam.rotation.x = -Math.PI / 2
      beam.position.z = -5.2
      group.add(beam)

      scene.add(group)

      const aim = new THREE.Object3D()
      aim.position.set(0, 0, -7)
      group.add(aim)

      const spot = new THREE.SpotLight(0xffffff, 0, 45, Math.PI / 8, 0.45, 1.4)
      spot.castShadow = true
      spot.shadow.mapSize.set(isMobile ? 512 : 1024, isMobile ? 512 : 1024)
      spot.shadow.camera.near = 1
      spot.shadow.camera.far = 40
      spot.target = aim
      group.add(spot)

      return { group, spot, lens, beam, startX: -1.45, endX: xSign * -0.42 }
    }

    const left = makeFixture(-1)
    const right = makeFixture(1)
    ;[left, right].forEach((f) => (f.group.rotation.x = f.startX))

    const t0 = performance.now()
    const DUR = 1700
    function easeOutBack(x: number) {
      const c1 = 1.4
      const c3 = c1 + 1
      return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2)
    }

    const casterMeshes = new Map<string, THREE.Mesh>()
    const distCard = camera.position.z
    function worldSizeAt(dist: number) {
      const h = 2 * Math.tan((camera.fov * Math.PI) / 360) * dist
      return { w: h * camera.aspect, h }
    }

    // getBoundingClientRect forces a layout read. Doing that for every
    // glass card on every single animation frame (60x/sec) is what was
    // causing the lag. Instead, only re-measure when something that
    // could actually move a card fires: scroll, resize, or a periodic
    // safety-net tick (catches late-loading fonts/images shifting layout).
    let dirty = true
    const markDirty = () => { dirty = true }
    window.addEventListener("scroll", markDirty, { passive: true })
    window.addEventListener("resize", markDirty)
    const safetyNet = window.setInterval(markDirty, 500)

    function syncCasters() {
      const { w: ww, h: wh } = worldSizeAt(distCard)
      const seen = new Set<string>()
      casterRegistry.forEach((el, id) => {
        const r = el.getBoundingClientRect()
        if (r.width === 0 || r.height === 0) return
        seen.add(id)
        let mesh = casterMeshes.get(id)
        if (!mesh) {
          mesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 0.25),
            new THREE.MeshStandardMaterial({ color: 0x000000, transparent: true, opacity: 0.04 })
          )
          mesh.castShadow = true
          scene.add(mesh)
          casterMeshes.set(id, mesh)
        }
        const cx = (r.left + r.width / 2) / window.innerWidth - 0.5
        const cy = (r.top + r.height / 2) / window.innerHeight - 0.5
        mesh.position.set(cx * ww, -cy * wh, 0)
        mesh.scale.set(
          Math.max((r.width / window.innerWidth) * ww, 0.01),
          Math.max((r.height / window.innerHeight) * wh, 0.01),
          1
        )
      })
      casterMeshes.forEach((mesh, id) => {
        if (!seen.has(id)) {
          scene.remove(mesh)
          mesh.geometry.dispose()
          ;(mesh.material as THREE.Material).dispose()
          casterMeshes.delete(id)
        }
      })
    }

    let raf: number
    function animate() {
      const elapsed = performance.now() - t0
      const p = Math.min(elapsed / DUR, 1)
      const eased = easeOutBack(p)
      ;[left, right].forEach((f) => {
        f.group.rotation.x = f.startX + (f.endX - f.startX) * eased
        const ramp = Math.min(elapsed / (DUR * 0.8), 1)
        f.spot.intensity = THREE.MathUtils.lerp(0, isMobile ? 18 : 28, ramp)
        ;(f.lens.material as THREE.MeshStandardMaterial).emissiveIntensity = ramp * 1.8
        ;(f.beam.material as THREE.MeshBasicMaterial).opacity = ramp * (isMobile ? 0.05 : 0.09)
      })

      if (!isMobile && dirty) {
        syncCasters()
        dirty = false
      }
      renderer.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }
    animate()

    function onResize() {
      setSize()
    }
    window.addEventListener("resize", onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("scroll", markDirty)
      window.removeEventListener("resize", markDirty)
      window.clearInterval(safetyNet)
      casterMeshes.forEach((m) => {
        m.geometry.dispose()
        ;(m.material as THREE.Material).dispose()
      })
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    />
  )
}
