export default function Stars({ v }) {
  return (
    <span className="stars" role="img" aria-label={`${v} de 5 estrellas`}>
      <span className="stars__bg">★★★★★</span>
      <span className="stars__fg" style={{ width: `${(v / 5) * 100}%` }}>★★★★★</span>
    </span>
  )
}
