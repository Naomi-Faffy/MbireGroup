import React, { useEffect } from 'react'
import Logo from '../assets/logo.jpg'

function _toHex(v){
  return v.toString(16).padStart(2,'0')
}

function darkenRgb(r,g,b,f){
  const nr = Math.max(0, Math.round(r * f))
  const ng = Math.max(0, Math.round(g * f))
  const nb = Math.max(0, Math.round(b * f))
  return `#${_toHex(nr)}${_toHex(ng)}${_toHex(nb)}`
}

export default function Header(){
  useEffect(()=>{
    // Sample the logo to extract a dominant brand color and set CSS vars
    try{
      const img = new Image()
      img.crossOrigin = 'Anonymous'
      img.src = Logo
      img.onload = ()=>{
        const size = 32
        const c = document.createElement('canvas')
        c.width = size; c.height = size
        const ctx = c.getContext('2d')
        ctx.drawImage(img,0,0,size,size)
        const data = ctx.getImageData(0,0,size,size).data
        let r=0,g=0,b=0,count=0
        for(let i=0;i<data.length;i+=4){
          const alpha = data[i+3]
          if(alpha < 60) continue
          r += data[i]; g += data[i+1]; b += data[i+2]; count++
        }
        if(count===0) return
        r = Math.round(r/count); g = Math.round(g/count); b = Math.round(b/count)
        const hex = `#${_toHex(r)}${_toHex(g)}${_toHex(b)}`
        const darker = darkenRgb(r,g,b,0.78)
        document.documentElement.style.setProperty('--brand-1', hex)
        document.documentElement.style.setProperty('--brand-2', darker)
      }
    }catch(e){ /* sampling only; ignore failures */ }
  },[])

  return (
    <header className="site-header glass">
      <div className="container header-inner">
        <div className="brand-wrap">
          <img src={Logo} alt="Mbire Group logo" className="logo" />
          <h1 className="brand">Mbire Group</h1>
        </div>
        <nav>
          <a href="#about">About</a>
          <a href="#agriculture">Agriculture</a>
          <a href="#mining">Mining</a>
          <a href="#manufacturing">Manufacturing</a>
          <a href="#sustainability">Sustainability</a>
          <a href="#contact" className="cta">Contact</a>
        </nav>
      </div>
    </header>
  )
}
