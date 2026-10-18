import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onTriggerEasterEgg }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden text-slate-400 font-sans text-xs">
      
      {/* Decorative gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-850">
          
          {/* Brand & Monogram */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <span 
                onClick={onTriggerEasterEgg}
                className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-dark-900 border border-cyan-500/30 text-cyan-300 font-display font-black text-xs cursor-pointer hover:border-cyan-400 transition"
                title="Easter egg protocol"
              >
                MP
              </span>
              <span className="font-display font-extrabold text-base text-white tracking-tight">
                {personalInfo.displayName}
              </span>
            </div>

            <p className="text-xs text-slate-400 font-mono">
              MCA Data Science | Python | Django | AI
            </p>

            <p className="text-cyan-400 font-mono text-xs italic">
              "Learning today. Building tomorrow."
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.emailMailto}
              className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition cursor-pointer ml-3 flex items-center gap-1.5 font-mono text-xs"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            &copy; 2026 {personalInfo.fullName}. All rights reserved.
          </div>
          <div>
            Piplod, Surat, Gujarat &bull; Powered by React, Tailwind &amp; Framer Motion
          </div>
        </div>

      </div>
    </footer>
  );
}
