"use client"

import { useState } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { Mail, Lock, CheckCircle, Loader2 } from "lucide-react"
import { AuthBranding, FormInput, CountdownButton } from "@/components/molecules"

type Step = "email" | "code" | "reset" | "done"

export default function ForgotPasswordPage() {
  const t = useTranslations("auth.forgotPassword")
  const tLogin = useTranslations("auth.login")
  const [step, setStep] = useState<Step>("email")
  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [sending, setSending] = useState(false)
  const [countdown, setCountdown] = useState(0)

  const handleSendCode = async () => {
    if (!email) return
    setSending(true)
    await new Promise((r) => setTimeout(r, 1000))
    setSending(false)
    setStep("code")
    setCountdown(60)
    const timer = setInterval(() => {
      setCountdown((c) => { if (c <= 1) { clearInterval(timer); return 0 }; return c - 1 })
    }, 1000)
  }

  const handleVerifyCode = (e: React.FormEvent) => { e.preventDefault(); setStep("reset") }
  const handleResetPassword = (e: React.FormEvent) => { e.preventDefault(); if (password === confirmPassword) setStep("done") }

  return (
    <div className="min-h-screen flex">
      <AuthBranding title={t("resetTitle")} subtitle={t("resetSubtitle")} />

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          <Link href="/login" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition">
            ← {t("backToLogin")}
          </Link>

          {step === "done" ? (
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">{t("success")}</h2>
              <p className="text-muted-foreground mb-8">{t("successMessage")}</p>
              <Link href="/login" className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition min-h-[44px]">
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
                  <FormInput type="email" placeholder={tLogin("emailPlaceholder")} value={email} onChange={setEmail} icon={<Mail size={20} />} required />
                  <button onClick={handleSendCode} disabled={!email || sending} className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition disabled:opacity-50 min-h-[44px]">
                    {sending ? <Loader2 className="animate-spin mx-auto" size={20} /> : t("sendCode")}
                  </button>
                </div>
              )}

              {step === "code" && (
                <form onSubmit={handleVerifyCode} className="space-y-4">
                  <p className="text-sm text-muted-foreground">{t("codeSentTo")} {email}</p>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <FormInput type="text" placeholder={tLogin("codePlaceholder")} value={code} onChange={setCode} required />
                    </div>
                    <CountdownButton onClick={handleSendCode} countdown={countdown} loading={false} disabled={false} label={tLogin("resend")} />
                  </div>
                  <button type="submit" className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition min-h-[44px]">
                    {t("verifyCode")}
                  </button>
                </form>
              )}

              {step === "reset" && (
                <form onSubmit={handleResetPassword} className="space-y-4">
                  <FormInput type="password" placeholder={t("newPasswordPlaceholder")} value={password} onChange={setPassword} icon={<Lock size={20} />} required />
                  <FormInput type="password" placeholder={t("confirmNewPasswordPlaceholder")} value={confirmPassword} onChange={setConfirmPassword} icon={<Lock size={20} />} required />
                  <button type="submit" className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition min-h-[44px]">
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
