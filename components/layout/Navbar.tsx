'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePanorama } from './PanoramaContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { navColor } = usePanorama()

  return (
    <nav className="w-full">
      {/* Navbar background matches current product */}
      <div
        className="w-full transition-colors duration-500"
        style={{ backgroundColor: navColor }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center text-white transition-colors duration-500 hover:opacity-90">
              <span className="text-[28px] font-extrabold tracking-tight">Bou.</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white font-medium transition-colors hover:opacity-90">
                Accueil
              </Link>
              <Link href="/menu" className="text-white font-medium transition-colors hover:opacity-90">
                Menu
              </Link>
              <Link href="/contact" className="text-white font-medium transition-colors hover:opacity-90">
                Contact
              </Link>
              <Link href="/chatbot" className="text-white font-medium transition-colors hover:opacity-90">
                Chat
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Wavy Drip Effect SVG - hidden when mobile menu is open */}
        {!isOpen && (
          <svg
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
            style={{ width: '100%', height: '60px', display: 'block' }}
          >
            <path
              d="M0,40 Q60,10 120,40 T240,40 T360,40 T480,40 T600,40 T720,40 T840,40 T960,40 T1080,40 T1200,40 L1200,100 L0,100 Z"
              fill="white"
            />
          </svg>
        )}
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden transition-colors duration-500" style={{ backgroundColor: navColor }}>
          <div className="max-w-6xl mx-auto px-4 pb-4 pt-1">
            <Link href="/" className="block px-2 py-2 text-white transition-colors hover:opacity-90" onClick={() => setIsOpen(false)}>
              Accueil
            </Link>
            <Link href="/menu" className="block px-2 py-2 text-white transition-colors hover:opacity-90" onClick={() => setIsOpen(false)}>
              Menu
            </Link>
            <Link href="/contact" className="block px-2 py-2 text-white transition-colors hover:opacity-90" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link href="/chatbot" className="block px-2 py-2 text-white transition-colors hover:opacity-90" onClick={() => setIsOpen(false)}>
              Chat
            </Link>
          </div>
          {/* Wavy drip at bottom of mobile menu */}
          <svg
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
            style={{ width: '100%', height: '60px', display: 'block' }}
          >
            <path
              d="M0,40 Q60,10 120,40 T240,40 T360,40 T480,40 T600,40 T720,40 T840,40 T960,40 T1080,40 T1200,40 L1200,100 L0,100 Z"
              fill="white"
            />
          </svg>
        </div>
      )}
    </nav>
  )
}
