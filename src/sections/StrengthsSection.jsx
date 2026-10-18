import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Users, 
  Target, 
  MessageSquare, 
  Lightbulb, 
  Compass, 
  Cpu, 
  GitMerge, 
  CheckCircle2 
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { strengths, whatIBring } from '../data/portfolioData';

const strengthIcons = [Zap, Users, Target, MessageSquare, Lightbulb];

export default function StrengthsSection() {
  return (
    <section id="strengths" className="py-24 relative overflow-hidden bg-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="// 08. CHARACTER &amp; ATTRIBUTES"
          title="Core Strengths"
          subtitle="Interpersonal, problem-solving, and execution competencies built across software development and multi-departmental corporate coordination."
        />

        {/* 5 Core Strengths Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
          {strengths.map((s, idx) => {
            const Icon = strengthIcons[idx % strengthIcons.length];
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-5 rounded-2xl glass-panel glass-panel-hover border border-slate-800 hover:border-cyan-500/30 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                    {s.tagline}
                  </span>

                  <h3 className="text-base font-display font-bold text-white mb-2">
                    {s.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500">
                  CV Verified Strength
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* What I Bring Section */}
        <div className="pt-10 border-t border-slate-800/80">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-2">
              // VALUE PROPOSITION
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
              What I Bring to Every Team &amp; Project
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              How my combined experience in software engineering, operations, and academic curiosity translates into tangible impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatIBring.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="p-6 rounded-2xl bg-dark-900/70 border border-slate-800 hover:border-cyan-500/25 p-5 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <h4 className="text-lg font-display font-bold text-white">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-5">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
