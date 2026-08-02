"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, Github, ExternalLink, CheckCircle2 } from "lucide-react";
import { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (project) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[150] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-card shadow-luxury"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image src={project.image} alt={project.title} fill className="rounded-t-card object-cover" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border-glass bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-black/60"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-col gap-5 p-card-internal sm:p-8">
              <div>
                <h3 id="project-modal-title" className="font-display text-2xl font-bold text-text-primary">
                  {project.title}
                </h3>
                <p className="mt-2 text-text-secondary">{project.longDescription}</p>
              </div>

              <div>
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent-sky">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-cyan" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent-sky">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border-glass bg-white/5 px-3 py-1 text-xs text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent-sky">
                  Challenges
                </h4>
                <p className="text-sm text-text-secondary">{project.challenges}</p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-btn bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-btn border border-border-glass bg-white/5 px-5 py-2.5 text-sm font-semibold text-text-primary transition-colors hover:border-accent-sky/50"
                  >
                    <Github size={15} /> View Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
