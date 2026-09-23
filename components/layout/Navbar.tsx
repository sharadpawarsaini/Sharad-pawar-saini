"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download, Sparkles, Search, Zap, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#sentinel", label: "SENTINEL" },
  { href: "#venture", label: "Venture" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

interface NavbarProps {
  onOpenCmdPalette?: () => void;
  onOpenRecruiterMode?: () => void;
  onOpenTerminal?: () => void;
}

export default function Navbar({
  onOpenCmdPalette,
  onOpenRecruiterMode,
  onOpenTerminal,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "glass border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-lg tracking-tight text-white flex items-center gap-2 group"
          aria-label="Sharad Pawar Saini home"
        >
          <span className="w-7 h-7 rounded-lg bg-[#10b981] flex items-center justify-center text-black font-black text-sm group-hover:scale-110 transition-transform">
            S
          </span>
          <span className="hidden sm:block">Sharad Pawar Saini</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs text-gray-400 hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Cmd+K Search trigger */}
          {onOpenCmdPalette && (
            <button
              onClick={onOpenCmdPalette}
              className="flex items-center gap-1.5 text-xs text-gray-400 bg-white/5 hover:bg-white/10 border border-white/10 px-2.5 py-1.5 rounded-lg transition-all"
              title="Search & Commands (Cmd+K)"
            >
              <Search size={13} />
              <span className="hidden md:inline">Commands</span>
              <kbd className="text-[10px] bg-white/10 px-1 py-0.5 rounded font-mono text-gray-400">
                ⌘K
              </kbd>
            </button>
          )}

          {/* Recruiter Speedrun Mode trigger */}
          {onOpenRecruiterMode && (
            <button
              onClick={onOpenRecruiterMode}
              className="flex items-center gap-1 text-xs text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-1.5 rounded-lg transition-all font-semibold"
              title="30-Second Recruiter Summary"
            >
              <Zap size={13} className="text-[#10b981]" />
              <span>Recruiter</span>
            </button>
          )}

          {/* Terminal CLI trigger */}
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              title="Open Developer Terminal (CLI)"
              aria-label="Open Interactive CLI"
            >
              <Terminal size={14} />
            </button>
          )}

          {/* Ask AI CTA */}
          <a
            href="#chat"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("chat-trigger")
                ?.dispatchEvent(new Event("click", { bubbles: true }));
            }}
            className="flex items-center gap-1.5 text-xs text-[#10b981] border border-[#10b981]/30 hover:border-[#10b981]/70 hover:bg-[#10b981]/10 px-3 py-1.5 rounded-lg transition-all"
            aria-label="Open AI Chat"
          >
            <Sparkles size={13} />
            Ask AI
          </a>

          {/* Download Resume CTA */}
          <a
            href="/Sharad.pdf"
            download
            className="flex items-center gap-1.5 text-xs bg-[#10b981] text-black font-semibold px-3 py-1.5 rounded-lg hover:bg-emerald-400 transition-all shadow-sm"
            aria-label="Download Resume"
          >
            <Download size={13} />
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          {onOpenCmdPalette && (
            <button
              onClick={onOpenCmdPalette}
              className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white"
              aria-label="Open search palette"
            >
              <Search size={18} />
            </button>
          )}
          <button
            onClick={() => setMobileOpen((p) => !p)}
            className="text-gray-400 hover:text-white transition-colors p-2"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="sm:hidden glass border-t border-white/5 px-6 py-4 flex flex-col gap-2"
          >
            <div className="grid grid-cols-2 gap-2 pb-2 mb-2 border-b border-white/10">
              {onOpenRecruiterMode && (
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenRecruiterMode();
                  }}
                  className="flex items-center justify-center gap-1.5 py-2 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-lg font-semibold"
                >
                  <Zap size={14} />
                  Recruiter Mode
                </button>
              )}
              {onOpenTerminal && (
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenTerminal();
                  }}
                  className="flex items-center justify-center gap-1.5 py-2 text-xs text-gray-300 bg-white/5 border border-white/10 rounded-lg"
                >
                  <Terminal size={14} />
                  Terminal CLI
                </button>
              )}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-gray-300 hover:text-white py-1.5 text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="flex gap-3 mt-2 pt-2 border-t border-white/10">
              <a
                href="/Sharad.pdf"
                download
                className="flex-1 text-center text-xs bg-[#10b981] text-black font-semibold px-4 py-2.5 rounded-lg flex items-center justify-center gap-2"
              >
                <Download size={14} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
