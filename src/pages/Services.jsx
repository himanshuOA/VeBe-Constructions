import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

const services = [
  ['01', 'Residential Interiors', 'Full home interiors — space planning, colour and material palettes, lighting, and bespoke joinery tailored to how you live.'],
  ['02', 'Commercial Spaces', 'Cafés, offices, retail, and hospitality designed for brand, footfall, and the people who use them every day.'],
  ['03', 'Turnkey Construction', 'Civil, structural, MEP, and finishing works managed end-to-end. One contract, one team, one accountable timeline.'],
  ['04', '3D Visualisation', 'Photoreal renders and interactive walkthroughs so you can approve every room before construction begins.'],
  ['05', 'Furniture & Styling', 'Custom and curated furniture, art, and the final styling layer that turns a finished room into a space with character.'],
  ['06', 'Renovation', 'Careful reworking of existing homes and workplaces — structural changes, modern services, and a fresh identity.'],
]

const steps = [
  ['A', 'Consultation', 'A site visit and brief-setting session. We map scope, budget bands, and a realistic timeline.'],
  ['B', 'Design & Costing', 'Concept design, 3D walkthroughs, and a transparent line-item estimate you sign off on.'],
  ['C', 'Execution', 'Weekly on-site progress, quality checks, and a single point of contact throughout.'],
  ['D', 'Handover & Care', 'Snag-free completion, styling, and a one-year workmanship assurance.'],
]

export default function Services() {
  return (
    <>
      <header className="page-head">
        <div className="crumb">Home / Services</div>
        <h1>Everything a space needs — in one team.</h1>
        <p>Design, build, and everything in between. Pick a single service or hand us the whole project.</p>
      </header>

      <section className="section">
        <div className="svc-grid">
          {services.map(([num, h, p], k) => (
            <Reveal key={num} delay={(k % 3) * 0.1} className="svc">
              <div className="num">{num}</div><h3>{h}</h3><p>{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-2)' }}>
        <Reveal className="section-head"><span className="eyebrow">Engagement</span><h2>How a project runs.</h2></Reveal>
        <div className="timeline">
          {steps.map(([step, h, p]) => (
            <Reveal key={step} className="tl-row">
              <div className="step">{step}</div><h3>{h}</h3><p>{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section cta-band">
        <Reveal><h2>Not sure where to <em>start</em>?</h2><Link to="/contact" className="btn">Book a Free Consultation</Link></Reveal>
      </section>
    </>
  )
}
