import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EasterEggTerminal({ isOpen, onClose }) {
  const [terminalLines, setTerminalLines] = useState([]);

  useEffect(() => {
    if (!isOpen) {
      setTerminalLines([]);
      return;
    }

    // Trigger tasteful celebratory confetti
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#06b6d4', '#8b5cf6']
    });

    const script = [
      { text: "$ initializing secret protocol...", delay: 200 },
      { text: "$ access granted: user level = 'MADHAV_DEV'", delay: 600 },
      { text: "> sudo start_madhav_mode", delay: 1100, highlight: true },
      { text: "⚡ [SYSTEM]: Core philosophy unlocked:", delay: 1600 },
      { text: "✨ Keep learning. Keep building. ✨", delay: 2100, accent: true },
      { text: "Ready to solve practical problems at scale.", delay: 2600 }
    ];

    const timeouts = script.map((item) => {
      return setTimeout(() => {
        setTerminalLines((prev) => [...prev, item]);
      }, item.delay);
    });

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      timeouts.forEach(clearTimeout);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = origOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="w-full max-w-lg bg-dark-900 border border-cyan-500/30 rounded-2xl p-6 shadow-2xl relative font-mono text-sm"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-cyan-500/20">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 font-bold tracking-wider text-xs">MADHAV_EASTER_EGG.sh</span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Terminal output */}
          <div className="space-y-2.5 min-h-[160px] text-slate-300">
            {terminalLines.map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className={`${
                  line.accent
                    ? 'text-cyan-300 font-bold text-base py-1 border-y border-cyan-500/20 my-2'
                    : line.highlight
                    ? 'text-emerald-400 font-bold'
                    : 'text-slate-300'
                }`}
              >
                {line.text}
              </motion.div>
            ))}
          </div>

          {/* Footer actions */}
          <div className="mt-6 pt-3 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
            <span className="text-slate-500 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Mode active
            </span>
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors cursor-pointer"
            >
              Close Terminal
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
