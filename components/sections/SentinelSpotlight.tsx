"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  RefreshCw,
  GitBranch,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers,
  Terminal,
} from "lucide-react";

type ActiveTab = "architecture" | "defense" | "trust" | "observability";

const TABS: { id: ActiveTab; label: string; icon: typeof ShieldCheck }[] = [
  { id: "architecture", label: "Pipeline & Data Flow", icon: Layers },
  { id: "defense", label: "4 Defense Barriers", icon: Lock },
  { id: "trust", label: "Trust & NLI Engine", icon: CheckCircle2 },
  { id: "observability", label: "Admin Console & Tests", icon: Terminal },
];

const DEFENSE_BARRIERS = [
  {
    step: "Barrier 1",
    name: "Ingestion Scanner",
    target: "Pre-Indexing (Upload)",
    desc: "Heuristic payload analysis, PDF/DOCX structure normalization, and hidden instruction quashing before vectors touch ChromaDB.",
    badge: "Document Poisoning",
  },
  {
    step: "Barrier 2",
    name: "Input Guard",
    target: "Pre-Retrieval (Query)",
    desc: "Decodes Base64/Unicode homoglyphs, strips zero-width obfuscations, and matches against regex jailbreak banks.",
    badge: "Direct Prompt Injection",
  },
  {
    step: "Barrier 3",
    name: "Context Quarantine",
    target: "Post-Retrieval (Chunks)",
    desc: "Second-pass semantic security filter scanning top-K retrieved vector passages before prompt synthesis to isolate indirect injections.",
    badge: "Indirect Injection",
  },
  {
    step: "Barrier 4",
    name: "Egress Filter",
    target: "Post-Generation (Output)",
    desc: "Deterministic token interception preventing system prompt leakage, credential dumping, and markdown image exfiltration URLs.",
    badge: "Data Exfiltration",
  },
];

const TRUST_METRICS = [
  {
    label: "Retrieval Confidence",
    formula: "C_retrieval = (1/K) Σ s_i · exp(-λ(i-1))",
    desc: "Exponentially down-weights lower-ranked chunks in cosine distance space to quantify semantic coverage.",
  },
  {
    label: "Atomic Propositional Decomposition",
    formula: "C = {c_1, c_2, ..., c_m}",
    desc: "Deconstructs synthesis candidate into discrete atomic factual propositions before verification.",
  },
  {
    label: "Directional NLI Entailment",
    formula: "NLI(c_i, Context) ∈ {Entailed, Neutral, Contradict}",
    desc: "Cross-encoder DeBERTa-v3 validates strict logical entailment of each claim against cited evidence.",
  },
  {
    label: "Adaptive Mitigation Loop",
    formula: "TS < 0.50 → Reformulate / Abstain",
    desc: "Re-queries or enforces principled abstention ('Insufficient Verified Evidence') instead of hallucinating.",
  },
];

