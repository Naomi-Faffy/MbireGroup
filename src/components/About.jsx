import React from 'react'

export default function About(){
  const highlights = [
    {
      title: 'Our Mission',
      description: 'Mbire Group drives sustainable development across Africa through innovation, excellence, and strategic partnerships in agriculture, mining, manufacturing, and renewables.'
    },
    {
      title: 'Core Values',
      description: 'We are committed to environmental stewardship, operational excellence, and community development. Every project reflects our dedication to sustainable growth.'
    },
    {
      title: 'Our Sectors',
      description: 'Agriculture, Mining & Extraction, Manufacturing, Logistics, and Renewable Energy. Diversified expertise building resilience and opportunity.'
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 style={{textAlign: 'center', color: '#FFFFFF', fontSize: '2.8rem', marginBottom: '3rem', fontWeight: '800'}}>About Mbire Group</h2>
        <div className="about-glass-grid">
          {highlights.map((item, idx) => (
            <div key={idx} className="about-glass-card">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
