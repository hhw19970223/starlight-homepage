import Link from "next/link"
import { getTranslations } from "next-intl/server"

export default async function NotFound() {
  const t = await getTranslations("errors.404")

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-6xl font-bold text-primary mb-4">{t("title")}</h1>
      <h2 className="text-2xl font-semibold mb-4">{t("subtitle")}</h2>
      <p className="text-muted-foreground mb-8 text-center max-w-md">{t("message")}</p>
      <Link href="/" className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition min-h-[44px]">
        {t("backHome")}
      </Link>
    </main>
  )
}
