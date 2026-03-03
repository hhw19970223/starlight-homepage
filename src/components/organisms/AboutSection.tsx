import { useTranslations } from "next-intl"
import { FeatureCard } from "@/components/molecules/FeatureCard"

export function AboutSection() {
  const t = useTranslations()

  return (
    <section id="about" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        {t("about.title")}
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <FeatureCard
          title={t("about.tech.title")}
          description={t("about.tech.desc")}
        />
        <FeatureCard
          title={t("about.innovation.title")}
          description={t("about.innovation.desc")}
        />
        <FeatureCard
          title={t("about.userFirst.title")}
          description={t("about.userFirst.desc")}
        />
      </div>
    </section>
  )
}
