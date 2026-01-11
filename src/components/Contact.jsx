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

        <div style={{marginTop: '4rem'}}>
          <div>
            <h3 style={{color: '#FFFFFF', fontSize: 'clamp(1.5rem, 5vw, 1.8rem)', marginBottom: '1.5rem'}}>Let's Build Together</h3>
            
            <div style={{background: 'rgba(255,255,255,0.06)', border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: 'clamp(1rem, 3vw, 2rem)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)', marginBottom: '2rem'}}>
              <p style={{fontSize: 'clamp(0.9rem, 2vw, 1rem)', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)', margin: '0 0 1rem 0'}}>
                <strong style={{color: '#FFFFFF', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)'}}>Mbire Group</strong>
              </p>
              <p style={{fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', lineHeight: '1.6', color: 'rgba(255,255,255,0.8)', margin: '0'}}>
                Agriculture • Mining • Manufacturing
              </p>
              <hr style={{border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '1rem 0'}} />
              <p style={{fontSize: 'clamp(0.8rem, 2vw, 0.95rem)', color: 'rgba(255,255,255,0.85)', margin: '0.5rem 0'}}>contact@mbiregroup.com</p>
              <p style={{fontSize: 'clamp(0.8rem, 2vw, 0.95rem)', color: 'rgba(255,255,255,0.85)', margin: '0.5rem 0'}}>+1 (555) 123-4567</p>
              <p style={{fontSize: 'clamp(0.8rem, 2vw, 0.95rem)', color: 'rgba(255,255,255,0.85)', margin: '0.5rem 0'}}>www.mbiregroup.com</p>
            </div>
          </div>
        </div>

        <div style={{marginTop: '4rem', marginBottom: '2rem'}}>
          {sent && <div className="notice" style={{marginTop: '2rem', textAlign: 'center', color: '#FFFFFF', animation: 'fadeInUp 0.6s ease-out'}}>✓ Thank you! We'll be in touch soon.</div>}
          <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact form" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(1rem, 2vw, 1.5rem)', animation: 'fadeInUp 0.8s ease-out'}}>
          <label style={{color: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
            Full Name *
            <input 
              type="text"
              name="name" 
              value={form.name} 
              onChange={handleChange} 
              placeholder="John Doe"
              required 
              aria-label="Full Name"
              aria-required="true"
              style={{padding: 'clamp(0.6rem, 1.5vw, 0.8rem)', fontSize: 'clamp(0.9rem, 2vw, 1rem)', borderRadius: '8px', border: '2px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: '#FFFFFF', transition: 'all 0.3s ease'}}
            />
          </label>
          <label style={{color: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
            Email *
            <input 
              type="email"
              name="email" 
              value={form.email} 
              onChange={handleChange}
              placeholder="you@example.com" 
              required 
              aria-label="Email address"
              aria-required="true"
              style={{padding: 'clamp(0.6rem, 1.5vw, 0.8rem)', fontSize: 'clamp(0.9rem, 2vw, 1rem)', borderRadius: '8px', border: '2px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: '#FFFFFF', transition: 'all 0.3s ease'}}
            />
          </label>
          <label style={{color: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
            Phone
            <input 
              type="tel"
              name="phone" 
              value={form.phone} 
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              aria-label="Phone number"
              style={{padding: 'clamp(0.6rem, 1.5vw, 0.8rem)', fontSize: 'clamp(0.9rem, 2vw, 1rem)', borderRadius: '8px', border: '2px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: '#FFFFFF', transition: 'all 0.3s ease'}}
            />
          </label>
          <label style={{color: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
            Company
            <input 
              type="text"
              placeholder="Your organization"
              aria-label="Company name"
              style={{padding: 'clamp(0.6rem, 1.5vw, 0.8rem)', fontSize: 'clamp(0.9rem, 2vw, 1rem)', borderRadius: '8px', border: '2px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: '#FFFFFF', transition: 'all 0.3s ease'}}
            />
          </label>
          <label style={{gridColumn: '1 / -1', color: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
            Message *
            <textarea 
              name="message" 
              value={form.message} 
              onChange={handleChange}
              placeholder="Tell us about your needs..."
              required 
              aria-label="Message"
              aria-required="true"
              style={{padding: 'clamp(0.6rem, 1.5vw, 0.8rem)', fontSize: 'clamp(0.9rem, 2vw, 1rem)', borderRadius: '8px', border: '2px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: '#FFFFFF', transition: 'all 0.3s ease', minHeight: 'clamp(120px, 20vh, 150px)', resize: 'vertical'}}
            />
          </label>
          <button type="submit" className="btn" style={{gridColumn: '1 / -1', width: 'fit-content', padding: 'clamp(0.7rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)', fontSize: 'clamp(0.9rem, 2vw, 1rem)', marginTop: '1rem'}} aria-label="Send contact inquiry">Send Inquiry</button>
        </form>
        </div>
      </div>
    </section>
  )
}
