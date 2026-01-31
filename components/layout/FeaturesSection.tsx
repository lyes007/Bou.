'use client'

import { usePanorama } from './PanoramaContext'
import ResponsiveText from './ResponsiveText'

const features = [
  {
    title: 'Qualité Premium',
    description: 'Meilleurs ingrédients et café 100% Arabica.',
  },
  {
    title: 'Recettes Authentiques',
    description: 'Tiramisu traditionnel et boissons préparés sur place.',
  },
  {
    title: 'Menu Spécialisé',
    description: 'Spécialités saisonnières et saveurs du moment.',
  },
]

export default function FeaturesSection() {
  const { navColor, textColor } = usePanorama()
  const accentColor = textColor ?? navColor

  return (
    <section
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 border-t transition-colors duration-500"
      style={{ borderTopColor: `${navColor}25` }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="text-center px-4 py-6 rounded-xl border transition-colors duration-500 hover:shadow-sm"
            style={{
              borderColor: `${navColor}25`,
              backgroundColor: `${navColor}08`,
            }}
          >
            <h3 className="text-[17px] font-bold mb-2 transition-colors duration-500">
              <ResponsiveText fallbackColor={accentColor}>{feature.title}</ResponsiveText>
            </h3>
            <p className="text-[13px] text-stone-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
