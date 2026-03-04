"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations("footer")

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">{t("copyright")}</p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
            <Link href="/wiki" className="text-muted-foreground hover:text-foreground transition-colors">
              Wiki
            </Link>
            <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
            <a href="mailto:contact@starlight.com" className="text-muted-foreground hover:text-foreground transition-colors">
              contact@starlight.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
