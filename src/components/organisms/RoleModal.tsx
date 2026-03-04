"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { HelpCircle, Code, Compass } from "lucide-react"

const roles = [
  { key: "buyer", icon: HelpCircle },
  { key: "seller", icon: Code },
  { key: "explorer", icon: Compass },
]

export function RoleModal() {
  const t = useTranslations("roleModal")
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("starlight-role-modal-seen")
    if (!hasSeenModal) {
      const timer = setTimeout(() => setIsOpen(true), 3000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem("starlight-role-modal-seen", "true")
  }

  const handleContinue = () => {
    if (selected) {
      localStorage.setItem("starlight-user-role", selected)
      handleClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="w-full max-w-md bg-card border border-border rounded-xl p-6 shadow-2xl">
        <h2 className="text-xl font-bold text-foreground mb-2">{t("title")}</h2>
        <p className="text-sm text-muted-foreground mb-6">{t("subtitle")}</p>

        <div className="space-y-3 mb-6">
          {roles.map(({ key, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setSelected(key)}
              className={`w-full p-4 rounded-lg border text-left transition-colors flex items-start gap-4 ${
                selected === key ? "border-primary bg-primary/5" : "border-border hover:border-muted-foreground"
              }`}
            >
              <Icon size={24} className={selected === key ? "text-primary" : "text-muted-foreground"} />
              <div>
                <div className="font-medium text-foreground">{t(`${key}.title`)}</div>
                <div className="text-sm text-muted-foreground">{t(`${key}.desc`)}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="flex gap-3">
          <button onClick={handleClose} className="flex-1 px-4 py-2 border border-border rounded-lg text-muted-foreground hover:text-foreground transition-colors">
            {t("cancel")}
          </button>
          <button onClick={handleContinue} disabled={!selected} className="flex-1 px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-dark transition-colors">
            {t("continue")}
          </button>
        </div>
      </div>
    </div>
  )
}
