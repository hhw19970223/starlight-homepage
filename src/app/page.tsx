import Link from "next/link"
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { siteConfig } from '@/config/site'

export default function Home() {
  const t = useTranslations()

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src={siteConfig.logo} alt={t('site.name')} width={116} height={40} />
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-gray-600 hover:text-[#4C88F1] transition font-medium">{t('nav.home')}</Link>
            <a href="#products" className="text-gray-600 hover:text-[#4C88F1] transition font-medium">{t('nav.products')}</a>
            <a href="#about" className="text-gray-600 hover:text-[#4C88F1] transition font-medium">{t('nav.about')}</a>
            <a href="#contact" className="text-gray-600 hover:text-[#4C88F1] transition font-medium">{t('nav.contact')}</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#4C88F1] via-[#5B9AF5] to-[#3A6FD8] text-white pt-16">
        <Image src={siteConfig.logo} alt={t('site.name')} width={180} height={62} className="mb-8" />
        <h1 className="text-6xl font-bold mb-6">{t('hero.title')}</h1>
        <p className="text-xl mb-8 max-w-2xl text-center opacity-90">
          {t('hero.subtitle')}
        </p>
        <div className="flex gap-4">
          <a href="#about" className="px-8 py-3 bg-white text-[#4C88F1] rounded-full font-semibold hover:bg-opacity-90 transition">
            {t('hero.learnMore')}
          </a>
          <a href="#contact" className="px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-[#4C88F1] transition">
            {t('hero.contactUs')}
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">{t('about.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl border hover:shadow-lg transition hover:border-[#4C88F1]">
            <h3 className="text-xl font-semibold mb-3 text-[#4C88F1]">{t('about.tech.title')}</h3>
            <p className="text-gray-600">{t('about.tech.desc')}</p>
          </div>
          <div className="p-6 rounded-xl border hover:shadow-lg transition hover:border-[#4C88F1]">
            <h3 className="text-xl font-semibold mb-3 text-[#4C88F1]">{t('about.innovation.title')}</h3>
            <p className="text-gray-600">{t('about.innovation.desc')}</p>
          </div>
          <div className="p-6 rounded-xl border hover:shadow-lg transition hover:border-[#4C88F1]">
            <h3 className="text-xl font-semibold mb-3 text-[#4C88F1]">{t('about.userFirst.title')}</h3>
            <p className="text-gray-600">{t('about.userFirst.desc')}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t('contact.title')}</h2>
          <p className="text-gray-600 mb-8">{t('contact.desc')}</p>
          <a href={`mailto:${siteConfig.contact.email}`} className="px-8 py-3 bg-[#4C88F1] text-white rounded-full font-semibold hover:bg-[#3A6FD8] transition">
            {t('contact.sendEmail')}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t">
        <p>{t('footer.copyright')}</p>
      </footer>
    </main>
  )
}
