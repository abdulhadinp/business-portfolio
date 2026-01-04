import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'
import type { ContactForm } from '@/types'

// Simple rate limiting using in-memory store (for production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

function rateLimit(ip: string): { success: boolean; resetTime?: number } {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5
  
  const record = rateLimitStore.get(ip)
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs })
    return { success: true }
  }
  
  if (record.count >= maxRequests) {
    return { success: false, resetTime: record.resetTime }
  }
  
  record.count++
  return { success: true }
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'
    
    // Rate limiting
    const rateLimitResult = rateLimit(ip)
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }
    
    const body: ContactForm = await request.json()
    
    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      )
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }
    
    // Honeypot check - if filled, it's a bot
    if (body.honeypot) {
      // Return success to bot but don't actually send email
      return NextResponse.json({ success: true })
    }
    
    // Validate message length
    if (body.message.length < 10 || body.message.length > 2000) {
      return NextResponse.json(
        { error: 'Message must be between 10 and 2000 characters' },
        { status: 400 }
      )
    }
    
    // Send email
    const emailResult = await sendEmail({
      to: process.env.EMAIL_FROM!,
      subject: `Contact Form: ${body.subject}`,
      text: `
Name: ${body.name}
Email: ${body.email}
Subject: ${body.subject}

Message:
${body.message}
      `.trim(),
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${body.name}</p>
<p><strong>Email:</strong> ${body.email}</p>
<p><strong>Subject:</strong> ${body.subject}</p>
<hr>
<p><strong>Message:</strong></p>
<p>${body.message.replace(/\n/g, '<br>')}</p>
      `.trim(),
    })
    
    if (!emailResult.success) {
      console.error('Email sending failed:', emailResult.error)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      )
    }
    
    return NextResponse.json({ success: true })
    
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
