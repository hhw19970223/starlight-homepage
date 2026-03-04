"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"
import { Shield, CheckCircle, TrendingUp } from "lucide-react"

export function QualitySection() {
  const t = useTranslations("quality")

  const metrics = [
    { key: "accuracy", value: "99.5%", icon: CheckCircle },
    { key: "verified", value: "100K+", icon: Shield },
    { key: "growth", value: "200%", icon: TrendingUp },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-xs uppercase tracking-wider text-primary">
            {t("badge")}
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
          {t("title")}
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          {t("subtitle")}
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {metrics.map(({ key, value, icon: Icon }) => (
            <div key={key} className="text-center p-6 rounded-xl bg-card border border-border">
              <Icon size={32} className="mx-auto mb-4 text-primary" />
              <div className="text-3xl font-bold text-foreground mb-2">{value}</div>
              <div className="text-sm text-muted-foreground">{t(`${key}.label`)}</div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-6 text-foreground">{t("howItWorks")}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((step) => (
              <div key={step}>
                <h4 className="font-medium text-foreground mb-2">{t(`process${step}.title`)}</h4>
                <p className="text-sm text-muted-foreground">{t(`process${step}.desc`)}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/quality" className="text-primary hover:underline text-sm">
              {t("learnMore")} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
