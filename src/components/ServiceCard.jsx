export default function ServiceCard({ n, name, price, text, feats, cta, tag, featured }) {
  return (
    <article className={'sc' + (featured ? ' sc--f' : '')} data-r>
      <i className="sc__dot" />
      <div className="sc__top"><span>{n} / 03</span>{tag && <em>{tag}</em>}</div>
      <div className="sc__body">
        <h3>{name}</h3>
        <p className="sc__price">Desde <strong>{price}€</strong></p>
        <p className="sc__text">{text}</p>
        <ul>{feats.map(f => <li key={f}>{f}</li>)}</ul>
        <a href="#/contacto" className="sc__cta">{cta} <span>→</span></a>
      </div>
    </article>
  )
}
