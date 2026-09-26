import PageHeader from '../components/PageHeader.jsx'
const list = [
  ['SEO', 'Trabajamos tu web para aparecer en Google cuando tus clientes te buscan.'],
  ['Redes sociales', 'Gestionamos tus perfiles con contenido y una imagen coherente con tu marca.'],
  ['Google Maps', 'Optimizamos tu ficha de negocio para que te encuentren cerca de ellos.'],
  ['Digitalización de negocios', 'Llevamos tu negocio al mundo digital: presencia, herramientas y procesos.'],
  ['Optimización de presencia digital', 'Ordenamos y mejoramos todos tus canales para que cuenten la misma historia.'],
  ['Auditoría gratuita', 'Revisamos tu web y tu presencia online y te decimos qué mejorar primero.', true],
]
export default function Marketing() {
  return (
    <>
      <PageHeader title="MARKETING DIGITAL QUE TE HACE VISIBLE." text="Tu negocio, visible y con clientes. Diseño web, Google Maps y redes trabajando juntos." />
      <section className="psec">
        <div className="mk">{list.map(([t, p, f]) => <article key={t} className={f ? 'mk--f' : ''} data-r><i /><h3>{t}</h3><p>{p}</p>{f && <a href="#/contacto">PEDIR MI AUDITORÍA →</a>}</article>)}</div>
      </section>
    </>
  )
}
