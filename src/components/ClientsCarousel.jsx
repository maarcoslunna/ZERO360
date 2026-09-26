import { useEffect, useState } from 'react'
import Stars from './Stars.jsx'
import { reviews } from '../data/plans.js'
import { getLocalReviews } from '../data/localReviews.js'
export default function ClientsCarousel() {
  const [all, setAll] = useState(reviews)
  useEffect(() => { setAll([...getLocalReviews(), ...reviews]) }, [])
  const avg = Math.round((all.reduce((s, r) => s + r.v, 0) / all.length) * 10) / 10
  const row = [...all, ...all]
  return (
    <section className="clients" aria-label="Opiniones de clientes">
      <div className="clients__head">
        <h2 data-r>EMPEZARON<br />DESDE CERO.</h2>
        <div data-r>
          <p>Negocios reales, resultados reales. Esto dicen quienes ya han confiado en ZERO360.</p>
          <div className="clients__score"><strong>{String(avg).replace('.', ',')}</strong><div><Stars v={avg} /><small>{all.length} valoraciones</small></div></div>
        </div>
      </div>
      <div className="clients__track">
        {row.map((r, i) => (
          <figure className="tc" key={i} aria-hidden={i >= all.length}>
            <Stars v={r.v} />
            <blockquote>“{r.q}”</blockquote>
            <figcaption><span className="tc__av">{r.a[0]}</span><b>{r.a}</b></figcaption>
          </figure>
        ))}
      </div>
      <div className="clients__cta" data-r>
        <div><strong>¿Has trabajado con nosotros?</strong><p>Cuéntanos qué tal ha ido, se tarda menos de un minuto.</p></div>
        <a href="#/valorar" className="btn btn--red">DEJAR UNA VALORACIÓN <span>→</span></a>
      </div>
    </section>
  )
}
