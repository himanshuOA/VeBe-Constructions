import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import HeroSlideshow from '../components/HeroSlideshow.jsx'
import Slider from '../components/Slider.jsx'
import Reveal from '../components/Reveal.jsx'
import { featured, scenes, gallery } from '../data.js'

export default function Home() {
  const resCount = gallery.filter((g) => g.cat === 'residential').length
  const comCount = gallery.filter((g) => g.cat === 'commercial').length
  return (
    <>
      <header className="hero">
        <HeroSlideshow />
        <div className="hero-grad" />
        <div className="hero-inner">
          <motion.span className="eyebrow"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            Residential · Commercial · Turnkey Build
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
            Spaces that <em>hold</em> a story.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Vebe Interiors designs and builds warm, considered homes and commercial spaces — from the first sketch to the last light fixture.
          </motion.p>
          <motion.div className="hero-actions"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <Link to="/projects" className="btn">View Projects</Link>
            <Link to="/contact" className="btn ghost">Book a Consultation</Link>
          </motion.div>
        </div>
        <div className="scroll-hint"><span className="dot" /> Move your cursor · scroll to explore</div>
      </header>

      <section className="section" style={{ paddingTop: 90, paddingBottom: 90 }}>
        <Reveal>
          <div className="stats">
            <div className="stat"><b>14</b><span>Years in practice</span></div>
            <div className="stat"><b>{resCount}</b><span>Residential works</span></div>
            <div className="stat"><b>{comCount}</b><span>Commercial works</span></div>
            <div className="stat"><b>98%</b><span>On-time handover</span></div>
          </div>
        </Reveal>
      </section>

      <div className="section-head" style={{ padding: '0 6vw 40px' }}>
        <Reveal>
          <span className="eyebrow">Selected Work</span>
          <h2>Featured Projects</h2>
        </Reveal>
      </div>
      <Slider slides={featured} />

      <section className="section">
        <div className="split">
          <Reveal className="txt">
            <span className="eyebrow">Who We Are</span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: 22 }}>Design and construction under one roof.</h2>
            <p>We are architects, interior designers, and site engineers working as a single team. That means the vision you approve is the vision that gets built — no gaps between the mood board and the mortar.</p>
            <p>Every Vebe project runs on fixed timelines, transparent costing, and a dedicated project lead from day one.</p>
            <div className="pill-row">
              <span>Residential</span><span>Commercial</span><span>Turnkey Construction</span><span>3D Design</span>
            </div>
            <Link to="/studio" className="btn" style={{ marginTop: 30 }}>More about the studio</Link>
          </Reveal>
          <Reveal>
            <div className="visual-box" style={{ backgroundImage: `url(${scenes.living})` }} />
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-2)' }}>
        <Reveal className="section-head"><span className="eyebrow">What We Do</span><h2>From concept to keys.</h2></Reveal>
        <div className="svc-grid">
          {[
            ['01', 'Residential Interiors', 'Homes designed around how you actually live — space planning, materials, lighting, and bespoke furniture.'],
            ['02', 'Commercial Spaces', 'Cafés, offices, and retail built for brand and footfall, delivered as a complete turnkey fit-out.'],
            ['03', '3D Visualisation', 'Walk through your space before a single wall goes up, in photoreal 3D and live virtual tours.'],
          ].map(([num, h, p], k) => (
            <Reveal key={num} delay={k * 0.1} className="svc">
              <div className="num">{num}</div><h3>{h}</h3><p>{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section cta-band">
        <Reveal>
          <h2>Let's build something <em>warm</em>.</h2>
          <Link to="/contact" className="btn">Start Your Project</Link>
        </Reveal>
      </section>
    </>
  )
}
