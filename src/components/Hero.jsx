import React from 'react'

export default function Hero(){
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <h2>Driving Africa's Growth Through Agriculture, Mining & Manufacturing</h2>
          <p className="lead">Mbire Group is a diversified African enterprise focused on unlocking value from the continent's natural resources and industrial potential. We operate across agriculture, mining, and manufacturing, delivering sustainable development, job creation, and long-term economic impact in Zimbabwe and across Africa.</p>
          <div className="hero-cta">
            <a href="#agriculture" className="btn">📊 Explore Our Sectors</a>
            <a href="#contact" className="btn outline">🤝 Partner With Us</a>
          </div>
        </div>
        <div className="hero-media">
          <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad576?w=500&h=600&fit=crop" alt="Agricultural fields" />
        </div>
      </div>
    </section>
  )
}
