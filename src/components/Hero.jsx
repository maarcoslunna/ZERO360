import HeroVisual from './HeroVisual.jsx'
import DotField from './DotField.jsx'
export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <DotField target=".hv" />
      <div className="hero__meta hero__meta--l"><span>01 / ZERO</span><span>DIGITAL STUDIO</span></div>
      <div className="hero__meta hero__meta--r"><span>WEB / ECOMMERCE / SEO</span><span>EST. 2026</span></div>
      <div className="hero__grid">
        <div className="hero__copy">
          <h1>
            <span className="ln"><b>EMPIEZA DESDE</b></span>
            <span className="ln"><b>CERO.</b></span>
            <span className="ln ln--r"><b>LLEGA A 360°.</b></span>
          </h1>
          <p className="hero__sub">Diseñamos webs, ecommerce y experiencias digitales que convierten ideas en negocios preparados para crecer.</p>
          <div className="hero__ctas">
            <a href="#/contacto" className="btn btn--red">CREAR MI PROYECTO <span>→</span></a>
            <a href="#proyectos" className="btn btn--ghost">VER NUESTROS PROYECTOS</a>
          </div>
        </div>
        <HeroVisual />
      </div>
      <div className="hero__scroll"><span>SCROLL TO EXPLORE</span><i /></div>
    </section>
  )
}
