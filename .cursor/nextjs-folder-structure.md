# Next.js Project Folder Structure (App Router)

> Best practice structure for **performance**, **security**, and **organization**
> Using: Next.js 13+ (App Router) · JavaScript · Tailwind CSS

---

## Full Structure

```
my-company-website/
│
├── .env.local                  # Real secrets — NEVER commit this
├── .env.example                # Dummy template — commit this for teammates
├── middleware.ts               # Auth guards, redirects, CSP headers (runs on Edge)
├── next.config.ts              # Next.js config (image domains, env, rewrites)
├── tailwind.config.ts          # Tailwind theme, plugins
├── tsconfig.json
│
├── public/                     # Static assets (served as-is, no build step)
│   ├── favicon.ico
│   ├── robots.txt
│   └── images/                 # Only truly static images (logos, og-images)
│
└── src/                        # ALL source code lives here
    │
    ├── app/                    # App Router — file-based routing
    │   ├── layout.tsx          # Root layout (html, body, fonts, providers)
    │   ├── page.tsx            # Homepage "/"
    │   ├── loading.tsx         # Suspense loading UI
    │   ├── error.tsx           # Error boundary UI
    │   ├── not-found.tsx       # Custom 404 page
    │   │
    │   ├── (marketing)/        # Route group — no URL segment added
    │   │   ├── about/
    │   │   │   └── page.tsx    # /about
    │   │   ├── contact/
    │   │   │   └── page.tsx    # /contact
    │   │   └── layout.tsx      # Shared layout for marketing pages
    │   │
    │   ├── (auth)/             # Route group for auth pages
    │   │   ├── login/
    │   │   │   └── page.tsx    # /login
    │   │   ├── register/
    │   │   │   └── page.tsx    # /register
    │   │   └── layout.tsx      # Minimal layout (no Navbar/Footer)
    │   │
    │   └── api/                # API Route Handlers (replaces Express)
    │       ├── contact/
    │       │   └── route.ts    # POST /api/contact
    │       └── auth/
    │           └── route.ts    # POST /api/auth
    │
    ├── components/
    │   ├── ui/                 # Primitives: Button, Input, Card, Modal, Badge
    │   ├── layout/             # Navbar, Footer, Sidebar
    │   ├── sections/           # Hero, Features, Testimonials, CTA, Pricing
    │   └── forms/              # ContactForm, LoginForm, RegisterForm
    │
    ├── lib/
    │   ├── utils.ts            # Shared helpers: cn(), formatDate(), slugify()
    │   ├── constants.ts        # App-wide constants (site name, nav links, etc.)
    │   └── validations.ts      # Zod schemas for form & API validation
    │
    ├── hooks/                  # Custom React hooks
    │   ├── useMediaQuery.ts
    │   └── useScrollPosition.ts
    │
    ├── services/               # All fetch() / API calls live here
    │   ├── contact.service.ts  # sendContactForm(), etc.
    │   └── cms.service.ts      # fetchBlogPosts(), fetchTeamMembers(), etc.
    │
    ├── types/                  # TypeScript interfaces & types
    │   └── index.ts
    │
    └── styles/
        └── globals.css         # Tailwind base + custom CSS variables
```

---

## Key Concepts

### Route Groups `(marketing)`, `(auth)`
Folders wrapped in parentheses create logical groupings **without affecting the URL**.

```
app/(marketing)/about/page.tsx  →  accessible at /about (not /marketing/about)
app/(auth)/login/page.tsx       →  accessible at /login (not /auth/login)
```

This lets you apply **different layouts** to different groups of pages.

---

### Environment Variables

| File | Purpose | Commit? |
|------|---------|---------|
| `.env.local` | Real API keys, DB passwords, secrets | ❌ Never |
| `.env.example` | Dummy values as a template for teammates | ✅ Always |

In Next.js, prefix with `NEXT_PUBLIC_` to expose a variable to the browser:

```env
# .env.local
DATABASE_URL=your_db_url           # server-only
NEXT_PUBLIC_SITE_URL=https://...   # exposed to browser
```

---

### `middleware.ts`
Runs on the **Edge Runtime** before any request hits your pages. Use it for:
- Authentication guards (redirect unauthenticated users)
- Role-based access control
- Security headers (CSP, X-Frame-Options)

```ts
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
```

---

### `components/` Split

| Folder | Contains | Example |
|--------|----------|---------|
| `ui/` | Small, reusable, stateless primitives | `Button`, `Card`, `Badge`, `Modal` |
| `layout/` | Structural page wrappers | `Navbar`, `Footer`, `Sidebar` |
| `sections/` | Full page sections | `HeroSection`, `FeaturesGrid`, `CTABanner` |
| `forms/` | Form components with validation | `ContactForm`, `LoginForm` |

---

### `services/` — Keep Components Clean
All `fetch()` or Axios calls go here. Components call a service function, not raw fetch.

```ts
// services/contact.service.ts
export async function sendContactForm(data: ContactFormData) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
  if (!res.ok) throw new Error('Failed to send message')
  return res.json()
}
```

---

### SSG vs SSR Per Page

Since this is a company website, most pages should be **SSG** (built at compile time — fastest).

```ts
// app/(marketing)/about/page.tsx — SSG by default in App Router
export default async function AboutPage() {
  const team = await fetchTeamMembers() // runs at BUILD TIME
  return <TeamSection members={team} />
}

// Force SSR (dynamic, per-request) when you need fresh data
export const dynamic = 'force-dynamic'
```

---

### `lib/utils.ts` — The `cn()` Helper
Essential utility for merging Tailwind classes conditionally (install `clsx` + `tailwind-merge`):

```ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Usage:
```tsx
<button className={cn('px-4 py-2 rounded', isActive && 'bg-blue-500')}>
  Click me
</button>
```

---

## Migration Checklist (Vite → Next.js)

- [ ] Replace `vite.config.ts` with `next.config.ts`
- [ ] Move `index.html` entry point → `app/layout.tsx`
- [ ] Move `src/App.tsx` routes → file-based routes in `app/`
- [ ] Replace `react-router-dom` with Next.js `<Link>` and `useRouter`
- [ ] Move `fetch` calls from components → `services/` folder
- [ ] Add `"use client"` directive to components using hooks or browser APIs
- [ ] Move secrets from `.env` to `.env.local`
- [ ] Replace Vite's `import.meta.env.VITE_*` with `process.env.NEXT_PUBLIC_*`

---

*Generated for a company website using Next.js 13+ App Router · JavaScript · Tailwind CSS*
