"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function Header() {
  const t = useTranslations()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 lg:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={siteConfig.logo}
            alt={t("site.name")}
            width={116}
            height={40}
            priority
            className={cn(
              "transition-all",
              scrolled ? "" : "brightness-0 invert"
            )}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          <Link
            href="/"
            className={cn(
              "font-medium min-h-[44px] flex items-center transition",
              scrolled ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white"
            )}
          >
            {t("nav.home")}
          </Link>
          <Link
            href="#solutions"
            className={cn(
              "font-medium min-h-[44px] flex items-center transition",
              scrolled ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white"
            )}
          >
            {t("nav.solutions")}
          </Link>
          <Link
            href="#platforms"
            className={cn(
              "font-medium min-h-[44px] flex items-center transition",
              scrolled ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white"
            )}
          >
            {t("nav.platforms")}
          </Link>
          <Link
            href="#about"
            className={cn(
              "font-medium min-h-[44px] flex items-center transition",
              scrolled ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white"
            )}
          >
            {t("nav.about")}
          </Link>
          <Link
            href="#contact"
            className={cn(
              "px-6 py-2.5 rounded-full font-semibold min-h-[44px] flex items-center transition",
              scrolled 
                ? "bg-primary text-white hover:bg-primary-dark" 
                : "bg-white text-primary hover:bg-white/90"
            )}
          >
            {t("nav.contact")}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "lg:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg transition",
            scrolled ? "text-foreground" : "text-white"
          )}
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
          "lg:hidden absolute top-16 lg:top-20 left-0 right-0 bg-background border-b border-border transition-all duration-300",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col p-4 gap-1">
          <Link
            href="/"
            className="text-foreground hover:text-primary transition font-medium p-3 min-h-[44px] rounded-lg hover:bg-muted"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("nav.home")}
          </Link>
          <Link
            href="#solutions"
            className="text-foreground hover:text-primary transition font-medium p-3 min-h-[44px] rounded-lg hover:bg-muted"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("nav.solutions")}
          </Link>
          <Link
            href="#platforms"
            className="text-foreground hover:text-primary transition font-medium p-3 min-h-[44px] rounded-lg hover:bg-muted"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("nav.platforms")}
          </Link>
          <Link
            href="#about"
            className="text-foreground hover:text-primary transition font-medium p-3 min-h-[44px] rounded-lg hover:bg-muted"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("nav.about")}
          </Link>
          <Link
            href="#contact"
            className="text-center bg-primary text-white hover:bg-primary-dark transition font-medium p-3 min-h-[44px] rounded-lg mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("nav.contact")}
          </Link>
        </div>
      </nav>
    </header>
  )
}
