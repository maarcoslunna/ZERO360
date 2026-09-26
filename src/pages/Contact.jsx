import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
const EMAIL = 'info.zero360@gmail.com'
const types = ['Landing page', 'Tienda online', 'Web premium', 'Rediseño o reparación de mi web', 'Marketing digital', 'Auditoría gratuita', 'Otra cosa']
export default function Contact() {
  const [st, setSt] = useState('idle')
  const submit = async e => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    setSt('sending')
    try {
      const r = await fetch('https://formsubmit.co/ajax/' + EMAIL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, _subject: 'Nuevo mensaje desde la web de ZERO360', _template: 'table', _captcha: 'false' }),
      })
      const d = await r.json()
      if (!r.ok || !(d.success === true || d.success === 'true')) { console.error('FormSubmit:', r.status, d); throw new Error('fail') }
      form.reset(); setSt('ok')
    } catch { setSt('error') }
  }
  return (
    <>
      <PageHeader title="CONTACTO." text="Cuéntanos tu idea, tu negocio o tu web antigua. Te respondemos con un plan claro." />
      <section className="psec cgrid">
        <div className="cinfo" data-r>
          <h2>Escríbenos.</h2>
          <p>Rellena el formulario o escríbenos directamente:</p>
          <a className="direct__mail" href={'mailto:' + EMAIL}>{EMAIL}</a>
          <p>Instagram: <a href="https://instagram.com/zero360.es" target="_blank" rel="noreferrer">@zero360.es</a></p>
        </div>
        <div data-r>
          {st === 'ok' ? (
            <div className="fok" role="status"><h3>¡Mensaje enviado!</h3><p>Gracias por escribirnos. Te responderemos lo antes posible.</p><button className="btn btn--ghost" onClick={() => setSt('idle')}>ENVIAR OTRO MENSAJE</button></div>
          ) : (
            <form className="cform" onSubmit={submit}>
              <label>Nombre<input name="nombre" required autoComplete="name" /></label>
              <label>Email<input name="email" type="email" required autoComplete="email" /></label>
              <label>Teléfono<input name="telefono" type="tel" required autoComplete="tel" /></label>
              <label>¿Qué necesitas?<select name="servicio" defaultValue={types[0]}>{types.map(t => <option key={t}>{t}</option>)}</select></label>
              <label className="full">Mensaje<textarea name="mensaje" rows="6" required /></label>
              <input type="text" name="_honey" tabIndex="-1" autoComplete="off" style={{ display: 'none' }} />
              <label className="check full"><input type="checkbox" required /> Acepto que ZERO360 use mis datos para responder a mi consulta.</label>
              <button className="btn btn--red full" disabled={st === 'sending'}>{st === 'sending' ? 'ENVIANDO…' : 'ENVIAR MENSAJE'} <span>→</span></button>
              {st === 'error' && <p className="ferr full" role="alert">No se ha podido enviar. Inténtalo de nuevo o escríbenos a {EMAIL}.</p>}
            </form>
          )}
        </div>
      </section>
    </>
  )
}
