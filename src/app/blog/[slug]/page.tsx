import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { formatDate } from '@/lib/utils'

interface BlogPostPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} - Abdul Hadi`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center">
          <Link
            href="/blog"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            ← Back to Blog
          </Link>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {post.description}
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 text-sm">
            <time dateTime={post.date} className="text-gray-500">
              {formatDate(post.date)}
            </time>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500">{Math.round(post.readingTime)} min read</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500">{post.author}</span>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag}`}
                className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-800 hover:bg-gray-200"
              >
                {tag}
              </Link>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="mt-12 prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Footer */}
        <footer className="mt-20 border-t border-gray-200 pt-12">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-900">
              Enjoyed this article?
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Share it with others who might find it helpful.
            </p>
            <div className="mt-6 flex justify-center space-x-6">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Read More Articles
            </Link>
          </div>
        </footer>
      </article>
    </div>
  )
}
