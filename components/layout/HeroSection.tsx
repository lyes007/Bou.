'use client'

import Link from 'next/link'
import { usePanorama } from './PanoramaContext'
import ResponsiveText from './ResponsiveText'

export default function HeroSection() {
  const { navColor, textColor } = usePanorama()
  const accentColor = textColor ?? navColor

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white transition-colors duration-500">
      <div className="text-center">
        <h1 className="text-[22px] font-bold mb-6 transition-colors duration-500">
          <ResponsiveText fallbackColor={accentColor}>Bienvenue chez Bou.</ResponsiveText>
        </h1>
        <p className="text-[12px] text-gray-600 mb-8">
          Tiramisu authentique et café spécialisé préparés avec passion
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/menu"
            className="px-8 py-3 font-semibold rounded-lg hover:opacity-90 transition"
            style={{ backgroundColor: navColor, color: 'white' }}
          >
            Voir le Menu
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 bg-white font-semibold rounded-lg hover:bg-gray-100 transition border-2"
            style={{ borderColor: accentColor }}
          >
            <ResponsiveText fallbackColor={accentColor}>Nous Contacter</ResponsiveText>
          </Link>
        </div>
      </div>
    </section>
  )
}
