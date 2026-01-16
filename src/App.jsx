import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import MiningPage from './pages/MiningPage'
import FarmingPage from './pages/FarmingPage'
import ManufacturingPage from './pages/ManufacturingPage'

export default function App(){
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mining" element={<MiningPage />} />
            <Route path="/farming" element={<FarmingPage />} />
            <Route path="/manufacturing" element={<ManufacturingPage />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/263774029460" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          style={{
            position: 'fixed',
            bottom: 'clamp(1.5rem, 3vw, 2.5rem)',
            right: 'clamp(1.5rem, 3vw, 2.5rem)',
            width: 'clamp(55px, 8vw, 70px)',
            height: 'clamp(55px, 8vw, 70px)',
            backgroundColor: '#25D366',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
            zIndex: 999,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            fontSize: 'clamp(24px, 4vw, 32px)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(37, 211, 102, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 211, 102, 0.4)';
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </a>
      </div>
    </Router>
  )
}
