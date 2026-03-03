# Header Component

Main site navigation header with scroll-aware styling.

## Structure

```
Header/
├── index.tsx       # Main component (70 lines)
├── DesktopNav.tsx  # Desktop navigation (30 lines)
├── MobileNav.tsx   # Mobile drawer menu (45 lines)
└── README.md       # This documentation
```

## Features

- **Scroll-aware**: Transparent on top, solid on scroll
- **Responsive**: Desktop nav + mobile drawer
- **i18n ready**: Uses `useTranslations("nav")`
- **Accessible**: ARIA labels, keyboard navigation

## Props

None - reads from `siteConfig` and i18n context.

## Usage

```tsx
import { Header } from "@/components/organisms/Header"

<Header />
```

## Customization

Edit `navItems` array in `index.tsx` to modify navigation links.
