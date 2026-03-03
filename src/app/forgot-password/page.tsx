"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { siteConfig } from "@/config/site"
import { Mail, Lock, ArrowLeft, Loader2, CheckCircle } from "lucide-react"

export default function ForgotPasswordPage() {
  const t = useTranslations("auth.forgotPassword")
  const tLogin = useTranslations("auth.login")
  const [step, setStep] = useState<"email" | "code" | "reset" | "done">("email")
  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [sending, setSending] = useState(false)
  const [countdown, setCountdown] = useState(0)

  const handleSendCode = async () => {
    if (!email) return
    setSending(true)
    await new Promise(r => setTimeout(r, 1000))
    setSending(false)
    setStep("code")
    setCountdown(60)
    const timer = setInterval(() => {
      setCountdown(c => { if (c <= 1) { clearInterval(timer); return 0 }; return c - 1 })
    }, 1000)
  }

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault()
    setStep("reset")
  }

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) return
    setStep("done")
  }

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary via-primary to-primary-dark items-center justify-center p-12">
        <div className="text-center text-white">
          <Image src={siteConfig.logo} alt={siteConfig.name} width={200} height={69} className="mx-auto mb-8 brightness-0 invert" priority />
          <h1 className="text-3xl font-bold mb-4">{t("resetTitle")}</h1>
          <p className="text-lg opacity-80 max-w-md">{t("resetSubtitle")}</p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          <Link href="/login" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition">
            <ArrowLeft size={20} /> {t("backToLogin")}
          </Link>

          {step === "done" ? (
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">{t("success")}</h2>
              <p className="text-muted-foreground mb-8">{t("successMessage")}</p>
              <Link href="/login" className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition">
                {tLogin("submit")}
              </Link>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-2">{t("title")}</h2>
              <p className="text-muted-foreground mb-8">
                {step === "email" && t("subtitle")}
                {step === "code" && t("enterCode")}
                {step === "reset" && t("enterNewPassword")}
              </p>

              {step === "email" && (
                <div className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                    <input type="email" placeholder={tLogin("emailPlaceholder")} value={email} onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary" required />
                  </div>
                  <button onClick={handleSendCode} disabled={!email || sending}
                    className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition disabled:opacity-50">
                    {sending ? <Loader2 className="animate-spin mx-auto" size={20} /> : t("sendCode")}
                  </button>
                </div>
              )}

              {step === "code" && (
                <form onSubmit={handleVerifyCode} className="space-y-4">
                  <p className="text-sm text-muted-foreground">{t("codeSentTo")} {email}</p>
                  <div className="relative flex gap-2">
                    <input type="text" placeholder={tLogin("codePlaceholder")} value={code} onChange={(e) => setCode(e.target.value)}
                      className="flex-1 px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary" required />
                    <button type="button" onClick={handleSendCode} disabled={countdown > 0}
                      className="px-4 py-3 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition disabled:opacity-50 min-w-[100px]">
                      {countdown > 0 ? `${countdown}s` : tLogin("resend")}
                    </button>
                  </div>
                  <button type="submit" className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition">
                    {t("verifyCode")}
                  </button>
                </form>
              )}

              {step === "reset" && (
                <form onSubmit={handleResetPassword} className="space-y-4">
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                    <input type="password" placeholder={t("newPasswordPlaceholder")} value={password} onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary" required />
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                    <input type="password" placeholder={t("confirmNewPasswordPlaceholder")} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary" required />
                  </div>
                  <button type="submit" className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition">
                    {t("resetPassword")}
                  </button>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
