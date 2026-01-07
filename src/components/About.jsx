import React from 'react'

export default function About(){
  const highlights = [
    {
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=150&h=150&fit=crop',
      title: '100K+ Happy Clients',
      description: 'With positive reviews and sustainable practices'
    },
    {
      image: 'https://images.unsplash.com/photo-1609441773091-490fdf41d360?w=150&h=150&fit=crop',
      title: 'Organic & Natural',
      description: 'Premium quality vegetables and farming products'
    },
    {
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=150&h=150&fit=crop',
      title: 'Fresh Daily',
      description: 'Healthy living with fresh products delivered'
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2.5rem'}}>
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=400&fit=crop"
            alt="Farm landscape"
            style={{width: '100%', maxWidth: '1200px', borderRadius: '16px', boxShadow: '0 20px 50px rgba(0,0,0,0.45)'}}
          />
        </div>
        <div className="highlights-grid">
          {highlights.map((item, idx) => (
            <div key={idx} className="highlight-card">
              <div className="highlight-image">
                <img src={item.image} alt={item.title} />
              </div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
