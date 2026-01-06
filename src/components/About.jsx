import React from 'react'

export default function About(){
  const highlights = [
    {
      icon: '🌾',
      title: 'Sustainable Growth',
      description: 'Advancing African agriculture with modern techniques and community partnerships'
    },
    {
      icon: '⚙️',
      title: 'Industrial Excellence',
      description: 'Building competitive manufacturing and processing capabilities across sectors'
    },
    {
      icon: '🌍',
      title: 'Global Impact',
      description: 'Creating jobs, building infrastructure, and generating economic value continent-wide'
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title-wrapper">
          <div className="section-tag">Our Company</div>
          <h2>About Mbire Group</h2>
        </div>

        <div style={{maxWidth: '900px', margin: '0 auto 4rem', textAlign: 'center'}}>
          <p><strong>Mbire Group is a multi-sector business group headquartered in Zimbabwe with operations expanding across Africa.</strong></p>
          <p>Our core business pillars are modern agriculture and agribusiness, mineral exploration and mining operations, and manufacturing and industrial processing.</p>
        </div>

        <div className="highlights-grid">
          {highlights.map((item, idx) => (
            <div key={idx} className="highlight-card">
              <div className="highlight-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div style={{maxWidth: '1000px', margin: '4rem auto 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem'}}>
          <div>
            <h3>Our Vision</h3>
            <p>To become one of Africa's leading diversified groups, transforming natural resources into sustainable value that benefits communities, shareholders, and future generations.</p>
          </div>
          <div>
            <h3>Our Mission</h3>
            <p>To build efficient, ethical, and globally competitive businesses in agriculture, mining, and manufacturing, driven by innovation, excellence, and partnerships.</p>
          </div>
        </div>

        <div style={{marginTop: '4rem', padding: '2rem', background: '#F9F7F3', borderRadius: '12px'}}>
          <h3 style={{marginTop: 0}}>Core Values</h3>
          <p><strong>Integrity • Innovation • Sustainability • Excellence • Community Impact • Accountability</strong></p>
        </div>
      </div>
    </section>
  )
}
