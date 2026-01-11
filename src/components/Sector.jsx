import React from 'react'

const content = {
  Agriculture: {
    id: 'agriculture',
    title: 'Agricultural Consulting',
    description: 'Expert guidance on crop production, soil management, and sustainable farming practices for maximum yield.',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=300&fit=crop&q=80'
  },
  Mining: {
    id: 'mining',
    title: 'Mining & Resource Extraction',
    description: 'Advanced mining operations with sustainable practices, responsible extraction, and environmental protection.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop&q=80'
  },
  Manufacturing: {
    id: 'manufacturing',
    title: 'Manufacturing & Processing',
    description: 'State-of-the-art manufacturing facilities focused on quality, efficiency, and sustainable production.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop&q=80'
  }
}

export default function Sector({type}){
  const sec = content[type]
  if(!sec) return null

  return (
    <div className="sector-card">
      <div className="sector-card-image">
        <img 
          src={sec.image} 
          alt={sec.title}
          loading="lazy"
        />
        <div className="sector-card-overlay"></div>
      </div>
      <div className="sector-card-body">
        <span className="sector-badge">{type}</span>
        <h3>{sec.title}</h3>
        <p>{sec.description}</p>
        <a href="#contact" className="sector-card-link" aria-label={`Learn more about ${sec.title}`}>Learn More →</a>
      </div>
    </div>
  )
}
