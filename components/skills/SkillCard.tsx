"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import * as Icons from "lucide-react";
import { SkillCategory } from "@/types";
import GlowCard from "@/components/common/GlowCard";

export default function SkillCard({ category }: { category: SkillCategory }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[category.icon] ?? Icons.Code2;

  return (
    <div ref={ref}>
      <GlowCard tilt={false} className="h-full">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
            <Icon size={20} className="text-white" />
          </div>
          <h3 className="font-display text-lg font-bold text-text-primary">{category.title}</h3>
        </div>

        <div className="space-y-4">
          {category.skills.map((skill, i) => (
            <div key={skill.name}>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="text-text-primary">{skill.name}</span>
                <span className="text-text-secondary">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-accent-violet via-accent-blue to-accent-cyan"
                />
              </div>
            </div>
          ))}
        </div>
      </GlowCard>
    </div>
  );
}
