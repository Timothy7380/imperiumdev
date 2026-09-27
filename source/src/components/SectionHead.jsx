export default function SectionHead({ eyebrow, children, sub, align = 'left', aside }) {
  return (
    <div className={`section-head section-head--${align}`} data-reveal>
      <div className="section-head__main">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="section-title">{children}</h2>
        {sub && <p className="section-sub">{sub}</p>}
      </div>
      {aside && <div className="section-head__aside">{aside}</div>}
    </div>
  )
}
