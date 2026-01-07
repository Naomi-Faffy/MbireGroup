import React, {useState} from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'',email:'',phone:'',message:''})
  const [sent, setSent] = useState(false)

  function handleChange(e){
    setForm({...form,[e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    setSent(true)
    setForm({name:'',email:'',phone:'',message:''})
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" style={{background: 'var(--black-dark)', padding: 'var(--section-padding) 0'}}>
      <div className="container">
        <div className="section-title-wrapper">
          <div className="section-tag">Get In Touch</div>
          <h2>Contact Mbire Group</h2>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '4rem', alignItems: 'center'}}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=450&h=400&fit=crop"
              alt="Contact us"
              style={{borderRadius: '16px', boxShadow: '0 12px 30px rgba(93, 64, 55, 0.35)', width: '100%', maxWidth: '420px'}}
            />
          </div>
          <div>
            <h3 style={{color: '#FFFFFF', fontSize: '1.8rem', marginBottom: '1rem'}}>Let's Build Together</h3>
            <p style={{fontSize: '1rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem'}}>
              <strong style={{color: '#FFFFFF'}}>Mbire Group</strong><br/>
              Agriculture • Mining • Manufacturing<br/><br/>
              📧 contact@mbiregroup.com<br/>
              📞 +1 (555) 123-4567<br/>
              🌐 www.mbiregroup.com
            </p>

            <h3 style={{marginTop: '2rem', color: '#FFFFFF'}}>Our Sectors</h3>
              <div className="sectors-grid">
                <div className="glass-card">Agricultural Solutions</div>
                <div className="glass-card">Mining & Extraction</div>
                <div className="glass-card">Manufacturing</div>
                <div className="glass-card">Sustainable Practices</div>
              </div>
          </div>
        </div>

        {sent && <div className="notice" style={{marginTop: '2rem', textAlign: 'center', color: '#FFFFFF'}}>✓ Thank you! We'll be in touch soon.</div>}
        <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact form" style={{marginTop: '3rem', gridTemplateColumns: '1fr 1fr', display: 'grid', gap: '1.5rem'}}>
          <label style={{color: '#FFFFFF'}}>
            Full Name
            <input 
              type="text"
              name="name" 
              value={form.name} 
              onChange={handleChange} 
              placeholder="John Doe"
              required 
            />
          </label>
          <label style={{color: '#FFFFFF'}}>
            Email
            <input 
              type="email"
              name="email" 
              value={form.email} 
              onChange={handleChange}
              placeholder="you@example.com" 
              required 
            />
          </label>
          <label style={{color: '#FFFFFF'}}>
            Phone
            <input 
              type="tel"
              name="phone" 
              value={form.phone} 
              onChange={handleChange}
              placeholder="+1 (555) 123-4567" 
            />
          </label>
          <label style={{color: '#FFFFFF'}}>
            Company
            <input 
              type="text"
              placeholder="Your organization"
            />
          </label>
          <label style={{gridColumn: '1 / -1', color: '#FFFFFF'}}>
            Message
            <textarea 
              name="message" 
              value={form.message} 
              onChange={handleChange}
              placeholder="Tell us about your needs..."
              required 
            />
          </label>
          <button type="submit" className="btn" style={{gridColumn: '1 / -1', width: 'fit-content'}}>Send Inquiry</button>
        </form>
      </div>
    </section>
  )
}
