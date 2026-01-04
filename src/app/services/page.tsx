import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services - Abdul Hadi',
  description: 'Professional services offered by Abdul Hadi including web development, security architecture, and performance optimization.',
}

const services = [
  {
    id: 'web-development',
    title: 'Full-Stack Web Development',
    description: 'End-to-end web application development using modern frameworks and best practices.',
    features: [
      'Custom web applications',
      'API development and integration',
      'Progressive Web Apps (PWAs)',
      'E-commerce solutions',
      'Real-time applications',
      'Mobile-responsive design'
    ],
    price: 'Starting at $5,000'
  },
  {
    id: 'security-architecture',
    title: 'Security Architecture',
    description: 'Comprehensive security solutions to protect your applications and data.',
    features: [
      'Security assessment and audit',
      'Secure authentication systems',
      'Penetration testing',
      'Compliance implementation',
      'Security training',
      'Incident response planning'
    ],
    price: 'Starting at $3,000'
  },
  {
    id: 'performance-optimization',
    title: 'Performance Optimization',
    description: 'Advanced optimization techniques to make your applications lightning fast.',
    features: [
      'Performance audit and analysis',
      'Database optimization',
      'CDN implementation',
      'Caching strategies',
      'Code optimization',
      'Load testing'
    ],
    price: 'Starting at $2,000'
  },
  {
    id: 'cloud-architecture',
    title: 'Cloud Architecture',
    description: 'Design and implement scalable cloud solutions for your business needs.',
    features: [
      'Cloud migration strategy',
      'Infrastructure as Code',
      'Auto-scaling solutions',
      'Monitoring and logging',
      'Cost optimization',
      'Disaster recovery'
    ],
    price: 'Starting at $4,000'
  }
]

export default function ServicesPage() {
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
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Enterprise-grade solutions tailored to accelerate your business growth and digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service) => (
              <div key={service.id} className="group relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-400">
                        <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                    <Link
                      href="/contact"
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="p-12 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-3xl">
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Need a Custom Solution?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Every business is unique. Let's discuss your specific requirements and create a tailored solution.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                Schedule Consultation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
                          
                                
                                                                                      
