import { ArrowUpRight } from 'lucide-react'
import SectionHead from './SectionHead.jsx'
import { PROJECTS, SERVICES } from '../data.js'

export default function Services({ onPick }) {
  return (
    <section className="section" id="services">
      <SectionHead
        eyebrow="Services"
        sub="A multi-disciplinary practice across product design, engineering, and brand storytelling."
      >
        One partner, <span className="serif-italic">four</span> crafts.
      </SectionHead>

      <div className="services-grid">
        {SERVICES.map((s) => {
          const count = PROJECTS.filter((p) => p.cat === s.id).length
          return (
            <article className="service-card" key={s.id} data-reveal>
              <div className="service-card__top">
                <span className="service-card__num">{s.num}</span>
                <span className="service-card__count">{count} projects</span>
              </div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__tagline">{s.tagline}</p>
              <p className="service-card__body">{s.body}</p>
              <div className="pill-row">
                {s.tags.map((t) => (
                  <span className="pill" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <button type="button" className="text-link" onClick={() => onPick(s.id)}>
                See projects <ArrowUpRight size={16} />
              </button>
            </article>
          )
        })}
      </div>
    </section>
  )
}
