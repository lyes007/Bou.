'use client'

import Link from 'next/link'
import { usePanorama } from './PanoramaContext'

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.277-.43A17.947 17.947 0 0112.43 15c-1.946-1.029-3.6-2.682-4.6-4.6A17.947 17.947 0 016 6.43C5.85 5.263 5.7 4.149 5.7 3H5.5A1.5 1.5 0 014 1.5v-1z" clipRule="evenodd" />
    </svg>
  )
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  )
}

export default function Footer() {
  const { navColor } = usePanorama()

  return (
    <footer className="w-full mt-auto" style={{ ['--footer-color' as string]: navColor }}>
      {/* Wave */}
      <svg
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: '48px' }}
      >
        <path
          d="M0,60 Q60,90 120,60 T240,60 T360,60 T480,60 T600,60 T720,60 T840,60 T960,60 T1080,60 T1200,60 L1200,100 L0,100 Z"
          style={{ fill: 'var(--footer-color)', transition: 'fill 500ms ease' }}
        />
      </svg>

      <div
        className="w-full transition-colors duration-500 ease-[ease]"
        style={{ backgroundColor: 'var(--footer-color)' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand – spans more on large */}
            <div className="sm:col-span-2 lg:col-span-5">
              <Link href="/" className="inline-block mb-5 focus:outline-none focus:ring-2 focus:ring-white/50 rounded transition-opacity hover:opacity-90">
                <span className="text-[28px] font-extrabold tracking-tight">Bou.</span>
              </Link>
              <p className="text-[13px] text-white/90 leading-relaxed max-w-xs mb-6">
                Tiramisu maison et café. Préparé sur place.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-[12px] text-white/70">
                <span>Lun.–Dim. 8h–22h</span>
              </div>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-3">
              <h4 className="text-[11px] font-semibold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-6 h-px bg-white/40" aria-hidden />
                Navigation
              </h4>
              <ul className="space-y-3">
                {[
                  { href: '/', label: 'Accueil' },
                  { href: '/menu', label: 'Menu' },
                  { href: '/contact', label: 'Contact' },
                  { href: '/chatbot', label: 'Chat' },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-[13px] text-white/90 hover:text-white transition-colors inline-block py-0.5 border-b border-transparent hover:border-white/50"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-4">
              <h4 className="text-[11px] font-semibold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-6 h-px bg-white/40" aria-hidden />
                Nous joindre
              </h4>
              <address className="not-italic space-y-4">
                <p className="flex items-start gap-3 text-[13px] text-white/90">
                  <MapPinIcon className="w-4 h-4 mt-0.5 shrink-0 text-white/70" />
                  <span>123 Rue du Café, Ville, État 12345</span>
                </p>
                <p className="flex items-center gap-3 text-[13px]">
                  <MailIcon className="w-4 h-4 shrink-0 text-white/70" />
                  <a href="mailto:hello@bou.com" className="text-white/90 hover:text-white transition-colors">
                    hello@bou.com
                  </a>
                </p>
                <p className="flex items-center gap-3 text-[13px]">
                  <PhoneIcon className="w-4 h-4 shrink-0 text-white/70" />
                  <a href="tel:+123456789" className="text-white/90 hover:text-white transition-colors">
                    +123 456 789
                  </a>
                </p>
              </address>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[12px] text-white/70 order-2 sm:order-1">
              © 2025 Bou. Tous droits réservés.
            </p>
            <p className="text-[11px] text-white/50 order-1 sm:order-2">
              Tiramisu maison · Café
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
