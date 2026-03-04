"use client"

import { useTranslations } from "next-intl"

const stats = [
  { key: "merchants", value: "50,000+", color: "text-blue-400" },
  { key: "products", value: "10M+", color: "text-green-400" },
  { key: "platforms", value: "20+", color: "text-purple-400" },
  { key: "countries", value: "150+", color: "text-orange-400" },
  { key: "orders", value: "100M+", color: "text-pink-400" },
  { key: "savings", value: "30%", color: "text-cyan-400" },
]

export function StatsSection() {
  const t = useTranslations("stats")

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-xs uppercase tracking-wider text-primary">
            {t("badge")}
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
          {t("title")}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map(({ key, value, color }) => (
            <div key={key} className="text-center p-4">
              <div className={`text-3xl sm:text-4xl font-bold mb-2 ${color}`}>
                {value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                {t(`${key}.label`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
