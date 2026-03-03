"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { X } from "lucide-react"

interface MobileNavProps {
  navItems: { href: string; labelKey: string }[]
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ navItems, isOpen, onClose }: MobileNavProps) {
  const t = useTranslations("nav")

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-64 bg-background p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-muted rounded-lg"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <nav className="mt-12 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="text-lg font-medium py-2 hover:text-primary transition"
            >
              {t(item.labelKey)}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={onClose}
            className="mt-4 px-6 py-3 bg-primary text-white rounded-lg font-semibold text-center hover:bg-primary-dark transition"
          >
            {t("login")}
          </Link>
        </nav>
      </div>
    </div>
  )
}
