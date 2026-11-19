import { useEffect, useRef } from 'react'
import { gsap, useGSAP, goTo } from '../lib/motion'
import { profile, heroCounts, lookFrames } from '../data'
import LookAt from './LookAt'
import { Squiggle, Arrow, Spark } from './Bits'

export default function Hero({ ready }) {
  const root = useRef(null)

  useGSAP(() => {
    if (!ready) return
    const tl = gsap.timeline()
    tl.from('.hr-hello', { y: 24, opacity: 0, duration: 0.9, ease: 'power3.out' })
      .from('.hr-name .ch', { yPercent: 120, rotate: 10, stagger: 0.04, duration: 1.2, ease: 'back.out(1.8)' }, 0.15)
      .to('.hr-name .squiggle path', { strokeDashoffset: 0, duration: 1.3, ease: 'power2.inOut' }, 0.65)
      .from('.hr-sub', { y: 25, opacity: 0, duration: 1, ease: 'power3.out' }, 0.45)
      .from('.hr-counts li', { y: 25, opacity: 0, scale: 0.92, stagger: 0.08, duration: 0.85, ease: 'back.out(1.6)' }, 0.6)
      .from('.hr-ctas .btn', { y: 20, opacity: 0, stagger: 0.1, duration: 0.75, ease: 'power3.out' }, 0.75)
      .from('.hr-blob', { scale: 0.6, opacity: 0, duration: 1.5, ease: 'elastic.out(1, 0.7)' }, 0.1)
      .from('.hr-person', {
        yPercent: 22, opacity: 0, duration: 1.3, ease: 'back.out(1.3)',
        onComplete: () => {
          const el = root.current?.querySelector('.hr-person')
          if (el) el.classList.add('is-floating')
        }
      }, 0.25)
      .from('.hr-note', { opacity: 0, scale: 0.85, rotate: -15, duration: 0.8, ease: 'back.out(1.8)' }, 1.4)
      .to('.hr-note .hand-arrow path', { strokeDashoffset: 0, duration: 0.8, stagger: 0.25, ease: 'power2.inOut' }, 1.6)
  }, { scope: root, dependencies: [ready] })

  useEffect(() => {
    const section = root.current
    if (!section) return
    const onMove = (e) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      const dx = (e.clientX - cx) / cx
      const dy = (e.clientY - cy) / cy
      gsap.to('.hr-blob', { x: dx * 10, y: dy * 6, duration: 1.2, ease: 'power2.out', overwrite: 'auto' })
      gsap.to('.hr-note', { x: -dx * 12, y: -dy * 8, duration: 1.4, ease: 'power2.out', overwrite: 'auto' })
    }
    const onLeave = () => {
      gsap.to('.hr-blob, .hr-note', { x: 0, y: 0, duration: 1.5, ease: 'power2.out', overwrite: 'auto' })
    }
    section.addEventListener('pointermove', onMove)
    section.addEventListener('pointerleave', onLeave)
    return () => {
      section.removeEventListener('pointermove', onMove)
      section.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  useGSAP(() => {
    gsap.to('.hr-visual', { yPercent: -8, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } })
  }, { scope: root })

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hr-grid">
        <div className="hr-copy">
          <p className="hr-hello hand">Hi there, I’m <span aria-hidden="true">👋</span></p>
          <h1 className="hr-name">
            <span className="hr-name-text">{profile.name.split('').map((c, i) => <span className="ch-mask" key={i}><span className="ch">{c}</span></span>)}</span>
            <Squiggle />
          </h1>
          <p className="hr-sub">
            <b>{profile.role}</b> <Spark /> {profile.intro}
          </p>
          <ul className="hr-counts" aria-label="Highlights">
            {heroCounts.map((c) => <li key={c.label}><b>{c.value}</b><span>{c.label}</span></li>)}
          </ul>
          <div className="hr-ctas">
            <button className="btn btn-coral" onClick={() => goTo('#work')}>See my work <span>→</span></button>
            {profile.resume
              ? <a className="btn btn-line" href={profile.resume} target="_blank" rel="noreferrer">Résumé ↓</a>
              : <button className="btn btn-line" onClick={() => goTo('#contact')}>Message me</button>}
          </div>
        </div>

        <div className="hr-visual">
          <div className="hr-blob" />
          <LookAt from={lookFrames.from} to={lookFrames.to} className="hr-person" label={profile.full} />
          <div className="hr-note hand">
            move your cursor,<br />I’ll look at it!
            <Arrow />
          </div>
        </div>
      </div>
    </section>
  )
}
