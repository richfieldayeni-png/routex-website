'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bus, Menu, X, ArrowRight } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="navbar-container">
      <Link href="/" className="navbar-logo">
        <div className="navbar-logo-icon">
          <Bus className="w-5 h-5 stroke-[2.5]" style={{ width: '20px', height: '20px' }} />
        </div>
        <span>Route</span>X
      </Link>

      <nav className="hidden md:flex navbar-links">
        <a href="#why-routex">Why RouteX</a>
        <a href="#routes">Abuja Routes</a>
        <a href="#solutions">Solutions</a>
        <a href="#how-it-works">How It Works</a>
      </nav>

      <div className="hidden md:flex items-center gap-4">
        <a href="#routes" className="btn-gold-pill">
          Book a Ride
          <ArrowRight className="w-4 h-4 ml-0.5" style={{ width: '16px', height: '16px' }} />
        </a>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white p-2 border-none bg-transparent cursor-pointer"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div style={{ position: 'absolute', top: '76px', left: 0, right: 0, background: '#1A5632', borderBottom: '1px solid rgba(201,168,76,0.3)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', zIndex: 90 }}>
          <a href="#why-routex" onClick={() => setIsOpen(false)} style={{ color: 'white', fontSize: '15px' }}>Why RouteX</a>
          <a href="#routes" onClick={() => setIsOpen(false)} style={{ color: 'white', fontSize: '15px' }}>Abuja Routes</a>
          <a href="#solutions" onClick={() => setIsOpen(false)} style={{ color: 'white', fontSize: '15px' }}>Solutions</a>
          <a href="#how-it-works" onClick={() => setIsOpen(false)} style={{ color: 'white', fontSize: '15px' }}>How It Works</a>
          <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <a
              href="#routes"
              onClick={() => setIsOpen(false)}
              className="btn-gold-pill"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Book a Ride
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
