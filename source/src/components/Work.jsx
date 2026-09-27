import { useEffect, useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import SectionHead from './SectionHead.jsx'
import { CATEGORIES, LOGO_MARKS, PROJECTS, SERVICES } from '../data.js'

const PAGE = 6
const catLabel = { ...Object.fromEntries(SERVICES.map((s) => [s.id, s.title])), github: 'GitHub' }

export default function Work({ filter, setFilter }) {
  const [visible, setVisible] = useState(PAGE)

  useEffect(() => setVisible(PAGE), [filter])

  const list = useMemo(() => (filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.cat === filter)), [filter])
  const shown = list.slice(0, visible)

  const filters = (
    <div className="filters" role="tablist" aria-label="Filter projects">
      {CATEGORIES.map((c) => (
        <button
          key={c.id}
          type="button"
          role="tab"
          aria-selected={filter === c.id}
          className={`filter${filter === c.id ? ' is-active' : ''}`}
          onClick={() => setFilter(c.id)}
        >
          {c.label}
          <span className="filter__count">
            {c.id === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.cat === c.id).length}
          </span>
        </button>
      ))}
    </div>
  )

  return (
    <section className="section" id="work">
      <SectionHead eyebrow="Selected work" aside={filters}>
        Projects that <span className="serif-italic">define</span> the work.
      </SectionHead>

      <div className="work-grid" key={filter}>
        {shown.map((p, i) => (
          <article className="project" key={p.title} style={{ animationDelay: `${(i % PAGE) * 60}ms` }}>
            <a
              href={p.links[0].href}
              target="_blank"
              rel="noreferrer"
              className="project__media"
              aria-label={`${p.title} — ${p.links[0].label}`}
            >
              <img src={p.image} alt={`${p.title} preview`} loading="lazy" />
              <span className="project__badge">{catLabel[p.cat]}</span>
            </a>
            <div className="project__meta">
              <h3 className="project__title">{p.title}</h3>
              <span className="project__year">{p.year}</span>
            </div>
            <p className="project__desc">{p.desc}</p>
            <div className="project__foot">
              <div className="pill-row">
                {p.tags.map((t) => (
                  <span className="pill" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="project__links">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="link-pill">
                    {l.label} <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {visible < list.length && (
        <div className="work-more">
          <button type="button" className="btn-outline" onClick={() => setVisible((v) => v + PAGE)}>
            Show more projects <span className="btn-outline__count">{list.length - visible}</span>
          </button>
        </div>
      )}

      {filter === 'brand' && (
        <div className="marks">
          <p className="marks__label">Selected logo marks</p>
          <div className="marks__grid">
            {LOGO_MARKS.map((m) => (
              <div className={`mark mark--${m.bg}`} key={m.name}>
                <img src={m.src} alt={`${m.name} logo`} loading="lazy" style={{ transform: `scale(${m.scale || 1})` }} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
