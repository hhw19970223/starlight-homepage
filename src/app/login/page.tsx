"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Mail, Lock, ArrowLeft, Loader2 } from "lucide-react"

type LoginTab = "code" | "password"

export default function LoginPage() {
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
    // TODO: Implement send code API
    await new Promise(r => setTimeout(r, 1000))
    setSending(false)
    setCountdown(60)
    const timer = setInterval(() => {
      setCountdown(c => {
        if (c <= 1) {
          clearInterval(timer)
          return 0
        }
        return c - 1
      })
    }, 1000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreed) {
      alert("Please agree to the terms")
      return
    }
    // TODO: Implement login API
    console.log({ activeTab, email, code, password })
  }

  const handleGoogleLogin = () => {
    // TODO: Implement Google OAuth
    console.log("Google login")
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary via-primary to-primary-dark items-center justify-center p-12">
        <div className="text-center text-white">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={200}
            height={69}
            className="mx-auto mb-8 brightness-0 invert"
          />
          <h1 className="text-3xl font-bold mb-4">Cross-Border E-Commerce Solutions</h1>
          <p className="text-lg opacity-80 max-w-md">
            Empower your global e-commerce business with data analytics, smart product selection, and operations automation
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          {/* Back to Home */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Welcome to {siteConfig.name}</h2>
            <p className="text-muted-foreground">Sign in to your account to continue</p>
          </div>

          {/* Tabs */}
          <div className="flex border border-border rounded-lg p-1 mb-6">
            <button
              type="button"
              onClick={() => setActiveTab("code")}
              className={cn(
                "flex-1 py-2.5 text-sm font-medium rounded-md transition",
                activeTab === "code"
                  ? "bg-primary text-white"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Email Code
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("password")}
              className={cn(
                "flex-1 py-2.5 text-sm font-medium rounded-md transition",
                activeTab === "password"
                  ? "bg-primary text-white"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Password
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            {activeTab === "code" ? (
              /* Verification Code Input */
              <div className="relative flex gap-2">
                <input
                  type="text"
                  placeholder="Verification code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="flex-1 px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={handleSendCode}
                  disabled={!email || countdown > 0 || sending}
                  className="px-4 py-3 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px]"
                >
                  {sending ? (
                    <Loader2 className="animate-spin mx-auto" size={20} />
                  ) : countdown > 0 ? (
                    `${countdown}s`
                  ) : (
                    "Send Code"
                  )}
                </button>
              </div>
            ) : (
              /* Password Input */
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
            )}

            {/* Terms Agreement */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary"
              />
              <span className="text-sm text-muted-foreground">
                I agree to the{" "}
                <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>
                {" "}and{" "}
                <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              </span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition"
            >
              Sign In
            </button>

            {/* Auto-register note */}
            <p className="text-center text-sm text-muted-foreground">
              New users will be automatically registered
            </p>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-sm text-muted-foreground">or continue with</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Social Login */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 py-3 border border-border rounded-lg hover:bg-muted transition"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          {/* Links */}
          <div className="flex justify-between mt-6 text-sm">
            <Link href="/register" className="text-primary hover:underline">
              Create Account
            </Link>
            <Link href="/forgot-password" className="text-muted-foreground hover:text-primary transition">
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
