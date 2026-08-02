"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, ArrowUpRight, Sparkles } from "lucide-react";
import { SITE, SOCIAL_LINKS } from "@/constants/site";
import TypingRoles from "./TypingRoles";
import MiniTerminal from "./MiniTerminal";
import FloatingTechCards from "./FloatingTechCards";
import ScrollIndicator from "./ScrollIndicator";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-40 w-40 animate-pulse-glow rounded-full bg-accent-violet/30 blur-2xl" />
    </div>
  ),
});

const SOCIAL_ICON_MAP = {
  Github,
  Linkedin,
  Mail,
  Instagram,
} as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 sm:px-10"
    >
      <div className="mx-auto grid w-full max-w-content items-center gap-16 lg:grid-cols-2">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={item}
            className="flex items-center gap-2 rounded-full border border-border-glass bg-white/5 px-4 py-1.5 text-sm text-text-secondary"
          >
            <Sparkles size={14} className="text-accent-sky" />
            👋 Hi, I&apos;m
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="gradient-text">{SITE.name}</span>
          </motion.h1>

          <motion.div variants={item} className="font-display text-2xl font-semibold sm:text-3xl">
            <TypingRoles />
          </motion.div>

          <motion.p variants={item} className="max-w-lg text-balance text-lg text-text-secondary">
            {SITE.tagline}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              data-magnetic
              className="group flex items-center gap-2 rounded-btn bg-gradient-primary px-6 py-3 font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              data-magnetic
              className="flex items-center gap-2 rounded-btn px-6 py-3 font-semibold text-accent-sky underline-offset-4 hover:underline"
            >
              Hire Me
            </a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-4 pt-2">
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICON_MAP[social.icon as keyof typeof SOCIAL_ICON_MAP];
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  data-magnetic
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border-glass bg-white/5 text-text-secondary transition-all hover:-translate-y-1 hover:border-accent-sky/50 hover:text-accent-sky hover:shadow-glow-cyan"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="relative flex flex-col items-center gap-8"
        >
          <div className="relative aspect-square w-full max-w-md">
            <FloatingTechCards />
            <HeroScene />
          </div>
          <MiniTerminal />
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
