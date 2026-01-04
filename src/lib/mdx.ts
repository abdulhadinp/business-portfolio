import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import type { BlogPost } from '@/types'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(name => name.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        slug,
        title: matterResult.data.title || '',
        description: matterResult.data.description || '',
        date: matterResult.data.date || '',
        author: matterResult.data.author || 'Abdul Hadi',
        tags: matterResult.data.tags || [],
        readingTime: readingTime(matterResult.content).minutes,
        published: matterResult.data.published !== false,
        content: matterResult.content,
      }
    })
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return allPostsData
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      slug,
      title: matterResult.data.title || '',
      description: matterResult.data.description || '',
      date: matterResult.data.date || '',
      author: matterResult.data.author || 'Abdul Hadi',
      tags: matterResult.data.tags || [],
      readingTime: readingTime(matterResult.content).minutes,
      published: matterResult.data.published !== false,
      content: matterResult.content,
    }
  } catch (error) {
    return null
  }
}

export function getPostsByTag(tag: string): BlogPost[] {
  const allPosts = getAllPosts()
  return allPosts.filter(post => post.tags.includes(tag))
}

export function getAllTags(): string[] {
  const allPosts = getAllPosts()
  const tags = new Set<string>()
  
  allPosts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })
  
  return Array.from(tags).sort()
}
