"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CaseStudySection() {
  const t = useTranslations("caseStudy")

  const steps = [
    { num: "01", key: "step1" },
    { num: "02", key: "step2" },
    { num: "03", key: "step3" },
    { num: "04", key: "step4" },
  ]

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-foreground">
          {t("title")}
        </h2>
        <p className="text-muted-foreground mb-12">{t("subtitle")}</p>

        <div className="space-y-0">
          {steps.map((step, index) => (
            <div key={step.num} className="flex items-start gap-6 relative">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-mono text-sm">
                  {step.num}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px h-16 bg-border my-2" />
                )}
              </div>
              <div className="flex-1 pb-8">
                <h3 className="font-medium text-foreground mb-1">{t(`${step.key}.title`)}</h3>
                <p className="text-sm text-muted-foreground">{t(`${step.key}.desc`)}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight size={16} className="text-muted-foreground absolute left-3 top-14" />
              )}
            </div>
          ))}
        </div>

        <Link href="/cases" className="text-primary hover:underline text-sm">
          {t("seeMore")} →
        </Link>
      </div>
    </section>
  )
}
