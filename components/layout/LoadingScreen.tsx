'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const DURATION_MS = 2200
const FADE_OUT_MS = 400

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const hideAt = DURATION_MS - FADE_OUT_MS
    const fadeTimer = setTimeout(() => setFadeOut(true), hideAt)
    const unmountTimer = setTimeout(() => setVisible(false), DURATION_MS)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(unmountTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      style={{
        transition: `opacity ${FADE_OUT_MS}ms ease-out`,
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'auto',
      }}
      aria-hidden={fadeOut}
    >
      <div className="relative h-[120px] w-[200px] sm:h-[140px] sm:w-[240px] md:h-[160px] md:w-[280px]">
        <Image
          src="/Logo-no-bg.png"
          alt="Bou."
          fill
          className="animate-load-in object-contain object-center"
          priority
          sizes="(max-width: 640px) 200px, (max-width: 768px) 240px, 280px"
        />
      </div>
    </div>
  )
}
