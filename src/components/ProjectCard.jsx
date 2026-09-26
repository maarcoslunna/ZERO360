export default function ProjectCard({ n, slug, name, type, cover, pos, big }) {
  return (
    <a href={'#/proyecto/' + slug} className={'pc' + (big ? ' pc--big' : '')} data-r>
      <span className="pc__n">{n}</span>
      <div className="pc__art">
        <img src={cover} alt={'Portada de ' + name} style={{ objectPosition: pos }} loading="lazy" />
      </div>
      <div className="pc__info">
        <span className="pc__type">{type}</span>
        <h3>{name}</h3>
        <span className="pc__go">VER PROYECTO <b>→</b></span>
      </div>
    </a>
  )
}
