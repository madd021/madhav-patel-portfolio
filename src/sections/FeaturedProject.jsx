import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Layers, 
  Database, 
  Users, 
  ShieldCheck, 
  Terminal,
  Server,
  Sparkles
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { featuredProject } from '../data/portfolioData';

export default function FeaturedProject() {
  const [activeTab, setActiveTab] = useState('highlights');

  return (
    <section id="project" className="py-24 relative overflow-hidden bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="// 04. FEATURED WORK"
          title="Featured Project"
          subtitle="Engineering an interactive community platform powered by a robust Python and Django backend."
        />

        {/* Large Cinematic Project Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          data-cursor="project"
          className="relative rounded-3xl glass-panel border border-cyan-500/25 overflow-hidden shadow-2xl"
        >
          {/* Top Decorative Header */}
          <div className="px-6 sm:px-10 py-5 bg-dark-900/90 border-b border-cyan-500/15 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-300">
                {featuredProject.tag} &bull; {featuredProject.name}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {featuredProject.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-cyan-950/70 border border-cyan-500/25 text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Main Card Body */}
          <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-1">
                  Full-Stack Community Platform
                </span>
                <h3 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
                  {featuredProject.name}
                </h3>
                <p className="text-base text-cyan-300 font-medium mt-1">
                  {featuredProject.tagline}
                </p>
              </div>

              <p className="text-base text-slate-300 leading-relaxed">
                {featuredProject.overview}
              </p>

              {/* Architecture & Role Note */}
              <div className="p-4 rounded-xl bg-dark-850 border border-slate-800 text-xs text-slate-300 space-y-1.5 font-sans">
                <div className="font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  Development Focus: {featuredProject.role}
                </div>
                <p className="text-slate-400">
                  {featuredProject.architectureNotes}
                </p>
              </div>

              {/* Highlights List */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Key Technical Deliverables:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {featuredProject.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons with explicit placeholder indicators */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={featuredProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-dark-950 font-mono text-xs font-bold shadow-glow-cyan transition-all cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  <span>View Code Repository</span>
                </a>

                <a
                  href={featuredProject.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-dark-850 hover:bg-dark-800 border border-slate-700 text-slate-200 font-mono text-xs font-semibold hover:border-cyan-500/40 transition cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                  <span>Live Platform Demo</span>
                </a>
              </div>

              <div className="text-[11px] font-mono text-slate-500">
                * Links are clearly marked for your repository update in <code className="text-cyan-400">portfolioData.js</code>.
              </div>
            </div>

            {/* Right Interactive Mock Visual Architecture */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="rounded-2xl bg-dark-950 border border-slate-800 p-6 shadow-2xl relative overflow-hidden font-mono text-xs space-y-4">
                
                {/* Mock Window Topbar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span>univo_app/backend</span>
                </div>

                {/* Code / Architecture Blueprint Snippet */}
                <div className="space-y-1.5 text-slate-300">
                  <div className="text-slate-500"># Django Core Architecture</div>
                  <div><span className="text-cyan-400">class</span> <span className="text-yellow-300">CommunityHub</span>(models.Model):</div>
                  <div className="pl-4 text-slate-400">title = models.CharField(max_length=200)</div>
                  <div className="pl-4 text-slate-400">creator = models.ForeignKey(User)</div>
                  <div className="pl-4 text-slate-400">created_at = models.DateTimeField()</div>
                  <div className="pl-4 text-slate-400">is_moderated = models.BooleanField()</div>
                  <div className="pt-2 text-slate-500"># Interactive engagement router</div>
                  <div><span className="text-cyan-400">def</span> <span className="text-sky-300">get_community_feed</span>(request):</div>
                  <div className="pl-4 text-emerald-400">return render(request, 'univo/feed.html')</div>
                </div>

                {/* Architecture stats */}
                <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-3 text-center">
                  <div className="p-2.5 rounded-lg bg-dark-900 border border-slate-800">
                    <span className="text-[10px] text-slate-500 block">Framework</span>
                    <span className="text-cyan-300 font-bold">Django 4.x</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-dark-900 border border-slate-800">
                    <span className="text-[10px] text-slate-500 block">Database</span>
                    <span className="text-cyan-300 font-bold">Relational ORM</span>
                  </div>
                </div>

                {/* Status indicator */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Validated in Production Workflow
                  </span>
                </div>

              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
