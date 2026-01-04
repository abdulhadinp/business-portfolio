import { Metadata } from 'next'
import ContactForm from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contact - Abdul Hadi',
  description: 'Get in touch with Abdul Hadi for project inquiries, collaborations, or technical consulting.',
}

export default function ContactPage() {
  return (
    <div className="relative bg-black text-white min-h-screen">
      {/* Background effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I'm always interested in hearing about new projects, opportunities, or collaborations. 
              Whether you have a specific project in mind or just want to chat about technology, feel free to reach out.
            </p>
          </div>
          
          <div className="mx-auto max-w-xl">
            <div className="p-12 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-3xl">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Send me a message
                  </span>
                </h2>
                <p className="text-gray-300">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>
              
              <ContactForm />
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">hello@abdulhadi.com</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
              <p className="text-gray-300">Kathmandu, Nepal</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
              <p className="text-gray-300">Usually within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
