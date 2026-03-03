"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function Header() {
  const t = useTranslations()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={siteConfig.logo}
            alt={t("site.name")}
            width={116}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8" aria-label="Main navigation">
          <Link
            href="/"
            className="text-muted-foreground hover:text-primary transition font-medium min-h-[44px] flex items-center"
          >
            {t("nav.home")}
          </Link>
          <Link
            href="#products"
            className="text-muted-foreground hover:text-primary transition font-medium min-h-[44px] flex items-center"
          >
            {t("nav.products")}
          </Link>
          <Link
            href="#about"
            className="text-muted-foreground hover:text-primary transition font-medium min-h-[44px] flex items-center"
          >
            {t("nav.about")}
          </Link>
          <Link
            href="#contact"
            className="text-muted-foreground hover:text-primary transition font-medium min-h-[44px] flex items-center"
          >
            {t("nav.contact")}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={cn(
          "md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border transition-all duration-300",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col p-4 gap-2">
          <Link
            href="/"
            className="text-muted-foreground hover:text-primary transition font-medium p-3 min-h-[44px]"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("nav.home")}
          </Link>
          <Link
            href="#products"
            className="text-muted-foreground hover:text-primary transition font-medium p-3 min-h-[44px]"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("nav.products")}
          </Link>
          <Link
            href="#about"
            className="text-muted-foreground hover:text-primary transition font-medium p-3 min-h-[44px]"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("nav.about")}
          </Link>
          <Link
            href="#contact"
            className="text-muted-foreground hover:text-primary transition font-medium p-3 min-h-[44px]"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("nav.contact")}
          </Link>
        </div>
      </nav>
    </header>
  )
}
