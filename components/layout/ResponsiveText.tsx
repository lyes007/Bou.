'use client'

import { usePanorama } from './PanoramaContext'

const NUTELLA_FIRST = '#3D271C'
const NUTELLA_REST = '#C03D32'

interface ResponsiveTextProps {
  children: string
  fallbackColor: string
  className?: string
  /** When rendering the panorama label, pass the product name so NUTELLA two-tone applies reliably. */
  productName?: string
}

/** Renders text with theme color; when product is NUTELLA, only the first *letter* is brown (#3D271C), the rest is red (#C03D32). */
export default function ResponsiveText({ children, fallbackColor, className, productName }: ResponsiveTextProps) {
  const { textColorFirstLetter, textColorRest } = usePanorama()

  const useNutellaTwoTone =
    productName === 'NUTELLA' || (Boolean(textColorFirstLetter) && Boolean(textColorRest))
  const firstColor = productName === 'NUTELLA' ? NUTELLA_FIRST : textColorFirstLetter
  const restColor = productName === 'NUTELLA' ? NUTELLA_REST : textColorRest

  if (useNutellaTwoTone && firstColor && restColor && children.length > 0) {
    const firstLetter = children[0]
    const rest = children.slice(1)
    return (
      <span className={className}>
        <span style={{ color: firstColor }}>{firstLetter}</span>
        {rest.length > 0 && <span style={{ color: restColor }}>{rest}</span>}
      </span>
    )
  }

  return (
    <span className={className} style={{ color: fallbackColor }}>
      {children}
    </span>
  )
}
