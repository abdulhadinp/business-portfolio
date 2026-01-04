'use client'

import React, { useMemo, useState } from 'react'

/**
 * ✅ Replace with your Google Apps Script Web App URL (must end with /exec)
 * Example: https://script.google.com/macros/s/AKfycbXXXXXXXXXXXX/exec
 */
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwKSMoUrcMTDra9CehdBB93ClzpgKT4myIW3ESH1OWvSjHLI5ggXXxu7sY_jYvwJMB0/exec'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
  // Honeypot field (bots fill it, humans won't)
  company?: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '',
  })

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [statusMsg, setStatusMsg] = useState<string>('')

  const isConfigured = useMemo(() => {
    return APPS_SCRIPT_URL && APPS_SCRIPT_URL.startsWith('https://script.google.com/macros/s/') && APPS_SCRIPT_URL.endsWith('/exec')
  }, [])

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function validateEmail(email: string) {
    // Simple, practical validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    setStatus('idle')
    setStatusMsg('')

    if (!isConfigured) {
      setStatus('error')
      setStatusMsg('Apps Script URL is not set correctly. Please paste your /exec URL in ContactForm.tsx.')
      return
    }

    // Honeypot check
    if (form.company && form.company.trim().length > 0) {
      // silently pretend success (anti-spam)
      setStatus('success')
      setStatusMsg('Message sent successfully.')
      setForm({ name: '', email: '', subject: '', message: '', company: '' })
      return
    }

    const name = form.name.trim()
    const email = form.email.trim()
    const subject = form.subject.trim()
    const message = form.message.trim()

    if (!name || !email || !subject || !message) {
      setStatus('error')
      setStatusMsg('Please fill in all fields.')
      return
    }

    if (!validateEmail(email)) {
      setStatus('error')
      setStatusMsg('Please enter a valid email address.')
      return
    }

    // Basic rate-limiting on client (not perfect, but helps)
    // You can remove if you don't want it.
    const lastSent = Number(localStorage.getItem('contact_last_sent') || '0')
    const now = Date.now()
    if (now - lastSent < 15_000) {
      setStatus('error')
      setStatusMsg('Please wait a few seconds before sending again.')
      return
    }

    setStatus('sending')
    setStatusMsg('Sending...')

    try {
      const res = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Apps Script expects JSON in e.postData.contents
        body: JSON.stringify({ name, email, subject, message }),
      })

      // Apps Script often returns JSON text output
      const text = await res.text()

      let parsed: any = null
      try {
        parsed = JSON.parse(text)
      } catch {
        // If it isn't valid JSON, still treat as failure with readable output
        parsed = null
      }

      if (!res.ok) {
        setStatus('error')
        setStatusMsg(`Failed to send. Server responded with status ${res.status}.`)
        return
      }

      if (parsed?.success === true) {
        localStorage.setItem('contact_last_sent', String(Date.now()))
        setStatus('success')
        setStatusMsg('✅ Message sent successfully! I will reply soon.')
        setForm({ name: '', email: '', subject: '', message: '', company: '' })
        return
      }

      // Fallback: if Apps Script returns non-standard response but 200 OK
      if (res.ok && (!parsed || parsed.success === undefined)) {
        localStorage.setItem('contact_last_sent', String(Date.now()))
        setStatus('success')
        setStatusMsg('✅ Message sent successfully!')
        setForm({ name: '', email: '', subject: '', message: '', company: '' })
        return
      }

      setStatus('error')
      setStatusMsg(parsed?.error ? `Error: ${parsed.error}` : 'Something went wrong. Please try again.')
    } catch (err: any) {
      setStatus('error')
      setStatusMsg('Network error. Please try again later.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field (hidden) */}
      <input
        type="text"
        name="company"
        value={form.company || ''}
        onChange={onChange}
        autoComplete="off"
        tabIndex={-1}
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Your name"
            className="w-full rounded-xl bg-black/40 border border-gray-700 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="you@example.com"
            className="w-full rounded-xl bg-black/40 border border-gray-700 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={onChange}
            placeholder="What is this about?"
            className="w-full rounded-xl bg-black/40 border border-gray-700 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/60"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            placeholder="Write your message..."
            rows={6}
            className="w-full rounded-xl bg-black/40 border border-gray-700 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/60 resize-none"
          />
        </div>
      </div>

      {/* Status message */}
      {status !== 'idle' && (
        <div
          className={[
            'rounded-xl border px-4 py-3 text-sm',
            status === 'success'
              ? 'border-green-500/40 bg-green-500/10 text-green-200'
              : status === 'error'
              ? 'border-red-500/40 bg-red-500/10 text-red-200'
              : 'border-blue-500/40 bg-blue-500/10 text-blue-200',
          ].join(' ')}
        >
          {statusMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white transition-opacity hover:opacity-95 disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {/* Helpful hint during setup */}
      {!isConfigured && (
        <p className="text-xs text-yellow-300/90">
          Setup required: Paste your Google Apps Script Web App URL (ending with <b>/exec</b>) into <b>APPS_SCRIPT_URL</b>.
        </p>
      )}
    </form>
  )
}
