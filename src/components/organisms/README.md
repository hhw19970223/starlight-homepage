# Organisms

Complex components that form distinct sections of the UI.

## Components

| Component | Lines | Description |
|-----------|-------|-------------|
| `Header` | ~100 | Site navigation with mobile menu |
| `Footer` | ~80 | Site footer with links and copyright |
| `HeroSection` | ~95 | Landing hero with stats |
| `SolutionsSection` | ~60 | Service offerings grid |
| `PlatformsSection` | ~60 | Supported platforms display |
| `FeaturesSection` | ~45 | Feature highlights |
| `CTASection` | ~30 | Call-to-action banner |
| `ContactSection` | ~55 | Contact information |

## Guidelines

- Max 150 lines per file
- Extract repeated patterns to molecules
- Use composition over inheritance
- Include loading states

## File Structure

```
organisms/
├── README.md
├── Header/
│   ├── index.tsx       # Main export
│   ├── DesktopNav.tsx  # Desktop navigation
│   ├── MobileNav.tsx   # Mobile drawer
│   └── README.md       # Component docs
├── Footer.tsx
└── ...
```
