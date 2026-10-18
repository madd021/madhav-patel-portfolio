import React, { useEffect, useRef } from 'react';

export default function DynamicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Accessibility check: respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Responsive particle count
    const isMobile = window.innerWidth < 768;
    const particleCount = prefersReducedMotion ? 16 : isMobile ? 28 : 65;
    const maxDistance = isMobile ? 85 : 130;
    const colors = ['#38bdf8', '#06b6d4', '#818cf8', '#34d399', '#c084fc'];

    const mousePos = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
      mousePos.active = true;
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    const handleMouseLeave = () => {
      mousePos.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        baseRadius: Math.random() * 1.6 + 0.8,
        radius: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.25,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }

    // Data packets traveling along edges
    const dataPackets = [];
    for (let i = 0; i < 10; i++) {
      dataPackets.push({
        p1Idx: Math.floor(Math.random() * particleCount),
        p2Idx: Math.floor(Math.random() * particleCount),
        progress: Math.random(),
        speed: 0.008 + Math.random() * 0.012
      });
    }

    // Floating upward code glyphs
    const codeGlyphs = ['01', 'λ', 'def', 'AI', '∇', '{}', 'class', 'RAG', 'LLM', 'return', 'py'];
    const floatingTokens = [];
    const tokenCount = isMobile ? 8 : 16;
    for (let i = 0; i < tokenCount; i++) {
      floatingTokens.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vy: -(0.25 + Math.random() * 0.45),
        text: codeGlyphs[Math.floor(Math.random() * codeGlyphs.length)],
        alpha: 0.12 + Math.random() * 0.18,
        size: Math.floor(Math.random() * 4 + 10)
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    let animTime = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      animTime += 0.02;

      // Draw floating code glyphs
      for (let i = 0; i < floatingTokens.length; i++) {
        const t = floatingTokens[i];
        ctx.fillStyle = `rgba(56, 189, 248, ${t.alpha})`;
        ctx.font = `${t.size}px "JetBrains Mono", monospace`;
        ctx.fillText(t.text, t.x, t.y);

        t.y += t.vy;
        if (t.y < -20) {
          t.y = height + 20;
          t.x = Math.random() * width;
        }
      }

      // Proximity connection lines & data network
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.16;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }

        // Connect to mouse cursor
        if (mousePos.active) {
          const mdx = particles[i].x - mousePos.x;
          const mdy = particles[i].y - mousePos.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < 160) {
            const mAlpha = (1 - mDist / 160) * 0.35;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mousePos.x, mousePos.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${mAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            particles[i].x += (mdx / mDist) * 0.25;
            particles[i].y += (mdy / mDist) * 0.25;
          }
        }
      }

      // Render traveling data transmission packets
      for (let k = 0; k < dataPackets.length; k++) {
        const dp = dataPackets[k];
        const p1 = particles[dp.p1Idx];
        const p2 = particles[dp.p2Idx];
        if (p1 && p2) {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance * 1.2) {
            dp.progress += dp.speed;
            if (dp.progress > 1) {
              dp.progress = 0;
              dp.p1Idx = Math.floor(Math.random() * particleCount);
              dp.p2Idx = Math.floor(Math.random() * particleCount);
            }
            const curX = p1.x + (p2.x - p1.x) * dp.progress;
            const curY = p1.y + (p2.y - p1.y) * dp.progress;

            ctx.beginPath();
            ctx.arc(curX, curY, 1.8, 0, Math.PI * 2);
            ctx.fillStyle = '#67e8f9';
            ctx.shadowBlur = 6;
            ctx.shadowColor = '#38bdf8';
            ctx.fill();
            ctx.shadowBlur = 0;
          } else {
            dp.p1Idx = Math.floor(Math.random() * particleCount);
            dp.p2Idx = Math.floor(Math.random() * particleCount);
            dp.progress = 0;
          }
        }
      }

      // Draw particle nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.radius = p.baseRadius + Math.sin(animTime * 2 + p.pulseOffset) * 0.4;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.4, p.radius), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1.0;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[radial-gradient(ellipse_at_50%_-10%,#0e1b42_0%,#06091d_45%,#02040b_100%)]">
      {/* Interactive Mouse Flashlight Aura */}
      <div 
        id="mouse-spotlight" 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(700px circle at var(--mouse-x, 50vw) var(--mouse-y, 30vh), rgba(6, 182, 212, 0.14), rgba(99, 102, 241, 0.07), transparent 70%)'
        }}
      />

      {/* Ambient Animated Nebula Orbs */}
      <div className="ambient-orb orb-1" />
      <div className="ambient-orb orb-2" />
      <div className="ambient-orb orb-3" />
      <div className="ambient-orb orb-4" />

      {/* Animated Scanline Laser */}
      <div className="scanline-laser" />

      {/* Cyber Grid pattern */}
      <div className="cyber-grid absolute inset-0 opacity-80" />

      {/* Interactive Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full opacity-85" />
    </div>
  );
}
