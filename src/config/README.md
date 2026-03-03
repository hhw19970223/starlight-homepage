# Config Directory

Site-wide configuration.

## Files

| File | Description |
|------|-------------|
| `site.ts` | Brand, theme, navigation, SEO |

## Usage

```tsx
import { siteConfig } from "@/config/site"

// Access brand
siteConfig.name       // "ABC"
siteConfig.logo       // "/logo.png"

// Access theme
siteConfig.theme.primary  // "#4C88F1"

// Access SEO
siteConfig.seo.title      // Site title
siteConfig.seo.keywords   // Keywords array
```

## Customization

Edit `site.ts` to change:
- Brand name and logo
- Navigation items
- Theme colors
- SEO defaults
