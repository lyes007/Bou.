'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { usePanorama } from './PanoramaContext'
import ResponsiveText from './ResponsiveText'

const PANORAMA_IMAGES = [
  'CLASSIQUE',
  'FRAISE',
  'NUTELLA',
  'PISTACHIO',
  'SPEECULOOS',
  'SURPRISE',
] as const

const IMAGE_BASE = '/Product with prices no bg'

const INTERVAL_MS = 4500
const SWIPE_THRESHOLD_PX = 50

export default function ProductPanorama() {
  const { setCurrentProduct, navColor, textColor } = usePanorama()
  const labelColor = textColor ?? navColor
  const [currentIndex, setCurrentIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PANORAMA_IMAGES.length)
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    setCurrentProduct(PANORAMA_IMAGES[currentIndex])
  }, [currentIndex, setCurrentProduct])

  const goTo = useCallback((index: number) => {
    setCurrentIndex((index + PANORAMA_IMAGES.length) % PANORAMA_IMAGES.length)
  }, [])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }, [])

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const endX = e.changedTouches[0].clientX
    const diff = touchStartX.current - endX
    touchStartX.current = null
    if (Math.abs(diff) < SWIPE_THRESHOLD_PX) return
    if (diff > 0) {
      goTo(currentIndex + 1)
    } else {
      goTo(currentIndex - 1)
    }
  }, [currentIndex, goTo])

  const src = `${IMAGE_BASE}/${PANORAMA_IMAGES[currentIndex]}.png`

  const currentProductName = PANORAMA_IMAGES[currentIndex]

  return (
    <section
      className="relative w-full overflow-hidden bg-white touch-pan-y"
      aria-label="Product panorama"
    >
      <div className="relative mx-auto flex max-w-6xl items-center justify-center px-4 py-8">
        <p
          key={currentProductName}
          className="absolute left-4 top-6 z-10 text-[22px] font-extrabold tracking-tight animate-panorama-in"
          style={{ fontWeight: 700 }}
          aria-live="polite"
        >
          <ResponsiveText fallbackColor={labelColor} productName={currentProductName}>
            {`Tiramisu ${currentProductName.charAt(0) + currentProductName.slice(1).toLowerCase()}`}
          </ResponsiveText>
        </p>
        <div
          className="relative h-[320px] w-full sm:h-[400px] md:h-[480px] touch-pan-y select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-label="Swipe left or right to change product"
        >
          <Image
            key={currentIndex}
            src={src}
            alt={`Tiramisu ${PANORAMA_IMAGES[currentIndex]}`}
            fill
            className="animate-panorama-in object-contain pointer-events-none"
            sizes="(max-width: 768px) 100vw, 1024px"
            priority={currentIndex === 0}
            draggable={false}
          />
        </div>
      </div>
    </section>
  )
}
