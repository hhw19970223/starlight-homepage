"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"

interface DesktopNavProps {
  navItems: { href: string; labelKey: string }[]
  scrolled: boolean
}

export function DesktopNav({ navItems, scrolled }: DesktopNavProps) {
  const t = useTranslations("nav")

  return (
    <nav className="hidden md:flex items-center gap-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            scrolled ? "text-foreground" : "text-white"
          )}
        >
          {t(item.labelKey)}
        </Link>
      ))}
    </nav>
  )
}
