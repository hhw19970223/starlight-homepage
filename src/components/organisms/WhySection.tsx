"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"

export function WhySection() {
  const t = useTranslations("why")

  const principles = [
    { key: "global", emoji: "🌍" },
    { key: "smart", emoji: "🤖" },
    { key: "trust", emoji: "🤝" },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-xs uppercase tracking-wider text-primary">
            {t("badge")}
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
          {t("title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map(({ key, emoji }) => (
            <div key={key} className="p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl mb-4">{emoji}</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{t(`${key}.title`)}</h3>
              <p className="text-muted-foreground mb-4">{t(`${key}.desc`)}</p>
              <blockquote className="text-sm italic text-muted-foreground border-l-2 border-primary pl-4">
                "{t(`${key}.quote`)}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <Link href="/about" className="text-primary hover:underline text-sm">
            {t("aboutUs")} →
          </Link>
          <Link href="/vision" className="text-primary hover:underline text-sm">
            {t("ourVision")} →
          </Link>
        </div>
      </div>
    </section>
  )
}
