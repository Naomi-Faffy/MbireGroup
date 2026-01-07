import React from 'react'

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
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop"
              alt="Mining operations"
              style={{borderRadius: '20px', boxShadow: '0 20px 50px rgba(93, 64, 55, 0.4)'}}
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
                  <img src={service.image} alt={service.title} />
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
                  <img src={highlight.image} alt={highlight.title} />
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
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop'
  },
  {
    title: 'Open-Pit Mining',
    category: 'Quarrying',
    description: 'Efficient open-pit operations with modern equipment for extracting surface minerals and resources. Full compliance with environmental regulations.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop'
  },
  {
    title: 'Mineral Processing',
    category: 'Processing',
    description: 'Comprehensive mineral processing and refinement services using advanced technology to increase yield and product quality.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop'
  }
]

const miningHighlights = [
  {
    title: 'Safety First Approach',
    description: 'Comprehensive safety protocols and training ensuring zero-harm operations across all mining activities.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop'
  },
  {
    title: 'Environmental Compliance',
    description: 'Full adherence to international environmental standards with ongoing restoration and conservation efforts.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=100&fit=crop'
  },
  {
    title: 'Advanced Technology',
    description: 'Investment in cutting-edge mining technology and data analytics for optimized operations and productivity.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=100&h=100&fit=crop'
  }
]
