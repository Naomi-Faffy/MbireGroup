import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Sector from './components/Sector'
import Sustainability from './components/Sustainability'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Sector type="Agriculture" />
        <Sector type="Mining" />
        <Sector type="Manufacturing" />
        <Sustainability />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
