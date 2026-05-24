import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[100] hidden md:block"
      style={{
        left: pos.x,
        top: pos.y,
        opacity: visible ? 1 : 0,
        transform: "translate(-50%, -50%)",
        transition: "opacity 0.3s",
      }}
    >
      <div
        className="h-[400px] w-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.72 0.22 250 / 0.12), transparent 60%)",
        }}
      />
    </div>
  );
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed left-0 right-0 top-0 z-[90] h-[2px] bg-transparent">
      <div
        className="h-full transition-[width] duration-150"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, oklch(0.72 0.22 250), oklch(0.65 0.27 305))",
          boxShadow: "0 0 12px oklch(0.7 0.25 280 / 0.8)",
        }}
      />
    </div>
  );
}

export function Particles() {
  const [particles] = useState(() =>
    Array.from({ length: 28 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 8,
      duration: Math.random() * 10 + 10,
      hue: Math.random() > 0.5 ? 250 : 305,
    })),
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `oklch(0.8 0.2 ${p.hue})`,
            boxShadow: `0 0 ${p.size * 4}px oklch(0.8 0.2 ${p.hue} / 0.8)`,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
}

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);
  if (done) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background">
      <div className="relative">
        <div
          className="absolute inset-0 animate-spin-slow rounded-full border border-transparent"
          style={{
            background: "conic-gradient(from 0deg, transparent, oklch(0.72 0.22 250), transparent)",
            mask: "radial-gradient(closest-side, transparent 70%, #000 71%)",
            WebkitMask: "radial-gradient(closest-side, transparent 70%, #000 71%)",
            width: 120,
            height: 120,
          }}
        />
        <div className="flex h-[120px] w-[120px] items-center justify-center">
          <span className="text-gradient-neon font-display text-2xl font-bold">SMB</span>
        </div>
      </div>
    </div>
  );
}
