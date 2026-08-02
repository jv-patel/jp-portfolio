"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import ProfileCard from "./ProfileCard";
import StatCard from "./StatCard";
import FeatureCard from "./FeatureCard";
import { STATS, FEATURE_HIGHLIGHTS } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="section-padding relative px-6 sm:px-10">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="About Me"
          title="Developer, problem solver, AI enthusiast"
          subtitle="I build modern web products end-to-end — from interface details to backend architecture — with a growing focus on applying AI in useful, practical ways."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <ProfileCard />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="gradient-border glass flex flex-col justify-between gap-6 rounded-card p-card-internal shadow-luxury lg:col-span-2"
          >
            <div>
              <h3 className="font-display text-lg font-bold">By the numbers</h3>
              <p className="mt-1 text-sm text-text-secondary">
                A snapshot of my journey so far.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {STATS.map((stat) => (
                <StatCard key={stat.id} stat={stat} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="gradient-border glass grid gap-4 rounded-card p-card-internal shadow-luxury sm:grid-cols-2 lg:col-span-3"
          >
            {FEATURE_HIGHLIGHTS.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
