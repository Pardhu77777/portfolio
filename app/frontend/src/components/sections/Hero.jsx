import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Clapperboard, Sparkles } from "lucide-react";
import { roles } from "../../data/portfolioData";

function Hero() {
  const [index, setIndex] = useState(0);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [typed, setTyped] = useState("");
  const [showScroll, setShowScroll] = useState(true);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    let indexValue = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    function tick() {
      const current = roles[indexValue]?.title || "";
      if (!deleting) {
        charIndex += 1;
        setTyped(current.slice(0, charIndex));
        if (charIndex >= current.length) {
          deleting = true;
          timeoutId = setTimeout(tick, 1200);
          return;
        }
        timeoutId = setTimeout(tick, 70);
      } else {
        charIndex -= 1;
        setTyped(current.slice(0, Math.max(0, charIndex)));
        if (charIndex <= 0) {
          deleting = false;
          indexValue = (indexValue + 1) % roles.length;
          setIndex(indexValue);
          timeoutId = setTimeout(tick, 300);
          return;
        }
        timeoutId = setTimeout(tick, 45);
      }
    }

    tick();
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setShowScroll(rect.top <= 0 && rect.bottom >= window.innerHeight * 0.6);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleMouseMove(e) {
      if (window.innerWidth < 768) return;
      setMouse({
        x: (e.clientX / window.innerWidth  - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  function handleCardMove(event) {
    if (window.innerWidth < 768) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width  / 2) / rect.width;
    const y = (event.clientY - rect.top  - rect.height / 2) / rect.height;
    setRotate({ x: y * -22, y: x * 22 });
  }

  function handleCardLeave() {
    setRotate({ x: 0, y: 0 });
  }

  const role    = roles[index];
  const roleGlow = role.accent || "#a855f7";

  return (
    <section className="section-hero" ref={sectionRef} id="home">
      <div className="mx-auto w-full grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:gap-12 lg:grid-cols-2 xl:max-w-7xl 2xl:max-w-[1400px]">

        {/* ── Left Column ─────────────────────────────── */}
        <div>
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hello, I'm 👋
          </motion.p>

          <motion.h1
            className="mt-4 font-bold leading-[1.1] tracking-tight" style={{ fontSize: "clamp(2rem, 4.5vw, 4.25rem)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="text-gradient-animated">Pardhu Mopidevi</span>
          </motion.h1>

          <motion.div
            className="mt-5 flex items-center gap-3 font-semibold" style={{ fontSize: "clamp(1.1rem, 2vw, 1.6rem)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-slate-300">And I'm a</span>
            <span
              className="border-r-2 border-slate-200/50 pr-2"
              style={{ color: role.accent }}
            >
              {typed}
            </span>
          </motion.div>

          <motion.p
            className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-400 xl:text-[16px]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Multi-skilled professional with hands-on expertise across software development
            and media production roles.
          </motion.p>

          <motion.div
            className="mt-7 flex"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ originX: 0 }}
          >
            <span className="h-px w-28 bg-gradient-to-r from-cyan-400/50 via-purple-400/70 to-transparent" />
          </motion.div>

          <motion.div
            className="mt-7 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <a className="button-ghost" href="#about">About Me</a>
            <a className="button-ghost" href="#works">View My Work</a>
            <a className="neon-button hidden md:inline-flex" href="#contact">
              Let's Connect <ArrowRight size={15} />
            </a>
          </motion.div>
        </div>

        {/* ── Right Column ────────────────────────────── */}
        <div className="relative" style={{ perspective: 1000 }}>

          {/* Parallax layer 1 — far background glow (slowest) */}
          <motion.div
            key={`glow-${role.title}`}
            className="absolute -inset-12 rounded-[40px] blur-3xl pointer-events-none"
            style={{
              background: `radial-gradient(circle at 35% 35%, ${roleGlow}45, transparent 55%), radial-gradient(circle at 80% 20%, rgba(168,85,247,0.28), transparent 60%)`,
            }}
            animate={{
              opacity: [0.7, 1, 0.7],
              scale:   [0.97, 1.05, 0.97],
              x: mouse.x * 8,
              y: mouse.y * 8,
            }}
            transition={{ opacity: { duration: 7, repeat: Infinity, ease: "easeInOut" }, scale: { duration: 7, repeat: Infinity, ease: "easeInOut" }, x: { duration: 0.6 }, y: { duration: 0.6 } }}
          />

          {/* Parallax layer 2 — orbital ring 1 (medium speed) */}
          <motion.div
            className="absolute left-1/2 top-[45%] hidden md:block pointer-events-none rounded-full"
            style={{
              width: 500, height: 500,
              border: `1px solid ${roleGlow}22`,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              rotate: 360,
              x: mouse.x * -14,
              y: mouse.y * -14,
            }}
            transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, x: { duration: 0.5 }, y: { duration: 0.5 } }}
          >
            <div
              className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full"
              style={{
                background: roleGlow,
                boxShadow: `0 0 12px ${roleGlow}, 0 0 24px ${roleGlow}80`,
                animation: "glow-pulse 2s ease-in-out infinite",
              }}
            />
          </motion.div>

          {/* Parallax layer 2b — orbital ring 2 */}
          <motion.div
            className="absolute left-1/2 top-[45%] hidden md:block pointer-events-none rounded-full"
            style={{
              width: 630, height: 630,
              border: "1px solid rgba(168,85,247,0.14)",
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              rotate: -360,
              x: mouse.x * -20,
              y: mouse.y * -20,
            }}
            transition={{ rotate: { duration: 38, repeat: Infinity, ease: "linear" }, x: { duration: 0.7 }, y: { duration: 0.7 } }}
          >
            <div
              className="absolute top-1/2 -right-1.5 -translate-y-1/2 h-2.5 w-2.5 rounded-full"
              style={{
                background: "#a855f7",
                boxShadow: "0 0 10px #a855f7, 0 0 20px rgba(168,85,247,0.5)",
              }}
            />
          </motion.div>

          {/* 3D floating shape A — top right */}
          <motion.div
            className="absolute hidden md:block pointer-events-none"
            style={{
              right: -18, top: "18%",
              width: 38, height: 38,
              background: `rgba(0,240,255,0.07)`,
              border: `1px solid rgba(0,240,255,0.35)`,
              borderRadius: 8,
              boxShadow: `0 0 22px rgba(0,240,255,0.3), inset 0 0 8px rgba(0,240,255,0.06)`,
              transformStyle: "preserve-3d",
            }}
            animate={{
              rotateX: [30, 60, 30],
              rotateY: [45, 100, 45],
              y: [0, -18, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* 3D floating shape B — bottom left */}
          <motion.div
            className="absolute hidden md:block pointer-events-none"
            style={{
              left: -20, bottom: "20%",
              width: 28, height: 28,
              background: `rgba(168,85,247,0.08)`,
              border: `1px solid rgba(168,85,247,0.4)`,
              borderRadius: 6,
              boxShadow: `0 0 18px rgba(168,85,247,0.35), inset 0 0 6px rgba(168,85,247,0.06)`,
              transformStyle: "preserve-3d",
            }}
            animate={{
              rotateX: [20, -30, 20],
              rotateY: [-45, 30, -45],
              y: [0, -14, 0],
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          {/* 3D floating shape C — top left (small diamond) */}
          <motion.div
            className="absolute hidden md:block pointer-events-none"
            style={{
              left: 10, top: "8%",
              width: 20, height: 20,
              background: `rgba(244,63,94,0.08)`,
              border: `1px solid rgba(244,63,94,0.4)`,
              borderRadius: 4,
              boxShadow: `0 0 14px rgba(244,63,94,0.3)`,
              transformStyle: "preserve-3d",
            }}
            animate={{
              rotateX: [45, 80, 45],
              rotateY: [30, -20, 30],
              y: [0, -10, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />

          {/* Rotating BG diamond */}
          <motion.div
            key={`diamond-${role.title}`}
            className="absolute left-1/2 top-[42%] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-[36px] blur-2xl pointer-events-none"
            style={{
              background: `linear-gradient(135deg, ${roleGlow}40, transparent 60%)`,
            }}
            animate={{ rotate: [45, 60, 45], y: [-10, 14, -10] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Rotating border box */}
          <motion.div
            className="absolute left-1/2 top-[42%] h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-[30px] border border-purple-400/20 bg-purple-500/[0.06] pointer-events-none"
            style={{
              boxShadow: `0 0 100px ${roleGlow}40, 0 0 160px rgba(0,0,0,0.5)`,
            }}
            animate={{ rotate: [45, 35, 45], scale: [1, 1.05, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Spinning neon border + hero card */}
          <motion.div
            style={{
              x: mouse.x * -6,
              y: mouse.y * -6,
            }}
            transition={{ duration: 0.4 }}
          >
            <div className="spin-border-wrap">
              <motion.div
                className="relative overflow-hidden rounded-[30px]"
                style={{
                  background: "rgba(20, 20, 30, 0.7)",
                  backdropFilter: "blur(28px)",
                  WebkitBackdropFilter: "blur(28px)",
                  border: "none",
                  boxShadow: `0 0 60px ${roleGlow}30, 0 40px 90px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.07)`,
                  transformStyle: "preserve-3d",
                  perspective: 1000,
                }}
                onMouseMove={handleCardMove}
                onMouseLeave={handleCardLeave}
                animate={{ rotateX: rotate.x, rotateY: rotate.y }}
                transition={{ duration: 0.18 }}
              >
                {/* Inner top shimmer */}
                <div
                  className="absolute top-0 left-0 right-0 h-px pointer-events-none z-10"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${roleGlow}80, transparent)`,
                  }}
                />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={role.image}
                    className="scanlines h-[260px] w-full sm:h-[340px] md:h-[460px] lg:h-[520px] xl:h-[600px] 2xl:h-[660px]"
                    initial={{ scale: 0.95, opacity: 0, filter: "blur(8px)" }}
                    animate={{ scale: 1,    opacity: 1, filter: "blur(0px)" }}
                    exit={  { scale: 0.98, opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.55 }}
                  >
                    <img
                      src={role.image}
                      alt={role.title}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating badges */}
          <FloatingBadge
            className="hidden sm:flex right-[-14px] top-[16%]"
            icon={<Sparkles size={15} className="text-amber-200" />}
            glow="rgba(251,191,36,0.45)"
          />
          <FloatingBadge
            className="hidden sm:flex bottom-[10%] left-[-14px]"
            icon={<Clapperboard size={15} className="text-violet-200" />}
            glow="rgba(167,139,250,0.45)"
          />
        </div>
      </div>

      {showScroll && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.45em] text-slate-600"
          animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>Scroll</span>
          <ChevronDown className="h-3.5 w-3.5" />
        </motion.div>
      )}
    </section>
  );
}

function FloatingBadge({ className, icon, glow }) {
  return (
    <motion.div
      className={`absolute ${className} z-10 items-center justify-center`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div
        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/50"
        style={{ boxShadow: `0 0 24px ${glow}, 0 8px 20px rgba(0,0,0,0.4)` }}
      >
        {icon}
      </div>
    </motion.div>
  );
}

export default Hero;
