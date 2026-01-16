import React from 'react'
import Manufacturing1 from '../assets/manufacturing1.jpg'
import Manufacturing2 from '../assets/manufacturing2.jpg'
import Manufacturing3 from '../assets/manufacturing3.jpg'
import Manufacturing4 from '../assets/manufacturing4.jpg'
import Manufacturing5 from '../assets/manufacturing5.jpg'
import Manufacturing6 from '../assets/manufacturing6.jpg'

export default function ManufacturingPage(){
  return (
    <div className="section">
      <div className="container">
        {/* Hero Section */}
        <div className="hero-inner" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '6rem'}}>
          <div>
            <div className="hero-label">Manufacturing</div>
            <h2 style={{fontSize: '3rem', marginTop: '1rem', marginBottom: '1.5rem'}}>
              Advanced Manufacturing & Processing
            </h2>
            <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem'}}>
              Mbire Group provides manufacturing solutions that turn raw materials into high-quality products. Our facilities focus on efficiency, worker safety, and environmental responsibility.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn">Get Started</a>
              <a href="#learn-more" className="btn outline">Learn More</a>
            </div>
          </div>
          <div className="hero-media">
            <img 
              src={Manufacturing1} 
              alt="Manufacturing facilities"
              loading="lazy"
              style={{borderRadius: '20px', boxShadow: '0 20px 50px rgba(93, 64, 55, 0.4)', width: '500px', height: '500px', objectFit: 'cover'}}
            />
          </div>
        </div>

        {/* Services Grid */}
        <div style={{marginBottom: '6rem'}}>
          <h3 style={{textAlign: 'center', marginBottom: '3rem', fontSize: '2.2rem'}}>Our Manufacturing Services</h3>
          <div className="sector-grid">
            {manufacturingServices.map((service, idx) => (
              <div key={idx} className="sector-card">
                <div className="sector-card-image">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    loading="lazy"
                  />
                  <div className="sector-card-overlay"></div>
                </div>
                <div className="sector-card-body">
                  <span className="sector-badge">{service.category}</span>
                  <h3 style={{margin: '1rem 0 0.75rem'}}>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contact" className="sector-card-link">Learn More →</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights Section */}
        <div style={{marginBottom: '4rem'}}>
          <h3 style={{textAlign: 'center', marginBottom: '3rem', fontSize: '2.2rem'}}>Manufacturing Highlights</h3>
          <div className="highlights-grid">
            {manufacturingHighlights.map((highlight, idx) => (
              <div key={idx} className="highlight-card">
                <div className="highlight-image">
                  <img 
                    src={highlight.image} 
                    alt={highlight.title}
                    loading="lazy"
                  />
                </div>
                <h4>{highlight.title}</h4>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const manufacturingServices = [
  {
    title: 'Processing & Refinement',
    category: 'Processing',
    description: 'State-of-the-art processing lines that increase product quality and production throughput.',
    image: Manufacturing2
  },
  {
    title: 'Packaging & Distribution',
    category: 'Logistics',
    description: 'Integrated packaging and distribution services to bring products to market efficiently and reliably.',
    image: Manufacturing3
  },
  {
    title: 'Quality Control',
    category: 'QA',
    description: 'Rigorous QA processes to ensure products meet international standards and customer expectations.',
    image: Manufacturing4
  }
]

const manufacturingHighlights = [
  {
    title: 'Lean Operations',
    description: 'Continuous improvement frameworks to minimize waste and maximize efficiency.',
    image: Manufacturing5
  },
  {
    title: 'Worker Safety',
    description: 'Investment in occupational safety and training for all manufacturing staff.',
    image: Manufacturing6
  },
  {
    title: 'Sustainable Materials',
    description: 'Prioritizing sustainable inputs and recycled materials where possible.',
    image: Manufacturing2
  }
]
