'use client'

import { useState } from 'react'
import ResponsiveText from '@/components/layout/ResponsiveText'
import { usePanorama } from '@/components/layout/PanoramaContext'

export default function ContactPage() {
  const { navColor, textColor } = usePanorama()
  const accentColor = textColor ?? navColor
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div
          className="bg-white rounded-2xl shadow-sm border p-8 sm:p-10 md:p-12 transition-colors duration-500"
          style={{ borderColor: `${navColor}30` }}
        >
          <header className="mb-10 sm:mb-12 text-center pb-8 border-b" style={{ borderColor: `${navColor}25` }}>
            <h1 className="text-[22px] sm:text-[24px] font-bold tracking-tight mb-1 transition-colors duration-500">
              <ResponsiveText fallbackColor={accentColor}>Contact</ResponsiveText>
            </h1>
            <p className="text-[13px] text-gray-500 mt-1">Une question ou une commande ?</p>
          </header>

          {/* Info + address */}
          <section className="mb-10">
            <h2 className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-4">
              Où nous trouver
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[13px]">
              <div>
                <p className="text-gray-500 mb-1">Adresse</p>
                <p className="text-stone-800">123 Rue du Café<br />Ville, État 12345</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Téléphone</p>
                <a href="tel:+123456789" className="text-stone-800 hover:opacity-80 transition">
                <ResponsiveText fallbackColor={accentColor}>+123 456 789</ResponsiveText>
              </a>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Email</p>
                <a href="mailto:hello@bou.com" className="hover:opacity-80 transition">
                  <ResponsiveText fallbackColor={accentColor}>hello@bou.com</ResponsiveText>
                </a>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Horaires</p>
                <p className="text-stone-800">Lun.–Dim. 8h–22h</p>
              </div>
            </div>
          </section>

          {/* Map */}
          <section className="mb-10">
            <h2 className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-3">
              Plan
            </h2>
            <div
              className="w-full overflow-hidden rounded-xl border"
              style={{ height: '280px', borderColor: `${navColor}25` }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25535.05633145467!2d10.3426385!3d36.8692422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b50050e25e4f%3A0xb833546307126969!2sBou.!5e0!3m2!1sfr!2stn!4v1769566826208!5m2!1sfr!2stn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>

          {/* Form */}
          <section>
            <h2 className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-4">
              Écrire
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-[12px] font-medium text-gray-600 mb-1.5">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                  className="w-full px-3 py-2.5 text-[13px] border rounded-lg bg-white text-stone-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors duration-200"
                  style={{ borderColor: `${navColor}40` }}
                  onFocus={(e) => {
                    e.target.style.borderColor = navColor
                    e.target.style.boxShadow = `0 0 0 2px ${navColor}20`
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = `${navColor}40`
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[12px] font-medium text-gray-600 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                  className="w-full px-3 py-2.5 text-[13px] border rounded-lg bg-white text-stone-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors duration-200"
                  style={{ borderColor: `${navColor}40` }}
                  onFocus={(e) => {
                    e.target.style.borderColor = navColor
                    e.target.style.boxShadow = `0 0 0 2px ${navColor}20`
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = `${navColor}40`
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[12px] font-medium text-gray-600 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Votre message…"
                  className="w-full px-3 py-2.5 text-[13px] border rounded-lg bg-white text-stone-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-0 resize-none transition-colors duration-200"
                  style={{ borderColor: `${navColor}40` }}
                  onFocus={(e) => {
                    e.target.style.borderColor = navColor
                    e.target.style.boxShadow = `0 0 0 2px ${navColor}20`
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = `${navColor}40`
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 text-[13px] font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200"
                style={{ backgroundColor: navColor, color: 'white' }}
              >
                Envoyer
              </button>
              {submitted && (
                <p className="text-[13px] text-center font-medium">
                  <ResponsiveText fallbackColor={accentColor}>Message envoyé. On vous répond vite.</ResponsiveText>
                </p>
              )}
            </form>
          </section>
        </div>
      </div>
    </main>
  )
}
