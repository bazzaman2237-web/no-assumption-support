import { Clock } from "lucide-react";
import { useRevealVisible } from "@/components/Reveal";
import { homeApartStats } from "@/data/site";
import { useCountUp } from "@/hooks/use-count-up";

function ApartStatValue({ value }: { value: string }) {
  const visible = useRevealVisible();
  const display = useCountUp(value, visible);
  return <span className="apart-box-stat-value">{display}</span>;
}

export function WhatSetsUsApartBox() {
  return (
    <div className="apart-box-sway pointer-events-none z-20">
      <div className="apart-box relative">
        <div className="apart-box-badge" aria-hidden="true">
          <Clock className="size-5" strokeWidth={2.25} />
        </div>

        <h2 className="apart-box-title">What Sets Us Apart</h2>

        <ul className="apart-box-stats">
          {homeApartStats.map((stat) => (
            <li key={stat.label} className="apart-box-stat-row">
              <ApartStatValue value={stat.value} />
              <span className="apart-box-stat-label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
