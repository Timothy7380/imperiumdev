import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Clients from './components/Clients.jsx'
import Work from './components/Work.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const [filter, setFilter] = useState('all')

  // Fade-up reveal for anything marked with data-reveal
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [filter])

  const pickService = (id) => {
    setFilter(id)
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Work filter={filter} setFilter={setFilter} />
        <Services onPick={pickService} />
        <About />
        <Contact />
      </main>
    </>
  )
}
