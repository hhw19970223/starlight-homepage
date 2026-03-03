export const siteConfig = {
  // 产品名称
  name: 'ABC',
  description: 'ABC - 一站式跨境电商解决方案',

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
    { label: '解决方案', href: '#solutions' },
    { label: '平台支持', href: '#platforms' },
    { label: '关于我们', href: '#about' },
    { label: '联系我们', href: '#contact' },
  ],

  // 支持的电商平台
  platforms: [
    { name: 'Amazon', icon: 'amazon' },
    { name: 'Shopify', icon: 'shopify' },
    { name: 'TikTok Shop', icon: 'tiktok' },
    { name: 'Temu', icon: 'temu' },
    { name: 'AliExpress', icon: 'aliexpress' },
    { name: 'eBay', icon: 'ebay' },
  ],

  // 页脚信息
  footer: {
    copyright: '© 2026 ABC. All rights reserved.',
    links: {
      solutions: ['数据分析', '智能选品', '运营自动化', 'AI 助手'],
      platforms: ['Amazon', 'Shopify', 'TikTok Shop', 'Temu'],
      company: ['关于我们', '联系我们', '隐私政策', '服务条款'],
    },
  },

  // 联系方式
  contact: {
    email: 'contact@abc.com',
    phone: '+86 400-XXX-XXXX',
  },

  // SEO
  seo: {
    title: 'ABC - 一站式跨境电商解决方案',
    description: '专业的跨境电商解决方案提供商，支持 Amazon、Shopify、TikTok Shop、Temu 等主流平台，提供数据分析、智能选品、运营自动化等服务',
    keywords: ['跨境电商', '电商解决方案', 'Amazon', 'Shopify', 'TikTok Shop', 'Temu', '智能选品', '数据分析', '运营自动化'],
  },
} as const

export type SiteConfig = typeof siteConfig
