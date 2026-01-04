import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Projects - Abdul Hadi',
  description: 'Portfolio of projects by Abdul Hadi showcasing full-stack development and security architecture expertise.',
}

const projects = [
  {
    id: 'ecommerce-platform',
    title: 'Secure E-commerce Platform',
    description: 'A full-featured e-commerce platform with advanced security measures, payment processing, and inventory management.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Prisma'],
    link: 'https://example.com',
    github: 'https://github.com',
    image: '/projects/ecommerce.jpg'
  },
  {
    id: 'security-dashboard',
    title: 'Security Monitoring Dashboard',
    description: 'Real-time security monitoring dashboard for detecting and responding to security threats in web applications.',
    technologies: ['React', 'Node.js', 'WebSocket', 'D3.js', 'Redis'],
    link: 'https://example.com',
    github: 'https://github.com',
    image: '/projects/dashboard.jpg'
  },
  {
    id: 'api-gateway',
    title: 'Enterprise API Gateway',
    description: 'Scalable API gateway with authentication, rate limiting, and monitoring capabilities for microservices architecture.',
    technologies: ['Node.js', 'Express', 'Docker', 'Kubernetes', 'Redis'],
    link: 'https://example.com',
    github: 'https://github.com',
    image: '/projects/api-gateway.jpg'
  },
  {
    id: 'real-time-collaboration',
    title: 'Real-time Collaboration Tool',
    description: 'Web-based collaboration platform with real-time editing, video conferencing, and team management features.',
    technologies: ['Next.js', 'Socket.io', 'WebRTC', 'MongoDB', 'Redis'],
    link: 'https://example.com',
    github: 'https://github.com',
    image: '/projects/collaboration.jpg'
  },
  {
    id: 'mobile-app-backend',
    title: 'Mobile App Backend API',
    description: 'RESTful API backend for mobile applications with user authentication, push notifications, and data synchronization.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Firebase'],
    link: 'https://example.com',
    github: 'https://github.com',
    image: '/projects/mobile-api.jpg'
  },
  {
    id: 'ai-content-platform',
    title: 'AI Content Management Platform',
    description: 'Content management platform with AI-powered content generation, optimization, and analytics features.',
    technologies: ['Python', 'Django', 'TensorFlow', 'React', 'PostgreSQL'],
    link: 'https://example.com',
    github: 'https://github.com',
    image: '/projects/ai-platform.jpg'
  }
]

export default function ProjectsPage() {
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
                Projects Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of enterprise-grade applications and solutions built with cutting-edge technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4m-4-4l-4-4" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm">Project Screenshot</p>
                  </div>
                </div>

                <div className="relative z-10 p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <Link
                        href={project.link}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-sm font-semibold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                      >
                        View Live
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                      <Link
                        href={project.github}
                        className="inline-flex items-center px-4 py-2 border border-gray-600 rounded-lg text-sm font-semibold text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        Code
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="p-12 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-3xl">
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Interested in Working Together?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Have a project in mind? Let's discuss how I can help bring your ideas to life.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                Start a Project
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
