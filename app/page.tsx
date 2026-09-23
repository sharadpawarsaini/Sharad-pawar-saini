"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SentinelSpotlight from "@/components/sections/SentinelSpotlight";
import FounderSpotlight from "@/components/sections/FounderSpotlight";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import DsaTracker from "@/components/sections/DsaTracker";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import ChatWidget from "@/components/ai/ChatWidget";
import CommandPalette from "@/components/layout/CommandPalette";
import RecruiterSpeedrunModal from "@/components/modals/RecruiterSpeedrunModal";
import TerminalModal from "@/components/modals/TerminalModal";
import { Heart, Terminal, Zap } from "lucide-react";

// Inline SVG brand icons
function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.394.1 2.646.64.698 1.028 1.591 1.028 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.337-.012 2.415-.012 2.744 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function Divider() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

export default function Home() {
  const [cmdOpen, setCmdOpen] = useState(false);
  const [recruiterOpen, setRecruiterOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K for command palette
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
      // Backtick for terminal (when not typing in an input or textarea)
      if (
        e.key === "`" &&
        !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)
      ) {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const openAiChat = (initialPrompt?: string) => {
    window.dispatchEvent(
      new CustomEvent("open-ai-chat", { detail: { prompt: initialPrompt } })
    );
  };

  return (
    <main>
      <Navbar
        onOpenCmdPalette={() => setCmdOpen(true)}
        onOpenRecruiterMode={() => setRecruiterOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />
      <Hero onOpenChat={() => openAiChat()} />
      <Divider />
      <About />
      <Divider />
      <SentinelSpotlight />
      <Divider />
      <FounderSpotlight />
      <Divider />
      <Experience />
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <DsaTracker />
      <Divider />
      <Education />
      <Divider />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-6 mt-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm flex items-center gap-1.5">
            Built with <Heart size={13} className="text-[#10b981]" aria-label="love" /> by Sharad Pawar Saini
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setRecruiterOpen(true)}
              className="text-xs text-gray-500 hover:text-emerald-400 flex items-center gap-1 transition-colors"
            >
              <Zap size={12} className="text-[#10b981]" />
              Recruiter Mode
            </button>
            <button
              onClick={() => setTerminalOpen(true)}
              className="text-xs text-gray-500 hover:text-white flex items-center gap-1 transition-colors"
            >
              <Terminal size={12} className="text-sky-400" />
              CLI Terminal
            </button>
            <span className="text-gray-700">|</span>
            <a
              href="https://github.com/sharadpawarsaini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/sharad-pawar-saini/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>
          </div>

          <p className="text-gray-700 text-xs">Next.js 15 · Framer Motion · Gemini AI</p>
        </div>
      </footer>

      {/* Floating AI Chat Widget */}
      <ChatWidget />

      {/* Command Palette (Cmd+K) */}
      <CommandPalette
        open={cmdOpen}
        onClose={() => setCmdOpen(false)}
        onOpenRecruiterMode={() => setRecruiterOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenChat={openAiChat}
      />

      {/* Recruiter Speedrun 30-Second Summary Modal */}
      <RecruiterSpeedrunModal
        open={recruiterOpen}
        onClose={() => setRecruiterOpen(false)}
        onOpenChat={openAiChat}
      />

      {/* Developer Interactive Terminal CLI Modal */}
      <TerminalModal
        open={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </main>
  );
}
