"use client"

import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface CountdownButtonProps {
  onClick: () => void
  countdown: number
  loading: boolean
  disabled: boolean
  label: string
}

export function CountdownButton({
  onClick,
  countdown,
  loading,
  disabled,
  label,
}: CountdownButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || countdown > 0 || loading}
      className={cn(
        "px-4 py-3 bg-muted text-foreground rounded-lg font-medium",
        "hover:bg-muted/80 transition disabled:opacity-50 min-w-[120px]"
      )}
    >
      {loading ? (
        <Loader2 className="animate-spin mx-auto" size={20} />
      ) : countdown > 0 ? (
        `${countdown}s`
      ) : (
        label
      )}
    </button>
  )
}
