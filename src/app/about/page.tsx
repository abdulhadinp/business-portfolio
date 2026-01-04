import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Abdul Hadi',
  description: 'Learn more about Abdul Hadi, a full-stack engineer and security architect specializing in building secure, scalable web applications.',
}

export default function AboutPage() {
  return (
    <div className="relative bg-black text-white min-h-screen">
      {/* Background effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl font-bold">
                <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  About Me
                </span>
              </h1>
            </div>
            
            <div className="space-y-12">
              <div className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-2xl">
                <p className="text-xl text-gray-300 leading-relaxed">
                  I'm Abdul Hadi, a full-stack engineer and security-focused architect based in Nepal. 
                  I specialize in building secure, scalable web applications that solve real-world problems.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    My Expertise
                  </span>
                </h2>
                <div className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-2xl">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    With extensive experience in modern web technologies, I bring a comprehensive approach to 
                    software development that prioritizes both functionality and security.
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Technical Skills
                  </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-xl">
                    <h3 className="text-xl font-semibold text-white mb-4">Frontend Development</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">React</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">Next.js</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">TypeScript</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">Tailwind CSS</span>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-xl">
                    <h3 className="text-xl font-semibold text-white mb-4">Backend Development</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">Node.js</span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">Express</span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">PostgreSQL</span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">MongoDB</span>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-xl">
                    <h3 className="text-xl font-semibold text-white mb-4">Security & DevOps</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">OAuth</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">JWT</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">Docker</span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">CI/CD</span>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-xl">
                    <h3 className="text-xl font-semibold text-white mb-4">Cloud & Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-full border border-orange-500/30">AWS</span>
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-full border border-orange-500/30">Vercel</span>
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-full border border-orange-500/30">Git</span>
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-full border border-orange-500/30">Linux</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    My Approach
                  </span>
                </h2>
                <div className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-2xl">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    I believe in writing clean, maintainable code that scales. My approach combines technical excellence 
                    with business understanding to deliver solutions that not only work well but also drive value.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Security is not an afterthought – it's woven into every layer of the applications I build. 
                    From secure authentication to data protection, I ensure that your applications are robust 
                    against modern threats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
