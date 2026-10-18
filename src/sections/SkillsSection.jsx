import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Globe, 
  BrainCircuit, 
  Settings, 
  Check, 
  Info, 
  Terminal,
  Sparkles
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { skillCategories } from '../data/portfolioData';

const categoryIcons = {
  programming: Code2,
  web: Globe,
  ai: BrainCircuit,
  operations: Settings
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(c => c.id === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="// 03. TECHNICAL CAPABILITIES"
          title="Skills Architecture"
          subtitle="Honest, evidence-backed capabilities derived from real development work, academic curriculum, and industrial store/IT operations."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-cyan-500 text-dark-950 font-bold shadow-glow-cyan'
                : 'bg-dark-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            All Categories ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>

          {skillCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Code2;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500 text-dark-950 font-bold shadow-glow-cyan'
                    : 'bg-dark-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Categories Grid */}
        <div className="space-y-10">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Code2;
            return (
              <div key={category.id} className="space-y-4">
                
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-2 border-b border-slate-800/80">
                  <div className="p-2 rounded-lg bg-cyan-950/60 text-cyan-400 border border-cyan-500/20">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-500">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skill Nodes Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      whileHover={{ scale: 1.02 }}
                      className="group relative p-5 rounded-xl glass-panel glass-panel-hover border border-slate-800 hover:border-cyan-500/30 flex flex-col justify-between transition-all"
                    >
                      <div>
                        {/* Top Bar with Name & Badge */}
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </h4>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-dark-850 text-cyan-400 border border-cyan-500/20">
                            {skill.badge}
                          </span>
                        </div>

                        {/* Interactive Explanation on hover / permanent readable */}
                        <p className="text-xs text-slate-400 leading-relaxed font-sans">
                          {skill.description}
                        </p>
                      </div>

                      {/* Bottom Level Indicator without fake percentages */}
                      <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                        <span className="flex items-center gap-1.5 text-cyan-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          {skill.level}
                        </span>
                        <span className="text-[10px] text-slate-600">CV Verified</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Methodology note */}
        <div className="mt-12 p-4 rounded-xl bg-dark-900/60 border border-slate-800 flex items-start gap-3 text-xs text-slate-400 max-w-2xl">
          <Info className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
          <p>
            No fabricated percentage bars (such as "95% Python"). Every skill listed corresponds to real-world projects (UNIVO), enterprise operations at Panchal Technical Engineering Service, or active postgraduate study.
          </p>
        </div>

      </div>
    </section>
  );
}
