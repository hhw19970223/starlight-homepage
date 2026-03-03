"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FormInputProps {
  type: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  icon?: ReactNode
  required?: boolean
  className?: string
}

export function FormInput({
  type,
  placeholder,
  value,
  onChange,
  icon,
  required = false,
  className,
}: FormInputProps) {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          {icon}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full py-3 border border-border rounded-lg bg-background",
          "focus:outline-none focus:ring-2 focus:ring-primary",
          icon ? "pl-10 pr-4" : "px-4",
          className
        )}
        required={required}
      />
    </div>
  )
}
