import React, { useEffect, useRef } from "react";

const COLORS = [
  [0, 240, 255],
  [168, 85, 247],
  [244, 63, 94],
  [59, 130, 246],
];

export default function ParticleField({ count = 110 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let w, h;

    function resize() {
      w = canvas.width  = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    const particles = Array.from({ length: count }, () => ({
      x:     Math.random() * window.innerWidth,
      y:     Math.random() * window.innerHeight,
      r:     0.3 + Math.random() * 1.4,
      vx:    (Math.random() - 0.5) * 0.22,
      vy:    -0.08 - Math.random() * 0.28,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      phase: Math.random() * Math.PI * 2,
      rate:  0.012 + Math.random() * 0.022,
    }));

    function draw() {
      ctx.clearRect(0, 0, w, h);
      const now = Date.now() * 0.001;

      for (const p of particles) {
        const alpha = 0.12 + 0.38 * Math.abs(Math.sin(now * p.rate * 60 + p.phase));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${alpha})`;
        ctx.fill();

        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        grd.addColorStop(0, `rgba(${p.color},${alpha * 0.35})`);
        grd.addColorStop(1, `rgba(${p.color},0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -8)    p.y = h + 8;
        if (p.x < -8)    p.x = w + 8;
        if (p.x > w + 8) p.x = -8;
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1, opacity: 0.7 }}
    />
  );
}
