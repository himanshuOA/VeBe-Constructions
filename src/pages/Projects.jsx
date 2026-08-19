import { Link } from 'react-router-dom'
import Slider from '../components/Slider.jsx'
import Gallery from '../components/Gallery.jsx'
import Reveal from '../components/Reveal.jsx'
import { featured } from '../data.js'

export default function Projects() {
  return (
    <>
      <header className="page-head">
        <div className="crumb">Home / Projects</div>
        <h1>Spaces we've <em>shaped</em>.</h1>
        <p>Our completed residential and commercial interiors — photographs and walkthroughs from real Vebe projects.</p>
      </header>

      <Slider slides={featured} />

      <section className="section">
        <Reveal className="section-head"><span className="eyebrow">Full Gallery</span><h2>Browse by category.</h2></Reveal>
        <Gallery />
      </section>

      <section className="section cta-band">
        <Reveal><h2>Your space could be <em>next</em>.</h2><Link to="/contact" className="btn">Start Your Project</Link></Reveal>
      </section>
    </>
  )
}
