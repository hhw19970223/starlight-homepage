# App Directory

Next.js App Router pages and layouts.

## Structure

```
app/
├── README.md              # This documentation
├── layout.tsx             # Root layout (fonts, i18n, metadata)
├── page.tsx               # Home page
├── globals.css            # Global styles + Tailwind
├── sitemap.ts             # Dynamic sitemap generation
├── robots.ts              # Robots.txt rules
├── not-found.tsx          # 404 page
├── error.tsx              # Error boundary
├── loading.tsx            # Global loading state
├── login/
│   ├── page.tsx           # Login page
│   └── layout.tsx         # Login metadata
├── register/
│   ├── page.tsx           # Register page
│   └── layout.tsx         # Register metadata
└── forgot-password/
    ├── page.tsx           # Forgot password page
    └── layout.tsx         # Forgot password metadata
```

## Adding New Pages

1. Create folder: `app/{page-name}/`
2. Add `page.tsx` (main content)
3. Add `layout.tsx` (SEO metadata)
4. Update sitemap.ts if public page
5. Add translations to messages/*.json

## SEO

Each page should export metadata via `layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description in English",
}
```
