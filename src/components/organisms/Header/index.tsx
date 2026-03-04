"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Menu, Globe } from "lucide-react"
import { siteConfig } from "@/config/site"
import { DropdownMenu, ThemeToggle } from "@/components/molecules"
import { MobileNav } from "./MobileNav"

const navItems = [
  { href: "#solutions", labelKey: "solutions" },
  { href: "#platforms", labelKey: "platforms" },
  { href: "#about", labelKey: "about" },
  { href: "#contact", labelKey: "contact" },
]

const exploreItems = [
  { label: "Data Analytics", href: "#solutions", description: "Real-time market insights" },
  { label: "Smart Selection", href: "#solutions", description: "AI-powered product recommendations" },
  { label: "Operations", href: "#solutions", description: "Automate your workflow" },
]

const resourceItems = [
  { label: "Documentation", href: "/docs", description: "API guides and tutorials" },
  { label: "Blog", href: "/blog", description: "Latest updates and insights" },
  { label: "Support", href: "#contact", description: "Get help from our team" },
]

export function Header() {
  const t = useTranslations("nav")
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={siteConfig.logo} alt={siteConfig.name} width={120} height={41} priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(item.labelKey)}
            </Link>
          ))}
          <DropdownMenu label="Explore" items={exploreItems} />
          <DropdownMenu label="Resources" items={resourceItems} />
        </nav>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle language"
          >
            <Globe size={20} />
          </button>
          <ThemeToggle />
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("login")}
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors min-h-[44px] flex items-center"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-foreground"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

        <MobileNav navItems={navItems} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </header>
  )
}

export default Header
