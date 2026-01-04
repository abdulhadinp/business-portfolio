import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full">
              <span className="text-blue-300 text-sm font-medium">🚀 IT Services & Solutions</span>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Abdul Hadi
            </span>
          </h1>
          
          <div className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4 text-gray-300">
            Full Stack Engineer & <span className="text-blue-400 font-semibold">Security Architect</span>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Building enterprise-grade, secure, and scalable web applications with cutting-edge technologies. 
            Specializing in Next.js, TypeScript, cloud architecture, and cybersecurity solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="relative z-10">View Portfolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-gray-600 rounded-lg font-semibold text-white hover:border-blue-500 hover:text-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              Get Started
            </Link>
          </div>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-xs">⚛</div>
              <span className="text-sm">React</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-xs">▲</div>
              <span className="text-sm">Next.js</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-xs">📘</div>
              <span className="text-sm">TypeScript</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-xs">🔒</div>
              <span className="text-sm">Security</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-xs">☁️</div>
              <span className="text-sm">Cloud</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Services & Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Enterprise-grade solutions tailored to accelerate your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Web Development</h3>
                <p className="text-gray-400 mb-4">Custom web applications using React, Next.js, and modern frameworks</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">React</span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">TypeScript</span>
                </div>
              </div>
            </div>

            <div className="group relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Security Architecture</h3>
                <p className="text-gray-400 mb-4">Enterprise security solutions, penetration testing, and compliance</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">OAuth</span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">JWT</span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">HTTPS</span>
                </div>
              </div>
            </div>

            <div className="group relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Performance Optimization</h3>
                <p className="text-gray-400 mb-4">Lightning-fast applications with advanced optimization techniques</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">CDN</span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">Caching</span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">SEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="p-12 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's build something extraordinary together. Get in touch for a consultation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
            
