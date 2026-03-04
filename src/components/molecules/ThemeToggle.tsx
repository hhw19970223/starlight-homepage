"use client"

import { Moon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  // 目前只支持深色主题，后续可扩展
  return (
    <button
      className={cn(
        "p-2 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center",
        "text-muted-foreground hover:text-foreground hover:bg-muted",
        className
      )}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <Moon size={20} />
    </button>
  )
}
