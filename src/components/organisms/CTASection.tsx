import Link from "next/link"
import { useTranslations } from "next-intl"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  const t = useTranslations()

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-8 bg-gradient-to-br from-primary via-primary to-primary-dark text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          {t("cta.title")}
        </h2>
        <p className="text-lg sm:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
          {t("cta.subtitle")}
        </p>
        <Link
          href="#contact"
          className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-primary rounded-full font-semibold hover:bg-opacity-90 transition min-h-[48px] shadow-lg hover:shadow-xl text-lg"
        >
          {t("cta.button")}
          <ArrowRight size={20} />
        </Link>
        <p className="text-sm opacity-70 mt-6">
          {t("cta.note")}
        </p>
      </div>
    </section>
  )
}
