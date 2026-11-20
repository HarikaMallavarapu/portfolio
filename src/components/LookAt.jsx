import { useEffect, useRef, useState } from 'react'
import { gsap } from '../lib/motion'
import heroPortraitDefault from '../assets/hero-portrait.webp'

const BASE = import.meta.env.BASE_URL || '/'

export default function LookAt({ from, to, className = "", label = "Portrait", fallback = heroPortraitDefault }) {
  const cv = useRef(null)
  const imgs = useRef([])
  const st = useRef({ cur: 0.5, target: 0.5, drawn: -1 })
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const dir = innerWidth < 820 ? 'sm' : 'lg'
    const b = BASE.endsWith('/') ? BASE : `${BASE}/`
    const mid = Math.round((to - from) / 2)
    const order = [mid, ...Array.from({ length: to - from + 1 }, (_, i) => i).filter((i) => i !== mid)]

    for (const offset of order) {
      const i = from + offset
      const im = new Image()
      im.src = `${b}img/stickers/${dir}/f${String(i).padStart(3, '0')}.webp`
      im.onload = () => {
        st.current.drawn = -1
      }
      imgs.current[offset] = im
    }

    const c = cv.current
    if (!c) return
    const dpr = Math.min(devicePixelRatio || 1, 2)
    const setSize = () => {
      if (!c.clientWidth || !c.clientHeight) return
      c.width = c.clientWidth * dpr
      c.height = c.clientHeight * dpr
      st.current.drawn = -1
    }
    setSize()
    const ro = new ResizeObserver(setSize)
    ro.observe(c)

    const move = (e) => {
      const r = c.getBoundingClientRect()
      const cx = r.left + r.width / 2
      st.current.target = Math.min(1, Math.max(0, (cx - e.clientX) / (r.width * 1.1)))
    }
    const leave = () => { st.current.target = 0.5 }
    addEventListener('pointermove', move)
    document.addEventListener('pointerleave', leave)

    const tick = () => {
      const s = st.current
      s.cur += (s.target - s.cur) * 0.08
      const n = to - from
      const idx = Math.round(s.cur * n)
      if (idx === s.drawn && c.width > 0) return
      let im = imgs.current[idx]
      if (!im?.complete || !im.naturalWidth) im = imgs.current.find((x) => x?.complete && x.naturalWidth)
      if (!im || !c.width || !c.height) return
      s.drawn = idx
      const ctx = c.getContext('2d')
      const k = Math.min(c.width / im.naturalWidth, c.height / im.naturalHeight)
      const w = im.naturalWidth * k, h = im.naturalHeight * k
      ctx.clearRect(0, 0, c.width, c.height)
      ctx.drawImage(im, (c.width - w) / 2, c.height - h, w, h)
      setLoaded(true)
    }

    gsap.ticker.add(tick)
    return () => {
      gsap.ticker.remove(tick)
      ro.disconnect()
      removeEventListener('pointermove', move)
      document.removeEventListener('pointerleave', leave)
    }
  }, [from, to])

  return (
    <div className={`hr-person-wrap ${className}`}>
      <img
        src={fallback}
        alt={label}
        className={`hr-fallback-img ${loaded ? 'is-hidden' : ''}`}
        loading="eager"
      />
      <canvas ref={cv} className="hr-canvas" aria-label={label} role="img" />
    </div>
  )
}
