"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  Mail,
  Check,
  ShieldCheck,
  Rocket,
  Cpu,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface RecruiterSpeedrunModalProps {
  open: boolean;
  onClose: () => void;
  onOpenChat: (initialPrompt?: string) => void;
}

export default function RecruiterSpeedrunModal({
  open,
  onClose,
  onOpenChat,
}: RecruiterSpeedrunModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  const copyEmail = () => {
    navigator.clipboard.writeText("sharadpawarsaini@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 26, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-[#0c1017] border border-[#10b981]/30 rounded-2xl shadow-2xl shadow-emerald-950/40 overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="recruiter-modal-title"
        >
          {/* Top Banner */}
          <div className="bg-gradient-to-r from-emerald-500/20 via-sky-500/20 to-purple-500/20 px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#10b981] animate-ping" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300">
                ⚡ Recruiter 30-Second Speedrun Mode
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto space-y-6 text-sm">
            {/* Candidate Header */}
            <div>
              <h3 id="recruiter-modal-title" className="text-2xl font-extrabold text-white">
                Sharad Pawar Saini
              </h3>
              <p className="text-gray-300 font-medium text-sm mt-0.5">
                B.Tech CS &apos;27 (GEHU Dehradun) · AI/ML Engineer · Full-Stack Builder
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-semibold">
                  ✓ Available for Campus &amp; Internship Roles
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300">
                  Open to Relocation &amp; Remote
                </span>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <p className="text-[11px] text-gray-500 font-mono">Venture</p>
                <p className="text-sm font-bold text-emerald-400 mt-0.5">Live in Prod</p>
                <p className="text-[10px] text-gray-400">EHP Solo Founder</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <p className="text-[11px] text-gray-500 font-mono">GenAI / RAG</p>
                <p className="text-sm font-bold text-sky-400 mt-0.5">26/26 Tests</p>
                <p className="text-[10px] text-gray-400">SENTINEL Architect</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <p className="text-[11px] text-gray-500 font-mono">Algorithms</p>
                <p className="text-sm font-bold text-purple-400 mt-0.5">Patent Filed</p>
                <p className="text-[10px] text-gray-400">BioVerse ML</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <p className="text-[11px] text-gray-500 font-mono">DSA Core</p>
                <p className="text-sm font-bold text-amber-400 mt-0.5">20-Week</p>
                <p className="text-[10px] text-gray-400">Striver A2Z Sheet</p>
              </div>
            </div>

            {/* Top 3 Proof of Work */}
            <div className="space-y-2.5">
              <p className="text-xs font-mono text-gray-400 uppercase tracking-wider font-semibold">
                Top 3 Proof of Work Snapshots:
              </p>

              {/* 1. SENTINEL */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-sky-500/20 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-white font-bold text-xs sm:text-sm">
                      SENTINEL: Trustworthy RAG System
                    </h4>
                    <span className="text-[10px] font-mono text-sky-400 bg-sky-400/10 px-2 py-0.5 rounded">
                      Lead Architect
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    4-layer prompt injection defense, cross-encoder DeBERTa NLI hallucination mitigation,
                    ChromaDB vector store, and 26/26 tests passing (100%).
                  </p>
                </div>
              </div>

              {/* 2. EHP */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-emerald-500/20 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-[#10b981] shrink-0 mt-0.5">
                  <Rocket size={16} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-white font-bold text-xs sm:text-sm">
                      EHP — Emergency Health Profile
                    </h4>
                    <span className="text-[10px] font-mono text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded">
                      Solo Founder
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    Live production QR-code emergency medical info platform. Full-stack MERN,
                    active college users, and B2B hospital portal design.
                  </p>
                </div>
              </div>

              {/* 3. BioVerse */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-purple-500/20 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
                  <Cpu size={16} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-white font-bold text-xs sm:text-sm">
                      BioVerse LifeLink Catalyst
                    </h4>
                    <span className="text-[10px] font-mono text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded">
                      Patent Filed
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    Predictive machine learning algorithm anticipating ICU vital-sign deterioration.
                    Provisional patent filed on core algorithm.
                  </p>
                </div>
              </div>
            </div>

            {/* Target Engineering Roles */}
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <span className="text-gray-400 font-mono">Target Positions:</span>
              <div className="flex flex-wrap gap-1.5">
                {["AI/ML Engineer", "Generative AI / RAG Engineer", "Full-Stack SDE"].map((role) => (
                  <span
                    key={role}
                    className="bg-white/5 border border-white/10 text-gray-300 px-2.5 py-0.5 rounded-md font-mono"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="p-4 sm:p-6 border-t border-white/10 bg-black/60 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenChat("What makes Sharad a strong fit for an SDE or AI role?");
              }}
              className="text-xs text-[#10b981] hover:underline flex items-center gap-1.5 font-medium"
            >
              <Sparkles size={13} />
              Ask AI: Why hire Sharad?
              <ArrowRight size={13} />
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={copyEmail}
                className="flex items-center gap-1.5 text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-white px-3.5 py-2 rounded-xl transition-all"
              >
                {copied ? <Check size={13} className="text-[#10b981]" /> : <Mail size={13} />}
                {copied ? "Email Copied!" : "Copy Email"}
              </button>
              <a
                href="/Sharad.pdf"
                download
                className="flex items-center gap-1.5 text-xs bg-[#10b981] hover:bg-emerald-400 text-black font-bold px-4 py-2 rounded-xl transition-all shadow-md shadow-emerald-950"
              >
                <Download size={13} />
                Download Resume PDF
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
