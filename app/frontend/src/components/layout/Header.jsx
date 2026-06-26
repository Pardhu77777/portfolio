import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Home, User, Layers, Briefcase, Mail, ArrowRight } from "lucide-react";

const navItems = [
  { label: "Home",    path: "/",        hash: null,       Icon: Home },
  { label: "About",   path: "/about",   hash: null,       Icon: User },
  { label: "Skills",  path: null,       hash: "#skills",  Icon: Layers },
  { label: "Works",   path: null,       hash: "#works",   Icon: Briefcase },
  { label: "Contact", path: null,       hash: "#contact", Icon: Mail },
];

function Header() {
  const location  = useLocation();
  const navigate  = useNavigate();
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const sectionIds = ["#home", "#about", "#skills", "#works", "#contact"];
    function handleScroll() {
      setScrolled(window.scrollY > 80);
      let current = "#home";
      const aboutEl = document.querySelector("#about");
      if (aboutEl && aboutEl.getBoundingClientRect().top > 160) {
        setActiveHash("#home");
        return;
      }
      sectionIds.forEach((id) => {
        const el = document.querySelector(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 220 && rect.bottom > 220) current = id;
      });
      setActiveHash(current);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function handleHashClick(hash) {
    if (location.pathname !== "/") {
      navigate(`/${hash}`);
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  }

  return (
    <>
      <header
        className={`fixed top-0 z-40 w-full transition-all duration-300 ${
          scrolled ? "bg-black/55 backdrop-blur-2xl" : "bg-transparent"
        }`}
      >
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none" />
        )}

        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          {/* Logo */}
          <Link to="/" className="group">
            <span className="text-sm font-bold tracking-tight md:text-base">
              <span className="text-gradient-cyan">Pardhu</span>
              <span className="ml-1 text-white/70">Mopidevi</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 text-[13px] md:flex">
            {navItems.map((item) => {
              const isActive = item.hash
                ? activeHash === item.hash && location.pathname === "/"
                : location.pathname === item.path;
              const cls = `relative pb-1 transition-colors duration-200 ${
                isActive ? "text-cyan-300" : "text-slate-400 hover:text-white"
              }`;
              return (
                <span key={item.label}>
                  {item.path ? (
                    <Link className={cls} to={item.path}>
                      {item.label}
                      {isActive && (
                        <span className="absolute left-0 right-0 -bottom-1 h-px rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
                      )}
                    </Link>
                  ) : (
                    <button type="button" className={cls} onClick={() => handleHashClick(item.hash)}>
                      {item.label}
                      {isActive && (
                        <span className="absolute left-0 right-0 -bottom-1 h-px rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
                      )}
                    </button>
                  )}
                </span>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="neon-button hidden px-4 py-2 text-xs md:inline-flex"
              onClick={() => handleHashClick("#contact")}
            >
              Let's Connect
            </button>
            {/* Hamburger */}
            <button
              type="button"
              aria-label="Toggle menu"
              className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-400/30 hover:text-white md:hidden"
              onClick={() => setOpen((p) => !p)}
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0,   opacity: 1 }}
                    exit={{   rotate:  90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X size={18} />
                  </motion.span>
                ) : (
                  <motion.span key="menu"
                    initial={{ rotate: 90,  opacity: 0 }}
                    animate={{ rotate: 0,   opacity: 1 }}
                    exit={{   rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu size={18} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ───────────────────────── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />

            {/* Slide-down panel */}
            <motion.div
              className="fixed left-0 right-0 top-[52px] z-40 md:hidden"
              initial={{ opacity: 0, y: -16, scaleY: 0.92 }}
              animate={{ opacity: 1, y: 0,   scaleY: 1 }}
              exit={{   opacity: 0, y: -16, scaleY: 0.92 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ originY: 0 }}
            >
              <div
                className="mx-3 rounded-2xl border border-white/[0.09] px-5 py-5"
                style={{
                  background: "rgba(10,10,18,0.96)",
                  backdropFilter: "blur(32px)",
                  WebkitBackdropFilter: "blur(32px)",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,240,255,0.06)",
                }}
              >
                {/* Top accent line */}
                <div className="mb-5 h-px bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-transparent" />

                <nav className="flex flex-col gap-1">
                  {navItems.map((item, i) => {
                    const { Icon } = item;
                    const isActive = item.hash
                      ? activeHash === item.hash && location.pathname === "/"
                      : location.pathname === item.path;

                    const inner = (
                      <motion.div
                        className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                          isActive
                            ? "bg-cyan-400/10 text-cyan-300"
                            : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
                        }`}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1,  x: 0 }}
                        transition={{ duration: 0.25, delay: i * 0.05 }}
                      >
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-lg"
                          style={{
                            background: isActive ? "rgba(0,240,255,0.12)" : "rgba(255,255,255,0.04)",
                            border: isActive ? "1px solid rgba(0,240,255,0.25)" : "1px solid rgba(255,255,255,0.06)",
                          }}
                        >
                          <Icon size={15} />
                        </div>
                        <span className="text-[14px] font-medium">{item.label}</span>
                        {isActive && (
                          <div className="ml-auto h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        )}
                      </motion.div>
                    );

                    return (
                      <span key={item.label}>
                        {item.path ? (
                          <Link to={item.path} onClick={() => setOpen(false)}>{inner}</Link>
                        ) : (
                          <button type="button" className="w-full text-left" onClick={() => handleHashClick(item.hash)}>
                            {inner}
                          </button>
                        )}
                      </span>
                    );
                  })}
                </nav>

                {/* Bottom CTA */}
                <motion.div
                  className="mt-5"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.28 }}
                >
                  <div className="mb-5 h-px bg-gradient-to-r from-transparent via-purple-400/25 to-transparent" />
                  <button
                    type="button"
                    className="neon-button attention w-full justify-center py-3 text-sm"
                    onClick={() => handleHashClick("#contact")}
                  >
                    Let's Connect <ArrowRight size={15} />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
