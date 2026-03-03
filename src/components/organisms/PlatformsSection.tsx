import { useTranslations } from "next-intl"
import { 
  ShoppingCart,
  Store,
  Video,
  Package,
  Globe,
  ShoppingBag
} from "lucide-react"

const platforms = [
  { name: "Amazon", icon: ShoppingCart, color: "#FF9900" },
  { name: "Shopify", icon: Store, color: "#96BF48" },
  { name: "TikTok Shop", icon: Video, color: "#000000" },
  { name: "Temu", icon: Package, color: "#F26A2E" },
  { name: "AliExpress", icon: Globe, color: "#E62E04" },
  { name: "eBay", icon: ShoppingBag, color: "#0064D2" },
]

export function PlatformsSection() {
  const t = useTranslations()

  return (
    <section id="platforms" className="py-20 lg:py-28 px-4 sm:px-8 bg-muted">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("platforms.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("platforms.subtitle")}
          </p>
        </div>

        {/* Platform Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {platforms.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center p-6 lg:p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/50 group"
            >
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${color}15` }}
              >
                <Icon size={32} style={{ color }} />
              </div>
              <span className="font-semibold text-sm text-center">{name}</span>
            </div>
          ))}
        </div>

        {/* More Platforms Note */}
        <p className="text-center text-muted-foreground mt-8">
          ...and more platforms coming soon
        </p>
      </div>
    </section>
  )
}
