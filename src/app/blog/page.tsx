import { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, getAllTags } from '@/lib/blog'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Blog - Abdul Hadi',
  description: 'Technical articles and thoughts on web development, security, and technology by Abdul Hadi.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const tags = getAllTags()

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
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Thoughts on web development, security, and technology. 
              Sharing insights from my journey as a full-stack engineer and security architect.
            </p>
          </div>

          {/* Tags Section */}
          <div className="mb-16">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-8">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Topics
                </span>
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${tag}`}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 hover:border-blue-400 hover:text-blue-200 transition-all duration-300"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>•</span>
                    <span>{post.readingTime} min read</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog/tag/${tag}`}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    Read more
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-16">
              <div className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-2xl">
                <p className="text-gray-400 text-lg">No blog posts yet. Check back soon!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
