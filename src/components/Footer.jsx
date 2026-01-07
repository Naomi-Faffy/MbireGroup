import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-col">
          <h4>Mbire Group</h4>
          <p>Integrated solutions across agriculture, mining and manufacturing with a focus on sustainability and community impact.</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/">About Us</Link>
          <Link to="/mining">Mining</Link>
          <Link to="/farming">Farming</Link>
          <Link to="/manufacturing">Manufacturing</Link>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <Link to="/farming">Agricultural Consulting</Link>
          <Link to="/farming">Soil Management</Link>
          <Link to="/manufacturing">Processing & Packaging</Link>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:contact@mbiregroup.com">contact@mbiregroup.com</a>
          <a href="tel:+15551234567">+1 (555) 123-4567</a>
          <p style={{fontSize: '0.85rem'}}>Sustainability • Local Impact • Quality</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Mbire Group. All rights reserved.</p>
      </div>
    </footer>
  )
}
