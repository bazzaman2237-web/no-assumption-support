import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const IMAGE_SIZE = "size-[7.5rem]";

export function ServicePreviewCard({
  title,
  description,
  to,
  image,
  buttonLabel = "Learn More",
}: {
  title: string;
  description: string;
  to: string;
  image: string;
  buttonLabel?: "Learn More" | "Ask more info";
}) {
  return (
    <article className="service-preview-card group flex flex-col h-full">
      <div
        className={`${IMAGE_SIZE} mx-auto rounded-full overflow-hidden shrink-0 ring-[3px] ring-primary/20 shadow-[0_8px_28px_-10px_rgb(18_50_74/22%)]`}
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={120}
          height={120}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-5 font-display text-lg font-semibold text-deep text-center leading-snug line-clamp-2 min-h-[2.75rem] px-1">
        {title}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground text-center leading-relaxed line-clamp-3 flex-1 px-1">
        {description}
      </p>

      <Link to={to} className="service-preview-card-btn mt-6 w-full sm:w-auto sm:mx-auto">
        {buttonLabel} <ArrowRight className="size-4" />
      </Link>
    </article>
  );
}
