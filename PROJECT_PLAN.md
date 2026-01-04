# Project Plan: Abdul Hadi Personal Website

## File Structure
```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   ├── (admin)/
│   │   ├── blog/
│   │   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   ├── services/
│   │   ├── projects/
│   │   ├── contact/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   └── forms/
│   ├── lib/
│   │   ├── auth.ts
│   │   ├── db.ts
│   │   ├── email.ts
│   │   └── utils.ts
│   ├── content/
│   │   └── blog/
│   └── types/
├── prisma/
├── public/
├── .env.local
├── package.json
└── README.md
```

## Phase 1 Features
- Portfolio pages with Tailwind CSS
- MDX blog system
- Contact form with spam protection
- SEO metadata
- Professional minimal design

## Phase 2 Features
- Authentication system
- Admin dashboard
- Database-backed blog

## Phase 3 Features
- Products section
- Stripe payments
- Content gating
