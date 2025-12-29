import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Clapperboard, Sparkles } from "lucide-react";
import { roles } from "../../data/portfolioData";

function Hero() {
  const [index, setIndex] = useState(0);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [typed, setTyped] = useState("");
  const [showScroll, setShowScroll] = useState(true);
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
      const visible = rect.top <= 0 && rect.bottom >= window.innerHeight * 0.6;
      setShowScroll(visible);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleMove(event) {
    if (window.innerWidth < 768) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (event.clientY - rect.top - rect.height / 2) / rect.height;
    setRotate({ x: y * -15, y: x * 15 });
  }

  function handleLeave() {
    setRotate({ x: 0, y: 0 });
  }

  const role = roles[index];
  const roleGlow = role.accent || "#a855f7";

  return (
    <section className="section" ref={sectionRef} id="home">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-lg font-semibold uppercase tracking-[0.3em] text-slate-300">
            Hello, I'm 👋
          </p>
          <h1 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">
            <span className="text-gradient">Pardhu Mopidevi</span>
          </h1>
          <div className="mt-6 flex items-center gap-3 text-2xl font-semibold">
            <span className="text-slate-200">And I'm a</span>
            <span
              className="border-r-2 border-slate-200/60 pr-2"
              style={{ color: role.accent }}
            >
              {typed}
            </span>
          </div>
          <p className="mt-6 max-w-xl text-base text-slate-300">
            A multi-skilled professional with hands-on expertise across software development and media
            production roles.
          </p>
          <div className="mt-8 flex">
            <span className="h-px w-24 bg-gradient-to-r from-cyan-400/40 via-purple-400/60 to-cyan-400/40" />
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a className="button-ghost" href="#about">
              About Me
            </a>
            <a className="button-ghost" href="#works">
              View My Work
            </a>
            <a className="neon-button hidden md:inline-flex" href="#contact">
              Let's Connect <ArrowRight size={16} />
            </a>
          </div>
          
        </div>
        <div className="relative">
          <motion.div
            key={`glow-${role.title}`}
            className="absolute -inset-10 rounded-[32px] blur-3xl"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${roleGlow}55, transparent 55%), radial-gradient(circle at 80% 20%, rgba(168,85,247,0.35), transparent 60%)`,
            }}
            animate={{ opacity: [0.7, 1, 0.7], scale: [0.98, 1.04, 0.98] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            key={`diamond-${role.title}`}
            className="absolute left-1/2 top-[40%] h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-[34px] blur-2xl"
            style={{
              background: `linear-gradient(135deg, ${roleGlow}55, transparent 60%)`,
            }}
            animate={{ rotate: [45, 60, 45], y: [-10, 12, -10] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-1/2 top-[40%] h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-purple-400/30 bg-purple-500/10"
            style={{
              boxShadow: `0 0 90px ${roleGlow}55, 0 0 140px rgba(0,0,0,0.45)`,
            }}
            animate={{ rotate: [45, 35, 45], scale: [1, 1.04, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="glass-card relative overflow-hidden rounded-[28px] border border-white/10"
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            animate={{ rotateX: rotate.x, rotateY: rotate.y }}
            transition={{ duration: 0.2 }}
            style={{
              transformStyle: "preserve-3d",
              perspective: 1000,
              boxShadow: `0 0 0 1px ${roleGlow}55, 0 0 40px ${roleGlow}55, 0 35px 80px rgba(0,0,0,0.6)`,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={role.image}
                className="h-[380px] w-full md:h-[440px]"
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={role.image}
                  alt={role.title}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <FloatingBadge
            className="right-[-10px] top-[18%]"
            icon={<Sparkles size={16} className="text-amber-200" />}
            glow="rgba(251, 191, 36, 0.35)"
          />
          <FloatingBadge
            className="bottom-[8%] left-[-10px]"
            icon={<Clapperboard size={16} className="text-violet-200" />}
            glow="rgba(167, 139, 250, 0.35)"
          />
        </div>
      </div>
      {showScroll && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-[10px] uppercase tracking-[0.4em] text-slate-500"
          animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div>Scroll</div>
          <ChevronDown className="mx-auto mt-2 h-4 w-4" />
        </motion.div>
      )}
    </section>
  );
}

function SparkleBadge() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
      <Sparkles size={18} className="text-cyan-200" />
    </div>
  );
}

function FloatingBadge({ className, icon, glow }) {
  return (
    <motion.div
      className={`absolute ${className} z-10`}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/40"
        style={{ boxShadow: `0 0 30px ${glow}` }}
      >
        {icon}
      </div>
    </motion.div>
  );
}

export default Hero;
