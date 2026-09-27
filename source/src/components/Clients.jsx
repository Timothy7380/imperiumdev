import { CLIENTS } from '../data.js'

export default function Clients() {
  return (
    <section className="trusted">
      <p className="trusted__label">Trusted by brands &amp; companies</p>
      <div className="trusted__marquee marquee-mask">
        <div className="trusted__track">
          {[0, 1].map((r) => (
            <div className="trusted__row" key={r} aria-hidden={r > 0}>
              {CLIENTS.map((l) => (
                <span key={l.name} className="trusted__logo" style={{ fontFamily: l.font, fontWeight: l.weight }}>
                  {l.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
