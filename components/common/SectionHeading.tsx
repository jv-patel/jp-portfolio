"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-16 flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {eyebrow && (
        <span className="rounded-full border border-border-glass bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent-sky">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-balance text-lg text-text-secondary">{subtitle}</p>
      )}
    </motion.div>
  );
}
