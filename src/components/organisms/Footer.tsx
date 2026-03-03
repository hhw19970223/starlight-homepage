import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { siteConfig } from "@/config/site"
import { Mail } from "lucide-react"

export function Footer() {
  const t = useTranslations()

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              width={120}
              height={41}
              className="mb-4"
            />
            <p className="text-muted-foreground text-sm mb-4 max-w-xs">
              {siteConfig.seo.description}
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 hover:text-primary transition">
                <Mail size={16} />
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.solutions")}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#solutions" className="hover:text-primary transition">{t("footer.dataAnalytics")}</Link></li>
              <li><Link href="#solutions" className="hover:text-primary transition">{t("footer.productSelection")}</Link></li>
              <li><Link href="#solutions" className="hover:text-primary transition">{t("footer.operations")}</Link></li>
              <li><Link href="#solutions" className="hover:text-primary transition">{t("footer.aiAssistant")}</Link></li>
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.platforms")}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {siteConfig.platforms.slice(0, 4).map((platform) => (
                <li key={platform.name}>
                  <Link href="#platforms" className="hover:text-primary transition">{platform.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.company")}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#about" className="hover:text-primary transition">{t("footer.about")}</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition">{t("footer.contactUs")}</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition">{t("footer.privacy")}</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition">{t("footer.terms")}</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6 text-center text-sm text-muted-foreground">
          {t("footer.copyright")}
        </div>
      </div>
    </footer>
  )
}
