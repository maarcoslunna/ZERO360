import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { addLocalReview } from '../data/localReviews.js'
const EMAIL = 'info.zero360@gmail.com'
export default function Review() {
  const [rating, setRating] = useState(0)
  const [st, setSt] = useState('idle')
  const submit = async e => {
    e.preventDefault()
    if (!rating) { setSt('norate'); return }
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    setSt('sending')
    try {
      const r = await fetch('https://formsubmit.co/ajax/' + EMAIL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, valoracion: rating + ' / 5', _subject: 'Nueva valoración de cliente — ZERO360', _template: 'table', _captcha: 'false' }),
      })
      const d = await r.json()
      if (!r.ok || !(d.success === true || d.success === 'true')) { console.error('FormSubmit:', r.status, d); throw new Error('fail') }
      addLocalReview({ v: rating, q: data.comentario, a: data.nombre })
      form.reset(); setRating(0); setSt('ok')
    } catch { setSt('error') }
  }
  return (
    <>
      <PageHeader title="DEJA TU VALORACIÓN." text="¿Has trabajado con nosotros? Cuéntanos qué tal ha ido, nos ayuda a seguir mejorando." />
      <section className="psec rvpage">
        {st === 'ok' ? (
          <div className="fok" data-r>
            <h3>¡Gracias por tu valoración!</h3>
            <p>Ya se ha añadido a tus valoraciones en este dispositivo, y nuestro equipo la revisará para publicarla de forma definitiva en la web.</p>
            <a href="#/" className="btn btn--red">VOLVER AL INICIO <span>→</span></a>
          </div>
        ) : (
          <form className="cform rvform" onSubmit={submit} data-r>
            <div className="full">
              <span className="rv__lab">Tu puntuación</span>
              <div className="pick" role="radiogroup" aria-label="Puntuación de 1 a 5 estrellas">
                {[1, 2, 3, 4, 5].map(n => (
                  <button type="button" key={n} role="radio" aria-checked={rating === n} aria-label={n + (n === 1 ? ' estrella' : ' estrellas')} className={n <= rating ? 'on' : ''} onClick={() => { setRating(n); setSt('idle') }}>★</button>
                ))}
              </div>
            </div>
            <label className="full">Tu nombre<input name="nombre" required maxLength="60" autoComplete="name" /></label>
            <label className="full">Tu comentario<textarea name="comentario" rows="5" required maxLength="400" /></label>
            <input type="text" name="_honey" tabIndex="-1" autoComplete="off" style={{ display: 'none' }} />
            <label className="check full"><input type="checkbox" required /> Acepto que ZERO360 publique mi nombre, mi puntuación y mi comentario en su web.</label>
            <button className="btn btn--red full" disabled={st === 'sending'}>{st === 'sending' ? 'ENVIANDO…' : 'ENVIAR VALORACIÓN'} <span>→</span></button>
            {st === 'norate' && <p className="ferr full" role="alert">Elige una puntuación de 1 a 5 estrellas.</p>}
            {st === 'error' && <p className="ferr full" role="alert">No se ha podido enviar. Inténtalo de nuevo o escríbenos a {EMAIL}.</p>}
          </form>
        )}
      </section>
    </>
  )
}
