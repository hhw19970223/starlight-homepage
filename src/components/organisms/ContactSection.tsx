import { useTranslations } from "next-intl"
import { siteConfig } from "@/config/site"
import { Mail, MessageSquare, ArrowRight } from "lucide-react"

export function ContactSection() {
  const t = useTranslations("contact")

  return (
    <section id="contact" className="py-20 lg:py-28 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("desc")}
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Email Card */}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border card-hover group focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
              <Mail size={24} className="text-primary group-hover:text-white transition-colors" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1 text-foreground">{t("sendEmail")}</h3>
              <p className="text-sm text-muted-foreground">{siteConfig.contact.email}</p>
            </div>
            <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </a>

          {/* Chat Card */}
          <button className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border card-hover group text-left focus:outline-none focus:ring-2 focus:ring-primary">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
              <MessageSquare size={24} className="text-primary group-hover:text-white transition-colors" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1 text-foreground">{t("liveChat")}</h3>
              <p className="text-sm text-muted-foreground">{t("chatDesc")}</p>
            </div>
            <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </button>
        </div>
      </div>
    </section>
  )
}
