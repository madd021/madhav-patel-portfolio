import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Mail, 
  Phone, 
  GraduationCap, 
  Terminal, 
  Languages, 
  Quote, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { personalInfo, languages } from '../data/portfolioData';

const timelineSteps = [
  { step: "BCA", label: "Foundations", desc: "C.K. Pithawalla College" },
  { step: "Internship", label: "Industry Exposure", desc: "ExtraBTS (124 Hours)" },
  { step: "Professional Exp.", label: "IT & Store Operations", desc: "Panchal Technical" },
  { step: "MCA Data Science", label: "Specialization", desc: "MIT-ADT University" },
  { step: "AI / Data Science", label: "Next Horizon", desc: "RAG & LLM Systems", isTarget: true }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="// 01. ABOUT ME"
          title="Digital Identity &amp; Foundations"
          subtitle="Curious technologist grounded in Python and Django, advancing into Data Science and intelligent application engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Premium Digital Identity Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-cyan-500/20 shadow-xl"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500" />

              {/* Digital Avatar / Monogram Core */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-dark-900 to-dark-850 border border-cyan-500/40 flex items-center justify-center shadow-glow-cyan/20">
                  <span className="font-display font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-sky-100">
                    MP
                  </span>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-dark-950 flex items-center justify-center">
                    <CheckCircle2 className="w-2.5 h-2.5 text-dark-950" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold text-white leading-tight">
                    {personalInfo.fullName}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-0.5">
                    Surat, Gujarat, India
                  </p>
                </div>
              </div>

              {/* Fast Bio Attributes */}
              <div className="space-y-3 font-mono text-xs text-slate-300 border-y border-slate-800/80 py-5 my-5">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Degree:</span>
                  <span className="text-white font-medium">MCA Data Science (Pursuing)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">University:</span>
                  <span className="text-white font-medium">MIT-ADT University</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Previous:</span>
                  <span className="text-white font-medium">BCA (Passing Year: 2026)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Core Stack:</span>
                  <span className="text-cyan-300 font-medium">Python &bull; Django</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Location:</span>
                  <span className="text-white font-medium">Piplod, Surat</span>
                </div>
              </div>

              {/* Languages */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Languages className="w-3.5 h-3.5" />
                  <span>Languages Spoken</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-dark-850 border border-slate-800 text-slate-300"
                    >
                      {lang.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Identity Badge */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1.5 text-cyan-400/90">
                  <ShieldCheck className="w-3.5 h-3.5" /> CV Verified
                </span>
                <span>ID: MP-2026-MCA</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative, Objective & Journey Progression */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Story Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-display font-bold text-white">
                Practical Execution Grounded in Curiosity
              </h3>
              <p className="text-base text-slate-300 leading-relaxed">
                {personalInfo.aboutNarrative}
              </p>
            </motion.div>

            {/* Career Objective Quote Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 relative"
            >
              <div className="flex items-start gap-3">
                <Quote className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5 opacity-80" />
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold mb-1">
                    Career Objective
                  </div>
                  <p className="text-sm text-slate-300 italic leading-relaxed">
                    "{personalInfo.careerObjective}"
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Micro Progression Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 pt-2"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Progression Timeline</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {timelineSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border transition-all ${
                      step.isTarget
                        ? 'bg-cyan-500/10 border-cyan-500/40 shadow-glow-cyan/20'
                        : 'bg-dark-900/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-mono font-bold ${step.isTarget ? 'text-cyan-300' : 'text-slate-400'}`}>
                        0{idx + 1}
                      </span>
                      {step.isTarget && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                      )}
                    </div>
                    <div className="text-xs font-bold text-white truncate">{step.step}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">{step.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
