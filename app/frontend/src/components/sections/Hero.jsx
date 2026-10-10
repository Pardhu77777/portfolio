import React, { useEffect, useState } from "react";
import { ArrowRight, Clapperboard, Code2, Terminal } from "lucide-react";
import { roles } from "../../data/portfolioData";

function useTypedRoles() {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    function tick() {
      const current = roles[roleIndex].title;
      if (!deleting) {
        charIndex += 1;
        setTyped(current.slice(0, charIndex));
        if (charIndex >= current.length) {
          deleting = true;
          timeoutId = setTimeout(tick, 1600);
          return;
        }
        timeoutId = setTimeout(tick, 65);
      } else {
        charIndex -= 1;
        setTyped(current.slice(0, Math.max(0, charIndex)));
        if (charIndex <= 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          setIndex(roleIndex);
          timeoutId = setTimeout(tick, 300);
          return;
        }
        timeoutId = setTimeout(tick, 35);
      }
    }

    tick();
    return () => clearTimeout(timeoutId);
  }, []);

  return { index, typed };
}

function Hero() {
  const { index, typed } = useTypedRoles();
  const role = roles[index];

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="blob -left-24 top-0 h-80 w-80 bg-sky-300/20" />
      <div className="blob left-1/3 top-1/2 h-64 w-64 bg-white/10" />
      <div className="blob -right-16 top-10 h-96 w-96 bg-sky-200/20" />
      <div className="blob bottom-0 right-1/4 h-60 w-60 bg-blue-900/30" />
      <div className="container-site relative grid items-center gap-14 pb-20 pt-10 md:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28">
        <div>
          <span className="pill">
            <span className="h-2 w-2 rounded-full bg-emerald-500" /> Open to opportunities
          </span>

          <h1 className="mt-6 font-display text-[44px] font-bold leading-[1.04] tracking-tight sm:text-[60px] lg:text-[72px]">
            Hi, I'm <br />
            <span className="text-gradient-anim">Pardhu Mopidevi</span>
          </h1>

          <p className="mt-6 min-h-[2.2em] font-display text-xl font-semibold sm:text-2xl">
            <span className="text-muted">I'm a </span>
            <span className="caret text-accent">
              {typed}
            </span>
          </p>

          <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-muted">
            Multi-skilled professional with hands-on expertise across software development and media
            production roles.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a className="btn-grad" href="#works">
              View My Work <ArrowRight size={16} />
            </a>
            <a className="btn-ghost" href="#about">
              About Me
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[460px]">
          <div
            className="absolute -inset-6 rounded-[44px] opacity-60 blur-2xl transition-colors duration-700"
            style={{ background: `radial-gradient(circle at 30% 30%, ${role.accent}55, transparent 65%)` }}
          />
          <div className="spin-border relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[29px] bg-surface">
              {roles.map((item, i) => (
                <img
                  key={item.image}
                  src={item.image}
                  alt={item.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              ))}
            </div>
          </div>

          <div className="float absolute -left-5 top-[18%] hidden h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-800 shadow-xl shadow-blue-950/30 sm:flex">
            <Code2 size={20} />
          </div>
          <div className="float-delay absolute -right-5 top-[42%] hidden h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-800 shadow-xl shadow-blue-950/30 sm:flex">
            <Clapperboard size={20} />
          </div>
          <div className="float absolute -left-3 bottom-[22%] hidden h-10 w-10 items-center justify-center rounded-xl bg-white text-sky-600 shadow-xl shadow-blue-950/30 sm:flex">
            <Terminal size={17} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
