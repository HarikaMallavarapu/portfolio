import { useEffect, useRef, useState } from 'react'
import { gsap, goTo } from '../lib/motion'
import { profile } from '../data'

const links = [
  ['About', '#about'],
  ['Work', '#work'],
  ['Journey', '#journey'],
  ['Toolbox', '#skills'],
  ['Milestones', '#milestones']
]

export default function Nav({ ready }) {
  const ref = useRef(null)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#top')

  useEffect(() => {
    if (ready) {
      gsap.fromTo(
        ref.current,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, delay: 0.2, ease: 'power3.out' }
      )
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 25)

      // Section active detection
      const scrollPos = window.scrollY + 120
      const sectionIds = ['#top', '#about', '#work', '#journey', '#skills', '#milestones', '#contact']
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i]
        const el = document.querySelector(id)
        if (el && el.offsetTop <= scrollPos) {
          setActive(id)
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    const onDocClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', onDocClick)

    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('click', onDocClick)
    }
  }, [ready])

  const go = (e, h) => {
    e.preventDefault()
    setOpen(false)
    goTo(h)
  }

  return (
    <header className="nav-wrap" ref={ref}>
      <div className={`nav ${open ? 'is-open' : ''} ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="nav-bar">
          <a href="#top" className="nav-brand" onClick={(e) => go(e, '#top')}>
            <img src={profile.avatar} alt={profile.name} className="nav-avatar-img" />
            <span>{profile.name.toLowerCase()}<em>.</em></span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {links.map(([l, h]) => (
              <a
                key={h}
                href={h}
                className={active === h ? 'is-active' : ''}
                onClick={(e) => go(e, h)}
              >
                <span>{l}</span>
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a
              href="#contact"
              className="btn btn-coral nav-cta"
              onClick={(e) => go(e, '#contact')}
            >
              Let’s chat <span>✦</span>
            </a>
            <button
              className={`nav-burger ${open ? 'is-active' : ''}`}
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label="Toggle navigation menu"
            >
              <span className="burger-line line-1" />
              <span className="burger-line line-2" />
            </button>
          </div>
        </div>

        <div className={`nav-sheet ${open ? 'is-open' : ''}`} aria-hidden={!open}>
          <div className="nav-sheet-links">
            {links.map(([l, h]) => (
              <a
                key={h}
                href={h}
                className={active === h ? 'is-active' : ''}
                onClick={(e) => go(e, h)}
              >
                {l}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-coral nav-sheet-cta"
              onClick={(e) => go(e, '#contact')}
            >
              Let’s chat <span>✦</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
