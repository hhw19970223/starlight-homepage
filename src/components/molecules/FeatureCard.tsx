import { cn } from "@/lib/utils"

interface FeatureCardProps {
  title: string
  description: string
  className?: string
}

export function FeatureCard({ title, description, className }: FeatureCardProps) {
  return (
    <article
      className={cn(
        "p-6 rounded-xl border border-border bg-card hover:shadow-lg transition hover:border-primary",
        className
      )}
    >
      <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </article>
  )
}
