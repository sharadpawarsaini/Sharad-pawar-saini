"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from "lucide-react";

interface TerminalModalProps {
  open: boolean;
  onClose: () => void;
  onOpenResume?: () => void;
}

type CommandLog = {
  command: string;
  output: string | React.ReactNode;
};

const INITIAL_LOGS: CommandLog[] = [
  {
    command: "welcome",
    output: (
      <div className="space-y-1 text-gray-400">
        <p className="text-emerald-400 font-bold">Sharad Pawar Saini — Interactive CLI v1.0.0</p>
        <p>Type <span className="text-sky-400">help</span> to view all available commands, or <span className="text-sky-400">sentinel</span> to inspect the flagship RAG system.</p>
      </div>
    ),
  },
];

export default function TerminalModal({ open, onClose }: TerminalModalProps) {
  const [logs, setLogs] = useState<CommandLog[]>(INITIAL_LOGS);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMaximized, setIsMaximized] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 200);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    setHistory((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);

    if (cmd === "clear") {
      setLogs([]);
      setInput("");
      return;
    }

    if (cmd === "exit") {
      onClose();
      setInput("");
      return;
    }

    let output: React.ReactNode;

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1 text-gray-300">
            <p className="text-[#10b981] font-semibold">Available Commands:</p>
            <p><span className="text-sky-400 font-mono w-24 inline-block">about</span> — Background &amp; profile summary</p>
            <p><span className="text-sky-400 font-mono w-24 inline-block">sentinel</span> — Technical specs on SENTINEL RAG system</p>
            <p><span className="text-sky-400 font-mono w-24 inline-block">ehp</span> — EHP solo founder startup metrics</p>
            <p><span className="text-sky-400 font-mono w-24 inline-block">projects</span> — List all shipped &amp; open source projects</p>
            <p><span className="text-sky-400 font-mono w-24 inline-block">skills</span> — Technical skills &amp; CS core</p>
            <p><span className="text-sky-400 font-mono w-24 inline-block">dsa</span> — 20-week Striver A2Z DSA progress</p>
            <p><span className="text-sky-400 font-mono w-24 inline-block">resume</span> — Resume details &amp; download link</p>
            <p><span className="text-sky-400 font-mono w-24 inline-block">contact</span> — Email, GitHub, LinkedIn</p>
            <p><span className="text-sky-400 font-mono w-24 inline-block">clear</span> — Clear the terminal</p>
            <p><span className="text-sky-400 font-mono w-24 inline-block">exit</span> — Close the terminal</p>
          </div>
        );
        break;

      case "about":
        output = (
          <p className="text-gray-300 leading-relaxed">
            Sharad Pawar Saini is a final-year CS undergrad at Graphic Era Hill University (B.Tech CS &apos;27).
            Solo founder of EHP (live in production) and Lead Architect of SENTINEL (secure RAG system with 26/26 tests).
            Active builder in GenAI, Python/FastAPI, Next.js, and DSA fundamentals.
          </p>
        );
        break;

      case "sentinel":
        output = (
          <div className="space-y-2 text-gray-300">
            <p className="text-sky-400 font-bold">SENTINEL: A Secure &amp; Trustworthy RAG System</p>
            <p>• Role: Lead Architect &amp; Integrator</p>
            <p>• 4 Defense Barriers: Ingestion Guard, Input Guard, Context Quarantine, Egress Filter</p>
            <p>• Trust Engine: Directional DeBERTa-v3 Cross-Encoder NLI Claim Entailment</p>
            <p>• Phase 2 Baseline: 26/26 tests passing (100%), FastAPI + ChromaDB + MiniLM</p>
            <p>• GitHub: https://github.com/sharadpawarsaini/sentinel-secure-trustworthy-rag</p>
          </div>
        );
        break;

      case "ehp":
        output = (
          <div className="space-y-1 text-gray-300">
            <p className="text-[#10b981] font-bold">EHP — Emergency Health Profile</p>
            <p>• Role: Solo Founder (Design, Engineering, GTM)</p>
            <p>• Product: Dynamic QR code surfaces critical medical info to first responders</p>
            <p>• Live URL: https://ehp-tan-eight.vercel.app</p>
            <p>• Stack: React, Node.js, Express, MongoDB, Tailwind</p>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-1 text-gray-300">
            <p>1. <strong className="text-sky-400">SENTINEL</strong> — Secure &amp; Trustworthy RAG (Python, FastAPI, ChromaDB)</p>
            <p>2. <strong className="text-emerald-400">EHP</strong> — Emergency Health Profile (React, Node, Express, MongoDB)</p>
            <p>3. <strong className="text-purple-400">BioVerse LifeLink Catalyst</strong> — Vital-Sign ML Prediction (Provisional Patent)</p>
            <p>4. <strong className="text-blue-400">HireTrack</strong> — Full-Stack ATS Web App (Next.js, TypeScript, MongoDB)</p>
            <p>5. <strong className="text-amber-400">Digital Voting System</strong> — MERN + Cryptographic Blockchain</p>
            <p>6. <strong className="text-gray-300">Smart Railway Optimizer</strong> — Graph Algorithms (Dijkstra, Bellman-Ford)</p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-1 text-gray-300">
            <p>• <span className="text-sky-400">Languages:</span> C++, Python, TypeScript, JavaScript, SQL</p>
            <p>• <span className="text-emerald-400">AI / ML &amp; GenAI:</span> Trustworthy RAG, Prompt Defense, NLI Entailment, ChromaDB, LLMs, Scikit-Learn</p>
            <p>• <span className="text-purple-400">Full-Stack:</span> FastAPI, React, Next.js, Node.js, Express, MongoDB, Tailwind CSS</p>
            <p>• <span className="text-amber-400">Core CS:</span> Data Structures &amp; Algorithms, OS, DBMS, Computer Networks, OOP</p>
          </div>
        );
        break;

      case "dsa":
        output = (
          <div className="space-y-1 text-gray-300">
            <p className="text-amber-400 font-bold">Striver A2Z DSA Sheet — 20-Week Structured Roadmap</p>
            <p>• Covered: Arrays, Binary Search, Recursion, Trees &amp; BST, Graphs, Dynamic Programming, Tries</p>
            <p>• Focus language: C++ with STL efficiency and strict space/time complexity analysis</p>
          </div>
        );
        break;

      case "resume":
        output = (
          <div className="space-y-1 text-gray-300">
            <p>Download Sharad&apos;s latest Resume:</p>
            <a href="/Sharad.pdf" download className="text-emerald-400 underline font-mono">
              /Sharad.pdf (Click to Download)
            </a>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-gray-300">
            <p>• Email: <span className="text-[#10b981]">sharadpawarsaini@gmail.com</span></p>
            <p>• GitHub: <a href="https://github.com/sharadpawarsaini" target="_blank" rel="noreferrer" className="text-sky-400 underline">github.com/sharadpawarsaini</a></p>
            <p>• LinkedIn: <a href="https://www.linkedin.com/in/sharad-pawar-saini/" target="_blank" rel="noreferrer" className="text-sky-400 underline">linkedin.com/in/sharad-pawar-saini</a></p>
          </div>
        );
        break;

      default:
        output = (
          <p className="text-rose-400">
            command not found: {rawCmd}. Type <span className="text-sky-400 font-bold">help</span> for a list of commands.
          </p>
        );
        break;
    }

    setLogs((prev) => [...prev, { command: rawCmd, output }]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const nextIndex = historyIndex + 1 < history.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIndex);
        setInput(history[history.length - 1 - nextIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(history[history.length - 1 - nextIndex] || "");
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className={`relative bg-[#090d14] border border-white/15 rounded-xl shadow-2xl overflow-hidden z-10 flex flex-col font-mono text-xs sm:text-sm ${
            isMaximized
              ? "w-full h-full max-w-none max-h-none rounded-none m-0"
              : "w-full max-w-3xl h-[550px] max-h-[90vh] my-auto"
          }`}
          role="dialog"
          aria-modal="true"
        >
          {/* Terminal Title Bar */}
          <div className="bg-[#111622] px-4 py-2.5 border-b border-white/10 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block cursor-pointer" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span
                className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block cursor-pointer"
                onClick={() => setIsMaximized(!isMaximized)}
              />
              <span className="text-gray-400 text-xs ml-2 flex items-center gap-1.5">
                <TerminalIcon size={13} className="text-sky-400" />
                sharad@portfolio: ~ (bash)
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMaximized(!isMaximized)}
                className="p-1 rounded text-gray-400 hover:text-white"
                aria-label={isMaximized ? "Minimize terminal" : "Maximize terminal"}
              >
                {isMaximized ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
              </button>
              <button
                onClick={onClose}
                className="p-1 rounded text-gray-400 hover:text-white"
                aria-label="Close terminal"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Terminal Output Area */}
          <div
            className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#070a10]"
            onClick={() => inputRef.current?.focus()}
          >
            {logs.map((log, i) => (
              <div key={i} className="space-y-1">
                {log.command !== "welcome" && (
                  <div className="flex items-center gap-2 text-gray-500">
                    <span className="text-[#10b981] font-bold">sharad@dev:~$</span>
                    <span className="text-white">{log.command}</span>
                  </div>
                )}
                <div>{log.output}</div>
              </div>
            ))}

            {/* Input Line */}
            <div className="flex items-center gap-2 text-white pt-1">
              <span className="text-[#10b981] font-bold shrink-0">sharad@dev:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs sm:text-sm p-0 m-0"
                autoFocus
                spellCheck={false}
                autoComplete="off"
              />
            </div>
            <div ref={bottomRef} />
          </div>

          {/* Terminal Footer Bar */}
          <div className="bg-[#0e131d] px-4 py-1.5 border-t border-white/5 text-[11px] text-gray-500 flex items-center justify-between">
            <span>Type &apos;help&apos; for commands</span>
            <span>UTF-8 · Ready</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
