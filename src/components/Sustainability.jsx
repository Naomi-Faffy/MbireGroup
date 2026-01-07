import React from 'react'

export default function Sustainability(){
  const galleryImages = [
    'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
  ]

  return (
    <section id="sustainability" className="sustainability">
      <div className="container">
        <div className="section-title-wrapper">
          <div className="section-tag">Why Choose Us</div>
          <h2>Sustainable Excellence Across All Sectors</h2>
        </div>

        <div style={{maxWidth: '900px', margin: '0 auto 4rem', textAlign: 'center'}}>
          <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#FFFFFF'}}>
            Mbire Group is committed to sustainable practices across agriculture, mining, and manufacturing. We protect the environment while delivering premium quality and building prosperity for communities.
          </p>
        </div>

        <div className="highlights-grid" style={{marginTop: '3rem', marginBottom: '4rem'}}>
          <div className="highlight-card">
            <div className="highlight-image">
              <img src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=150&h=150&fit=crop" alt="Sustainable farming" />
            </div>
            <h4>100% Sustainable</h4>
            <p>Eco-friendly practices across all operations</p>
          </div>

          <div className="highlight-card">
            <div className="highlight-image">
              <img src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=150&h=150&fit=crop" alt="Community focused" />
            </div>
            <h4>Community Impact</h4>
            <p>Supporting local communities and fair practices</p>
          </div>

          <div className="highlight-card">
            <div className="highlight-image">
              <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=150&h=150&fit=crop" alt="Environment first" />
            </div>
            <h4>Environment First</h4>
            <p>Protecting biodiversity and land health</p>
          </div>
        </div>

        {/* Image Gallery */}
        <div style={{marginTop: '4rem'}}>
          <h3 style={{textAlign: 'center', marginBottom: '2rem', color: '#FFFFFF'}}>Our Operations</h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem'}}>
            {galleryImages.map((img, idx) => (
              <div 
                key={idx} 
                style={{
                  overflow: 'hidden',
                  borderRadius: '16px',
                  height: '250px',
                  border: '2px solid rgba(141, 110, 99, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'
                  e.currentTarget.style.borderColor = 'var(--brown-accent)'
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(93, 64, 55, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.borderColor = 'rgba(141, 110, 99, 0.3)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}
              >
                <img 
                  src={img} 
                  alt={`Gallery ${idx + 1}`}
                  style={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
