import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Sector from '../components/Sector'
import Sustainability from '../components/Sustainability'
import Shop from '../components/Shop'
import Contact from '../components/Contact'

export default function HomePage(){
  return (
    <>
      <Hero />
      <About />
      <section id="services" className="sector">
        <div className="container">
          <div className="section-title-wrapper">
            <div className="section-tag">Our Core Services</div>
            <h2>Mbire Group Sectors</h2>
            <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginTop: '1rem'}}>
              Comprehensive solutions across agriculture, mining, and manufacturing
            </p>
          </div>
          <div className="sector-grid">
            <Sector type="Agriculture" />
            <Sector type="Mining" />
            <Sector type="Manufacturing" />
          </div>
        </div>
      </section>
      <Sustainability />
      <Shop />
      <Contact />
    </>
  )
}
