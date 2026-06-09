import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function BulletCard({
  title,
  items,
  body,
}: {
  title: string;
  items: string[];
  body?: string;
}) {
  return (
    <div className="card-elevated rounded-3xl p-8 md:p-10">
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-deep">{title}</h2>
      {body && <p className="mt-4 text-muted-foreground leading-relaxed">{body}</p>}
      <ul className={`space-y-3 ${body ? "mt-6" : "mt-5"}`}>
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function StepsList({ title, steps }: { title: string; steps: string[] }) {
  return (
    <div className="card-elevated rounded-3xl p-8 md:p-10">
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-deep">{title}</h2>
      <ol className="mt-6 space-y-4">
        {steps.map((step, i) => (
          <li key={step} className="flex items-start gap-4">
            <span className="icon-badge size-10 text-sm font-display font-semibold shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="leading-relaxed pt-1.5">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function CtaBanner({
  title,
  body,
  buttonLabel,
  to = "/contact",
}: {
  title: string;
  body: string;
  buttonLabel: string;
  to?: string;
}) {
  return (
    <div className="rounded-[1.625rem] section-trust p-10 md:p-14 text-center">
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-deep-foreground">{title}</h2>
      <p className="mt-4 opacity-90 max-w-xl mx-auto leading-relaxed">{body}</p>
      <Link to={to} className="mt-7 btn-primary">
        {buttonLabel} <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}

export function SimpleInfoSection({ title, body }: { title: string; body: string }) {
  return (
    <section className="section-white section-pad">
      <div className="container-page max-w-3xl">
        <div className="card-elevated rounded-3xl p-8 md:p-12">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-deep">{title}</h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{body}</p>
        </div>
      </div>
    </section>
  );
}
