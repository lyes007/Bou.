'use client'

import MenuCategory from '@/components/menu/MenuCategory'
import ResponsiveText from '@/components/layout/ResponsiveText'
import { menuCategories } from '@/lib/constants'
import { usePanorama } from '@/components/layout/PanoramaContext'

export default function MenuPage() {
  const { navColor, textColor } = usePanorama()
  const accentColor = textColor ?? navColor

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div
          className="bg-white rounded-2xl shadow-sm border p-8 sm:p-10 md:p-12 transition-colors duration-500"
          style={{ borderColor: `${navColor}30` }}
        >
          <header
            className="mb-10 sm:mb-12 text-center pb-8 border-b"
            style={{ borderColor: `${navColor}25` }}
          >
            <h1 className="text-[22px] sm:text-[24px] font-bold tracking-tight mb-1 transition-colors duration-500">
              <ResponsiveText fallbackColor={accentColor}>La carte</ResponsiveText>
            </h1>
            <p className="text-[13px] text-gray-500 mt-1">
              Tiramisu maison · Café
            </p>
          </header>

          <MenuCategory title="Tiramisu" items={menuCategories.tiramisu} accent="tiramisu" />
          <MenuCategory title="Espresso" items={menuCategories.espresso} accent="espresso" />
          <MenuCategory title="Boissons chaudes" items={menuCategories.specialty} accent="specialty" />
          <MenuCategory title="Boissons froides" items={menuCategories.cold} accent="cold" />
          <MenuCategory title="Suppléments" items={menuCategories.extras} accent="extras" />
        </div>
      </div>
    </main>
  )
}
