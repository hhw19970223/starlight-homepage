import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations()

  return (
    <footer className="py-8 text-center text-muted-foreground border-t border-border">
      <p>{t("footer.copyright")}</p>
    </footer>
  )
}
