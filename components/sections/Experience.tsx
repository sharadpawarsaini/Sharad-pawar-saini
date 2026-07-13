"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6" aria-label="Work Experience">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs text-[#10b981] font-semibold uppercase tracking-widest mb-3">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Where I&apos;ve worked
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl border border-white/5 p-7 hover:border-[#10b981]/20 transition-colors group"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981] shrink-0">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-[#10b981] font-semibold text-sm">{exp.company}</p>
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1.5 text-xs text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    <span>{exp.startDate} – {exp.endDate}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={12} />
                    <span>{exp.location}</span>
                  </div>
                  {exp.current && (
                    <span className="flex items-center gap-1 text-[#10b981] font-semibold">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"
                        aria-hidden="true"
                      />
                      Current
                    </span>
                  )}
                </div>
              </div>

              {/* Bullets */}
              <ul className="space-y-3 mb-6">
                {exp.description.map((point, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-400">
                    <CheckCircle2
                      size={14}
                      className="shrink-0 mt-0.5 text-[#10b981]/60"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Stack */}
              <div className="flex flex-wrap gap-2">
                {exp.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-white/5 border border-white/10 text-gray-400 px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
