import type { ReactNode } from "react";
import { AnimatedHeading, RevealItem } from "@/components/Reveal";

export function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
  onDark,
  animate = false,
}: {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  onDark?: boolean;
  /** Word-by-word heading + staggered label/subtitle (use inside RevealSection). */
  animate?: boolean;
}) {
  const wrap = (node: ReactNode, delayMs: number) =>
    animate ? <RevealItem delayMs={delayMs}>{node}</RevealItem> : node;

  return (
    <div className={centered ? "text-center max-w-2xl mx-auto mb-10 md:mb-12" : "mb-10 md:mb-12 max-w-2xl"}>
      {label &&
        wrap(
          <span className={onDark ? "section-label-dark" : "section-label"}>{label}</span>,
          0,
        )}
      {animate ? (
        <AnimatedHeading
          text={title}
          as="h2"
          className={`heading-lg ${label ? "mt-3" : ""} ${onDark ? "text-deep-foreground" : ""}`}
        />
      ) : (
        <h2 className={`heading-lg ${label ? "mt-3" : ""} ${onDark ? "text-deep-foreground" : ""}`}>
          {title}
        </h2>
      )}
      {subtitle &&
        wrap(
          <p className={`mt-3 leading-relaxed ${onDark ? "text-trust-muted" : "text-muted-foreground"}`}>
            {subtitle}
          </p>,
          200,
        )}
    </div>
  );
}
