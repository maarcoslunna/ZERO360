import { useEffect, useRef } from 'react'
// Campo de puntos con un "radar" de 360° que barre desde el centro y reacciona al mouse.
export default function DotField({ target = '', fx = 0.75, fy = 0.5, gap = 30 }) {
  const ref = useRef(null)
  useEffect(() => {
    const cv = ref.current, ctx = cv.getContext('2d'), host = cv.parentElement
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches
    const TAU = Math.PI * 2
    let w = 0, h = 0, raf = 0, on = true
    const m = { x: -999, y: -999, sx: -999, sy: -999 }
    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = host.clientWidth; h = host.clientHeight
      cv.width = w * dpr; cv.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    const move = e => { const r = host.getBoundingClientRect(); m.x = e.clientX - r.left; m.y = e.clientY - r.top }
    const leave = () => { m.x = m.y = -999 }
    const draw = t => {
      ctx.clearRect(0, 0, w, h)
      let cx = w * fx, cy = h * fy
      const el = target ? host.querySelector(target) : null
      if (el) { const a = el.getBoundingClientRect(), b = host.getBoundingClientRect(); cx = a.left - b.left + a.width / 2; cy = a.top - b.top + a.height / 2 }
      m.sx += (m.x - m.sx) * 0.15; m.sy += (m.y - m.sy) * 0.15
      const ang = (t / 1000) * 0.7, R = Math.min(w * 0.55, 640)
      for (let x = gap / 2; x < w; x += gap) {
        for (let y = gap / 2; y < h; y += gap) {
          const dx = x - cx, dy = y - cy
          let diff = (ang - Math.atan2(dy, dx)) % TAU
          if (diff < 0) diff += TAU
          const k = Math.exp(-diff * 2.2) * Math.max(0, 1 - Math.hypot(dx, dy) / R)
          const mk = Math.max(0, 1 - Math.hypot(x - m.sx, y - m.sy) / 130)
          const s = Math.max(k, mk)
          ctx.fillStyle = s > 0.04 ? `rgba(150,9,11,${0.2 + s * 0.75})` : 'rgba(28,28,28,.14)'
          ctx.beginPath(); ctx.arc(x, y, 1.1 + s * 2.2, 0, TAU); ctx.fill()
        }
      }
      if (on && !still) raf = requestAnimationFrame(draw)
    }
    const ro = new ResizeObserver(() => { size(); if (still) draw(1500) })
    ro.observe(host)
    const io = new IntersectionObserver(([e]) => {
      on = e.isIntersecting; cancelAnimationFrame(raf)
      if (on) raf = requestAnimationFrame(draw)
    })
    io.observe(host)
    host.addEventListener('mousemove', move); host.addEventListener('mouseleave', leave)
    size(); raf = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); host.removeEventListener('mousemove', move); host.removeEventListener('mouseleave', leave) }
  }, [target, fx, fy, gap])
  return <canvas ref={ref} className="dots" aria-hidden="true" />
}
