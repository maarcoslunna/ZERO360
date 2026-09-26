import PageHeader from '../components/PageHeader.jsx'
const things = ['Diseño web', 'Desarrollo web', 'Ecommerce', 'Rediseño de webs', 'Reparación y optimización de webs', 'SEO', 'Redes sociales', 'Digitalización de negocios', 'Auditorías web', 'Optimización de presencia digital']
export default function About() {
  return (
    <>
      <PageHeader title="SOBRE NOSOTROS." text="Somos un estudio digital que empieza desde cero para llevar tu negocio a 360°." />
      <section className="psec split">
        <h2 className="ph2" data-r>QUIÉNES<br />SOMOS.</h2>
        <div className="split__txt" data-r>
          <p>ZERO360 es un estudio digital creado en 2026 para que negocios, emprendedores y marcas tengan una presencia online profesional. Diseñamos y desarrollamos webs y tiendas online, y nos ocupamos de que se encuentren en Google y se vean bien en redes.</p>
          <p>Trabajamos de forma clara y cercana: te explicamos cada paso sin tecnicismos y te acompañamos desde la primera idea hasta el lanzamiento.</p>
        </div>
      </section>
      <section className="psec psec--t">
        <h2 className="ph2" data-r>NUESTRA IDEA.</h2>
        <div className="idea">
          <article data-r><h3>ZERO</h3><p>Todo empieza desde cero: una idea, un negocio, una necesidad o una web antigua. Partimos de la base y construimos algo nuevo.</p></article>
          <article className="idea--k" data-r><h3>360°</h3><p>Una visión completa del negocio digital: web, tienda online, SEO, redes y presencia online trabajando juntos.</p></article>
        </div>
      </section>
      <section className="psec psec--t">
        <h2 className="ph2" data-r>LO QUE HACEMOS.</h2>
        <ul className="do">{things.map(t => <li key={t} data-r>{t}</li>)}</ul>
      </section>
      <section className="psec psec--t direct">
        <h2 className="ph2" data-r>HABLEMOS.</h2>
        <div data-r>
          <a className="direct__mail" href="mailto:info.zero360@gmail.com">info.zero360@gmail.com</a>
          <p>Instagram: <a href="https://instagram.com/zero360.es" target="_blank" rel="noreferrer">@zero360.es</a></p>
          <a href="#/contacto" className="btn btn--red">ESCRÍBENOS <span>→</span></a>
        </div>
      </section>
    </>
  )
}
