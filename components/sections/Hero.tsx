"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles, ChevronDown, Download } from "lucide-react";

const tickerItems = [
  "B.Tech CS '27",
  "Data Science Intern @ Prodigy InfoTech",
  "Founder — EHP",
  "AI/ML Enthusiast",
  "DSA (Striver A2Z)",
  "Open to Placement Roles",
  "Building with GenAI",
];

const doubled = [...tickerItems, ...tickerItems];

export default function Hero({
  onOpenChat,
}: {
  onOpenChat: () => void;
}) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
      aria-label="Hero Introduction"
    >
      {/* Background ambient glows */}
      <div
        className="glow-blur absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#10b981]/20"
        style={{ animation: "pulseGlow 6s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <div
        className="glow-blur absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-[#3b82f6]/15"
        style={{ animation: "pulseGlow 8s ease-in-out infinite 2s" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative shrink-0"
        >
          <div className="relative w-52 h-52 lg:w-64 lg:h-64">
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#10b981]/40 to-[#3b82f6]/20"
              style={{ filter: "blur(20px)", transform: "scale(1.1)" }}
              aria-hidden="true"
            />
            <div className="relative w-full h-full rounded-2xl border border-[#10b981]/20 overflow-hidden">
              <Image
                src="/images/sharad.jpg"
                alt="Sharad Pawar Saini — Founder & Engineer"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 208px, 256px"
              />
            </div>
            {/* Live badge */}
            <div className="absolute -bottom-3 -right-3 glass-accent px-3 py-1.5 rounded-full text-xs font-semibold text-[#10b981] flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"
                aria-hidden="true"
              />
              Open to Roles
            </div>
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 glass-accent px-3 py-1.5 rounded-full text-xs text-[#10b981] font-medium mb-6">
            <Sparkles size={12} />
            AI-Driven Portfolio — Ask Anything
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
            Sharad Pawar Saini
          </h1>
          <p className="text-lg sm:text-xl text-[#10b981] font-semibold mb-4">
            Founder, EHP · AI/ML Engineer · Full-Stack Builder
          </p>
          <p className="text-gray-400 max-w-xl leading-relaxed mb-8 text-base">
            Founder of{" "}
            <a
              href="https://ehp-tan-eight.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#10b981] transition-colors underline underline-offset-2"
            >
              EHP (Emergency Health Profile)
            </a>
            , a live production product. CS undergrad at Graphic Era Hill
            University interning in Data Science at Prodigy InfoTech. Building
            with Generative AI, LLMs, and full-stack engineering. Ask the
            assistant below anything you&apos;d ask in an interview.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              id="hero-chat-btn"
              onClick={onOpenChat}
              className="flex items-center justify-center gap-2 bg-[#10b981] hover:bg-emerald-400 text-black font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-900/30 hover:shadow-emerald-900/50 hover:scale-105"
              aria-label="Open AI Chat Assistant"
            >
              <Sparkles size={16} />
              Ask my AI about me
              <ArrowRight size={16} />
            </button>
            <a
              href="/Sharad_Pawar_saini_Resume.pdf"
              download
              className="flex items-center justify-center gap-2 border border-white/15 hover:border-white/30 text-white hover:bg-white/5 px-6 py-3.5 rounded-xl transition-all"
              aria-label="Download Resume PDF"
            >
              <Download size={16} />
              View Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* Ticker */}
      <div className="absolute bottom-20 left-0 right-0 overflow-hidden py-3 border-t border-b border-white/5">
        <div
          className="flex gap-8 whitespace-nowrap"
          style={{ animation: "marquee 28s linear infinite" }}
          aria-hidden="true"
        >
          {doubled.map((item, i) => (
            <span
              key={i}
              className="text-xs text-gray-500 font-medium tracking-wider uppercase"
            >
              {item}
              <span className="ml-8 text-[#10b981]/40">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <ChevronDown size={20} className="text-gray-600" />
      </motion.div>
    </section>
  );
}
