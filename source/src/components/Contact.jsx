import { ArrowUpRight } from 'lucide-react'
import CurvedLines from './CurvedLines.jsx'
import Logo from './Logo.jsx'
import { PROFILE, SOCIALS } from '../data.js'

export default function Contact() {
  return (
    <>
      <section className="hero hero--contact" id="contact">
        <CurvedLines side="left" />
        <CurvedLines side="right" />
        <CurvedLines side="top" />

        <div className="hero__content" data-reveal>
          <span className="status-pill">
            <span className="green-dot" /> Available for new projects
          </span>
          <h2 className="contact__title">
            Have a project <span className="serif-italic">in mind?</span>
          </h2>
          <p className="hero__subtitle">
            Whether it’s a full product, a feature, or a brand — I’m open to new challenges. Let’s make something great.
          </p>
          <div className="cta-row">
            <a href={`mailto:${PROFILE.email}`} className="btn-primary">
              Send an Email
            </a>
            <a href={PROFILE.whatsapp} target="_blank" rel="noreferrer" className="btn-book">
              <img src={PROFILE.avatar} alt="" className="btn-book__avatar" width="40" height="40" />
              <span className="btn-book__text">
                <span className="btn-book__primary">WhatsApp me</span>
                <span className="btn-book__secondary">
                  <span className="green-dot" />
                  Replies within a day
                </span>
              </span>
            </a>
          </div>
          <div className="socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="link-pill">
                {s.label} <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__inner">
          <Logo />
          <span className="footer__copy">
            © {new Date().getFullYear()} {PROFILE.name} · All rights reserved
          </span>
          <a href={PROFILE.cv} target="_blank" rel="noreferrer" className="link-pill">
            CV / Résumé <ArrowUpRight size={14} />
          </a>
        </div>
      </footer>
    </>
  )
}
