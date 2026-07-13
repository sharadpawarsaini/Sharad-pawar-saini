"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#venture", label: "Venture" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
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
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-gray-400 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#chat"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("chat-trigger")
                ?.dispatchEvent(new Event("click", { bubbles: true }));
            }}
            className="flex items-center gap-2 text-sm text-[#10b981] border border-[#10b981]/30 hover:border-[#10b981]/70 hover:bg-[#10b981]/10 px-4 py-2 rounded-lg transition-all"
            aria-label="Open AI Chat"
          >
            <Sparkles size={14} />
            Ask AI
          </a>
          <a
            href="/Sharad.pdf"
            download
            className="flex items-center gap-2 text-sm bg-[#10b981] text-black font-semibold px-4 py-2 rounded-lg hover:bg-emerald-400 transition-all"
            aria-label="Download Resume"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen((p) => !p)}
          className="md:hidden text-gray-400 hover:text-white transition-colors p-2"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden glass border-t border-white/5 px-6 py-4 flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-gray-300 hover:text-white py-2 text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 mt-3 pt-3 border-t border-white/10">
              <a
                href="/resume.pdf"
                download
                className="flex-1 text-center text-sm bg-[#10b981] text-black font-semibold px-4 py-2 rounded-lg"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
