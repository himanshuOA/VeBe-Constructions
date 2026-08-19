import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Hand-picked wide, striking project photos for the hero.
const HERO_SHOTS = [
  '/assets/projects/item-032.jpg', // villa exterior, sunset
  '/assets/projects/item-064.jpg', // luxury living room
  '/assets/projects/item-036.jpg', // rooftop pergola lounge
  '/assets/projects/item-028.jpg', // dining + kitchen
  '/assets/projects/item-019.jpg', // modern villa, daylight
]

export default function HeroSlideshow() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % HERO_SHOTS.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="hero-shots">
      <AnimatePresence>
        <motion.div
          key={i}
          className="hero-shot"
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 1, scale: 1.0 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.6, ease: 'easeInOut' }, scale: { duration: 6.5, ease: 'easeOut' } }}
          style={{ backgroundImage: `url(${HERO_SHOTS[i]})` }}
        />
      </AnimatePresence>

      {/* progress ticks */}
      <div className="hero-ticks">
        {HERO_SHOTS.map((_, idx) => (
          <button
            key={idx}
            className={idx === i ? 'on' : ''}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
