import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { scenes } from '../data.js'

export default function About() {
  return (
    <>
      <header className="page-head">
        <div className="crumb">Home / Studio</div>
        <h1>A studio built on warmth &amp; precision.</h1>
        <p>We believe a well-made space should feel inevitable — like it could never have been any other way.</p>
      </header>

      <section className="section">
        <div className="split">
          <Reveal className="txt">
            <span className="eyebrow">Our Story</span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: 22 }}>Fourteen years, one obsession.</h2>
            <p>Vebe Interiors began as a small design table and grew into a full design-and-build practice across residential and commercial work. What never changed is the obsession with the last 10% — the reveal detail, the joinery shadow gap, the exact warmth of a lamp at dusk.</p>
            <p>Because we design and construct in-house, nothing gets lost in translation between the render and the reality. The team that draws your space is the team on site when it's built.</p>
            <div className="pill-row">
              <span>In-house build team</span><span>Fixed timelines</span><span>Transparent costing</span>
            </div>
          </Reveal>
          <Reveal>
            <div className="visual-box" style={{ backgroundImage: `url(${scenes.commercial})` }} />
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-2)' }}>
        <Reveal className="section-head"><span className="eyebrow">How We Work</span><h2>The Vebe process.</h2></Reveal>
        <div className="timeline">
          {[
            ['01', 'Discover', 'We learn how you live or work in the space — then set a clear brief, budget, and timeline.'],
            ['02', 'Design', 'Concept, layouts, materials, and photoreal 3D walkthroughs until every room feels right.'],
            ['03', 'Build', 'Our in-house team handles civil work, MEP, and finishing with weekly on-site reviews.'],
            ['04', 'Handover', 'Styling, snag-free completion, and a move-in-ready space — on the date we promised.'],
          ].map(([step, h, p]) => (
            <Reveal key={step} className="tl-row">
              <div className="step">{step}</div><h3>{h}</h3><p>{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section cta-band">
        <Reveal><h2>Ready to <em>begin</em>?</h2><Link to="/contact" className="btn">Talk to the Studio</Link></Reveal>
      </section>
    </>
  )
}
