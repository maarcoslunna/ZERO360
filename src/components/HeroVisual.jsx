import { useRef } from 'react'
const ticks = Array.from({ length: 72 }, (_, i) => i)
export default function HeroVisual() {
  const ref = useRef(null)
  const move = e => {
    const b = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--mx', ((e.clientX - b.left) / b.width - 0.5).toFixed(3))
    ref.current.style.setProperty('--my', ((e.clientY - b.top) / b.height - 0.5).toFixed(3))
  }
  const reset = () => { ref.current.style.setProperty('--mx', 0); ref.current.style.setProperty('--my', 0) }
  return (
    <div className="hv" ref={ref} onMouseMove={move} onMouseLeave={reset} aria-hidden="true">
      <svg viewBox="-210 -210 420 420" className="hv__svg">
        <g className="hv__l hv__l1">
          <circle r="190" fill="none" stroke="currentColor" strokeWidth="1" />
          {ticks.map(i => (
            <line key={i} y1="-190" y2={i % 6 === 0 ? -172 : -182} stroke="currentColor" strokeWidth={i % 6 === 0 ? 1.4 : 0.6} transform={`rotate(${i * 5})`} />
          ))}
        </g>
        <g className="hv__l hv__l2" fill="none" stroke="currentColor" strokeWidth="0.8">
          <ellipse rx="150" ry="52" /><ellipse rx="150" ry="52" transform="rotate(60)" /><ellipse rx="150" ry="52" transform="rotate(120)" />
        </g>
        <g className="hv__l hv__l3">
          <circle r="110" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 6" />
          <circle cx="110" r="7" fill="#96090B" />
        </g>
        <g className="hv__l hv__l4"><circle cx="-150" r="4" fill="currentColor" /></g>
        <circle r="46" fill="none" stroke="#fff" strokeWidth="12" />
        <line x1="-210" x2="210" stroke="currentColor" strokeWidth="0.5" /><line y1="-210" y2="210" stroke="currentColor" strokeWidth="0.5" />
      </svg>
      <span className="hv__tag hv__tag--a">0°</span><span className="hv__tag hv__tag--b">180°</span><span className="hv__tag hv__tag--c">360°</span>
    </div>
  )
}
