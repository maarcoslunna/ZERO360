import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { projects } from '../data/projects.js'
export default function Project({ slug }) {
  const [open, setOpen] = useState(null)
  useEffect(() => {
    if (!open) return
    const k = e => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [open])
  const i = projects.findIndex(p => p.slug === slug)
  const p = projects[i]
  if (!p) return <PageHeader title="PROYECTO NO ENCONTRADO." text="Vuelve a la lista de proyectos." />
  const next = projects[(i + 1) % projects.length]
  return (
    <>
      <PageHeader title={p.name} text={p.summary} />
      <section className="psec pj">
        <dl data-r>{p.info.map(([t, v]) => <div key={t}><dt>{t}</dt><dd>{v}</dd></div>)}</dl>
        <div className="pj__txt" data-r>{p.text.map(t => <p key={t}>{t}</p>)}</div>
      </section>
      <section className="psec psec--t">
        <h2 className="ph2" data-r>QUÉ INCLUYE.</h2>
        <ul className="do">{p.feats.map(f => <li key={f} data-r>{f}</li>)}</ul>
      </section>
      <section className="psec psec--t">
        <h2 className="ph2" data-r>EL PROYECTO.</h2>
        <div className="gal">
          {p.images.map(im => (
            <figure key={im.src} data-r>
              <button type="button" onClick={() => setOpen(im)} aria-label={'Ampliar: ' + im.alt}><img src={im.src} alt={im.alt} loading="lazy" /></button>
              <figcaption>{im.cap}</figcaption>
            </figure>
          ))}
        </div>
        <div className="pj__nav">
          <a href="#/proyectos" className="btn btn--ghost">← TODOS LOS PROYECTOS</a>
          <a href={'#/proyecto/' + next.slug} className="btn btn--red">SIGUIENTE: {next.name.toUpperCase()} <span>→</span></a>
        </div>
      </section>
      {open && (
        <div className="lb" role="dialog" aria-label={open.alt} onClick={() => setOpen(null)}>
          <button type="button" aria-label="Cerrar">×</button>
          <img src={open.src} alt={open.alt} />
        </div>
      )}
    </>
  )
}
