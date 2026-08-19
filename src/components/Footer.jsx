import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="foot-grid">
        <div>
          <div className="brand">
            <img src="/assets/logo.jpeg" alt="" />
            <span>Vebe Interiors</span>
          </div>
          <p>Interior design and turnkey construction studio crafting warm, characterful residential and commercial spaces.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/studio">Studio</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Interiors</Link></li>
            <li><Link to="/services">Construction</Link></li>
            <li><Link to="/services">3D Design</Link></li>
            <li><Link to="/services">Furniture</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@vebeinteriors.com">hello@vebeinteriors.com</a></li>
            <li><a href="tel:+919999999999">+91 99999 99999</a></li>
            <li><span>Residential &amp; Commercial</span></li>
          </ul>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© 2026 Vebe Interiors. All rights reserved.</span>
        <span>Designed &amp; built in-house.</span>
      </div>
    </footer>
  )
}
