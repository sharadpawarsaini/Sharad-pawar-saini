"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { ExternalLink, Code2, Star, ChevronRight, Search, Sparkles, FileText, X } from "lucide-react";
import ProjectDetailModal from "@/components/modals/ProjectDetailModal";

type Filter = "All" | "Full-Stack" | "Data-Science" | "Supporting";
const FILTERS: Filter[] = ["All", "Full-Stack", "Data-Science", "Supporting"];
const FILTER_LABELS: Record<Filter, string> = {
  All: "All Projects",
  "Full-Stack": "Product & Full-Stack",
  "Data-Science": "Data Science / ML",
  Supporting: "More Experiments",
};

const POPULAR_TAGS = [
  "All",
  "Python",
  "FastAPI",
  "Next.js",
  "React",
  "MongoDB",
  "ChromaDB",
  "NLP",
  "ML",
  "C++",
];

function ProjectCard({
  project,
  onOpenDetails,
}: {
  project: Project;
  onOpenDetails: () => void;
}) {
  const roleColor: Record<string, string> = {
    "Lead Architect": "text-sky-400 bg-sky-400/10 border-sky-400/20",
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
      onClick={onOpenDetails}
      className="glass rounded-2xl border border-white/5 hover:border-[#10b981]/30 p-6 flex flex-col gap-4 group transition-all cursor-pointer relative hover:-translate-y-1 hover:shadow-xl hover:shadow-[#10b981]/5"
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
        <div className="flex gap-2 shrink-0" onClick={(e) => e.stopPropagation()}>
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
      <p className="text-gray-400 text-sm leading-relaxed">{project.oneLiner}</p>

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

      {/* Stack & Details CTA */}
      <div className="flex items-center justify-between gap-2 mt-auto pt-2 border-t border-white/5">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-xs bg-white/5 border border-white/10 text-gray-400 px-2 py-0.5 rounded-md font-mono"
            >
              {t}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="text-xs text-gray-500 self-center">
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetails();
          }}
          className="shrink-0 text-xs text-[#10b981] group-hover:underline flex items-center gap-1 font-medium"
        >
          <FileText size={12} />
          Details
        </button>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Filter>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      // Category filter
      if (active !== "All" && p.category !== active) return false;

      // Tag filter
      if (selectedTag !== "All") {
        const hasTag = p.stack.some((s) =>
          s.toLowerCase().includes(selectedTag.toLowerCase())
        );
        if (!hasTag) return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(query);
        const matchesDesc = p.description.toLowerCase().includes(query);
        const matchesOneLiner = p.oneLiner.toLowerCase().includes(query);
        const matchesStack = p.stack.some((s) => s.toLowerCase().includes(query));
        if (!matchesTitle && !matchesDesc && !matchesOneLiner && !matchesStack) {
          return false;
        }
      }

      return true;
    });
  }, [active, selectedTag, searchQuery]);

  // Show DS internship banner when on Data-Science tab
  const showDsBanner = active === "Data-Science";

  return (
    <section id="projects" className="py-24 px-6 relative" aria-label="Projects">
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
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Things I&apos;ve built &amp; shipped
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                Click any project card to inspect its system design, problem statement, and benchmarks.
              </p>
            </div>
            <div className="text-xs font-mono text-gray-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg self-start sm:self-auto">
              Showing <span className="text-[#10b981] font-bold">{filtered.length}</span> of {projects.length} projects
            </div>
          </div>

          {/* Search bar */}
          <div className="relative mb-6">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              aria-hidden="true"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword, technology, or problem (e.g. FastAPI, RAG, QR, Blockchain, NLP)..."
              className="w-full bg-[#0d1117] border border-white/10 rounded-xl pl-11 pr-10 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#10b981]/50 focus:ring-1 focus:ring-[#10b981]/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Filter tabs */}
          <div className="space-y-3">
            {/* Category tabs */}
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
                      ? "bg-[#10b981] text-black border-transparent font-semibold shadow-md shadow-emerald-950"
                      : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                  }`}
                >
                  {FILTER_LABELS[f]}
                </button>
              ))}
            </div>

            {/* Popular Tech Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-xs text-gray-500 mr-1 font-mono">Tech filter:</span>
              {POPULAR_TAGS.map((tag) => {
                const isSelected = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`text-xs px-2.5 py-1 rounded-md font-mono border transition-all ${
                      isSelected
                        ? "bg-white/20 text-white border-white/30 font-semibold"
                        : "bg-black/30 border-white/5 text-gray-400 hover:text-gray-200 hover:border-white/15"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
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

        {/* Grid or Empty State */}
        {filtered.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <ProjectCard
                  key={p.slug}
                  project={p}
                  onOpenDetails={() => setActiveModalProject(p)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-16 px-4 bg-white/[0.02] border border-white/5 rounded-2xl">
            <Sparkles size={24} className="mx-auto text-gray-500 mb-3" />
            <h3 className="text-white font-semibold text-base mb-1">No matching projects</h3>
            <p className="text-sm text-gray-400 mb-4 max-w-sm mx-auto">
              No projects matched your current search filters &ldquo;{searchQuery || selectedTag}&rdquo;.
            </p>
            <button
              onClick={() => {
                setActive("All");
                setSearchQuery("");
                setSelectedTag("All");
              }}
              className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg transition-all"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
