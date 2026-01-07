import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/logo.jpg'

export default function Header(){
  const location = useLocation()

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand-wrap">
          <img src={Logo} alt="Mbire Group logo" className="logo" />
          <h1 className="brand">Mbire Group</h1>
        </div>
        <nav>
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
          >
            Home
          </Link>
          <Link 
            to="/mining" 
            className={location.pathname === '/mining' ? 'active' : ''}
          >
            Mining
          </Link>
          <Link 
            to="/farming" 
            className={location.pathname === '/farming' ? 'active' : ''}
          >
            Farming
          </Link>
          <Link 
            to="/manufacturing" 
            className={location.pathname === '/manufacturing' ? 'active' : ''}
          >
            Manufacturing
          </Link>
          <a href="/#shop" style={{color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontWeight: '500', fontSize: '0.95rem', transition: 'color 0.3s ease'}} onMouseEnter={(e) => e.target.style.color = '#FFFFFF'} onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}>Shop</a>
          <a href="#contact" className="cta">Get Started</a>
        </nav>
      </div>
    </header>
  )
}
