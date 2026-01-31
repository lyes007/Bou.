import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { PanoramaProvider } from '@/components/layout/PanoramaContext'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Bou.',
  description: 'Tiramisu maison et café à Lille. Découvrez nos parfums classiques et créatifs, sur place ou à emporter.',
  icons: {
    icon: '/icon-bou.png',
    apple: '/icon-bou.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-black">
        <PanoramaProvider>
          <Navbar />
          {children}
          <Footer />
        </PanoramaProvider>
        <Analytics />
      </body>
    </html>
  )
}
