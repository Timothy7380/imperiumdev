import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'
import Logo from './Logo.jsx'
import { NAV_LINKS, PROFILE, SOCIALS } from '../data.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <header className={`navbar${scrolled && !open ? ' is-scrolled' : ''}`}>
        <div className="navbar__inner">
          <Logo />
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="site-drawer"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Close' : 'Menu'}
            <ChevronUp size={16} className={`menu-btn__icon${open ? ' is-open' : ''}`} />
          </button>
        </div>
      </header>

      <div id="site-drawer" className={`drawer${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <nav className="drawer__nav">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="drawer__link" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={PROFILE.cv} target="_blank" rel="noreferrer" className="drawer__link drawer__link--serif" tabIndex={open ? 0 : -1}>
            Résumé
          </a>
        </nav>
        <footer className="drawer__footer">
          <div className="drawer__socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>
                {s.label}
              </a>
            ))}
          </div>
          <span>© {new Date().getFullYear()} Imperium® · {PROFILE.name}</span>
        </footer>
      </div>
    </>
  )
}
