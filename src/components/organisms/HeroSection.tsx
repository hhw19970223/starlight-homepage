"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { ArrowRight, Github } from "lucide-react"

export function HeroSection() {
  const t = useTranslations("hero")

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-sm text-muted-foreground">{t("badge")}</span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
          <span className="text-foreground">{t("title")}</span>
          <br />
          <span className="gradient-text">{t("titleHighlight")}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          {t("subtitle")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <Link
            href="#contact"
            className="group px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all glow min-h-[56px] flex items-center gap-2"
          >
            {t("cta")}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#solutions"
            className="px-8 py-4 border border-border text-foreground rounded-lg font-semibold hover:bg-card transition-all min-h-[56px] flex items-center"
          >
            {t("ctaSecondary")}
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 border border-border text-muted-foreground rounded-lg font-medium hover:bg-card hover:text-foreground transition-all min-h-[56px] flex items-center gap-2"
          >
            <Github size={20} />
            GitHub Star
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          {[
            { value: t("stats.merchants"), label: t("stats.merchantsLabel") },
            { value: t("stats.platforms"), label: t("stats.platformsLabel") },
            { value: t("stats.products"), label: t("stats.productsLabel") },
            { value: t("stats.growth"), label: t("stats.growthLabel") },
          ].map((stat) => (
            <div key={stat.label} className="p-4 rounded-xl bg-card/50 border border-border/50">
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
