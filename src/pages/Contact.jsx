import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import { scenes } from '../data.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', msg: '' })
  const [note, setNote] = useState({ text: '', ok: false })

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const send = () => {
    if (!form.name.trim() || !form.email.trim()) {
      setNote({ text: 'Please add your name and email so we can reply.', ok: false })
      return
    }
    setNote({
      text: `Thanks, ${form.name}! Your enquiry is ready — this demo form doesn't send yet, so email vebeinteriors2k22@gmail.com to reach us.`,
      ok: true,
    })
  }

  return (
    <>
      <header className="page-head">
        <div className="crumb">Home / Contact</div>
        <h1>Let's talk about your space.</h1>
        <p>Tell us a little about the project. We'll reply within one working day to set up a consultation.</p>
      </header>

      <section className="section">
        <div className="contact-wrap">
          <Reveal>
            <div className="field"><label>Your name</label>
              <input type="text" value={form.name} onChange={update('name')} placeholder="Jane Doe" /></div>
            <div className="field"><label>Email</label>
              <input type="email" value={form.email} onChange={update('email')} placeholder="jane@email.com" /></div>
            <div className="field"><label>Phone</label>
              <input type="tel" value={form.phone} onChange={update('phone')} placeholder="+91 ....." /></div>
            <div className="field"><label>Project type</label>
              <input type="text" value={form.type} onChange={update('type')} placeholder="Residential / Commercial ..." /></div>
            <div className="field"><label>Tell us about it</label>
              <textarea rows="5" value={form.msg} onChange={update('msg')} placeholder="Location, size, timeline, and what you have in mind." /></div>
            <button className="btn" onClick={send}>Send Enquiry</button>
            {note.text && (
              <p className="form-note" style={{ color: note.ok ? 'var(--teal)' : 'var(--orange)' }}>{note.text}</p>
            )}
          </Reveal>

          <Reveal className="contact-info">
            <div><span>Studio</span><p>Office No. 17, Third Floor,<br/>Sun Twilight Metro Street,<br/>Greater Noida,<br />Uttar Pradesh, India</p></div>
            <div><span>Email</span><p><a href="mailto:vebeinteriors2k22@gmail.com">vebeinteriors2k22@gmail.com</a></p></div>
            <div><span>Phone</span><p><a href="tel:+919311217408">+91 93112 17408</a></p></div>
            <div><span>Hours</span><p>Mon – Sat · 10:00 to 19:00</p></div>
            <div><span>Work</span><p>Residential &amp; Commercial Interiors</p></div>
            <div className="visual-box" style={{ height: 220, marginTop: 10, backgroundImage: `url(${scenes.living})`, backgroundSize: 'cover', backgroundPosition: 'center', border: '1px solid var(--line)' }} />
          </Reveal>
        </div>
      </section>
    </>
  )
}
