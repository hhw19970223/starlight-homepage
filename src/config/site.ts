export const siteConfig = {
  // 产品名称
  name: 'ABC',
  description: 'ABC Official Website - Innovation starts here',

  // Logo
  logo: '/logo.svg',

  // 主题色 RGB(76, 136, 241)
  theme: {
    primary: 'rgb(76, 136, 241)',
    primaryHex: '#4C88F1',
    primaryRgb: '76, 136, 241',
    primaryHsl: '218, 86%, 62%',
    primaryDark: 'rgb(56, 116, 221)',
    primaryLight: 'rgb(106, 166, 255)',
  },

  // 导航链接
  nav: [
    { label: '首页', href: '/' },
    { label: '产品', href: '#products' },
    { label: '关于我们', href: '#about' },
    { label: '联系我们', href: '#contact' },
  ],

  // 页脚信息
  footer: {
    copyright: '© 2026 ABC. All rights reserved.',
  },

  // 联系方式
  contact: {
    email: 'contact@abc.com',
  },

  // SEO
  seo: {
    title: 'ABC - Official Website',
    description: 'ABC Official Website - Innovation starts here',
    keywords: ['ABC', 'official', 'website'],
  },
} as const

export type SiteConfig = typeof siteConfig
