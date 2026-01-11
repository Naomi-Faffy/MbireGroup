import React from 'react'

export default function FarmingPage(){
  return (
    <div className="section">
      <div className="container">
        {/* Hero Section */}
        <div className="hero-inner" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '6rem'}}>
          <div>
            <div className="hero-label">Agriculture & Farming</div>
            <h2 style={{fontSize: '3rem', marginTop: '1rem', marginBottom: '1.5rem'}}>
              Modern Sustainable Farming Solutions
            </h2>
            <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem'}}>
              Mbire Group brings together traditional farming wisdom with modern agricultural technology. We help farmers maximize yields through sustainable practices, soil management, and innovative crop production methods.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn">Get Started</a>
              <a href="#learn-more" className="btn outline">Learn More</a>
            </div>
          </div>
          <div className="hero-media">
            <img 
              src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=500&fit=crop&q=80" 
              alt="Farming landscape"
              loading="lazy"
              style={{borderRadius: '20px', boxShadow: '0 20px 50px rgba(93, 64, 55, 0.4)'}}
            />
          </div>
        </div>

        {/* Services Grid */}
        <div style={{marginBottom: '6rem'}}>
          <h3 style={{textAlign: 'center', marginBottom: '3rem', fontSize: '2.2rem'}}>Our Farming Services</h3>
          <div className="sector-grid">
            {farmingServices.map((service, idx) => (
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
          <h3 style={{textAlign: 'center', marginBottom: '3rem', fontSize: '2.2rem'}}>Farming Excellence</h3>
          <div className="highlights-grid">
            {farmingHighlights.map((highlight, idx) => (
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

const farmingServices = [
  {
    title: 'Crop Production Consulting',
    category: 'Consulting',
    description: 'Expert guidance on crop selection, rotation planning, and production optimization tailored to your climate and soil conditions.',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=300&fit=crop&q=80'
  },
  {
    title: 'Soil Management & Fertility',
    category: 'Soil Care',
    description: 'Comprehensive soil testing, amendment strategies, and organic fertilization programs to maintain and enhance soil health.',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=300&fit=crop&q=80'
  },
  {
    title: 'Dairy & Livestock Production',
    category: 'Livestock',
    description: 'Full-scale dairy farming services with sustainable grazing practices, animal welfare focus, and quality production standards.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop&q=80'
  }
]

const farmingHighlights = [
  {
    title: 'Sustainable Practices',
    description: 'Organic and regenerative farming methods that improve land health while reducing chemical inputs.',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=100&h=100&fit=crop&q=80'
  },
  {
    title: 'Technology Integration',
    description: 'Modern farming tools including irrigation systems, soil moisture monitoring, and crop analytics.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop&q=80'
  },
  {
    title: 'Expert Support',
    description: 'Ongoing technical support and training to maximize productivity and profitability of your farm operations.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop&q=80'
  }
]
