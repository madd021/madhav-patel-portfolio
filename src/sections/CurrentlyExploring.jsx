import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  BrainCircuit, 
  Sparkles, 
  SearchCode, 
  Cpu, 
  Bot, 
  Layers, 
  ArrowUpRight 
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { currentlyExploring } from '../data/portfolioData';

const iconMap = {
  Database: Database,
  BrainCircuit: BrainCircuit,
  Sparkles: Sparkles,
  SearchCode: SearchCode,
  Cpu: Cpu,
  Bot: Bot
};

export default function CurrentlyExploring() {
  return (
    <section id="exploring" className="py-24 relative overflow-hidden bg-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="// 02. FRONTIER FOCUS"
          title="Currently Exploring"
          subtitle="Emerging technologies actively being studied and investigated. Transparently labeled as learning domains, not claimed senior mastery."
        />

        {/* Disclaimer / Transparency Pill */}
        <div className="mb-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 font-mono text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>Notice: These are active research &amp; academic study subjects, progressing from Python foundations.</span>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentlyExploring.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between border border-cyan-500/15"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

                <div>
                  {/* Top Bar with Icon and Status */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                      {item.status}
                    </span>
                  </div>

                  {/* Title & Tag */}
                  <div className="mb-2">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                      {item.tag}
                    </span>
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Bottom link indicator */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                  <span>Domain Study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
