import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
export default function Navbar() {
  const [s, setS] = useState(false)
  const [open, setOpen] = useState(false)
  const [p, setP] = useState(0)
  useEffect(() => {
    const f = () => { setS(window.scrollY > 40); const m = document.documentElement.scrollHeight - window.innerHeight; setP(m > 0 ? Math.min(window.scrollY / m, 1) : 0) }
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <header className={'nav' + (s ? ' nav--s' : '')}>
      <div className="nav__in">
        <Logo />
        <nav className={'nav__links' + (open ? ' open' : '')} onClick={e => e.target.closest('a') && setOpen(false)}>
          <a href="#/">Inicio</a>
          <a href="#/proyectos">Proyectos</a>
          <div className="nav__dd">
            <button type="button" aria-haspopup="true">Servicios <em>▾</em></button>
            <div className="nav__menu">
              <a href="#/diseno-web">Diseño web</a>
              <a href="#/marketing-digital">Marketing digital</a>
            </div>
          </div>
          <a href="#/sobre-nosotros">Sobre nosotros</a>
          <a href="#/contacto">Contacto</a>
          <a href="#/contacto" className="nav__cta nav__cta--m">HABLEMOS →</a>
        </nav>
        <a href="#/contacto" className="nav__cta nav__cta--d">HABLEMOS <span>→</span></a>
        <button className={'nav__burger' + (open ? ' open' : '')} aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /></button>
      </div>
      <i className="nav__bar" style={{ transform: `scaleX(${p})` }} />
    </header>
  )
}