export default function SentinelSpotlight() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("architecture");
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="sentinel" className="py-24 px-6 relative" aria-label="SENTINEL System Spotlight">
      {/* Background glow */}
      <div
        className="glow-blur absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full bg-sky-500/10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Top Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-2 mb-6"
        >
          <div className="inline-flex items-center gap-2 border border-sky-400/30 bg-sky-500/10 px-3 py-1.5 rounded-full text-xs text-sky-400 font-semibold uppercase tracking-widest">
            <ShieldCheck size={14} className="text-sky-400" />
            Research &amp; Engineering Capstone
          </div>
          <span className="text-xs font-bold text-black bg-sky-400 px-2.5 py-1 rounded-full">
            Lead Architect &amp; Integrator
          </span>
          <span className="text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 px-2.5 py-1 rounded-full flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Phase 2 Operational · 26/26 Tests Passed (100%)
          </span>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-2xl border border-sky-500/20 p-8 lg:p-12 shadow-2xl shadow-sky-950/20"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  SENTINEL
                </h2>
                <span className="text-sky-400 font-mono text-sm border border-sky-400/30 bg-sky-950/40 px-2.5 py-0.5 rounded-md">
                  v0.2.0-baseline
                </span>
              </div>
              <p className="text-gray-300 text-base sm:text-lg font-medium mb-2">
                A Secure and Trustworthy Retrieval-Augmented Generation System
              </p>
              <p className="text-sky-400/90 font-mono text-xs italic tracking-wide">
                &ldquo;Secure the Context. Verify the Answer. Trust the Output.&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://github.com/sharadpawarsaini/sentinel-secure-trustworthy-rag"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-black font-bold text-sm px-4 py-2.5 rounded-xl transition-all shadow-lg shadow-sky-900/40 hover:scale-105"
                aria-label="View SENTINEL Repository on GitHub"
              >
                <GitBranch size={15} />
                Explore Repository
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-mono">Test Suite</p>
              <p className="text-lg font-bold text-emerald-400">26 / 26 Passed</p>
              <p className="text-xs text-gray-400 mt-0.5">100% full-pipeline coverage</p>
            </div>
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-mono">Defense Layers</p>
              <p className="text-lg font-bold text-sky-400">4 Barriers</p>
              <p className="text-xs text-gray-400 mt-0.5">Ingest, Input, Context, Egress</p>
            </div>
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-mono">Trust Verifier</p>
              <p className="text-lg font-bold text-purple-400">DeBERTa-v3 NLI</p>
              <p className="text-xs text-gray-400 mt-0.5">Cross-encoder claim entailment</p>
            </div>
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-mono">Telemetry</p>
              <p className="text-lg font-bold text-amber-400">/admin Console</p>
              <p className="text-xs text-gray-400 mt-0.5">Real-time vector &amp; query audit</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div
            className="flex flex-wrap gap-2 border-b border-white/10 pb-4 mb-6"
            role="tablist"
            aria-label="SENTINEL System Tabs"
          >
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  role="tab"
                  aria-selected={isSelected}
                  className={`flex items-center gap-2 text-xs sm:text-sm px-3.5 py-2 rounded-lg font-medium transition-all ${
                    isSelected
                      ? "bg-sky-500 text-black font-semibold shadow-md shadow-sky-950"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={14} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="mb-8 min-h-[280px]">
            {activeTab === "architecture" && (
              <motion.div
                key="architecture"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40 p-4">
                  <div className="flex items-center justify-between mb-3 text-xs text-gray-400 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Cpu size={14} className="text-sky-400" />
                      End-to-End Pipeline Execution Topology
                    </span>
                    <span className="text-emerald-400">FastAPI + ChromaDB HNSW</span>
                  </div>
                  <div className="relative w-full aspect-[16/7] rounded-lg overflow-hidden bg-[#0b101b] border border-white/5">
                    <Image
                      src="/images/sentinel/architecture_flow.svg"
                      alt="SENTINEL Architecture Flow Diagram"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Queries pass sequentially through input normalization and regex threat screening before
                  invoking embedded <strong>ChromaDB</strong> cosine space vector queries. Post-retrieval chunks are
                  screened for indirect injections, synthesized via an LLM adapter, and evaluated by the NLI
                  hallucination verification engine.
                </p>
              </motion.div>
            )}

            {activeTab === "defense" && (
              <motion.div
                key="defense"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {DEFENSE_BARRIERS.map((barrier) => (
                  <div
                    key={barrier.step}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-sky-500/20 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono text-sky-400 font-semibold">
                          {barrier.step}
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">
                          {barrier.badge}
                        </span>
                      </div>
                      <h4 className="text-white font-bold text-sm mb-1">{barrier.name}</h4>
                      <p className="text-xs text-gray-500 mb-2 font-mono">{barrier.target}</p>
                      <p className="text-xs text-gray-400 leading-relaxed">{barrier.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "trust" && (
              <motion.div
                key="trust"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {TRUST_METRICS.map((metric) => (
                    <div
                      key={metric.label}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/5"
                    >
                      <p className="text-xs font-bold text-purple-400 mb-1">{metric.label}</p>
                      <p className="text-xs font-mono text-gray-300 bg-black/40 px-2 py-1 rounded border border-white/5 mb-2 inline-block">
                        {metric.formula}
                      </p>
                      <p className="text-xs text-gray-400 leading-relaxed">{metric.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="p-3 rounded-lg bg-sky-950/20 border border-sky-500/20 text-xs text-sky-300 flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-sky-400" />
                  <span>
                    Answers are classified into <strong>HIGH TRUST (deliver)</strong>,{" "}
                    <strong>MEDIUM TRUST (annotated)</strong>, or <strong>LOW TRUST (adaptive mitigation / abstention)</strong>.
                  </span>
                </div>
              </motion.div>
            )}

            {activeTab === "observability" && (
              <motion.div
                key="observability"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40 p-4">
                  <div className="flex items-center justify-between mb-3 text-xs text-gray-400 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Terminal size={14} className="text-amber-400" />
                      Executive Admin Observability Console (/admin)
                    </span>
                    <span className="text-xs text-gray-500">Live Telemetry &amp; Chunk Browser</span>
                  </div>
                  <div className="relative w-full aspect-[16/7] rounded-lg overflow-hidden bg-[#0b101b] border border-white/5">
                    <Image
                      src="/images/sentinel/admin_panel_preview.svg"
                      alt="SENTINEL Admin Observability Console"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-400">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Real-time KPI dashboard tracking total indexed chunks, model runtime, and retrieval latency.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Thread-safe circular telemetry buffer capturing timestamped query prompts and cosine distances.</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "Python 3.12+",
              "FastAPI",
              "ChromaDB",
              "all-MiniLM-L6-v2",
              "DeBERTa-v3 NLI",
              "PyTest (26/26 Passed)",
              "Tailwind CSS",
              "Ollama / CodeLlama",
            ].map((tech) => (
              <span
                key={tech}
                className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Expandable Architecture & Team Leadership Details */}
          <button
            onClick={() => setExpanded((p) => !p)}
            className="flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300 transition-colors font-medium"
            aria-expanded={expanded}
          >
            {expanded ? "Hide" : "View"} Capstone Team Leadership &amp; Scientific Methodology
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-6 pt-6 border-t border-white/10 text-sm text-gray-400 space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                    <h5 className="text-white font-semibold text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <GitBranch size={13} className="text-sky-400" />
                      Team Leadership &amp; Integration
                    </h5>
                    <p className="text-xs leading-relaxed text-gray-400">
                      As <strong>Lead Architect &amp; Integrator</strong>, I architected the end-to-end FastAPI service,
                      coordinated Git branching across a 4-laptop development team (Bhumika: RAG foundation, Adhya: Security layer,
                      Anwesha: Trust engine, Sharad: Architecture, mitigation &amp; UI), and implemented the closed-loop
                      adaptive mitigation harness.
                    </p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                    <h5 className="text-white font-semibold text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <RefreshCw size={13} className="text-purple-400" />
                      Four-Way Comparative Study (Phase 6)
                    </h5>
                    <p className="text-xs leading-relaxed text-gray-400">
                      The project establishes a formal scientific study benchmarking 4 variants:
                      <strong> System A</strong> (Baseline RAG control), <strong>System B</strong> (RAG + Security),
                      <strong> System C</strong> (RAG + Trust), and <strong>System D</strong> (SENTINEL unified).
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
