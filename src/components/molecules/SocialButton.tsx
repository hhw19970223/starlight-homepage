"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SocialButtonProps {
  icon: ReactNode
  label: string
  onClick?: () => void
  className?: string
}

export function SocialButton({ icon, label, onClick, className }: SocialButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full flex items-center justify-center gap-3 py-3",
        "border border-border rounded-lg hover:bg-muted transition",
        className
      )}
    >
      {icon}
      {label}
    </button>
  )
}
