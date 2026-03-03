"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { siteConfig } from "@/config/site"
import { Mail, Lock, User, ArrowLeft, Loader2 } from "lucide-react"

export default function RegisterPage() {
  const t = useTranslations("auth.register")
  const tLogin = useTranslations("auth.login")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [code, setCode] = useState("")
  const [agreed, setAgreed] = useState(false)
  const [sending, setSending] = useState(false)
  const [countdown, setCountdown] = useState(0)

  const handleSendCode = async () => {
    if (!email || countdown > 0) return
    setSending(true)
    await new Promise(r => setTimeout(r, 1000))
    setSending(false)
    setCountdown(60)
    const timer = setInterval(() => {
      setCountdown(c => { if (c <= 1) { clearInterval(timer); return 0 }; return c - 1 })
    }, 1000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword || !agreed) return
    console.log({ name, email, password, code })
  }

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary via-primary to-primary-dark items-center justify-center p-12">
        <div className="text-center text-white">
          <Image src={siteConfig.logo} alt={siteConfig.name} width={200} height={69} className="mx-auto mb-8 brightness-0 invert" priority />
          <h1 className="text-3xl font-bold mb-4">{t("join")}</h1>
          <p className="text-lg opacity-80 max-w-md">{t("joinSubtitle")}</p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          <Link href="/login" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition">
            <ArrowLeft size={20} /> {t("backToLogin")}
          </Link>

          <h2 className="text-2xl font-bold mb-2">{t("title")}</h2>
          <p className="text-muted-foreground mb-8">{t("subtitle")}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input type="text" placeholder={t("namePlaceholder")} value={name} onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary" required />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input type="email" placeholder={tLogin("emailPlaceholder")} value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary" required />
            </div>

            <div className="relative flex gap-2">
              <input type="text" placeholder={tLogin("codePlaceholder")} value={code} onChange={(e) => setCode(e.target.value)}
                className="flex-1 px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary" required />
              <button type="button" onClick={handleSendCode} disabled={!email || countdown > 0 || sending}
                className="px-4 py-3 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition disabled:opacity-50 min-w-[120px]">
                {sending ? <Loader2 className="animate-spin mx-auto" size={20} /> : countdown > 0 ? `${countdown}s` : tLogin("sendCode")}
              </button>
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input type="password" placeholder={tLogin("passwordPlaceholder")} value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary" required />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input type="password" placeholder={t("confirmPasswordPlaceholder")} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary" required />
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1 w-4 h-4 rounded" />
              <span className="text-sm text-muted-foreground">
                {tLogin("agreeTerms")} <Link href="/terms" className="text-primary hover:underline">{tLogin("termsOfService")}</Link>
                {" "}{tLogin("and")}{" "}<Link href="/privacy" className="text-primary hover:underline">{tLogin("privacyPolicy")}</Link>
              </span>
            </label>

            <button type="submit" className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition">
              {t("submit")}
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-muted-foreground">
            {t("haveAccount")} <Link href="/login" className="text-primary hover:underline">{t("signIn")}</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
