"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const coursework = [
  "Data Structures & Algorithms",
  "Database Management Systems",
  "Computer Networks",
  "Operating Systems",
  "Software Engineering",
  "Object-Oriented Programming",
  "Discrete Mathematics",
  "Computer Organization",
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6" aria-label="Education">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs text-[#10b981] font-semibold uppercase tracking-widest mb-3">
            Education
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Academic background
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl border border-white/5 hover:border-[#10b981]/20 p-8 transition-colors"
        >
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981]">
              <GraduationCap size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-xl mb-1">
                B.Tech — Computer Science &amp; Engineering
              </h3>
              <p className="text-[#10b981] font-semibold mb-4">
                Graphic Era Hill University
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> 2022 – 2026 (Expected)
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} /> Dehradun, Uttarakhand, India
                </span>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-3">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((c) => (
                    <span
                      key={c}
                      className="text-xs bg-white/5 border border-white/10 text-gray-400 px-3 py-1 rounded-full"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
