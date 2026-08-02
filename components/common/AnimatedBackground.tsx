"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  o: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: Particle[] = [];
    let rafId: number;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width;
      canvas!.height = height;
      const count = Math.min(70, Math.floor((width * height) / 22000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.4,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
        o: Math.random() * 0.5 + 0.2,
      }));
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(180, 200, 255, ${p.o})`;
        ctx!.fill();
      });
      rafId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);

    if (!prefersReducedMotion) {
      rafId = requestAnimationFrame(draw);
    } else {
      draw();
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg-primary">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />

      {/* Blurred glowing blobs */}
      <div className="absolute -left-40 -top-40 h-[520px] w-[520px] animate-float-slow rounded-full bg-accent-violet/25 blur-[140px]" />
      <div className="absolute right-[-160px] top-1/3 h-[480px] w-[480px] animate-float rounded-full bg-accent-blue/20 blur-[140px]" />
      <div className="absolute bottom-[-200px] left-1/3 h-[560px] w-[560px] animate-float-slow rounded-full bg-accent-cyan/20 blur-[160px]" />

      {/* Star field */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20% 30%, white, transparent), radial-gradient(1px 1px at 70% 60%, white, transparent), radial-gradient(1px 1px at 40% 80%, white, transparent), radial-gradient(1px 1px at 90% 20%, white, transparent), radial-gradient(1.5px 1.5px at 55% 45%, white, transparent)",
          backgroundSize: "600px 600px",
        }}
      />

      {/* Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Noise texture */}
      <div className="noise-overlay" />
    </div>
  );
}
