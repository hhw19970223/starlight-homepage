import { useTranslations } from "next-intl"
import { siteConfig } from "@/config/site"

const platformColors: Record<string, string> = {
  amazon: "bg-orange-500/10 text-orange-400",
  shopify: "bg-green-500/10 text-green-400",
  tiktok: "bg-pink-500/10 text-pink-400",
  temu: "bg-yellow-500/10 text-yellow-400",
  aliexpress: "bg-red-500/10 text-red-400",
  ebay: "bg-blue-500/10 text-blue-400",
}

export function PlatformsSection() {
  const t = useTranslations("platforms")

  return (
    <section id="platforms" className="py-20 lg:py-28 px-4 sm:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Cross-Ecosystem Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Platform Icons */}
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10 mt-12">
          {siteConfig.platforms.map((platform) => (
            <div
              key={platform.name}
              className={`px-6 py-4 rounded-xl border border-border ${platformColors[platform.icon] || "bg-muted text-foreground"} hover:scale-105 transition-transform`}
            >
              <span className="font-semibold">{platform.name}</span>
            </div>
          ))}
        </div>
        
        <p className="text-center text-muted-foreground mt-8">{t("more")}</p>
      </div>
    </section>
  )
}
