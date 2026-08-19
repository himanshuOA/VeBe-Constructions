import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/studio', label: 'Studio' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="nav">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>
        <img src="/assets/logo.jpeg" alt="Vebe Interiors" />
        <span>Vebe Interiors</span>
      </Link>
      <ul className={open ? 'open' : ''}>
        {links.map((l) => (
          <li key={l.to}>
            <NavLink to={l.to} end={l.end} onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}>
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <Link to="/contact" className="cta">Start a Project</Link>
      <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>
        <span></span><span></span><span></span>
      </button>
    </nav>
  )
}
