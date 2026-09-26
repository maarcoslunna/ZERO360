import ServiceCard from './ServiceCard.jsx'
import { plans } from '../data/plans.js'
export default function Services() {
  return (
    <section className="services" id="servicios">
      <div className="sweep" data-r><span>0°</span><i /><span>360°</span></div>
      <div className="services__head">
        <h2 data-r>TU WEB.<br />DESDE CERO.</h2>
        <p data-r>Desde una landing que convierte hasta un ecommerce completo. Diseñamos, desarrollamos y optimizamos experiencias digitales hechas para crecer.</p>
      </div>
      <div className="services__grid">{plans.map(i => <ServiceCard key={i.n} {...i} />)}</div>
      <div className="mini" data-r>
        <div><strong>¿Necesitas algo diferente?</strong><p>Cuéntanos qué tienes en mente.</p></div>
        <a href="#/contacto" className="btn btn--red">HABLEMOS <span>→</span></a>
      </div>
    </section>
  )
}
