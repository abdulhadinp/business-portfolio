'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)
    setStatus('idle')

    try {
      const formPayload = new FormData()
      formPayload.append('name', name)
      formPayload.append('email', email)
      formPayload.append('subject', subject)
      formPayload.append('message', message)

      const response = await fetch('https://script.google.com/macros/s/AKfycbwKSMoUrcMTDra9CehdBB93ClzpgKT4myIW3ESH1OWvSjHLI5ggXXxu7sY_jYvwJMB0/exec',{
        method: 'POST',
        body: formPayload,
      })

      if (!response.ok) {
      throw new Error('Request failed')
    }


      // IMPORTANT: Apps Script may not always return JSON reliably
      if (!response.ok) {
        throw new Error('Request failed')
      }

      setStatus('success')
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    } catch (error) {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-green-900/20 border border-green-500/30 p-8 text-center">
        <h3 className="text-lg font-semibold text-green-300">
          Message sent successfully!
        </h3>
        <p className="mt-2 text-sm text-green-400">
          Thank you for reaching out. I will get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Name
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg bg-gray-800/50 border border-gray-600 px-4 py-3 text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg bg-gray-800/50 border border-gray-600 px-4 py-3 text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Subject
        </label>
        <input
          type="text"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full rounded-lg bg-gray-800/50 border border-gray-600 px-4 py-3 text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <textarea
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-lg bg-gray-800/50 border border-gray-600 px-4 py-3 text-white resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="rounded-lg bg-red-900/20 border border-red-500/30 p-4 text-sm text-red-400">
          Something went wrong. Please try again later.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
