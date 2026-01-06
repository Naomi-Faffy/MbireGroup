import React, {useState} from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'',company:'',email:'',phone:'',message:''})
  const [sent, setSent] = useState(false)
  function handleChange(e){
    setForm({...form,[e.target.name]: e.target.value})
  }
  function handleSubmit(e){
    e.preventDefault()
    // No backend in this scaffold; show success message
    setSent(true)
    setForm({name:'',company:'',email:'',phone:'',message:''})
  }
  return (
    <section id="contact" className="section container">
      <h3>Contact Us</h3>
      <p>Mbire Group – Head Office<br/>Zimbabwe<br/><br/>Email: (fill later) | Phone: (fill later)</p>
      {sent && <div className="notice">Thank you — your message was received (demo only).</div>}
      <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact form">
        <label>Name<input name="name" value={form.name} onChange={handleChange} required /></label>
        <label>Company<input name="company" value={form.company} onChange={handleChange} /></label>
        <label>Email<input name="email" type="email" value={form.email} onChange={handleChange} required /></label>
        <label>Phone<input name="phone" value={form.phone} onChange={handleChange} /></label>
        <label>Message<textarea name="message" value={form.message} onChange={handleChange} required /></label>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  )
}
