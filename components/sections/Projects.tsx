"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { ExternalLink, Code2, Star, ChevronRight } from "lucide-react";

type Filter = "All" | "Full-Stack" | "Data-Science" | "Supporting";
const FILTERS: Filter[] = ["All", "Full-Stack", "Data-Science", "Supporting"];
const FILTER_LABELS: Record<Filter, string> = {
  All: "All Projects",
  "Full-Stack": "Product & Full-Stack",
  "Data-Science": "Data Science / ML",
  Supporting: "More Experiments",
};

function ProjectCard({ project }: { project: Project }) {
  const roleColor: Record<string, string> = {
    Founder: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    "Solo Founder": "text-blue-400 bg-blue-400/10 border-blue-400/20",
    Contributor: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    "Academic Project": "text-amber-400 bg-amber-400/10 border-amber-400/20",
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3 }}
      className="glass rounded-2xl border border-white/5 hover:border-[#10b981]/20 p-6 flex flex-col gap-4 group transition-colors"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <span
            className={`inline-block text-xs font-semibold border px-2 py-0.5 rounded-full mb-2 ${
              roleColor[project.role] ?? "text-gray-400"
            }`}
          >
            {project.role}
          </span>
          <h3 className="text-white font-bold text-base leading-tight group-hover:text-[#10b981] transition-colors">
            {project.title}
          </h3>
        </div>
        <div className="flex gap-2 shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Code2 size={14} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#10b981]/10 hover:bg-[#10b981]/20 text-[#10b981] transition-colors"
              aria-label={`View ${project.title} live`}
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      {/* One-liner */}
      <p className="text-gray-500 text-sm leading-relaxed">{project.oneLiner}</p>

      {/* Highlights */}
      {project.highlights.length > 0 && (
        <ul className="space-y-1.5">
          {project.highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
              <ChevronRight
                size={12}
                className="shrink-0 mt-0.5 text-[#10b981]/60"
                aria-hidden="true"
              />
              {h}
            </li>
          ))}
        </ul>
      )}

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.stack.slice(0, 5).map((t) => (
          <span
            key={t}
            className="text-xs bg-white/5 border border-white/10 text-gray-500 px-2 py-0.5 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  // Show DS internship banner when on Data-Science tab
  const showDsBanner = active === "Data-Science";

  return (
    <section id="projects" className="py-24 px-6" aria-label="Projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-xs text-[#10b981] font-semibold uppercase tracking-widest mb-3">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Things I&apos;ve built &amp; shipped
          </h2>

          {/* Filter tabs */}
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Project category filter"
          >
            {FILTERS.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={active === f}
                onClick={() => setActive(f)}
                className={`text-sm px-4 py-2 rounded-lg border transition-all ${
                  active === f
                    ? "bg-[#10b981] text-black border-transparent font-semibold"
                    : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                }`}
              >
                {FILTER_LABELS[f]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* DS Banner */}
        <AnimatePresence>
          {showDsBanner && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mb-8 glass-accent border border-[#10b981]/20 rounded-xl px-5 py-3 flex items-center gap-3"
            >
              <Star size={14} className="text-[#10b981] shrink-0" />
              <p className="text-sm text-gray-400">
                Task series completed during my{" "}
                <strong className="text-white">Data Science internship at Prodigy InfoTech</strong>.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
