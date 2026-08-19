import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { gallery, filters } from '../data.js'

function Media({ item, inGrid }) {
  if (item.type === 'video') {
    return (
      <video
        src={item.file}
        muted
        loop
        playsInline
        preload="metadata"
        controls={!inGrid}
        onMouseEnter={inGrid ? (e) => e.currentTarget.play() : undefined}
        onMouseLeave={inGrid ? (e) => e.currentTarget.pause() : undefined}
        className={inGrid ? '' : 'lb-fill'}
      />
    )
  }
  return (
    <img
      src={item.file}
      alt={item.cat + ' interior'}
      loading="lazy"
      className={inGrid ? '' : 'lb-fill'}
    />
  )
}

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [active, setActive] = useState(null)

  const items = gallery.filter((g) => filter === 'all' || g.cat === filter)

  const counts = {
    all: gallery.length,
    residential: gallery.filter((g) => g.cat === 'residential').length,
    commercial: gallery.filter((g) => g.cat === 'commercial').length,
  }

  const openAt = (idx) => setActive({ list: items, i: idx })
  const move = (dir) =>
    setActive((a) => ({ ...a, i: (a.i + dir + a.list.length) % a.list.length }))

  return (
    <>
      <div className="gal-filter">
        {filters.map((f) => (
          <button key={f.key} className={filter === f.key ? 'on' : ''} onClick={() => setFilter(f.key)}>
            {f.label} <span className="n">({counts[f.key]})</span>
          </button>
        ))}
      </div>

      <div className="gallery">
        {items.map((g, idx) => (
          <figure key={g.file} onClick={() => openAt(idx)}>
            <Media item={g} inGrid />
            {g.type === 'video' && <span className="play">▶ Video</span>}
            <figcaption><span>{g.cat}</span></figcaption>
          </figure>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button className="close" onClick={() => setActive(null)}>×</button>
            <button className="arrow prev" onClick={(e) => { e.stopPropagation(); move(-1) }}>‹</button>
            <motion.div
              className="lb-inner"
              initial={{ scale: 0.92 }} animate={{ scale: 1 }} exit={{ scale: 0.92 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Media item={active.list[active.i]} />
              <div className="lb-cap">
                <span>{active.list[active.i].cat}</span>
                <span>{active.i + 1} / {active.list.length}</span>
              </div>
            </motion.div>
            <button className="arrow next" onClick={(e) => { e.stopPropagation(); move(1) }}>›</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
