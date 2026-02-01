import { NextResponse } from 'next/server'
import { GoogleGenAI } from '@google/genai'
import { getShopSystemPrompt } from '@/lib/chat-context'

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'GEMINI_API_KEY non configurée. Ajoutez-la dans .env (voir .env.example).' },
        { status: 500 },
      )
    }

    const body = await req.json()
    const { messages } = body as { messages: { role: string; content: string }[] }

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'messages requis (tableau non vide).' },
        { status: 400 },
      )
    }

    const ai = new GoogleGenAI({ apiKey })
    const systemPrompt = getShopSystemPrompt()
    const firstUserIndex = messages.findIndex((m) => m.role === 'user')
    const toSend = firstUserIndex >= 0 ? messages.slice(firstUserIndex) : messages
    const contents = toSend.map((m) => ({
      role: m.role === 'assistant' ? ('model' as const) : ('user' as const),
      parts: [{ text: m.content }],
    }))

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents,
      config: {
        systemInstruction: systemPrompt,
        maxOutputTokens: 512,
      },
    })

    const text = response.text ?? ''
    const reply = text.trim() || 'Désolé, je n’ai pas pu répondre.'
    return NextResponse.json({ message: reply })
  } catch (err: unknown) {
    const apiError = err as {
      status?: number
      code?: number
      message?: string
      error?: { code?: number; message?: string }
    }
    const code = apiError?.code ?? apiError?.error?.code
    const message = apiError?.message ?? apiError?.error?.message

    console.error('Chat API error:', { status: apiError?.status, code, message, full: err })

    if (apiError?.status === 429 || code === 429) {
      return NextResponse.json(
        {
          error:
            'Quota Gemini dépassé. Vérifiez votre usage sur Google AI Studio ou réessayez plus tard.',
        },
        { status: 429 },
      )
    }
    if (apiError?.status === 401 || apiError?.status === 403 || code === 401 || code === 403) {
      return NextResponse.json(
        {
          error:
            'Clé API Gemini invalide ou expirée. Vérifiez GEMINI_API_KEY dans .env et redémarrez le serveur (pnpm dev).',
        },
        { status: 401 },
      )
    }

    const userMessage =
      typeof message === 'string' && message.length < 200
        ? message
        : 'Erreur lors de la réponse. Réessayez plus tard.'
    return NextResponse.json({ error: userMessage }, { status: 500 })
  }
}
