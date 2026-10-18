import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  "Initializing portfolio...",
  "Loading skills & architecture...",
  "Loading projects...",
  "Welcome."
];

export default function Preloader({ onComplete }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Total sequence ~ 1.7s
    const delays = [350, 400, 450, 500];
    
    let timer;
    if (currentStepIndex < steps.length - 1) {
      timer = setTimeout(() => {
        setCurrentStepIndex(prev => prev + 1);
      }, delays[currentStepIndex]);
    } else {
      timer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(onComplete, 400);
      }, 550);
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsExiting(true);
        setTimeout(onComplete, 150);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentStepIndex, onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(onComplete, 200);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-950 font-mono text-cyan-400 select-none px-4"
        >
          {/* Subtle ambient glow in center */}
          <div className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

          {/* Terminal Window Box */}
          <div className="w-full max-w-md bg-dark-900/90 border border-cyan-500/20 rounded-xl p-6 shadow-2xl backdrop-blur-xl relative z-10">
            {/* Top Bar with mock dots */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-cyan-500/10">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs text-slate-500 tracking-wider">madhav-os v2.4</span>
            </div>

            {/* Terminal Lines */}
            <div className="space-y-2 text-sm text-slate-300 min-h-[110px]">
              {steps.slice(0, currentStepIndex + 1).map((step, idx) => {
                const isCurrent = idx === currentStepIndex;
                const isWelcome = step === "Welcome.";
                return (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15 }}
                    className={`flex items-center space-x-2 ${isWelcome ? 'text-cyan-300 font-bold text-base mt-2' : ''}`}
                  >
                    <span className="text-cyan-500 font-bold">{">"}</span>
                    <span>{step}</span>
                    {isCurrent && (
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 0.6 }}
                        className="inline-block w-2 h-4 bg-cyan-400 ml-1 translate-y-[2px]"
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Quick skip hint */}
            <div className="mt-5 pt-3 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500">
              <span className="text-slate-600">Patel Madhav • Portfolio Boot</span>
              <button
                onClick={handleSkip}
                className="hover:text-cyan-300 underline underline-offset-4 transition-colors cursor-pointer"
              >
                Skip [Esc]
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
