"use client"

import Image from "next/image"
import { siteConfig } from "@/config/site"

interface AuthBrandingProps {
  title: string
  subtitle: string
}

export function AuthBranding({ title, subtitle }: AuthBrandingProps) {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary via-primary to-primary-dark items-center justify-center p-12">
      <div className="text-center text-white">
        <Image
          src={siteConfig.logo}
          alt={siteConfig.name}
          width={200}
          height={69}
          className="mx-auto mb-8 brightness-0 invert"
          priority
        />
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-lg opacity-80 max-w-md">{subtitle}</p>
      </div>
    </div>
  )
}
