'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

export const PRODUCT_COLORS: Record<string, string> = {
  CLASSIQUE: '#C04742',
  FRAISE: '#DAA7A4',
  NUTELLA: '#502F22',
  PISTACHIO: '#A0AB7F',
  SPEECULOOS: '#D6AD59',
  SURPRISE: '#3A598B',
} as const

const DEFAULT_PRODUCT = 'CLASSIQUE'

const SURPRISE_TEXT_COLOR = '#EAC045'
const NUTELLA_FIRST_LETTER = '#3D271C'
const NUTELLA_REST = '#C03D32'

type PanoramaContextValue = {
  currentProduct: string
  setCurrentProduct: (product: string) => void
  navColor: string
  /** When product is SURPRISE, use this for text; otherwise use navColor or white as appropriate */
  textColor: string | null
  /** When product is NUTELLA, first letter uses this and rest use textColorRest */
  textColorFirstLetter: string | null
  textColorRest: string | null
}

const PanoramaContext = createContext<PanoramaContextValue | null>(null)

export function PanoramaProvider({ children }: { children: ReactNode }) {
  const [currentProduct, setCurrentProduct] = useState(DEFAULT_PRODUCT)
  const navColor = PRODUCT_COLORS[currentProduct] ?? PRODUCT_COLORS[DEFAULT_PRODUCT]
  const textColor = currentProduct === 'SURPRISE' ? SURPRISE_TEXT_COLOR : null
  const textColorFirstLetter = currentProduct === 'NUTELLA' ? NUTELLA_FIRST_LETTER : null
  const textColorRest = currentProduct === 'NUTELLA' ? NUTELLA_REST : null

  const value: PanoramaContextValue = {
    currentProduct,
    setCurrentProduct,
    navColor,
    textColor,
    textColorFirstLetter,
    textColorRest,
  }

  return (
    <PanoramaContext.Provider value={value}>
      {children}
    </PanoramaContext.Provider>
  )
}

export function usePanorama() {
  const ctx = useContext(PanoramaContext)
  if (!ctx) {
    throw new Error('usePanorama must be used within PanoramaProvider')
  }
  return ctx
}
