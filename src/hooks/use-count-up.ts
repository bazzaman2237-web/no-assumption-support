import { useEffect, useState } from "react";

const NUMERIC_PREFIX = /^(\d+(?:\.\d+)?)(.*)$/;

/** Counts up the leading number in a stat string (e.g. "100%" → 0–100 + "%"). */
export function useCountUp(value: string, active: boolean, durationMs = 1600) {
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const parsed = value.match(NUMERIC_PREFIX);
    if (!active || !parsed) {
      setDisplay(value);
      return;
    }

    setDisplay(`0${parsed[2]}`);
    const target = parseFloat(parsed[1]);
    const suffix = parsed[2];
    const isInteger = Number.isInteger(target);
    const start = performance.now();

    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      const formatted = isInteger ? Math.round(current).toString() : current.toFixed(1);
      setDisplay(`${formatted}${suffix}`);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value, durationMs]);

  return display;
}
