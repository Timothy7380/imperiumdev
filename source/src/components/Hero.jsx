import CurvedLines from './CurvedLines.jsx'
import { PROFILE, TICKER } from '../data.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <CurvedLines side="left" />
      <CurvedLines side="right" />
      <CurvedLines side="top" />

      <div className="hero__content">
        <div className="ticker marquee-mask">
          <div className="ticker__track">
            {[0, 1, 2, 3].map((r) => (
              <div className="ticker__row" key={r} aria-hidden={r > 0}>
                {TICKER.map((s) => (
                  <span className="ticker__item" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <h1 className="hero__title">
          Premium design &amp; code, <span className="serif-italic">imperium</span>
          <sup className="hero__reg">®</sup> on demand.
        </h1>

        <p className="hero__subtitle">
          I’m {PROFILE.name} — a product designer, full-stack developer and brand designer building things that look
          beautiful and work flawlessly.
        </p>

        <div className="cta-row">
          <a href="#work" className="btn-primary">
            View My Work
          </a>
          <a href={PROFILE.whatsapp} target="_blank" rel="noreferrer" className="btn-book">
            <img src={PROFILE.avatar} alt={PROFILE.name} className="btn-book__avatar" width="40" height="40" />
            <span className="btn-book__text">
              <span className="btn-book__primary">Chat on WhatsApp</span>
              <span className="btn-book__secondary">
                <span className="green-dot" />
                Available for work
              </span>
            </span>
          </a>
        </div>
      </div>

      <div className="progressive-blur" aria-hidden="true" />
    </section>
  )
}
