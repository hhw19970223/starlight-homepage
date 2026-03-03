"use client"

import { useState } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { Mail, Lock, User } from "lucide-react"
import { AuthBranding, FormInput, CountdownButton } from "@/components/molecules"

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
    await new Promise((r) => setTimeout(r, 1000))
    setSending(false)
    setCountdown(60)
    const timer = setInterval(() => {
      setCountdown((c) => { if (c <= 1) { clearInterval(timer); return 0 }; return c - 1 })
    }, 1000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword || !agreed) return
    console.log({ name, email, password, code })
  }

  return (
    <div className="min-h-screen flex">
      <AuthBranding title={t("join")} subtitle={t("joinSubtitle")} />

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          <Link href="/login" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition">
            ← {t("backToLogin")}
          </Link>

          <h2 className="text-2xl font-bold mb-2">{t("title")}</h2>
          <p className="text-muted-foreground mb-8">{t("subtitle")}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <FormInput type="text" placeholder={t("namePlaceholder")} value={name} onChange={setName} icon={<User size={20} />} required />
            <FormInput type="email" placeholder={tLogin("emailPlaceholder")} value={email} onChange={setEmail} icon={<Mail size={20} />} required />

            <div className="flex gap-2">
              <div className="flex-1">
                <FormInput type="text" placeholder={tLogin("codePlaceholder")} value={code} onChange={setCode} required />
              </div>
              <CountdownButton onClick={handleSendCode} countdown={countdown} loading={sending} disabled={!email} label={tLogin("sendCode")} />
            </div>

            <FormInput type="password" placeholder={tLogin("passwordPlaceholder")} value={password} onChange={setPassword} icon={<Lock size={20} />} required />
            <FormInput type="password" placeholder={t("confirmPasswordPlaceholder")} value={confirmPassword} onChange={setConfirmPassword} icon={<Lock size={20} />} required />

            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1 w-4 h-4 rounded" />
              <span className="text-sm text-muted-foreground">
                {tLogin("agreeTerms")} <Link href="/terms" className="text-primary hover:underline">{tLogin("termsOfService")}</Link>
                {" "}{tLogin("and")}{" "}<Link href="/privacy" className="text-primary hover:underline">{tLogin("privacyPolicy")}</Link>
              </span>
            </label>

            <button type="submit" className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition min-h-[44px]">
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
