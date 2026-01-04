import { Metadata } from 'next'
import Link from 'next/link'
import { getPostsByTag, getAllTags } from '@/lib/blog'
import { formatDate } from '@/lib/utils'
import { notFound } from 'next/navigation'

interface TagPageProps {
  params: { tag: string }
}

export async function generateStaticParams() {
  const tags = getAllTags()
  return tags.map((tag) => ({
    tag: tag,
  }))
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  return {
    title: `${params.tag} - Blog - Abdul Hadi`,
    description: `Blog posts tagged with ${params.tag} by Abdul Hadi.`,
  }
}

export default function TagPage({ params }: TagPageProps) {
  const posts = getPostsByTag(params.tag)
  const allTags = getAllTags()

  if (!allTags.includes(params.tag)) {
    notFound()
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <Link
              href="/blog"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              ← Back to Blog
            </Link>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              #{params.tag}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {posts.length} {posts.length === 1 ? 'post' : 'posts'} tagged with "{params.tag}"
            </p>
          </div>

          {/* Other Tags */}
          <div className="mt-12">
            <h2 className="text-lg font-semibold text-gray-900">Other Topics</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {allTags.filter(tag => tag !== params.tag).map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${tag}`}
                  className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-800 hover:bg-gray-200"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Blog Posts */}
          <div className="mt-16 space-y-20">
            {posts.map((post) => (
              <article key={post.slug} className="relative">
                <div className="flex flex-col">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-500">
                      {formatDate(post.date)}
                    </time>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500">{Math.round(post.readingTime)} min read</span>
                  </div>
                  <div className="mt-6 group">
                    <h3 className="text-2xl font-semibold leading-6 text-gray-900 group-hover:text-indigo-600">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-4 text-lg leading-8 text-gray-600 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="mt-4 flex items-center gap-x-4">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                      >
                        Read more →
                      </Link>
                      <div className="flex gap-x-2">
                        {post.tags.map((tag) => (
                          <Link
                            key={tag}
                            href={`/blog/tag/${tag}`}
                            className="text-xs text-gray-500 hover:text-gray-700"
                          >
                            #{tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No posts found with this tag.</p>
              <Link
                href="/blog"
                className="mt-4 inline-flex items-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                View All Posts
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
