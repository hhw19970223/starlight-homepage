"use client"

import { useState } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { Mail, Lock } from "lucide-react"
import { AuthBranding, FormInput, TabSwitcher, CountdownButton, SocialButton } from "@/components/molecules"
import { GoogleIcon } from "@/components/atoms/icons"

type LoginTab = "code" | "password"

export default function LoginPage() {
  const t = useTranslations("auth.login")
  const [activeTab, setActiveTab] = useState<LoginTab>("code")
  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")
  const [password, setPassword] = useState("")
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
      setCountdown((c) => {
        if (c <= 1) { clearInterval(timer); return 0 }
        return c - 1
      })
    }, 1000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreed) return
    console.log({ activeTab, email, code, password })
  }

  const tabs = [
    { key: "code", label: t("emailCode") },
    { key: "password", label: t("password") },
  ]

  return (
    <div className="min-h-screen flex">
      <AuthBranding title={t("brandingTitle")} subtitle={t("brandingSubtitle")} />

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition">
            ← {t("backToHome")}
          </Link>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">{t("welcome")}</h2>
            <p className="text-muted-foreground">{t("subtitle")}</p>
          </div>

          <div className="mb-6">
            <TabSwitcher tabs={tabs} activeTab={activeTab} onChange={(key) => setActiveTab(key as LoginTab)} />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <FormInput type="email" placeholder={t("emailPlaceholder")} value={email} onChange={setEmail} icon={<Mail size={20} />} required />

            {activeTab === "code" ? (
              <div className="flex gap-2">
                <div className="flex-1">
                  <FormInput type="text" placeholder={t("codePlaceholder")} value={code} onChange={setCode} required />
                </div>
                <CountdownButton onClick={handleSendCode} countdown={countdown} loading={sending} disabled={!email} label={t("sendCode")} />
              </div>
            ) : (
              <FormInput type="password" placeholder={t("passwordPlaceholder")} value={password} onChange={setPassword} icon={<Lock size={20} />} required />
            )}

            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1 w-4 h-4 rounded" />
              <span className="text-sm text-muted-foreground">
                {t("agreeTerms")} <Link href="/terms" className="text-primary hover:underline">{t("termsOfService")}</Link>
                {" "}{t("and")}{" "}<Link href="/privacy" className="text-primary hover:underline">{t("privacyPolicy")}</Link>
              </span>
            </label>

            <button type="submit" className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition min-h-[44px]">
              {t("submit")}
            </button>
            <p className="text-center text-sm text-muted-foreground">{t("autoRegister")}</p>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-sm text-muted-foreground">{t("orContinueWith")}</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <SocialButton icon={<GoogleIcon />} label={t("google")} />

          <div className="flex justify-between mt-6 text-sm">
            <Link href="/register" className="text-primary hover:underline">{t("createAccount")}</Link>
            <Link href="/forgot-password" className="text-muted-foreground hover:text-primary transition">{t("forgotPassword")}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
