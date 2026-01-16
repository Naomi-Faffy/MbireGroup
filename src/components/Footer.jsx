import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer" role="contentinfo" aria-label="Site footer">
      <div className="container">
        <div className="footer-col" style={{animationDelay: '0.1s'}}>
          <h4>Mbire Ventures</h4>
          <p>Integrated solutions across agriculture, mining and manufacturing with a focus on sustainability and community impact.</p>
        </div>

        <div className="footer-col" style={{animationDelay: '0.2s'}}>
          <h4>Quick Links</h4>
          <Link to="/" aria-label="Navigate to home page">Home</Link>
          <Link to="/" aria-label="Learn about Mbire Ventures">About Us</Link>
          <Link to="/mining" aria-label="Navigate to mining page">Mining</Link>
          <Link to="/farming" aria-label="Navigate to farming page">Farming</Link>
          <Link to="/manufacturing" aria-label="Navigate to manufacturing page">Manufacturing</Link>
        </div>

        <div className="footer-col" style={{animationDelay: '0.3s'}}>
          <h4>Services</h4>
          <Link to="/farming" aria-label="Learn about agricultural consulting">Agricultural Consulting</Link>
          <Link to="/farming" aria-label="Learn about soil management services">Soil Management</Link>
          <Link to="/manufacturing" aria-label="Learn about processing and packaging">Processing & Packaging</Link>
        </div>

        <div className="footer-col" style={{animationDelay: '0.4s'}}>
          <h4>Contact</h4>
          <a href="mailto:contact@mbiregroup.com" aria-label="Email Mbire Group">contact@mbiregroup.com</a>
          <a href="tel:+15551234567" aria-label="Call Mbire Group">+1 (555) 123-4567</a>
          <p style={{fontSize: '0.85rem', margin: '1rem 0 0 0'}}>Sustainability • Local Impact • Quality</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Mbire Ventures. All rights reserved. | Built with sustainability in mind.</p>
      </div>
    </footer>
  )
}
