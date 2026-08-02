"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { TIMELINE_ITEMS } from "@/data/content";

export default function Timeline() {
  return (
    <section id="journey" className="section-padding relative px-6 sm:px-10">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="My Journey"
          title="My Journey"
          subtitle="A timeline of how I got here — and where I'm headed next."
        />

        <div className="relative mx-auto max-w-2xl">
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 sm:left-1/2 sm:-translate-x-1/2" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent-violet via-accent-blue to-accent-cyan sm:left-1/2 sm:-translate-x-1/2"
          />

          <ul className="space-y-10">
            {TIMELINE_ITEMS.map((entry, index) => {
              const isRight = index % 2 === 0;
              return (
                <motion.li
                  key={entry.id}
                  initial={{ opacity: 0, x: isRight ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative flex flex-col gap-2 pl-12 sm:w-1/2 sm:pl-0 sm:pr-10 ${
                    isRight ? "sm:ml-auto sm:pl-10 sm:pr-0 sm:text-left" : "sm:text-right"
                  }`}
                >
                  <span className="absolute left-2.5 top-1.5 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-accent-sky bg-bg-primary shadow-glow-cyan sm:left-0 sm:top-1.5" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent-sky">
                    {entry.year}
                  </span>
                  <h3 className="font-display text-lg font-bold text-text-primary">{entry.title}</h3>
                  <p className="text-sm text-text-secondary">{entry.description}</p>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
