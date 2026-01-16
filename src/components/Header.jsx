import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/logo.jpg'

export default function Header(){
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when navigating
  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <div className="brand-wrap">
          <Link to="/" onClick={handleLinkClick}>
            <img src={Logo} alt="Mbire Ventures logo" className="logo" />
            <h1 className="brand">Mbire Ventures</h1>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <nav className={`${mobileMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link 
            to="/mining" 
            className={location.pathname === '/mining' ? 'active' : ''}
            onClick={handleLinkClick}
          >
            Mining
          </Link>
          <Link 
            to="/farming" 
            className={location.pathname === '/farming' ? 'active' : ''}
            onClick={handleLinkClick}
          >
            Farming
          </Link>
          <Link 
            to="/manufacturing" 
            className={location.pathname === '/manufacturing' ? 'active' : ''}
            onClick={handleLinkClick}
          >
            Manufacturing
          </Link>
          <a 
            href="/#shop"
            className={location.hash === '#shop' ? 'active' : ''}
            onClick={handleLinkClick}
          >
            Shop
          </a>
          <a href="#contact" className="cta" onClick={handleLinkClick}>Get Started</a>
        </nav>
      </div>
    </header>
  )
}
