"use client";

import { motion } from "framer-motion";
import { PROJECT_FILTERS } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectFilterProps {
  active: string;
  onChange: (filter: string) => void;
}

export default function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Filter projects">
      {PROJECT_FILTERS.map((filter) => {
        const isActive = active === filter;
        return (
          <button
            key={filter}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter)}
            className={cn(
              "relative rounded-full border px-5 py-2 text-sm font-medium transition-all",
              isActive
                ? "border-accent-sky/50 text-text-primary shadow-glow-cyan"
                : "border-border-glass text-text-secondary hover:border-white/25 hover:text-text-primary"
            )}
          >
            {isActive && (
              <motion.span
                layoutId="filter-active"
                className="absolute inset-0 -z-10 rounded-full bg-white/10"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            {filter}
          </button>
        );
      })}
    </div>
  );
}
