export function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
  onDark,
}: {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  onDark?: boolean;
}) {
  return (
    <div className={centered ? "text-center max-w-2xl mx-auto mb-10 md:mb-12" : "mb-10 md:mb-12 max-w-2xl"}>
      {label && (
        <span className={onDark ? "section-label-dark" : "section-label"}>{label}</span>
      )}
      <h2 className={`heading-lg ${label ? "mt-3" : ""} ${onDark ? "text-deep-foreground" : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 leading-relaxed ${onDark ? "text-trust-muted" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
