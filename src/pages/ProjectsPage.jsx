import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { projects } from '../data/projects.js'

function Gallery({ images, onOpen }) {
  return (
    <div className="ppage__gal">
      {images.map((im, i) => (
        <button key={im.src} type="button" onClick={() => onOpen(i)} aria-label={'Ampliar: ' + im.alt}>
          <img src={im.src} alt={im.alt} loading="lazy" />
        </button>
      ))}
    </div>
  )
}

export default function ProjectsPage() {
  const [lb, setLb] = useState(null) // { pi, ii }
  useEffect(() => {
    if (!lb) return
    const k = e => {
      if (e.key === 'Escape') setLb(null)
      const imgs = projects[lb.pi].images
      if (e.key === 'ArrowRight') setLb({ pi: lb.pi, ii: (lb.ii + 1) % imgs.length })
      if (e.key === 'ArrowLeft') setLb({ pi: lb.pi, ii: (lb.ii - 1 + imgs.length) % imgs.length })
    }
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [lb])
  const current = lb && projects[lb.pi].images[lb.ii]
  const move = d => setLb(({ pi, ii }) => { const n = projects[pi].images.length; return { pi, ii: (ii + d + n) % n } })

  return (
    <>
      <PageHeader title="NUESTROS PROYECTOS." text={`${projects.length} proyectos hechos desde cero, con web propia, imágenes y todo lo que hay detrás.`} />
      <section className="ppage">
        {projects.map((p, i) => (
          <article className={'ppage__item' + (i % 2 ? ' rev' : '')} id={p.slug} key={p.slug}>
            <div className="ppage__media" data-r>
              <img src={p.cover} alt={'Portada de ' + p.name} style={{ objectPosition: p.pos }} loading="lazy" />
            </div>
            <div className="ppage__body" data-r>
              <span className="ppage__type">{p.type}</span>
              <div className="ppage__title">
                <span className="ppage__n">{String(i + 1).padStart(2, '0')}</span>
                <h2>{p.name}</h2>
              </div>
              {p.text.map(t => <p key={t}>{t}</p>)}
              <ul className="ppage__feats">{p.feats.map(f => <li key={f}>{f}</li>)}</ul>
              <Gallery images={p.images} onOpen={ii => setLb({ pi: i, ii })} />
              <a href={'#/proyecto/' + p.slug} className="btn btn--ghost">FICHA COMPLETA <span>→</span></a>
            </div>
          </article>
        ))}
        <div className="ppage__end" data-r>
          <h3>¿Tu proyecto es el siguiente?</h3>
          <a href="#/contacto" className="btn btn--red">CREAR MI PROYECTO <span>→</span></a>
        </div>
      </section>
      {current && (
        <div className="lb" role="dialog" aria-label={current.alt} onClick={() => setLb(null)}>
          <button type="button" className="lb__x" aria-label="Cerrar" onClick={() => setLb(null)}>×</button>
          <button type="button" className="lb__p" aria-label="Anterior" onClick={e => { e.stopPropagation(); move(-1) }}>‹</button>
          <img src={current.src} alt={current.alt} onClick={e => e.stopPropagation()} />
          <button type="button" className="lb__n" aria-label="Siguiente" onClick={e => { e.stopPropagation(); move(1) }}>›</button>
          <p className="lb__cap" onClick={e => e.stopPropagation()}>{current.cap}</p>
        </div>
      )}
    </>
  )
}
