import Link from "next/link"
import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations("footer")

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("solutions")}
            </Link>
            <Link href="#platforms" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("platforms")}
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("terms")}
            </Link>
            <a href="mailto:contact@abc.com" className="text-muted-foreground hover:text-foreground transition-colors">
              contact@abc.com
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
