"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  QrCode,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const highlights = [
  {
    icon: QrCode,
    label: "The Problem",
    value: "First responders have no fast way to access a patient's critical medical info in an emergency.",
  },
  {
    icon: Zap,
    label: "The Product",
    value: "Scan a QR code → instantly see blood group, allergies, conditions, emergency contacts.",
  },
  {
    icon: TrendingUp,
    label: "Business Model",
    value: "Freemium individual tier + B2B for hospitals and institutions + physical QR card distribution.",
  },
  {
    icon: Users,
    label: "GTM",
    value: "Bilingual (Hindi/English) Instagram Reel campaign targeting Dehradun college campuses.",
  },
];

export default function FounderSpotlight() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="venture"
      className="py-24 px-6"
      aria-label="EHP Founder Spotlight"
    >
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-[#10b981]/30 bg-[#10b981]/5 px-3 py-1.5 rounded-full text-xs text-[#10b981] font-semibold uppercase tracking-widest mb-6"
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"
            aria-hidden="true"
          />
          Venture
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-accent rounded-2xl border border-[#10b981]/15 p-8 lg:p-12"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-3xl font-bold text-white">EHP</h2>
                <span className="text-gray-400 text-lg font-light">Emergency Health Profile</span>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xs font-bold text-black bg-[#10b981] px-2.5 py-1 rounded-full">
                  Solo Founder
                </span>
                <div className="flex items-center gap-1.5 text-xs text-[#10b981] border border-[#10b981]/30 px-2.5 py-1 rounded-full">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"
                    aria-hidden="true"
                  />
                  Live in Production
                </div>
              </div>
            </div>
            <a
              href="https://ehp-tan-eight.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-all"
              aria-label="Visit EHP live site"
            >
              Visit EHP
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="bg-black/20 border border-white/5 rounded-xl p-5 flex gap-4"
              >
                <div className="shrink-0 w-9 h-9 rounded-lg bg-[#10b981]/10 flex items-center justify-center text-[#10b981]">
                  <h.icon size={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">
                    {h.label}
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">{h.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["React", "Node.js", "Express", "MongoDB", "Vercel", "QR Code API"].map((t) => (
              <span
                key={t}
                className="text-xs bg-white/5 border border-white/10 text-gray-400 px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Expandable founder story */}
          <button
            onClick={() => setExpanded((p) => !p)}
            className="flex items-center gap-2 text-sm text-[#10b981] hover:text-emerald-300 transition-colors font-medium"
            aria-expanded={expanded}
            aria-controls="founder-story"
          >
            {expanded ? "Hide" : "Read"} the founder story
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                id="founder-story"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="mt-6 pt-6 border-t border-white/5 space-y-4 text-gray-400 leading-relaxed text-sm">
                  <p>
                    EHP started from a simple observation: in a medical emergency, the seconds
                    spent searching a patient&apos;s wallet or calling family members can be
                    life-threatening. I built EHP so that anyone — a first responder, a hospital
                    triage nurse, a bystander — can instantly access the information that matters
                    most by scanning a QR code on a card or phone screen.
                  </p>
                  <p>
                    I handle every part of EHP myself: product decisions, frontend and backend
                    engineering, deployment on Vercel, and go-to-market. The freemium model lets
                    individuals use it for free (with basic profile features), while the B2B tier
                    allows hospitals and institutions to manage profiles for their patients or
                    students in bulk — with admin dashboards and physical QR card distribution.
                  </p>
                  <p>
                    For user acquisition, I launched a bilingual (Hindi/English) Instagram Reel
                    campaign targeting college campuses in Dehradun — because students are both
                    active on Instagram and genuinely underserved by existing health platforms.
                    The campaign framed EHP not as a medical app, but as a simple safety habit —
                    like a seatbelt, but for your health information.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
