import { useId, useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { FaqItem } from "@/data/pages";

export function FaqAccordion({ faqs, defaultOpen = 0 }: { faqs: FaqItem[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <ul className="space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-faq-${i}`;
        const panelId = `${baseId}-panel-${i}`;

        return (
          <li key={f.q} className="card-elevated rounded-2xl overflow-hidden">
            <button
              type="button"
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-6 text-left"
            >
              <span className="font-display text-lg font-semibold text-deep">{f.q}</span>
              <span
                className="shrink-0 grid place-items-center size-9 rounded-full bg-secondary text-primary"
                aria-hidden="true"
              >
                {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={isOpen ? "px-6 pb-6 text-muted-foreground leading-relaxed" : undefined}
            >
              {isOpen && (
                typeof f.a === "string" && f.a.includes("\n\n") ? (
                  f.a.split(/\n\n+/).map((paragraph, j) => (
                    <p key={j} className={j > 0 ? "mt-3" : undefined}>
                      {paragraph}
                    </p>
                  ))
                ) : (
                  f.a
                )
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
