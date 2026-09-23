"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Zap,
  Download,
  Mail,
  Check,
  Terminal,
  ExternalLink,
  Sparkles,
  Layers,
  ShieldCheck,
  Rocket,
  Code2,
  GraduationCap,
  Briefcase,
  User,
  X,
} from "lucide-react";

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  onOpenRecruiterMode: () => void;
  onOpenTerminal: () => void;
  onOpenChat: (initialPrompt?: string) => void;
}

type CommandItem = {
  id: string;
  title: string;
  category: "Navigation" | "Actions" | "Ask AI" | "Links";
  icon: typeof Search;
  shortcut?: string;
  action: () => void;
};

export default function CommandPalette({
  open,
  onClose,
  onOpenRecruiterMode,
  onOpenTerminal,
  onOpenChat,
}: CommandPaletteProps) {
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Global shortcut listener (Cmd+K / Ctrl+K)
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 150);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setSearch("");
      setSelectedIndex(0);
    }
  }, [open]);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText("sharadpawarsaini@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  }, [onClose]);

  const scrollTo = useCallback((id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [onClose]);

  const items: CommandItem[] = useMemo(
    () => [
      // Actions
      {
        id: "recruiter-mode",
        title: "⚡ Recruiter Speedrun Mode (30-second summary)",
        category: "Actions",
        icon: Zap,
        action: () => {
          onClose();
          onOpenRecruiterMode();
        },
      },
      {
        id: "terminal-cli",
        title: "💻 Open Developer Interactive Terminal (CLI)",
        category: "Actions",
        icon: Terminal,
        action: () => {
          onClose();
          onOpenTerminal();
        },
      },
      {
        id: "resume-download",
        title: "Download Resume PDF (Sharad.pdf)",
        category: "Actions",
        icon: Download,
        action: () => {
          window.open("/Sharad.pdf", "_blank");
          onClose();
        },
      },
      {
        id: "copy-email",
        title: copied ? "Copied! (sharadpawarsaini@gmail.com)" : "Copy Email Address",
        category: "Actions",
        icon: copied ? Check : Mail,
        action: copyEmail,
      },

      // Navigation
      {
        id: "nav-sentinel",
        title: "Jump to: SENTINEL (Secure RAG Capstone)",
        category: "Navigation",
        icon: ShieldCheck,
        action: () => scrollTo("sentinel"),
      },
      {
        id: "nav-venture",
        title: "Jump to: Venture (EHP - Emergency Health Profile)",
        category: "Navigation",
        icon: Rocket,
        action: () => scrollTo("venture"),
      },
      {
        id: "nav-projects",
        title: "Jump to: Projects (All 12+ Shipped Projects)",
        category: "Navigation",
        icon: Layers,
        action: () => scrollTo("projects"),
      },
      {
        id: "nav-experience",
        title: "Jump to: Experience (Prodigy InfoTech)",
        category: "Navigation",
        icon: Briefcase,
        action: () => scrollTo("experience"),
      },
      {
        id: "nav-skills",
        title: "Jump to: Skills & CS Fundamentals",
        category: "Navigation",
        icon: Code2,
        action: () => scrollTo("skills"),
      },
      {
        id: "nav-education",
        title: "Jump to: Education (Graphic Era Hill University)",
        category: "Navigation",
        icon: GraduationCap,
        action: () => scrollTo("education"),
      },
      {
        id: "nav-about",
        title: "Jump to: About Sharad & Timeline",
        category: "Navigation",
        icon: User,
        action: () => scrollTo("about"),
      },

      // Ask AI
      {
        id: "ai-sentinel",
        title: "Ask AI: Tell me about SENTINEL RAG system",
        category: "Ask AI",
        icon: Sparkles,
        action: () => {
          onClose();
          onOpenChat("Tell me about SENTINEL RAG");
        },
      },
      {
        id: "ai-ehp",
        title: "Ask AI: Tell me about EHP startup",
        category: "Ask AI",
        icon: Sparkles,
        action: () => {
          onClose();
          onOpenChat("Tell me about EHP");
        },
      },
      {
        id: "ai-dsa",
        title: "Ask AI: What does Sharad know about DSA & algorithms?",
        category: "Ask AI",
        icon: Sparkles,
        action: () => {
          onClose();
          onOpenChat("What does he know about DSA?");
        },
      },
      {
        id: "ai-ml",
        title: "Ask AI: What's his strongest ML project?",
        category: "Ask AI",
        icon: Sparkles,
        action: () => {
          onClose();
          onOpenChat("What's his strongest ML project?");
        },
      },

      // Links
      {
        id: "link-sentinel-repo",
        title: "Open SENTINEL Repository on GitHub",
        category: "Links",
        icon: ExternalLink,
        action: () => {
          window.open("https://github.com/sharadpawarsaini/sentinel-secure-trustworthy-rag", "_blank");
          onClose();
        },
      },
      {
        id: "link-github",
        title: "Open GitHub Profile (sharadpawarsaini)",
        category: "Links",
        icon: ExternalLink,
        action: () => {
          window.open("https://github.com/sharadpawarsaini", "_blank");
          onClose();
        },
      },
      {
        id: "link-linkedin",
        title: "Open LinkedIn Profile",
        category: "Links",
        icon: ExternalLink,
        action: () => {
          window.open("https://www.linkedin.com/in/sharad-pawar-saini/", "_blank");
          onClose();
        },
      },
    ],
    [copied, onOpenRecruiterMode, onOpenTerminal, onOpenChat, onClose, copyEmail, scrollTo]
  );

  const filteredItems = useMemo(() => {
    if (!search.trim()) return items;
    const query = search.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );
  }, [items, search]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1 < filteredItems.length ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 >= 0 ? prev - 1 : filteredItems.length - 1));
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      filteredItems[selectedIndex].action();
    }
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Palette Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl bg-[#0d1117] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cmd-palette-title"
        >
          {/* Search Input Bar */}
          <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
            <Search size={18} className="text-gray-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Type a command, jump to section, or ask AI..."
              className="flex-1 bg-transparent border-none outline-none text-white text-sm placeholder-gray-500"
            />
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="text-[10px] font-mono text-gray-400 bg-white/10 px-1.5 py-0.5 rounded border border-white/10">
                ESC
              </span>
              <button
                onClick={onClose}
                className="p-1 rounded text-gray-400 hover:text-white"
                aria-label="Close command palette"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Results List */}
          <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, idx) => {
                const Icon = item.icon;
                const isSelected = selectedIndex === idx;
                return (
                  <button
                    key={item.id}
                    onClick={item.action}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between text-xs sm:text-sm transition-all ${
                      isSelected
                        ? "bg-[#10b981] text-black font-semibold shadow-md shadow-emerald-950"
                        : "text-gray-300 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        size={16}
                        className={isSelected ? "text-black" : "text-gray-400"}
                      />
                      <span>{item.title}</span>
                    </div>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        isSelected
                          ? "bg-black/20 text-black font-bold"
                          : "bg-white/5 text-gray-500"
                      }`}
                    >
                      {item.category}
                    </span>
                  </button>
                );
              })
            ) : (
              <div className="py-8 text-center text-gray-500 text-xs">
                No matching actions or sections found for &ldquo;{search}&rdquo;.
              </div>
            )}
          </div>

          {/* Palette Footer */}
          <div className="px-4 py-2 border-t border-white/5 bg-[#090d14] text-[11px] text-gray-500 flex items-center justify-between font-mono">
            <div className="flex items-center gap-2">
              <span>↑↓ Navigate</span>
              <span>·</span>
              <span>↵ Select</span>
            </div>
            <span>Sharad Pawar Saini · Portfolio</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
