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
      </div>
    </Router>
  )
}
