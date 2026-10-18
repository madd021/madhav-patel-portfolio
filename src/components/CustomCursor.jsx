import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorState, setCursorState] = useState({
    hovered: false,
    projectHovered: false,
    clickableText: ''
  });

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on desktop with fine pointer
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer || window.innerWidth < 1024) {
      setEnabled(false);
      return;
    }
    setEnabled(true);

    const onMouseMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check hovered element
      const targetEl = e.target.closest('a, button, [data-cursor], input, textarea, select');
      if (targetEl) {
        const cursorType = targetEl.getAttribute('data-cursor');
        if (cursorType === 'project') {
          setCursorState({ hovered: true, projectHovered: true, clickableText: 'VIEW' });
        } else {
          setCursorState({ hovered: true, projectHovered: false, clickableText: '' });
        }
      } else {
        setCursorState({ hovered: false, projectHovered: false, clickableText: '' });
      }
    };

    const onMouseLeave = () => {
      target.current = { x: -100, y: -100 };
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    // Smooth lerp loop for outer ring
    let animationId;
    const updateRing = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      animationId = requestAnimationFrame(updateRing);
    };

    updateRing();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Center point dot */}
      <div
        ref={dotRef}
        className={`fixed -top-1 -left-1 w-2 h-2 rounded-full bg-cyan-400 transition-opacity duration-200 pointer-events-none ${
          cursorState.projectHovered ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Outer following ring */}
      <div
        ref={ringRef}
        className={`fixed pointer-events-none transition-all duration-200 ease-out flex items-center justify-center font-mono text-[10px] font-bold tracking-wider ${
          cursorState.projectHovered
            ? '-top-6 -left-6 w-12 h-12 rounded-full bg-cyan-400 text-dark-950 shadow-glow-cyan'
            : cursorState.hovered
            ? '-top-5 -left-5 w-10 h-10 rounded-full border border-cyan-400/80 bg-cyan-500/15'
            : '-top-4 -left-4 w-8 h-8 rounded-full border border-cyan-400/30'
        }`}
        style={{ willChange: 'transform' }}
      >
        {cursorState.projectHovered && "VIEW"}
      </div>
    </div>
  );
}
