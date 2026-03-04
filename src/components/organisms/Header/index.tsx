"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ChevronDown } from "lucide-react"
import { siteConfig } from "@/config/site"
import { MobileNav } from "./MobileNav"

interface DropdownItem {
  label: string
  href: string
  desc?: string
}

interface NavDropdownProps {
  label: string
  items: DropdownItem[]
}

function NavDropdown({ label, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
        {label}
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-card border border-border rounded-lg shadow-xl p-2 z-50">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="block px-3 py-2 rounded-md hover:bg-muted transition-colors">
              <div className="font-medium text-foreground text-sm">{item.label}</div>
              {item.desc && <div className="text-xs text-muted-foreground">{item.desc}</div>}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

const navItems = [
  { href: "/market", label: "Market" },
  { href: "/services", label: "Services" },
  { href: "/wiki", label: "Wiki" },
  { href: "/blog", label: "Blog" },
]

const exploreItems = [
  { label: "Product Selection", href: "#solutions", desc: "AI-powered product discovery" },
  { label: "Data Analytics", href: "#analytics", desc: "Real-time market insights" },
  { label: "Automation", href: "#automation", desc: "Streamline your workflow" },
]

const resourceItems = [
  { label: "Documentation", href: "/docs", desc: "API guides and tutorials" },
  { label: "Case Studies", href: "/cases", desc: "Success stories" },
  { label: "Support", href: "#contact", desc: "Get help from our team" },
]

const moreItems = [
  { label: "About Us", href: "/about", desc: "Our mission and team" },
  { label: "Careers", href: "/careers", desc: "Join our team" },
  { label: "Contact", href: "#contact", desc: "Get in touch" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src={siteConfig.logo} alt={siteConfig.name} width={100} height={34} priority />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {item.label}
            </Link>
          ))}
          <NavDropdown label="Explore" items={exploreItems} />
          <NavDropdown label="Resources" items={resourceItems} />
          <NavDropdown label="More" items={moreItems} />
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Sign In
          </Link>
          <Link href="/register" className="px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
            Sign Up
          </Link>
        </div>

        <button className="lg:hidden p-2 text-foreground" onClick={() => setIsOpen(true)} aria-label="Open menu">
          <Menu size={24} />
        </button>

        <MobileNav navItems={navItems.map(n => ({ href: n.href, labelKey: n.label }))} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </header>
  )
}

export default Header
