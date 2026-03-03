import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { ArrowRight, Sparkles } from "lucide-react"
import { siteConfig } from "@/config/site"

export function HeroSection() {
  const t = useTranslations()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary via-primary to-primary-dark text-white pt-20 pb-16 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
          <Sparkles size={16} />
          <span className="text-sm font-medium">{t("hero.badge")}</span>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src={siteConfig.logo}
            alt={t("site.name")}
            width={160}
            height={55}
            priority
            className="brightness-0 invert"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
          {t("hero.title")}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
            {t("hero.titleHighlight")}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed">
          {t("hero.subtitle")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-opacity-90 transition min-h-[48px] shadow-lg hover:shadow-xl"
          >
            {t("hero.cta")}
            <ArrowRight size={20} />
          </Link>
          <Link
            href="#solutions"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 rounded-full font-semibold hover:bg-white/10 transition min-h-[48px]"
          >
            {t("hero.ctaSecondary")}
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl font-bold mb-1">{t("hero.stats.merchants")}</div>
            <div className="text-sm opacity-80">{t("hero.stats.merchantsLabel")}</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl font-bold mb-1">{t("hero.stats.platforms")}</div>
            <div className="text-sm opacity-80">{t("hero.stats.platformsLabel")}</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl font-bold mb-1">{t("hero.stats.products")}</div>
            <div className="text-sm opacity-80">{t("hero.stats.productsLabel")}</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl font-bold mb-1">{t("hero.stats.growth")}</div>
            <div className="text-sm opacity-80">{t("hero.stats.growthLabel")}</div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(var(--background))"/>
        </svg>
      </div>
    </section>
  )
}
