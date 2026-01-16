import React from 'react'
import Mining1 from '../assets/mining1.jpg'
import Mining2 from '../assets/mining2.jpg'
import Mining3 from '../assets/mining3.jpg'
import Mining4 from '../assets/mining4.jpg'
import Mining6 from '../assets/mining6.jpg'
import Mining7 from '../assets/mining7.jpg'

export default function MiningPage(){
  return (
    <div className="section">
      <div className="container">
        {/* Hero Section */}
        <div className="hero-inner" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '6rem'}}>
          <div>
            <div className="hero-label">Mining Solutions</div>
            <h2 style={{fontSize: '3rem', marginTop: '1rem', marginBottom: '1.5rem'}}>
              Sustainable Mining & Resource Extraction
            </h2>
            <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem'}}>
              Mbire Group specializes in sustainable mining operations that balance economic growth with environmental stewardship. Our advanced techniques and technology ensure responsible extraction of mineral resources while protecting ecosystems.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn">Get Started</a>
              <a href="#learn-more" className="btn outline">Learn More</a>
            </div>
          </div>
          <div className="hero-media">
            <img
              src={Mining1}
              alt="Mining operations"
              loading="lazy"
              style={{borderRadius: '20px', boxShadow: '0 20px 50px rgba(93, 64, 55, 0.4)', width: '500px', height: '500px', objectFit: 'cover'}}
            />
          </div>
        </div>

        {/* Services Grid */}
        <div style={{marginBottom: '6rem'}}>
          <h3 style={{textAlign: 'center', marginBottom: '3rem', fontSize: '2.2rem'}}>Our Mining Services</h3>
          <div className="sector-grid">
            {miningServices.map((service, idx) => (
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
          <h3 style={{textAlign: 'center', marginBottom: '3rem', fontSize: '2.2rem'}}>Mining Excellence</h3>
          <div className="highlights-grid">
            {miningHighlights.map((highlight, idx) => (
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

const miningServices = [
  {
    title: 'Underground Mining Operations',
    category: 'Extraction',
    description: 'Advanced underground mining with state-of-the-art safety equipment and extraction techniques to maximize efficiency while minimizing environmental impact.',
    image: Mining2
  },
  {
    title: 'Open-Pit Mining',
    category: 'Quarrying',
    description: 'Efficient open-pit operations with modern equipment for extracting surface minerals and resources. Full compliance with environmental regulations.',
    image: Mining3
  },
  {
    title: 'Mineral Processing',
    category: 'Processing',
    description: 'Comprehensive mineral processing and refinement services using advanced technology to increase yield and product quality.',
    image: Mining4
  }
]

const miningHighlights = [
  {
    title: 'Safety First Approach',
    description: 'Comprehensive safety protocols and training ensuring zero-harm operations across all mining activities.',
    image: Mining6
  },
  {
    title: 'Environmental Compliance',
    description: 'Full adherence to international environmental standards with ongoing restoration and conservation efforts.',
    image: Mining7
  },
  {
    title: 'Advanced Technology',
    description: 'Investment in cutting-edge mining technology and data analytics for optimized operations and productivity.',
    image: Mining2
  }
]
