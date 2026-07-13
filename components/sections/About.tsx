"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Rocket, BookOpen } from "lucide-react";

const timeline = [
  {
    year: "2022",
    label: "Graphic Era Hill University",
    desc: "Started B.Tech CS — went all-in on DSA fundamentals via Striver A2Z",
    icon: BookOpen,
    color: "text-blue-400",
  },
  {
    year: "2024",
    label: "EHP — Founder",
    desc: "Identified a gap in emergency medical info access. Built, launched, and shipped EHP solo.",
    icon: Rocket,
    color: "text-emerald-400",
  },
  {
    year: "2024",
    label: "BioVerse LifeLink Catalyst",
    desc: "ML-driven vital-sign prediction. Filed provisional patent for core algorithm.",
    icon: Cpu,
    color: "text-purple-400",
  },
  {
    year: "2025",
    label: "Prodigy InfoTech — Data Science Intern",
    desc: "Applied ML on 1.5M+ row datasets. NLP pipelines, classification, geospatial analysis.",
    icon: Code2,
    color: "text-amber-400",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6" aria-label="About Sharad">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs text-[#10b981] font-semibold uppercase tracking-widest mb-3">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            From DSA-first prep to
            <span className="text-[#10b981]"> founder-mode building</span>
          </h2>
          <div className="max-w-2xl space-y-4 text-gray-400 leading-relaxed">
            <p>
              I&apos;m the founder of{" "}
              <strong className="text-white">EHP (Emergency Health Profile)</strong> — a QR-code
              based emergency health platform live in production. I own it end-to-end: product
              design, engineering, and go-to-market — including a freemium + B2B model and a
              bilingual Instagram Reel campaign targeting Dehradun college students.
            </p>
            <p>
              That founder instinct runs through everything else I build: a blockchain-backed
              voting system, a graph-algorithm railway optimizer, and BioVerse LifeLink Catalyst
              — a vital-sign prediction system now under provisional patent.
            </p>
            <p>
              Alongside building, I&apos;ve put in the reps placements demand: a structured
              20-week DSA roadmap through Striver&apos;s A2Z sheet, depth in OS, DBMS, Computer
              Networks, and OOPs. I&apos;m currently looking for AI/ML, GenAI, or Full-Stack
              roles where I can keep doing exactly this — identify a real problem, and ship the
              solution.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#10b981]/50 via-[#10b981]/20 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-8 pl-12 relative"
              >
                {/* Dot */}
                <div
                  className={`absolute left-0 top-1 w-8 h-8 rounded-full border border-white/10 bg-[#0c0c0e] flex items-center justify-center ${item.color}`}
                  aria-hidden="true"
                >
                  <item.icon size={14} />
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-600">{item.year}</span>
                  <h3 className="text-white font-semibold mt-0.5">{item.label}</h3>
                  <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
