import { useTranslations } from "next-intl"
import { Cpu, Zap, Globe2, Headphones } from "lucide-react"

const features = [
  { key: "ai", icon: Cpu },
  { key: "realtime", icon: Zap },
  { key: "global", icon: Globe2 },
  { key: "support", icon: Headphones },
]

export function FeaturesSection() {
  const t = useTranslations()

  return (
    <section id="about" className="py-20 lg:py-28 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("features.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("features.subtitle")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ key, icon: Icon }) => (
            <div key={key} className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Icon size={36} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t(`features.${key}.title`)}
              </h3>
              <p className="text-muted-foreground">
                {t(`features.${key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
