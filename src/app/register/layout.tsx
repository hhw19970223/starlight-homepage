import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Create Account",
  description: "Create your ABC account to start your cross-border e-commerce journey with powerful analytics and automation tools.",
  robots: { index: false, follow: true },
}

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return children
}
