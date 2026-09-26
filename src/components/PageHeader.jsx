import DotField from './DotField.jsx'
export default function PageHeader({ title, text }) {
  return (
    <section className="phead">
      <DotField fx={0.8} fy={0.5} gap={28} />
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  )
}
