import React from 'react'

const content = {
  Agriculture: {
    id: 'agriculture',
    title: 'Agriculture Division',
    text: `Mbire Agriculture focuses on commercial farming, agro-processing, and value-chain development. We believe Africa can feed itself and the world through modern, technology-driven agriculture.`,
    focus: `Crop production (maize, wheat, soya, horticulture); livestock & poultry production; irrigation farming; contract farming & out-grower support; agro-processing and packaging; farming technology & training programs; climate-smart agriculture practices and support for rural farmers.`,
    icon: '🌾'
  },
  Mining: {
    id: 'mining',
    title: 'Mining Division',
    text: `Mbire Mining is involved in responsible exploration, extraction, and trading of minerals in Zimbabwe and across Africa.`,
    focus: `Key minerals may include gold, lithium, chrome, platinum group metals, coal, and quarry stone. Our commitment includes ethical, environmentally responsible mining, land rehabilitation, worker safety, and community development.`,
    icon: '⛏️'
  },
  Manufacturing: {
    id: 'manufacturing',
    title: 'Manufacturing Division',
    text: `Mbire Manufacturing transforms raw materials into high-value finished goods, supporting industrialization and job creation in Africa.`,
    focus: `Areas include agricultural processing (foods & beverages), construction materials, mining equipment and consumables, packaging materials, and household and industrial products. We focus on modern production technology, quality assurance systems, and efficient distribution networks.`,
    icon: '⚙️'
  }
}

export default function Sector({type}){
  const sec = content[type]
  if(!sec) return null

  return (
    <section id={sec.id} className="sector">
      <div className="container">
        <div className="section-title-wrapper">
          <div className="section-tag">{sec.title.split(' ')[0]}</div>
          <h2>{sec.title}</h2>
        </div>

        <div className="sector-grid">
          <div className="sector-card">
            <div className="sector-card-image" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem'}}>
              {sec.icon}
            </div>
            <div className="sector-card-body">
              <span className="sector-badge">Overview</span>
              <h3>{sec.title}</h3>
              <p>{sec.text}</p>
              <a href={`#${sec.id}`} className="sector-card-link">Learn More →</a>
            </div>
          </div>

          <div className="sector-card">
            <div className="sector-card-image" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', background: 'linear-gradient(135deg, #0F3B2E 0%, #1E5B47 100%)'}}>
              🎯
            </div>
            <div className="sector-card-body">
              <span className="sector-badge">Focus Areas</span>
              <h3>Our Focus</h3>
              <p>{sec.focus}</p>
              <a href={`#${sec.id}`} className="sector-card-link">Explore →</a>
            </div>
          </div>

          <div className="sector-card">
            <div className="sector-card-image" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', background: 'linear-gradient(135deg, #1E5B47 0%, #0F3B2E 100%)'}}>
              🚀
            </div>
            <div className="sector-card-body">
              <span className="sector-badge">Impact</span>
              <h3>Our Promise</h3>
              <p>We're committed to sustainable development, ethical operations, job creation, and long-term value for all stakeholders in the communities we serve.</p>
              <a href={`#contact`} className="sector-card-link">Partner With Us →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
