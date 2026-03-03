export interface NavItem {
  label: string
  href: string
}

export interface SiteConfig {
  name: string
  description: string
  logo: string
  theme: {
    primary: string
    primaryHex: string
    primaryRgb: string
    primaryHsl: string
    primaryDark: string
    primaryLight: string
  }
  nav: NavItem[]
  footer: {
    copyright: string
  }
  contact: {
    email: string
  }
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}
