import React, { useEffect, useState } from 'react'

export default function Hero(){
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-label">We are Producing Natural Products</div>
          <h2>Agriculture & Diversified Growth</h2>
          <p className="lead">Mbire Group drives sustainable development across agriculture, mining, and manufacturing. Building Africa's future through innovation, excellence, and strategic partnerships.</p>
          <div className="hero-cta">
            <a href="/#services" className="btn">→ Explore Solutions</a>
            <a href="#contact" className="btn outline">→ Partner With Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}
