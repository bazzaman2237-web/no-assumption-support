import { images } from "@/data/site";

export function AustraliaAboriginalFlags({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-1.5 ${className}`}
      role="img"
      aria-label="Australian flag and Aboriginal flag"
    >
      <img
        src={images.australiaFlag}
        alt=""
        width={40}
        height={20}
        className="h-7 sm:h-8 md:h-9 w-auto"
        aria-hidden
      />
      <img
        src={images.aboriginalFlag}
        alt=""
        width={40}
        height={24}
        className="h-7 sm:h-8 md:h-9 w-auto"
        aria-hidden
      />
    </div>
  );
}
