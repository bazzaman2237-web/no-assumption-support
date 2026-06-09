import { createContext, useContext, useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

const RevealContext = createContext(false);

export function useRevealVisible() {
  return useContext(RevealContext);
}

export function RevealSection({
  children,
  className = "",
  as: Tag = "section",
  id,
}: {
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
  id?: string;
}) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <RevealContext.Provider value={visible}>
      <Tag
        id={id}
        ref={ref as never}
        className={`reveal-section${visible ? " is-visible" : ""} ${className}`.trim()}
      >
        {children}
      </Tag>
    </RevealContext.Provider>
  );
}

export function RevealItem({
  children,
  className = "",
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms (Paramount uses 100–400ms steps). */
  delayMs?: number;
}) {
  const visible = useContext(RevealContext);
  const style: CSSProperties | undefined = visible ? { "--reveal-delay": `${delayMs}ms` } as CSSProperties : undefined;

  return (
    <div className={`reveal-up ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}

export function AnimatedHeading({
  text,
  className = "",
  as: Tag = "h2",
  wordDelay = 0.07,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  wordDelay?: number;
}) {
  const visible = useContext(RevealContext);
  const words = text.split(/\s+/);

  return (
    <Tag className={`reveal-heading ${className}`.trim()}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="reveal-word"
          style={visible ? { animationDelay: `${0.1 + index * wordDelay}s` } : undefined}
        >
          {word}
        </span>
      ))}
    </Tag>
  );
}

/** Hero entrance — plays once on mount (no scroll trigger). */
export function HeroEntrance({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className={`hero-entrance${loaded ? " is-loaded" : ""} ${className}`.trim()}>
      {children}
    </div>
  );
}

export function HeroRevealItem({
  children,
  className = "",
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const style: CSSProperties = { "--reveal-delay": `${delayMs}ms` };

  return (
    <div className={`hero-reveal-up ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
