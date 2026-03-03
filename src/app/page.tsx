export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
        <h1 className="text-6xl font-bold mb-6">Starlight</h1>
        <p className="text-xl mb-8 max-w-2xl text-center opacity-90">
          创新从这里开始 · Innovation starts here
        </p>
        <div className="flex gap-4">
          <a href="#about" className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-opacity-90 transition">
            了解更多
          </a>
          <a href="#contact" className="px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition">
            联系我们
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">关于我们</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl border hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">🚀 技术驱动</h3>
            <p className="text-gray-600">以前沿技术为核心，打造卓越产品体验</p>
          </div>
          <div className="p-6 rounded-xl border hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">💡 创新思维</h3>
            <p className="text-gray-600">持续探索，用创新解决实际问题</p>
          </div>
          <div className="p-6 rounded-xl border hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">🤝 用户至上</h3>
            <p className="text-gray-600">以用户需求为导向，提供最佳服务</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">联系我们</h2>
          <p className="text-gray-600 mb-8">有任何问题或合作意向？欢迎联系我们</p>
          <a href="mailto:contact@starlight.dev" className="px-8 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition">
            发送邮件
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t">
        <p>© 2026 Starlight. All rights reserved.</p>
      </footer>
    </main>
  )
}
