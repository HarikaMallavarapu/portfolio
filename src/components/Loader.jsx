import { useEffect, useRef } from 'react'
import { gsap } from '../lib/motion'
import { profile } from '../data'

export default function Loader({ done, onFinish }) {
  const root = useRef(null)
  const finish = useRef(onFinish)
  finish.current = onFinish

  useEffect(() => {
    // Hard fallback timeout: ensure loader never blocks screen longer than 1.2s
    const fallback = setTimeout(() => {
      if (root.current) {
        root.current.style.display = 'none'
      }
      finish.current?.()
    }, 1200)

    try {
      gsap.fromTo(root.current.querySelector('.ld-face'), { scale: 0, rotate: -20 }, { scale: 1, rotate: 0, duration: 0.8, ease: 'elastic.out(1, 0.55)' })
      gsap.fromTo(root.current.querySelector('.ld-bubble'), { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, delay: 0.2, duration: 0.6, ease: 'back.out(2.5)' })
      gsap.fromTo(root.current.querySelector('.ld-bar i'), { scaleX: 0 }, { scaleX: 0.85, duration: 1, ease: 'power2.out' })
    } catch {
      // ignore
    }

    return () => clearTimeout(fallback)
  }, [])

  useEffect(() => {
    if (!done || !root.current) return
    root.current.style.pointerEvents = 'none'

    try {
      gsap.timeline()
        .to(root.current.querySelector('.ld-bar i'), { scaleX: 1, duration: 0.2 })
        .to(root.current.querySelectorAll('.ld-face, .ld-bubble, .ld-bar'), { scale: 0.6, opacity: 0, duration: 0.25, ease: 'back.in(2)' })
        .add(() => finish.current?.())
        .to(root.current, { yPercent: -100, duration: 0.5, ease: 'expo.inOut' })
        .set(root.current, { display: 'none' })
    } catch {
      root.current.style.display = 'none'
      finish.current?.()
    }
  }, [done])
  return (
    <div className="loader" ref={root} role="status" aria-label="Loading">
      <div className="ld-stack">
        <span className="ld-bubble hand">hi, it’s {profile.name}!</span>
        <img className="ld-face" src={profile.avatar} alt="" />
        <div className="ld-bar"><i /></div>
      </div>
    </div>
  )
}
