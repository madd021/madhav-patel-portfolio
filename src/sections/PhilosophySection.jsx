import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function PhilosophySection() {
  return (
    <section className="py-28 relative overflow-hidden bg-dark-950 flex items-center justify-center">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-widest">
            <Quote className="w-3.5 h-3.5" />
            <span>Guiding Principles</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white leading-tight">
            "Learn deeply. <br className="hidden sm:inline" />
            <span className="gradient-text-blue-cyan">Build practically.</span> <br className="hidden sm:inline" />
            Keep improving."
          </h2>

          <div className="pt-4 max-w-xl mx-auto">
            <p className="text-base sm:text-lg font-mono text-slate-400 italic">
              "{personalInfo.philosophy.alternative}"
            </p>
            <div className="mt-4 text-xs font-mono uppercase tracking-widest text-cyan-400">
              &mdash; {personalInfo.displayName}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
