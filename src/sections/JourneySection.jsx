import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Milestone, 
  Calendar, 
  Compass, 
  BrainCircuit, 
  Cpu 
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { journeyTimeline } from '../data/portfolioData';

export default function JourneySection() {
  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="// 09. CHRONOLOGY OF GROWTH"
          title="The Evolution Journey"
          subtitle="A clear progression from initial computer applications toward enterprise operations, web engineering, and advanced postgraduate AI frontiers."
        />

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-800 via-cyan-500/50 to-cyan-400 -translate-y-1/2 z-0" />

          {/* Timeline Nodes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {journeyTimeline.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className={`p-5 rounded-2xl glass-panel glass-panel-hover border flex flex-col justify-between ${
                  item.isNext
                    ? 'border-cyan-400 bg-gradient-to-b from-cyan-950/70 to-dark-900 shadow-glow-cyan/30'
                    : 'border-slate-800 hover:border-cyan-500/30'
                }`}
              >
                <div>
                  {/* Year Tag */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono font-black tracking-wider ${
                        item.isNext
                          ? 'bg-cyan-400 text-dark-950 shadow-glow-cyan'
                          : 'bg-dark-850 text-cyan-300 border border-slate-700'
                      }`}
                    >
                      {item.year}
                    </span>
                    {item.isNext && (
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                      </span>
                    )}
                  </div>

                  {/* Title & Sub */}
                  <h4 className={`text-base font-display font-bold mb-1 ${item.isNext ? 'text-cyan-200' : 'text-white'}`}>
                    {item.milestone}
                  </h4>

                  <div className="text-[11px] font-mono text-cyan-400/90 mb-3">
                    {item.institution}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                {item.isNext && (
                  <div className="mt-4 pt-3 border-t border-cyan-500/30 flex items-center gap-1.5 text-[11px] font-mono text-cyan-300 font-bold">
                    <BrainCircuit className="w-3.5 h-3.5" />
                    <span>Future Vision</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
