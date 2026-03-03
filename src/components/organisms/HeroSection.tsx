import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { siteConfig } from "@/config/site"

export function HeroSection() {
  const t = useTranslations()

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white pt-16 px-4">
      <Image
        src={siteConfig.logo}
        alt={t("site.name")}
        width={180}
        height={62}
        className="mb-8"
        priority
      />
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-center">
        {t("hero.title")}
      </h1>
      <p className="text-lg sm:text-xl mb-8 max-w-2xl text-center opacity-90">
        {t("hero.subtitle")}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="#about"
          className="px-8 py-3 bg-white text-primary rounded-full font-semibold hover:bg-opacity-90 transition min-h-[44px] min-w-[44px] text-center"
        >
          {t("hero.learnMore")}
        </Link>
        <Link
          href="#contact"
          className="px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-primary transition min-h-[44px] min-w-[44px] text-center"
        >
          {t("hero.contactUs")}
        </Link>
      </div>
    </section>
  )
}
