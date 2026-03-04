"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

export function OnboardingSection() {
  const t = useTranslations("onboarding")
  const [copied, setCopied] = useState(false)

  const codeSnippet = "curl -s https://api.starlight.com/start"

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t("title")}
          </h2>
          <p className="text-muted-foreground">{t("subtitle")}</p>
        </div>

        {/* Code snippet */}
        <div className="bg-card border border-border rounded-lg p-4 mb-8 flex items-center justify-between">
          <code className="text-sm text-primary font-mono">{codeSnippet}</code>
          <button
            onClick={handleCopy}
            className="p-2 hover:bg-muted rounded transition-colors"
            aria-label="Copy code"
          >
            {copied ? <Check size={18} className="text-success" /> : <Copy size={18} className="text-muted-foreground" />}
          </button>
        </div>

        {/* 3 Steps */}
        <div className="grid sm:grid-cols-3 gap-6">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                {step}
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">{t(`step${step}.title`)}</h3>
                <p className="text-sm text-muted-foreground">{t(`step${step}.desc`)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/docs" className="text-primary hover:underline text-sm">
            {t("readDocs")} →
          </Link>
        </div>
      </div>
    </section>
  )
}
