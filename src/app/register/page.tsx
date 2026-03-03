"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site"
import { Mail, Lock, User, ArrowLeft, Loader2 } from "lucide-react"

export default function RegisterPage() {
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
      setCountdown(c => {
        if (c <= 1) { clearInterval(timer); return 0 }
        return c - 1
      })
    }, 1000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }
    if (!agreed) {
      alert("Please agree to the terms")
      return
    }
    console.log({ name, email, password, code })
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary via-primary to-primary-dark items-center justify-center p-12">
        <div className="text-center text-white">
          <Image src={siteConfig.logo} alt={siteConfig.name} width={200} height={69} className="mx-auto mb-8 brightness-0 invert" />
          <h1 className="text-3xl font-bold mb-4">Join {siteConfig.name}</h1>
          <p className="text-lg opacity-80 max-w-md">Start your cross-border e-commerce journey today</p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          <Link href="/login" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition">
            <ArrowLeft size={20} /> Back to Login
          </Link>

          <h2 className="text-2xl font-bold mb-2">Create Account</h2>
          <p className="text-muted-foreground mb-8">Fill in the details to register</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary" required />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary" required />
            </div>

            <div className="relative flex gap-2">
              <input type="text" placeholder="Verification code" value={code} onChange={(e) => setCode(e.target.value)}
                className="flex-1 px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary" required />
              <button type="button" onClick={handleSendCode} disabled={!email || countdown > 0 || sending}
                className="px-4 py-3 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition disabled:opacity-50 min-w-[120px]">
                {sending ? <Loader2 className="animate-spin mx-auto" size={20} /> : countdown > 0 ? `${countdown}s` : "Send Code"}
              </button>
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary" required />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary" required />
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1 w-4 h-4 rounded" />
              <span className="text-sm text-muted-foreground">
                I agree to the <Link href="/terms" className="text-primary hover:underline">Terms</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              </span>
            </label>

            <button type="submit" className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition">
              Create Account
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-muted-foreground">
            Already have an account? <Link href="/login" className="text-primary hover:underline">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
