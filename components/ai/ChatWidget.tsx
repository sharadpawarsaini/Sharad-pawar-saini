"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Send, Sparkles, User, Bot } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

const QUICK_PROMPTS = [
  "What has he built with AI?",
  "Tell me about EHP",
  "Is he open to relocation?",
  "What's his strongest ML project?",
  "What does he know about DSA?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Sharad's AI assistant 👋 Ask me anything about his projects, skills, experience, or availability — I'll answer just like he would in an interview.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Allow hero button to open the widget
  useEffect(() => {
    const trigger = document.getElementById("chat-trigger");
    if (trigger) {
      trigger.addEventListener("click", () => setOpen(true));
    }
    return () => {
      trigger?.removeEventListener("click", () => setOpen(true));
    };
  }, []);

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return;
    const userMsg: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok || !res.body) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Sorry, I couldn't process that. Please try again." },
        ]);
        setLoading(false);
        return;
      }

      // Stream the response
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let aiContent = "";
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);
      setLoading(false);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        aiContent += decoder.decode(value, { stream: true });
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { role: "assistant", content: aiContent },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Connection error. Please try again." },
      ]);
      setLoading(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <>
      {/* Hidden trigger for external open events */}
      <button id="chat-trigger" className="hidden" onClick={() => setOpen(true)} aria-hidden="true" />

      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#10b981] shadow-xl shadow-emerald-900/40 flex items-center justify-center text-black hover:bg-emerald-400 hover:scale-110 transition-all"
            aria-label="Open AI chat assistant"
            aria-haspopup="dialog"
          >
            <Sparkles size={22} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] max-w-[400px] h-[560px] flex flex-col glass rounded-2xl border border-[#10b981]/20 shadow-2xl shadow-black/60 overflow-hidden"
            role="dialog"
            aria-label="AI Chat Assistant"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/5 bg-[#10b981]/5">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#10b981] flex items-center justify-center text-black">
                  <Sparkles size={13} />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">
                    Sharad&apos;s AI
                  </p>
                  <p className="text-[#10b981] text-xs">Ask me anything</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2.5 ${
                    m.role === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs ${
                      m.role === "user"
                        ? "bg-[#3b82f6]/20 text-[#3b82f6]"
                        : "bg-[#10b981]/20 text-[#10b981]"
                    }`}
                    aria-hidden="true"
                  >
                    {m.role === "user" ? <User size={13} /> : <Bot size={13} />}
                  </div>
                  <div
                    className={`max-w-[80%] text-sm leading-relaxed px-3.5 py-2.5 rounded-2xl ${
                      m.role === "user"
                        ? "bg-[#3b82f6]/20 text-gray-200 rounded-tr-sm"
                        : "bg-white/5 text-gray-300 rounded-tl-sm"
                    }`}
                  >
                    {m.content || (
                      <span className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                      </span>
                    )}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex items-start gap-2.5">
                  <div className="shrink-0 w-7 h-7 rounded-full bg-[#10b981]/20 text-[#10b981] flex items-center justify-center">
                    <Bot size={13} />
                  </div>
                  <div className="bg-white/5 text-gray-300 px-3.5 py-2.5 rounded-2xl rounded-tl-sm flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick prompts */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {QUICK_PROMPTS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-xs bg-white/5 hover:bg-[#10b981]/10 border border-white/10 hover:border-[#10b981]/30 text-gray-400 hover:text-[#10b981] px-2.5 py-1 rounded-full transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-4 py-3 border-t border-white/5"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about Sharad…"
                disabled={loading}
                className="flex-1 bg-white/5 border border-white/10 text-white placeholder-gray-600 rounded-xl px-3.5 py-2.5 text-sm focus:border-[#10b981]/50 focus:outline-none transition-colors disabled:opacity-50"
                aria-label="Type your message"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="w-9 h-9 rounded-xl bg-[#10b981] hover:bg-emerald-400 disabled:opacity-40 text-black flex items-center justify-center transition-all"
                aria-label="Send message"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
