# Abdul Hadi - Personal Portfolio Website

A production-ready personal website built with Next.js, TypeScript, and Tailwind CSS. Features portfolio pages, a blog system, and secure contact form with spam protection.

## 🚀 Features

### Phase 1 (Current)
- **Portfolio Pages**: Home, About, Services, Projects, Contact
- **Blog System**: MDX-based blog with tags, search, and SEO metadata
- **Contact Form**: Secure contact form with honeypot protection and rate limiting
- **Professional Design**: Clean, minimal, responsive design using Tailwind CSS
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support

### Phase 2 (Planned)
- **Authentication**: Secure user authentication with sessions
- **Admin Dashboard**: Admin-only blog management system
- **Database**: PostgreSQL with Prisma ORM

### Phase 3 (Future)
- **Products Section**: Digital product sales
- **Payment Integration**: Stripe payment processing
- **Content Gating**: Premium content for paid users

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Typography plugin
- **Blog**: MDX with gray-matter
- **Email**: Nodemailer with SMTP
- **Security**: Rate limiting, honeypot, input validation

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Configure the following variables in `.env.local`:
   ```env
   # Email Configuration
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   EMAIL_FROM=your-email@gmail.com
   
   # Rate Limiting
   RATE_LIMIT_MAX=5
   RATE_LIMIT_WINDOW=900000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## 📝 Adding Blog Posts

Blog posts are stored as MDX files in `src/content/blog/`. Each post requires frontmatter:

```mdx
---
title: "Your Post Title"
description: "A brief description of the post"
date: "2024-01-15"
author: "Abdul Hadi"
tags: ["Tag1", "Tag2"]
published: true
---

# Your post content here...

## Subheading

Your content written in Markdown...
```

### Blog Post Guidelines
- Use descriptive titles and descriptions
- Include relevant tags for categorization
- Set `published: false` for drafts
- Use proper Markdown formatting
- Keep content between 500-2000 words

## 🛡 Security Features

### Contact Form Protection
- **Honeypot Field**: Hidden field to catch bots
- **Rate Limiting**: 5 requests per 15 minutes per IP
- **Input Validation**: Server-side validation for all fields
- **Email Obfuscation**: Email addresses not exposed in client code

### General Security
- **Environment Variables**: All secrets stored in environment
- **Type Safety**: TypeScript prevents runtime errors
- **Content Security Policy**: Headers configured for security
- **HTTPS Ready**: Production deployment requires HTTPS

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Push code to GitHub/GitLab/Bitbucket
   - Import repository in Vercel dashboard

2. **Configure Environment Variables**
   - Add all environment variables from `.env.local`
   - Ensure `NEXTAUTH_URL` is set to your domain

3. **Deploy**
   - Vercel automatically builds and deploys
   - Custom domain can be configured in dashboard

### Manual Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

3. **Configure reverse proxy** (nginx example)
   ```nginx
   server {
       listen 443 ssl;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
       }
   }
   ```

## 📧 Email Configuration

### Gmail Setup
1. Enable 2-factor authentication
2. Generate App Password: Google Account → Security → App Passwords
3. Use App Password in `SMTP_PASS` environment variable

### Alternative SMTP Providers
- **SendGrid**: Use SMTP relay settings
- **Mailgun**: Configure SMTP credentials
- **AWS SES**: Set up SMTP credentials in AWS console

## 🎨 Customization

### Branding
- Update `src/app/layout.tsx` for site metadata
- Modify `src/components/layout/Header.tsx` for navigation
- Customize colors in `src/app/globals.css`

### Styling
- Tailwind config in `tailwind.config.ts`
- Custom CSS variables in `src/app/globals.css`
- Component-specific styles in component files

### Content
- Update portfolio content in page files
- Add new blog posts to `src/content/blog/`
- Modify services and projects data

## 🔧 Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run type-check # Run TypeScript checks
```

### Project Structure
```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable React components
│   ├── layout/         # Header, Footer components
│   ├── forms/          # Contact form
│   └── ui/             # UI components
├── lib/                # Utility functions
│   ├── blog.ts         # Blog post utilities
│   ├── email.ts        # Email sending
│   └── utils.ts        # General utilities
├── types/              # TypeScript type definitions
└── content/blog/       # MDX blog posts
```

## 🧪 Testing

### Security Testing
- Test contact form with various inputs
- Verify rate limiting works
- Check honeypot protection
- Validate email functionality

### Performance Testing
- Run Lighthouse audits
- Check Core Web Vitals
- Test on various devices
- Monitor bundle sizes

## 📈 Performance

### Optimization Features
- **Static Generation**: Blog posts pre-built at build time
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic code splitting by pages
- **Font Optimization**: Inter font with subsetting
- **CSS Optimization**: Tailwind CSS purging

### Monitoring
- Google Analytics (add tracking ID)
- Vercel Analytics (if deployed on Vercel)
- Core Web Vitals monitoring

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m "Add feature"`
4. Push to branch: `git push origin feature-name`
5. Submit pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For issues and questions:
- Create an issue in the repository
- Contact through the website's contact form
- Check the [Next.js documentation](https://nextjs.org/docs)

## 🔄 Updates

- **Dependencies**: Regularly update with `npm update`
- **Security**: Monitor security advisories
- **Performance**: Optimize based on analytics
- **Content**: Add new blog posts regularly

---

Built with ❤️ by Abdul Hadi
