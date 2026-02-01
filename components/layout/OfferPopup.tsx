'use client'

import { useState, useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

const LOADING_FINISHED_MS = 2500
const STORAGE_KEY = 'bou_offer_popup_shown'
const COUPON_CODE = 'BOU10'

export default function OfferPopup() {
  const { data: session, status } = useSession()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || status === 'loading') return
    const alreadyClosed = typeof window !== 'undefined' && sessionStorage.getItem(STORAGE_KEY)
    if (alreadyClosed) return
    const timer = setTimeout(() => setOpen(true), LOADING_FINISHED_MS)
    return () => clearTimeout(timer)
  }, [mounted, status])

  const handleClose = () => {
    if (typeof window !== 'undefined') sessionStorage.setItem(STORAGE_KEY, '1')
    setOpen(false)
  }

  const handleSignIn = () => {
    signIn('google', { callbackUrl: window.location.href })
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[9997] flex items-center justify-center p-4"
      aria-modal
      role="dialog"
      aria-label="Offre 10 %"
    >
      <div
        className="absolute inset-0 bg-black/50"
        onClick={handleClose}
        aria-hidden
      />
      <div
        className={cn(
          'relative w-full max-w-md rounded-2xl border border-stone-200 bg-white p-6 shadow-xl',
          'animate-in fade-in zoom-in-95 duration-200',
        )}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-3 top-3 rounded-full p-1.5 text-stone-400 hover:bg-stone-100 hover:text-stone-600"
          aria-label="Fermer"
        >
          <X className="h-5 w-5" />
        </button>

        {session?.user ? (
          <>
            <p className="mb-1 text-[15px] font-semibold text-stone-800">
              Merci, {session.user.name ?? 'vous'} !
            </p>
            <p className="mb-4 text-[13px] text-stone-600">
              Voici votre code de réduction 10 % :
            </p>
            <div className="rounded-xl border-2 border-dashed border-stone-300 bg-stone-50 px-4 py-3 text-center">
              <span className="text-[18px] font-bold tracking-wider text-stone-800">
                {COUPON_CODE}
              </span>
            </div>
            <p className="mt-3 text-[12px] text-stone-500">
              Présentez ce code en caisse pour en bénéficier.
            </p>
          </>
        ) : (
          <>
            <h2 className="mb-2 text-[18px] font-bold text-stone-800">
              Offre spéciale
            </h2>
            <p className="mb-5 text-[14px] text-stone-600">
              Connectez-vous avec Google pour débloquer un code promo de <strong>10 %</strong> sur votre prochaine visite.
            </p>
            <button
              type="button"
              onClick={handleSignIn}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white px-4 py-3 text-[14px] font-medium text-stone-800 shadow-sm transition hover:bg-stone-50"
            >
              <GoogleIcon className="h-5 w-5" />
              Se connecter avec Google
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="mt-3 w-full text-[13px] text-stone-500 hover:text-stone-700"
            >
              Plus tard
            </button>
          </>
        )}
      </div>
    </div>
  )
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}
