import Link from "next/link"
import { useTranslations } from "next-intl"
import { siteConfig } from "@/config/site"

export function ContactSection() {
  const t = useTranslations()

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 bg-muted">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          {t("contact.title")}
        </h2>
        <p className="text-muted-foreground mb-8">{t("contact.desc")}</p>
        <Link
          href={`mailto:${siteConfig.contact.email}`}
          className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition min-h-[44px] min-w-[44px]"
        >
          {t("contact.sendEmail")}
        </Link>
      </div>
    </section>
  )
}
