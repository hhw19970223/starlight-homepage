"use client"

import { useState, useEffect } from "react"
import { ArrowUp, Bug } from "lucide-react"

export function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  const reportBug = () => {
    window.open("mailto:bugs@starlight.com?subject=Bug Report", "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <button
        onClick={scrollToTop}
        className={`p-3 rounded-full bg-card border border-border shadow-lg hover:bg-muted transition-all ${
          showScroll ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="text-foreground" />
      </button>
      <button
        onClick={reportBug}
        className="p-3 rounded-full bg-card border border-border shadow-lg hover:bg-muted transition-colors"
        aria-label="Report a bug"
      >
        <Bug size={20} className="text-foreground" />
      </button>
    </div>
  )
}
