import React, { useState, useEffect } from 'react'
import Logo from '../assets/logo.jpg'

export default function Header(){
  const [activeLink, setActiveLink] = useState('about')

  const handleNavClick = (href) => {
    setActiveLink(href.substring(1))
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand-wrap">
          <img src={Logo} alt="Mbire Group logo" className="logo" />
          <h1 className="brand">Mbire Group</h1>
        </div>
        <nav>
          <a 
            href="#about" 
            className={activeLink === 'about' ? 'active' : ''}
            onClick={() => handleNavClick('#about')}
          >
            About
          </a>
          <a 
            href="#agriculture" 
            className={activeLink === 'agriculture' ? 'active' : ''}
            onClick={() => handleNavClick('#agriculture')}
          >
            Agriculture
          </a>
          <a 
            href="#mining" 
            className={activeLink === 'mining' ? 'active' : ''}
            onClick={() => handleNavClick('#mining')}
          >
            Mining
          </a>
          <a 
            href="#manufacturing" 
            className={activeLink === 'manufacturing' ? 'active' : ''}
            onClick={() => handleNavClick('#manufacturing')}
          >
            Manufacturing
          </a>
          <a 
            href="#sustainability" 
            className={activeLink === 'sustainability' ? 'active' : ''}
            onClick={() => handleNavClick('#sustainability')}
          >
            Sustainability
          </a>
          <a href="#contact" className="cta">Contact</a>
        </nav>
      </div>
    </header>
  )
}
