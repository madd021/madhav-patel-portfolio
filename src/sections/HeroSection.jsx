import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Terminal, 
  Code2, 
  BrainCircuit, 
  Sparkles, 
  Database, 
  Layers, 
  Cpu, 
  Compass
} from 'lucide-react';
import { personalInfo, rotatingHeroWords } from '../data/portfolioData';

export default function HeroSection({ onOpenCV }) {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIdx((prev) => (prev + 1) % rotatingHeroWords.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Decorative Radial Grid & Ambient Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none -z-10">
        <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute inset-16 rounded-full bg-electric-indigo/10 blur-[90px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/25 text-cyan-300 font-mono text-xs tracking-wider shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>HELLO, I'M MADHAV</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400 hidden sm:inline">Surat, Gujarat</span>
            </motion.div>

            {/* Main Name Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-white leading-none">
                MADHAV <br />
                <span className="gradient-text-blue-cyan">PATEL</span>
              </h1>
            </motion.div>

            {/* Subheading with Dynamic Rotating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3"
            >
              <div className="text-lg sm:text-xl font-display font-semibold tracking-wide text-slate-300">
                MCA DATA SCIENCE STUDENT &bull; PYTHON &amp; DJANGO DEVELOPER
              </div>

              {/* Animated Rotating Tech Badge */}
              <div className="flex items-center gap-2.5 text-sm sm:text-base font-mono text-slate-400">
                <span>Progressing toward</span>
                <div className="h-8 overflow-hidden inline-flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={rotatingHeroWords[currentWordIdx]}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="inline-block px-3 py-0.5 rounded-md bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-bold tracking-wider"
                    >
                      {rotatingHeroWords[currentWordIdx]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Supporting Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-slate-400 font-normal max-w-2xl leading-relaxed"
            >
              {personalInfo.shortStatement}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary CTA */}
              <a
                href="#project"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-dark-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 shadow-glow-cyan transition-all duration-300 cursor-pointer overflow-hidden font-mono font-semibold"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA */}
              <a
                href={personalInfo.resumePdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold text-slate-200 bg-dark-900/80 hover:bg-dark-850 border border-slate-700/80 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </a>

              {/* Third Subtle CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Let's Connect &rarr;</span>
              </a>
            </motion.div>

            {/* Trust / Fact Metric Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              <div className="space-y-0.5">
                <span className="text-xs font-mono text-slate-500 uppercase">Current Focus</span>
                <div className="text-sm font-semibold text-white">MCA Data Science</div>
                <div className="text-[11px] text-cyan-400">MIT-ADT University</div>
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-mono text-slate-500 uppercase">Core Framework</span>
                <div className="text-sm font-semibold text-white">Python &bull; Django</div>
                <div className="text-[11px] text-cyan-400">UNIVO Architecture</div>
              </div>
              <div className="col-span-2 sm:col-span-1 space-y-0.5">
                <span className="text-xs font-mono text-slate-500 uppercase">Growth Track</span>
                <div className="text-sm font-semibold text-white">RAG &bull; LLMs &bull; AI</div>
                <div className="text-[11px] text-slate-400">Active Exploration</div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Code + Data + AI Interactive Geometric Core */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-[420px] aspect-square flex items-center justify-center"
            >
              {/* Outer Orbital Rings */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/15 animate-spin-slow" />
              <div 
                className="absolute inset-8 rounded-full border border-dashed border-electric-blue/20" 
                style={{ animation: 'spin 20s linear infinite reverse' }}
              />
              <div className="absolute inset-20 rounded-full border border-violet-500/20" />

              {/* Central Glowing Developer Core */}
              <div className="relative z-10 w-44 h-44 rounded-2xl bg-dark-900/90 border border-cyan-500/40 backdrop-blur-xl flex flex-col items-center justify-center p-4 shadow-2xl shadow-cyan-950/60 group hover:border-cyan-400 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-sky-400/20 border border-cyan-400/30 flex items-center justify-center mb-3 text-cyan-300">
                  <Terminal className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs font-bold text-white tracking-wider">MADHAV.CORE</span>
                <span className="text-[10px] font-mono text-cyan-400 tracking-tight mt-0.5">python.runtime.active</span>

                <div className="w-full mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>UNIVO: online</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>

              {/* Floating Orbiting Data Nodes */}
              {/* Node 1: Python */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute top-2 left-6 z-20 px-3 py-1.5 rounded-xl bg-dark-900/90 border border-cyan-500/30 shadow-lg backdrop-blur-md flex items-center gap-2"
              >
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-medium text-slate-200">Python / Django</span>
              </motion.div>

              {/* Node 2: Data Science */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-6 right-2 z-20 px-3 py-1.5 rounded-xl bg-dark-900/90 border border-violet-500/30 shadow-lg backdrop-blur-md flex items-center gap-2"
              >
                <BrainCircuit className="w-4 h-4 text-violet-400" />
                <span className="text-xs font-mono font-medium text-slate-200">Data Science &bull; MCA</span>
              </motion.div>

              {/* Node 3: RAG & LLMs */}
              <motion.div
                animate={{ x: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-4 -translate-y-1/2 z-20 px-3 py-1.5 rounded-xl bg-dark-900/90 border border-sky-500/30 shadow-lg backdrop-blur-md flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span className="text-xs font-mono font-medium text-slate-200">RAG &amp; LLM Basics</span>
              </motion.div>

              {/* Node 4: Database / Operations */}
              <motion.div
                animate={{ x: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-10 left-4 z-20 px-3 py-1.5 rounded-xl bg-dark-900/90 border border-emerald-500/30 shadow-lg backdrop-blur-md flex items-center gap-2"
              >
                <Database className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono font-medium text-slate-200">IT / DB Operations</span>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
