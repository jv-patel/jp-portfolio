"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { StatItem } from "@/types";

export default function StatCard({ stat }: { stat: StatItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const value = useCountUp(stat.value, isInView);

  return (
    <div
      ref={ref}
      className="group flex flex-col items-center gap-1 rounded-2xl border border-border-glass bg-white/5 px-4 py-6 text-center transition-all hover:-translate-y-1 hover:border-accent-violet/40 hover:shadow-glow"
    >
      <span className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
        {value}
        {stat.suffix}
      </span>
      <span className="text-sm text-text-secondary">{stat.label}</span>
    </div>
  );
}
