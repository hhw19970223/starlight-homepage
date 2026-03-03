import { useTranslations } from "next-intl"
import { 
  BarChart3, 
  Search, 
  Settings, 
  Layout, 
  Bot, 
  Truck 
} from "lucide-react"

const solutions = [
  { key: "dataAnalytics", icon: BarChart3, color: "text-blue-600 bg-blue-500/10" },
  { key: "productSelection", icon: Search, color: "text-green-600 bg-green-500/10" },
  { key: "operations", icon: Settings, color: "text-purple-600 bg-purple-500/10" },
  { key: "multiPlatform", icon: Layout, color: "text-orange-600 bg-orange-500/10" },
  { key: "aiAssistant", icon: Bot, color: "text-pink-600 bg-pink-500/10" },
  { key: "globalLogistics", icon: Truck, color: "text-cyan-600 bg-cyan-500/10" },
]

export function SolutionsSection() {
  const t = useTranslations("solutions")

  return (
    <section id="solutions" className="py-20 lg:py-28 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map(({ key, icon: Icon, color }) => (
            <div
              key={key}
              className="group p-6 lg:p-8 rounded-2xl border border-border bg-card hover:shadow-xl transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-primary"
              tabIndex={0}
            >
              <div className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center mb-6`}>
                <Icon size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {t(`${key}.title`)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(`${key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
