"use client";

import { ArrowUp, Github, Linkedin, Mail, Instagram } from "lucide-react";
import { SITE, NAV_ITEMS, SOCIAL_LINKS } from "@/constants/site";

const ICON_MAP = { Github, Linkedin, Mail, Instagram } as const;

export default function Footer() {
  const year = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="relative border-t border-border-glass px-6 pb-10 pt-16 sm:px-10">
      <div className="mx-auto flex max-w-content flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <a href="#home" className="font-display text-xl font-bold">
              <span className="gradient-text">AV</span>
              <span className="ml-1 text-text-primary">.dev</span>
            </a>
            <p className="mt-2 max-w-xs text-sm text-text-secondary">{SITE.tagline}</p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-text-secondary transition-colors hover:text-accent-sky"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = ICON_MAP[social.icon as keyof typeof ICON_MAP];
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border-glass bg-white/5 text-text-secondary transition-all hover:-translate-y-1 hover:border-accent-sky/50 hover:text-accent-sky"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border-glass pt-6 sm:flex-row">
          <p className="text-xs text-text-secondary">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            data-magnetic
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border-glass bg-white/5 text-text-secondary shadow-glow transition-all hover:-translate-y-1 hover:border-accent-sky/50 hover:text-accent-sky"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
