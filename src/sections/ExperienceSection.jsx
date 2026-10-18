import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Clock, 
  MapPin, 
  Building2, 
  CheckCircle2, 
  Layers, 
  Calendar,
  Sparkles
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { experiences } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="// 05. INDUSTRY TRACK RECORD"
          title="Work Experience &amp; Internship"
          subtitle="Real-world industry exposure bridging corporate IT operations, inventory/accounting systems, and dedicated web engineering."
        />

        <div className="space-y-12 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-sky-500/40 before:to-transparent">
          
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={exp.company}
                className="relative flex flex-col md:flex-row items-start md:items-center justify-between"
              >
                
                {/* Central Timeline Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-dark-950 border-2 border-cyan-400 text-cyan-400 z-10 shadow-glow-cyan">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* Content Card with alternating left/right layout on desktop */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`ml-12 md:ml-0 w-full md:w-[45%] ${
                    isEven ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <div className="p-6 sm:p-8 rounded-2xl glass-panel glass-panel-hover border border-slate-800 hover:border-cyan-500/30 shadow-xl space-y-5">
                    
                    {/* Header info */}
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                          {exp.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                          {exp.durationHours && (
                            <span className="px-2 py-0.5 rounded bg-dark-850 border border-slate-800 text-[11px] text-slate-300">
                              {exp.durationHours}
                            </span>
                          )}
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                        {exp.company}
                      </h3>
                      <p className="text-sm font-medium text-cyan-300 mt-0.5">
                        {exp.department}
                      </p>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {exp.summary}
                    </p>

                    {/* Animated Responsibility Cards */}
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                        Key Responsibilities &amp; Learnings:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {exp.responsibilities.map((r, rIdx) => (
                          <div
                            key={rIdx}
                            className="p-3 rounded-xl bg-dark-850/80 border border-slate-800/80 hover:border-cyan-500/20 transition-colors"
                          >
                            <div className="text-xs font-bold text-white mb-1 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                              <span>{r.title}</span>
                            </div>
                            <p className="text-[11px] text-slate-400 leading-snug">
                              {r.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom verification tag */}
                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                      <span>Status: {exp.status}</span>
                      <span className="text-slate-400">{exp.location}</span>
                    </div>

                  </div>
                </motion.div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
