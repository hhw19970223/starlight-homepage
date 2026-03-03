"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Menu } from "lucide-react"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { DesktopNav } from "./DesktopNav"
import { MobileNav } from "./MobileNav"

const navItems = [
  { href: "#solutions", labelKey: "solutions" },
  { href: "#platforms", labelKey: "platforms" },
  { href: "#about", labelKey: "about" },
  { href: "#contact", labelKey: "contact" },
]

export function Header() {
  const t = useTranslations("nav")
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={120}
            height={41}
            className={cn("transition-all", scrolled ? "" : "brightness-0 invert")}
            priority
          />
        </Link>

        <DesktopNav navItems={navItems} scrolled={scrolled} />

        <div className="hidden md:block">
          <Link
            href="/login"
            className={cn(
              "px-6 py-2.5 rounded-full font-semibold transition min-h-[44px] inline-flex items-center",
              scrolled
                ? "bg-primary text-white hover:bg-primary-dark"
                : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
            )}
          >
            {t("login")}
          </Link>
        </div>

        <button
          className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu className={scrolled ? "text-foreground" : "text-white"} size={24} />
        </button>

        <MobileNav navItems={navItems} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </header>
  )
}

export default Header
