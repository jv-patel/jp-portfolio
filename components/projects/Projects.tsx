"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { PROJECTS } from "@/data/projects";
import { Project } from "@/types";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (filter === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.categories.includes(filter as Project["categories"][number]));
  }, [filter]);

  return (
    <section id="projects" className="section-padding relative px-6 sm:px-10">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          subtitle="A mix of AI-powered tools and full-stack products, built end-to-end from idea to deployment."
        />

        <ProjectFilter active={filter} onChange={setFilter} />

        <motion.div layout className="grid auto-rows-[minmax(160px,auto)] gap-6 md:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setSelected} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
