"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { ArrowRight, Star } from "lucide-react"

export function HeroSection() {
  const t = useTranslations("hero")

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="text-foreground">{t("title")}</span>
          <br />
          <span className="gradient-text">{t("titleHighlight")}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("subtitle")}
        </p>

        {/* CTA Buttons - evomap.ai style */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="#contact"
            className="group px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-all flex items-center gap-2"
          >
            {t("cta")}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#solutions"
            className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-card transition-all"
          >
            {t("ctaSecondary")}
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-border text-muted-foreground rounded-lg font-medium hover:bg-card hover:text-foreground transition-all flex items-center gap-2"
          >
            <Star size={18} />
            GitHub Star
          </a>
        </div>
      </div>
    </section>
  )
}
