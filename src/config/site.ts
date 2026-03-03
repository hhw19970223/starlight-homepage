export const siteConfig = {
  // Product name
  name: 'ABC',
  description: 'ABC - One-Stop Cross-Border E-Commerce Solutions',

  // Logo
  logo: '/logo.svg',

  // Theme color RGB(76, 136, 241)
  theme: {
    primary: 'rgb(76, 136, 241)',
    primaryHex: '#4C88F1',
    primaryRgb: '76, 136, 241',
    primaryHsl: '218, 86%, 62%',
    primaryDark: 'rgb(56, 116, 221)',
    primaryLight: 'rgb(106, 166, 255)',
  },

  // Navigation links (used by Header)
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Platforms', href: '#platforms' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],

  // Supported e-commerce platforms
  platforms: [
    { name: 'Amazon', icon: 'amazon' },
    { name: 'Shopify', icon: 'shopify' },
    { name: 'TikTok Shop', icon: 'tiktok' },
    { name: 'Temu', icon: 'temu' },
    { name: 'AliExpress', icon: 'aliexpress' },
    { name: 'eBay', icon: 'ebay' },
  ],

  // Footer information
  footer: {
    copyright: '© 2026 ABC. All rights reserved.',
    links: {
      solutions: ['Data Analytics', 'Smart Selection', 'Operations Automation', 'AI Assistant'],
      platforms: ['Amazon', 'Shopify', 'TikTok Shop', 'Temu'],
      company: ['About Us', 'Contact Us', 'Privacy Policy', 'Terms of Service'],
    },
  },

  // Contact information
  contact: {
    email: 'contact@abc.com',
    phone: '+1 800-XXX-XXXX',
  },

  // SEO configuration (English only)
  seo: {
    title: 'ABC - One-Stop Cross-Border E-Commerce Solutions',
    description: 'Professional cross-border e-commerce solution provider supporting Amazon, Shopify, TikTok Shop, Temu and other major platforms. Offering data analytics, smart product selection, operations automation and more.',
    keywords: [
      'cross-border e-commerce',
      'e-commerce solutions',
      'Amazon seller tools',
      'Shopify integration',
      'TikTok Shop',
      'Temu seller',
      'product selection',
      'data analytics',
      'operations automation',
      'multi-platform management',
    ],
  },
} as const

export type SiteConfig = typeof siteConfig
