import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Reset your ABC account password securely with email verification.",
  robots: { index: false, follow: true },
}

export default function ForgotPasswordLayout({ children }: { children: React.ReactNode }) {
  return children
}
