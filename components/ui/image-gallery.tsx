'use client'

import React from 'react'
import { useInView } from 'framer-motion'
import { cn } from '@/lib/utils'
import { AspectRatio } from '@/components/ui/aspect-ratio'

const BOU_IMAGE_BASE = '/Bou image'

const BOU_GALLERY_IMAGES: { file: string; ratio: number }[] = [
  { file: '13811.jpg', ratio: 4 / 3 },
  { file: '13813.jpg', ratio: 3 / 4 },
  { file: '13814.jpg', ratio: 1 },
  { file: '13816.png', ratio: 4 / 3 },
  { file: '13818.png', ratio: 3 / 4 },
  { file: '13819.png', ratio: 1 },
  { file: '13822.jpg', ratio: 3 / 4 },
  { file: '13825.jpg', ratio: 4 / 3 },
  { file: '13828.jpg', ratio: 1 },
  { file: '13831.jpg', ratio: 4 / 3 },
  { file: '13838.png', ratio: 3 / 4 },
  { file: '13840.png', ratio: 1 },
]

export function ImageGallery() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center py-10 px-4">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-6 lg:grid-cols-3">
        {BOU_GALLERY_IMAGES.map((item, index) => (
          <AnimatedImage
            key={item.file}
            alt={`Bou. ${item.file}`}
            src={`${BOU_IMAGE_BASE}/${item.file}`}
            ratio={item.ratio}
          />
        ))}
      </div>
    </div>
  )
}

interface AnimatedImageProps {
  alt: string
  src: string
  className?: string
  placeholder?: string
  ratio: number
}

function AnimatedImage({ alt, src, ratio, className, placeholder }: AnimatedImageProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [isLoading, setIsLoading] = React.useState(true)
  const [imgSrc, setImgSrc] = React.useState(src)

  const handleError = () => {
    if (placeholder) setImgSrc(placeholder)
  }

  return (
    <div ref={ref} className={cn('size-full', className)}>
      <AspectRatio ratio={ratio} className="relative size-full overflow-hidden rounded-lg border border-stone-200 bg-stone-100">
        <img
          alt={alt}
          src={imgSrc}
          className={cn(
            'size-full rounded-lg object-cover opacity-0 transition-all duration-1000 ease-in-out',
            { 'opacity-100': isInView && !isLoading },
          )}
          onLoad={() => setIsLoading(false)}
          loading="lazy"
          onError={handleError}
        />
      </AspectRatio>
    </div>
  )
}
