export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  readingTime: number
  published: boolean
  content: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  honeypot?: string
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
  image?: string
}

export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  price?: string
}
