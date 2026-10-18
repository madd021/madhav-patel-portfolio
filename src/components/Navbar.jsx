import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Project', href: '#project' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenCV, onTriggerEasterEgg }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [logoClicks, setLogoClicks] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    const nextCount = logoClicks + 1;
    setLogoClicks(nextCount);
    if (nextCount >= 5) {
      setLogoClicks(0);
      onTriggerEasterEgg();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/80 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with 5-click Easter Egg */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleLogoClick}
              title={logoClicks > 1 ? `${5 - logoClicks} clicks to terminal mode` : "Madhav Patel"}
              className="group relative flex items-center justify-center w-10 h-10 rounded-xl bg-dark-900 border border-cyan-500/30 hover:border-cyan-400 shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="font-display font-black text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-200">
                {personalInfo.initials}
              </span>
              {logoClicks > 0 && (
                <span className="absolute bottom-0 right-0 text-[8px] font-mono text-cyan-400 px-0.5 bg-dark-950">
                  {logoClicks}
                </span>
              )}
            </button>
            <div className="hidden sm:block">
              <span className="text-xs font-mono text-slate-400 tracking-wide block leading-none">
                PATEL MADHAV
              </span>
              <span className="text-[10px] font-mono text-cyan-400/80 tracking-wider">
                MCA DATA SCIENCE
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-dark-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'text-cyan-300 font-semibold'
                      : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-cyan-500/15 border border-cyan-500/30 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Download CV + Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-900/40 shadow-sm hover:shadow-glow-cyan transition-all duration-300 cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download CV</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-dark-900 border border-slate-800 text-slate-300 hover:text-white transition cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-900/95 border-b border-cyan-500/20 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-sm font-medium tracking-wide transition ${
                    activeSection === item.href.substring(1)
                      ? 'text-cyan-400 font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              
              <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                <a
                  href={personalInfo.resumePdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyan-500 text-dark-950 font-bold text-xs"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
