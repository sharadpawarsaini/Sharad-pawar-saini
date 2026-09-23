"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";
import { X, ExternalLink, Code2, CheckCircle2, Layers, AlertCircle, BarChart3 } from "lucide-react";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const roleColor: Record<string, string> = {
    "Lead Architect": "text-sky-400 bg-sky-400/10 border-sky-400/30",
    Founder: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
    "Solo Founder": "text-blue-400 bg-blue-400/10 border-blue-400/30",
    Contributor: "text-purple-400 bg-purple-400/10 border-purple-400/30",
    "Academic Project": "text-amber-400 bg-amber-400/10 border-amber-400/30",
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-[#0e121a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-start justify-between gap-4 bg-gradient-to-b from-white/[0.04] to-transparent">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <span
                  className={`text-xs font-semibold border px-2.5 py-0.5 rounded-full ${
                    roleColor[project.role] ?? "text-gray-400 border-gray-700"
                  }`}
                >
                  {project.role}
                </span>
                <span className="text-xs text-gray-500 font-mono">
                  {project.category}
                </span>
              </div>
              <h3 id="modal-title" className="text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto space-y-6 text-sm">
            {/* One Liner */}
            <p className="text-gray-300 font-medium text-base leading-relaxed">
              {project.oneLiner}
            </p>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed">
              {project.description}
            </p>

            {/* Problem Statement */}
            {project.problem && (
              <div className="bg-rose-950/20 border border-rose-500/20 rounded-xl p-4">
                <h4 className="text-rose-400 font-semibold text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5 font-mono">
                  <AlertCircle size={14} />
                  The Problem Solved
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}

            {/* System Architecture */}
            {project.architecture && (
              <div className="bg-sky-950/20 border border-sky-500/20 rounded-xl p-4">
                <h4 className="text-sky-400 font-semibold text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5 font-mono">
                  <Layers size={14} />
                  Architecture &amp; Engineering Design
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {project.architecture}
                </p>
              </div>
            )}

            {/* Highlights / Measurable Results */}
            <div>
              <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5 font-mono">
                <BarChart3 size={14} className="text-[#10b981]" />
                Key Highlights &amp; Metrics
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                    <CheckCircle2 size={15} className="text-[#10b981] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack */}
            <div>
              <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2 font-mono">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs bg-white/5 border border-white/10 text-gray-300 px-2.5 py-1 rounded-lg font-mono"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:p-6 border-t border-white/10 bg-black/40 flex items-center justify-end gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-4 py-2.5 rounded-xl transition-all"
              >
                <Code2 size={15} />
                View Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm bg-[#10b981] hover:bg-emerald-400 text-black font-semibold px-4 py-2.5 rounded-xl transition-all shadow-lg shadow-emerald-950"
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
