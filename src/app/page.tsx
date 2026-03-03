import Image from 'next/image'
import { siteConfig } from '@/config/site'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src={siteConfig.logo} alt={siteConfig.name} width={116} height={40} />
          </div>
          <nav className="hidden md:flex gap-8">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-[#4C88F1] transition font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#4C88F1] via-[#5B9AF5] to-[#3A6FD8] text-white pt-16">
        <Image src={siteConfig.logo} alt={siteConfig.name} width={180} height={62} className="mb-8" />
        <h1 className="text-6xl font-bold mb-6">{siteConfig.name}</h1>
        <p className="text-xl mb-8 max-w-2xl text-center opacity-90">
          创新从这里开始 · Innovation starts here
        </p>
        <div className="flex gap-4">
          <a href="#about" className="px-8 py-3 bg-white text-[#4C88F1] rounded-full font-semibold hover:bg-opacity-90 transition">
            了解更多
          </a>
          <a href="#contact" className="px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-[#4C88F1] transition">
            联系我们
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">关于我们</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl border hover:shadow-lg transition hover:border-[#4C88F1]">
            <h3 className="text-xl font-semibold mb-3 text-[#4C88F1]">🚀 技术驱动</h3>
            <p className="text-gray-600">以前沿技术为核心，打造卓越产品体验</p>
          </div>
          <div className="p-6 rounded-xl border hover:shadow-lg transition hover:border-[#4C88F1]">
            <h3 className="text-xl font-semibold mb-3 text-[#4C88F1]">💡 创新思维</h3>
            <p className="text-gray-600">持续探索，用创新解决实际问题</p>
          </div>
          <div className="p-6 rounded-xl border hover:shadow-lg transition hover:border-[#4C88F1]">
            <h3 className="text-xl font-semibold mb-3 text-[#4C88F1]">🤝 用户至上</h3>
            <p className="text-gray-600">以用户需求为导向，提供最佳服务</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">联系我们</h2>
          <p className="text-gray-600 mb-8">有任何问题或合作意向？欢迎联系我们</p>
          <a href={`mailto:${siteConfig.contact.email}`} className="px-8 py-3 bg-[#4C88F1] text-white rounded-full font-semibold hover:bg-[#3A6FD8] transition">
            发送邮件
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t">
        <p>{siteConfig.footer.copyright}</p>
      </footer>
    </main>
  )
}
