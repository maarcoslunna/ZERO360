import Logo from './Logo.jsx'
export default function Footer() {
  return (
    <footer className="footer">
      <Logo light size={34} />
      <nav className="footer__nav">
        <a href="#/diseno-web">Diseño web</a><a href="#/marketing-digital">Marketing digital</a>
        <a href="#/sobre-nosotros">Sobre nosotros</a><a href="#/contacto">Contacto</a>
      </nav>
      <a href="mailto:info.zero360@gmail.com">info.zero360@gmail.com</a>
      <a href="https://instagram.com/zero360.es" target="_blank" rel="noreferrer">@zero360.es</a>
      <small>© 2026 ZERO360 — Todo empieza en cero.</small>
    </footer>
  )
}
