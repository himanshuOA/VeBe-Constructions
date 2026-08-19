import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Slider({ slides }) {
  const [i, setI] = useState(0)
  const n = slides.length
  const go = useCallback((idx) => setI((idx + n) % n), [n])

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % n), 5500)
    return () => clearInterval(t)
  }, [n, i])

  if (!n) return null
  const s = slides[i]

  return (
    <section className="slider">
      <div className="slides">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            className="slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="visual">
              <motion.img
                className="fill"
                src={s.img}
                alt={s.title}
                loading="lazy"
                initial={{ scale: 1 }}
                animate={{ scale: 1.12 }}
                transition={{ duration: 6, ease: 'easeOut' }}
              />
              <div className="visual-tint" />
            </div>
            <div className="meta">
              <span className="idx">{String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</span>
              <span className="tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="slider-dots">
        {slides.map((_, idx) => (
          <span key={idx} className={idx === i ? 'on' : ''} onClick={() => go(idx)} />
        ))}
      </div>
      <div className="slider-ctrl">
        <button onClick={() => go(i - 1)} aria-label="Previous">‹</button>
        <button onClick={() => go(i + 1)} aria-label="Next">›</button>
      </div>
    </section>
  )
}
