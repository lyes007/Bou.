'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

type Message = { role: 'user' | 'assistant'; content: string }

const WELCOME = "Bonjour ! Je suis l'assistant Bou. Posez-moi une question sur les horaires, le contact, le menu, les prix ou les ingrédients."

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: WELCOME },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight
  }, [messages])

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return
    setInput('')
    const userMessage: Message = { role: 'user', content: text }
    setMessages((m) => [...m, userMessage])
    setLoading(true)
    try {
      const chatMessages = [...messages, userMessage].map((m) => ({
        role: m.role,
        content: m.content,
      }))
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: chatMessages }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Erreur')
      setMessages((m) => [...m, { role: 'assistant', content: data.message }])
    } catch (e) {
      const message =
        e instanceof Error ? e.message : 'Désolé, une erreur est survenue. Réessayez plus tard.'
      setMessages((m) => [...m, { role: 'assistant', content: message }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Panel */}
      <div
        className={cn(
          'fixed bottom-20 right-4 z-[9998] flex h-[420px] w-[340px] flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xl transition-all duration-200 sm:right-6 sm:w-[360px]',
          open ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0',
        )}
      >
        <div className="flex items-center justify-between border-b border-stone-200 bg-stone-50 px-4 py-3">
          <span className="text-[15px] font-semibold text-stone-800">Assistant Bou.</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-full p-1.5 text-stone-500 hover:bg-stone-200 hover:text-stone-700"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div
          ref={listRef}
          className="flex-1 overflow-y-auto p-4 space-y-3"
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={cn(
                'max-w-[85%] rounded-2xl px-3 py-2 text-[13px]',
                msg.role === 'user'
                  ? 'ml-auto bg-stone-800 text-white'
                  : 'bg-stone-100 text-stone-800',
              )}
            >
              {msg.content}
            </div>
          ))}
          {loading && (
            <div className="flex max-w-[85%] items-center gap-2 rounded-2xl bg-stone-100 px-3 py-2 text-[13px] text-stone-600">
              <Loader2 className="h-4 w-4 animate-spin" />
              Réflexion…
            </div>
          )}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            send()
          }}
          className="border-t border-stone-200 p-3"
        >
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Posez une question…"
              className="flex-1 rounded-xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-[13px] outline-none placeholder:text-stone-400 focus:border-stone-400 focus:ring-1 focus:ring-stone-400"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-xl bg-stone-800 px-3 py-2.5 text-white transition hover:bg-stone-700 disabled:opacity-50"
              aria-label="Envoyer"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>

      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-4 right-4 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-stone-800 text-white shadow-lg transition hover:bg-stone-700 sm:bottom-6 sm:right-6"
        aria-label={open ? 'Fermer le chat' : 'Ouvrir le chat'}
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </>
  )
}
