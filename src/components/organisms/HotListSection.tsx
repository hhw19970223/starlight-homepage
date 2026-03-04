"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"

const hotItems = [
  { id: 1, title: "Amazon FBA Optimization", desc: "Complete guide for FBA sellers to reduce fees and improve rankings", score: "A", views: "15.6K", saves: "721" },
  { id: 2, title: "TikTok Shop Launch Strategy", desc: "Step-by-step playbook for launching products on TikTok Shop", score: "A", views: "14.2K", saves: "700" },
  { id: 3, title: "Cross-border Tax Compliance", desc: "Navigate international tax regulations with automated tools", score: "A", views: "12.8K", saves: "650" },
  { id: 4, title: "Multi-platform Inventory Sync", desc: "Keep inventory synchronized across Amazon, Shopify, and more", score: "A", views: "11.5K", saves: "580" },
  { id: 5, title: "AI Product Description Generator", desc: "Generate SEO-optimized product descriptions in multiple languages", score: "A", views: "10.2K", saves: "520" },
]

export function HotListSection() {
  const t = useTranslations("hotList")

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">{t("title")}</h2>
          <Link href="/market" className="text-primary hover:underline text-sm">
            {t("viewAll")}
          </Link>
        </div>

        <div className="space-y-4">
          {hotItems.map((item, index) => (
            <Link
              key={item.id}
              href={`/market/${item.id}`}
              className="block p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground mb-1 truncate">{item.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{item.desc}</p>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground shrink-0">
                  <span className="w-6 h-6 rounded bg-success/10 text-success flex items-center justify-center font-bold">
                    {item.score}
                  </span>
                  <span>{item.views}</span>
                  <span>{item.saves}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
