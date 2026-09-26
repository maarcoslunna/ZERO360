// Sustituir el contenido por <img src="/logo.svg"> cuando tengas el archivo definitivo.
export default function Logo({ light = false, size = 28 }) {
  return (
    <a href="#/" className={'logo' + (light ? ' logo--light' : '')} style={{ fontSize: size }} aria-label="Zero360">
      <span className="logo__word">Zero</span><i className="logo__dot" /><sup>360</sup>
    </a>
  )
}
