'use client'

import Link from 'next/link'
import { usePanorama } from './PanoramaContext'
import ResponsiveText from './ResponsiveText'

export default function CTASection() {
  const { navColor, textColor } = usePanorama()
  const accentColor = textColor ?? navColor

  return (
    <section
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 border-t transition-colors duration-500"
      style={{ borderTopColor: `${navColor}25` }}
    >
      <div className="text-center">
        <h2 className="text-[22px] font-bold mb-3 transition-colors duration-500">
          <ResponsiveText fallbackColor={accentColor}>Prêt à découvrir la différence ?</ResponsiveText>
        </h2>
        <p className="text-[12px] text-stone-600 mb-6 max-w-md mx-auto">
          Passez nous voir ou commandez en ligne — tiramisu et café signature.
        </p>
        <Link
          href="/chatbot"
          className="inline-block px-8 py-3 font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200"
          style={{ backgroundColor: navColor, color: 'white' }}
        >
          Discutez avec nous
        </Link>
      </div>
    </section>
  )
}
