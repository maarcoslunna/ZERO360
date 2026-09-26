import PageHeader from '../components/PageHeader.jsx'
import Services from '../components/Services.jsx'
const info = [
  ['Diseño a medida', 'Nada de plantillas: cada web se diseña alrededor de tu negocio y de cómo te compran tus clientes.'],
  ['Rápida y responsive', 'Se ve y carga bien en móvil, tablet y ordenador. La velocidad es parte del diseño.'],
  ['Preparada para Google', 'SEO técnico desde el primer día para que tu web se pueda encontrar.'],
  ['Rediseño y reparación', '¿Tienes una web antigua o rota? La rediseñamos, la reparamos y la optimizamos.'],
]
const steps = [['Hablamos', 'Nos cuentas tu idea o tu negocio.'], ['Diseñamos', 'Te enseñamos el diseño antes de programar.'], ['Desarrollamos', 'Construimos la web y la probamos en todos los dispositivos.'], ['Lanzamos', 'Publicamos y te acompañamos en los primeros pasos.']]
export default function DesignWeb() {
  return (
    <>
      <PageHeader title="DISEÑO WEB DESDE CERO." text="Webs, tiendas online y rediseños hechos a medida: rápidos, claros y pensados para convertir visitas en clientes." />
      <section className="psec"><div className="grid4">{info.map(([t, p]) => <article key={t} data-r><h3>{t}</h3><p>{p}</p></article>)}</div></section>
      <Services />
      <section className="psec"><h2 className="ph2" data-r>CÓMO TRABAJAMOS.</h2><div className="grid4">{steps.map(([t, p], i) => <article key={t} data-r><b>0{i + 1}</b><h3>{t}</h3><p>{p}</p></article>)}</div></section>
    </>
  )
}
