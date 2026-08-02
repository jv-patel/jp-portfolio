"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

const SIZE_CLASSES: Record<Project["size"], string> = {
  large: "md:col-span-2 md:row-span-2",
  medium: "md:col-span-1 md:row-span-2",
  small: "md:col-span-1 md:row-span-1",
};

const STATUS_STYLES: Record<Project["status"], string> = {
  Live: "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
  Completed: "bg-sky-400/15 text-sky-300 border-sky-400/30",
  "In Progress": "bg-amber-400/15 text-amber-300 border-amber-400/30",
};

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45 }}
      className={cn(
        "group gradient-border glass relative flex flex-col overflow-hidden rounded-card shadow-luxury transition-all hover:-translate-y-1 hover:shadow-glow",
        SIZE_CLASSES[project.size]
      )}
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="flex h-full flex-col text-left"
        aria-haspopup="dialog"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-t-card object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent" />

          <div className="absolute left-3 top-3 flex gap-2">
            {project.featured && (
              <span className="flex items-center gap-1 rounded-full border border-accent-violet/40 bg-accent-violet/20 px-3 py-1 text-xs font-medium text-white">
                <Star size={11} /> Featured
              </span>
            )}
          </div>
          <span
            className={cn(
              "absolute right-3 top-3 rounded-full border px-3 py-1 text-xs font-medium",
              STATUS_STYLES[project.status]
            )}
          >
            {project.status}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-card-internal">
          <h3 className="font-display text-lg font-bold text-text-primary">{project.title}</h3>
          <p className="flex-1 text-sm text-text-secondary">{project.description}</p>

          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border-glass bg-white/5 px-2.5 py-1 text-xs text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-1 flex items-center gap-3 pt-1">
            {project.liveUrl && (
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-sky">
                <ExternalLink size={14} /> Live Demo
              </span>
            )}
            {project.githubUrl && (
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary">
                <Github size={14} /> Code
              </span>
            )}
          </div>
        </div>
      </button>
    </motion.article>
  );
}
