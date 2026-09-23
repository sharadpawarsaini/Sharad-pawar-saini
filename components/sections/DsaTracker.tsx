"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Code2,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";

const DSA_TOPICS = [
  { name: "Arrays & Hashing", count: "35+ Problems", status: "Mastered", color: "emerald" },
  { name: "Binary Search", count: "30+ Problems", status: "Mastered", color: "emerald" },
  { name: "Two Pointers & Sliding Window", count: "25+ Problems", status: "Mastered", color: "emerald" },
  { name: "Recursion & Backtracking", count: "25+ Problems", status: "Mastered", color: "emerald" },
  { name: "Linked Lists", count: "20+ Problems", status: "Mastered", color: "emerald" },
  { name: "Bit Manipulation", count: "15+ Problems", status: "Mastered", color: "emerald" },
  { name: "Stacks & Queues", count: "25+ Problems", status: "Mastered", color: "emerald" },
  { name: "Trees & Binary Search Trees", count: "40+ Problems", status: "Mastered", color: "emerald" },
  { name: "Graphs (BFS/DFS, Dijkstra, Flow)", count: "45+ Problems", status: "Mastered", color: "emerald" },
  { name: "Dynamic Programming (1D/2D/Grids)", count: "55+ Problems", status: "Mastered", color: "emerald" },
  { name: "Tries & String Algorithms", count: "15+ Problems", status: "Mastered", color: "emerald" },
  { name: "Greedy Algorithms", count: "20+ Problems", status: "Mastered", color: "emerald" },
];

export default function DsaTracker() {
  const [activeTopic, setActiveTopic] = useState<number | null>(null);

  return (
    <section id="dsa" className="py-16 px-6" aria-label="DSA Fundamentals Roadmap">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl border border-amber-500/20 p-8 lg:p-10 relative overflow-hidden"
        >
          {/* Subtle amber ambient glow */}
          <div
            className="glow-blur absolute top-0 right-0 w-80 h-80 rounded-full bg-amber-500/10 pointer-events-none"
            aria-hidden="true"
          />

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 border border-amber-400/30 bg-amber-500/10 px-3 py-1.5 rounded-full text-xs text-amber-400 font-semibold uppercase tracking-widest mb-3">
                <Code2 size={13} />
                Algorithmic Rigor &amp; CS Foundation
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Striver A2Z DSA — 20-Week Structured Mastery
              </h3>
              <p className="text-gray-400 text-sm mt-1 max-w-xl leading-relaxed">
                Disciplined implementation of core data structures and competitive-grade algorithms
                in <strong>C++</strong> with strict space/time complexity bounds.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <p className="text-[11px] font-mono text-gray-500">Roadmap</p>
                <p className="text-base font-bold text-amber-400">20 Weeks</p>
                <p className="text-[10px] text-gray-400">Striver A2Z Sheet</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <p className="text-[11px] font-mono text-gray-500">Language</p>
                <p className="text-base font-bold text-sky-400">C++ / STL</p>
                <p className="text-[10px] text-gray-400">Fast I/O &amp; Memory</p>
              </div>
            </div>
          </div>

          {/* Topics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 mb-8 relative z-10">
            {DSA_TOPICS.map((topic, i) => {
              const isActive = activeTopic === i;
              return (
                <div
                  key={topic.name}
                  onMouseEnter={() => setActiveTopic(i)}
                  onMouseLeave={() => setActiveTopic(null)}
                  className={`p-3 rounded-xl border transition-all text-xs cursor-default flex flex-col justify-between gap-1.5 ${
                    isActive
                      ? "bg-amber-500/10 border-amber-400/40 text-white shadow-md shadow-amber-950/30"
                      : "bg-white/[0.02] border-white/5 text-gray-300 hover:border-white/15"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-semibold text-gray-200">{topic.name}</span>
                    <CheckCircle2 size={13} className="text-[#10b981] shrink-0" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-gray-500 pt-1 border-t border-white/5">
                    <span>{topic.count}</span>
                    <span className="text-emerald-400 font-semibold">{topic.status}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Applied DSA Highlight */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-gray-400 relative z-10">
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-[#10b981] shrink-0" />
              <span>
                <strong className="text-white">DSA into Production:</strong> Applied graph algorithms (Dijkstra, Network Flow) in the Smart Railway Network Optimizer and cosine spatial embeddings in SENTINEL.
              </span>
            </div>
            <a
              href="#projects"
              className="text-[#10b981] hover:underline shrink-0 flex items-center gap-1 font-semibold"
            >
              View Applied Projects
              <ArrowUpRight size={13} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
