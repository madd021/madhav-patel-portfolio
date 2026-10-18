import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  BookOpen, 
  CheckCircle2, 
  ArrowUpRight,
  TrendingUp
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { education } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="// 06. ACADEMIC FOUNDATIONS"
          title="Education Pathway"
          subtitle="Rigorous academic milestones leading from commerce foundations through computer applications to postgraduate Data Science."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className={`p-6 sm:p-8 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between border relative overflow-hidden ${
                edu.isCurrent
                  ? 'border-cyan-500/40 shadow-glow-cyan/20'
                  : 'border-slate-800 hover:border-cyan-500/30'
              }`}
            >
              {edu.isCurrent && (
                <div className="absolute top-0 right-0 px-3 py-1 rounded-bl-xl bg-gradient-to-l from-cyan-500 to-sky-400 text-dark-950 font-mono text-[10px] font-bold uppercase tracking-wider">
                  Active Enrollment
                </div>
              )}

              <div>
                {/* Year & Institution */}
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.period}</span>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-1">
                  {edu.degree}
                </h3>

                <p className="text-sm font-medium text-slate-300">
                  {edu.institution}
                </p>

                <p className="text-xs font-mono text-slate-500 mt-0.5 mb-4">
                  {edu.subCollege}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {edu.highlight}
                </p>
              </div>

              {/* Score / CGPA / Metric Callout */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                {edu.scoreValue ? (
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-500 uppercase">
                      {edu.scoreLabel}:
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-mono text-sm font-bold shadow-sm">
                      {edu.scoreValue}
                    </span>
                  </div>
                ) : (
                  <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" /> Specialization Phase
                  </span>
                )}

                <span className="text-[11px] font-mono text-slate-500">
                  {edu.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
