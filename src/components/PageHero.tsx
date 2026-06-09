export function PageHero({
  eyebrow,
  title,
  subtitle,
  compact,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  compact?: boolean;
}) {
  return (
    <section className={`relative overflow-hidden section-hero-wrap ${compact ? "py-14 md:py-16" : "section-pad"}`}>
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-hero-blob/70 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-24 w-[360px] h-[360px] rounded-full bg-primary/8 blur-3xl pointer-events-none" />
      <div className="container-page relative text-center">
        <span className="section-label">{eyebrow}</span>
        <h1 className="heading-xl mt-3">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
