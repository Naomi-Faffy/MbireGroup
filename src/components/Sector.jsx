import React from 'react'
import AgriIcon from '../assets/agriculture.svg'
import MiningIcon from '../assets/mining.svg'
import ManuIcon from '../assets/manufacturing.svg'

const content = {
  Agriculture: {
    id: 'agriculture',
    title: 'Agriculture Division',
    text: `Mbire Agriculture focuses on commercial farming, agro-processing, and value-chain development. We believe Africa can feed itself and the world through modern, technology-driven agriculture.`,
    focus: `Crop production (maize, wheat, soya, horticulture); livestock & poultry production; irrigation farming; contract farming & out-grower support; agro-processing and packaging; farming technology & training programs; climate-smart agriculture practices and support for rural farmers.`,
    icon: AgriIcon
  },
  Mining: {
    id: 'mining',
    title: 'Mining Division',
    text: `Mbire Mining is involved in responsible exploration, extraction, and trading of minerals in Zimbabwe and across Africa.`,
    focus: `Key minerals may include gold, lithium, chrome, platinum group metals, coal, and quarry stone. Our commitment includes ethical, environmentally responsible mining, land rehabilitation, worker safety, and community development.`,
    icon: MiningIcon
  },
  Manufacturing: {
    id: 'manufacturing',
    title: 'Manufacturing Division',
    text: `Mbire Manufacturing transforms raw materials into high-value finished goods, supporting industrialization and job creation in Africa.`,
    focus: `Areas include agricultural processing (foods & beverages), construction materials, mining equipment and consumables, packaging materials, and household and industrial products. We focus on modern production technology, quality assurance systems, and efficient distribution networks.`,
    icon: ManuIcon
  }
}

export default function Sector({type}){
  const sec = content[type]
  if(!sec) return null
  const Icon = sec.icon
  return (
    <section id={sec.id} className="section container sector-card">
      <div className="sector-media">
        <img src={Icon} alt={`${sec.title} icon`} />
      </div>
      <div className="sector-body">
        <h3>{sec.title}</h3>
        <p>{sec.text}</p>
        <p><strong>Focus Areas:</strong> {sec.focus}</p>
      </div>
    </section>
  )
}
