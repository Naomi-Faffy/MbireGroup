import React, { useState } from 'react'
import Farming1 from '../assets/farming1.jpg'
import Farming2 from '../assets/farming2.jpg'
import Farming3 from '../assets/farming3.jpg'
import Farming4 from '../assets/farming4.jpg'
import Mining1 from '../assets/mining1.jpg'
import Mining2 from '../assets/mining2.jpg'

export default function Sustainability(){
  const galleryImages = [
    Farming1,
    Farming2,
    Farming3,
    Farming4,
    Mining1,
    Mining2,
  ]

  return (
    <section id="sustainability" className="sustainability">
      <div className="container">
        <div className="section-title-wrapper">
          <div className="section-tag">Why Choose Us</div>
          <h2>Sustainable Excellence Across All Sectors</h2>
        </div>

        <div style={{maxWidth: '900px', margin: '0 auto 4rem', textAlign: 'center', animation: 'fadeInUp 0.8s ease-out'}}>
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#FFFFFF'}}>
            Mbire Group is committed to sustainable practices across agriculture, mining, and manufacturing. We protect the environment while delivering premium quality and building prosperity for communities.
          </p>
        </div>

        <div className="highlights-grid" style={{marginTop: '3rem', marginBottom: '4rem'}}>
          <div className="highlight-card">
            <div className="highlight-image">
              <img 
                src={Farming1} 
                alt="Sustainable farming practices"
                loading="lazy"
              />
            </div>
            <h4>100% Sustainable</h4>
            <p>Eco-friendly practices across all operations</p>
          </div>

          <div className="highlight-card">
            <div className="highlight-image">
              <img 
                src={Mining1} 
                alt="Community focused initiatives"
                loading="lazy"
              />
            </div>
            <h4>Community Impact</h4>
            <p>Supporting local communities and fair practices</p>
          </div>

          <div className="highlight-card">
            <div className="highlight-image">
              <img 
                src={Farming2} 
                alt="Environmental protection"
                loading="lazy"
              />
            </div>
            <h4>Environment First</h4>
            <p>Protecting biodiversity and land health</p>
          </div>
        </div>

        {/* Image Gallery */}
        <div style={{marginTop: '4rem'}}>
          <h3 style={{textAlign: 'center', marginBottom: '2rem', color: '#FFFFFF'}}>Our Operations</h3>
          <div className="gallery-grid">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx} 
                className="gallery-item"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${idx + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
