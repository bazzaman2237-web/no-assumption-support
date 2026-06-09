import { CheckCircle2 } from "lucide-react";

export function FormSuccess({
  title = "Thank you",
  message,
  fallbackEmail,
}: {
  title?: string;
  message: string;
  fallbackEmail?: string;
}) {
  return (
    <div className="py-8 text-center" role="status" aria-live="polite">
      <CheckCircle2 className="size-12 text-primary mx-auto" aria-hidden="true" />
      <p className="mt-4 font-display text-xl font-semibold text-deep">{title}</p>
      <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">{message}</p>
      {fallbackEmail && (
        <p className="mt-3 text-sm text-muted-foreground">
          Or email us directly at{" "}
          <a href={`mailto:${fallbackEmail}`} className="text-primary font-medium hover:underline">
            {fallbackEmail}
          </a>
        </p>
      )}
    </div>
  );
}
