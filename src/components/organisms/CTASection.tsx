import Link from "next/link"
import { useTranslations } from "next-intl"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  const t = useTranslations("cta")

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-primary/20 via-card to-accent/10 border border-border relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              {t("subtitle")}
            </p>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all glow min-h-[56px]"
            >
              {t("button")}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-sm text-muted-foreground mt-4">{t("note")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
