import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", hash: "#skills" },
  { label: "Works", hash: "#works" },
  { label: "Contact", hash: "#contact" },
];

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const sectionIds = ["#home", "#about", "#skills", "#works", "#contact"];

    function handleScroll() {
      setScrolled(window.scrollY > 80);
      let current = "#home";
      const aboutEl = document.querySelector("#about");
      if (aboutEl) {
        const aboutRect = aboutEl.getBoundingClientRect();
        if (aboutRect.top > 160) {
          setActiveHash("#home");
          return;
        }
      }

      sectionIds.forEach((id) => {
        const el = document.querySelector(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 220 && rect.bottom > 220) {
          current = id;
        }
      });
      setActiveHash(current);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleHashClick(hash) {
    if (location.pathname !== "/") {
      navigate(`/${hash}`);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setOpen(false);
  }

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-colors duration-300 ${
        scrolled ? "border-b border-white/10 bg-black/50 backdrop-blur" : "border-b-0 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 md:px-6">
        <Link to="/" className="text-base font-semibold text-cyan-300 md:text-lg">
          Pardhu Mopidevi
        </Link>
        <nav className="hidden items-center gap-6 text-xs text-slate-200 md:flex">
          {navItems.map((item) => {
            const isActive = item.hash
              ? activeHash === item.hash && location.pathname === "/"
              : location.pathname === item.path;
            const classes = `relative pb-1 transition hover:text-cyan-300 ${
              isActive ? "text-cyan-300" : "text-slate-200"
            }`;
            return (
              <span key={item.label}>
                {item.path ? (
                  <Link className={classes} to={item.path}>
                    {item.label}
                    {isActive && (
                      <span className="absolute left-0 right-0 -bottom-1 h-px bg-cyan-400" />
                    )}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className={classes}
                    onClick={() => handleHashClick(item.hash)}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute left-0 right-0 -bottom-1 h-px bg-cyan-400" />
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
          <button
            type="button"
            className="md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-black/70 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm">
            {navItems.map((item) => (
              <span key={`mobile-${item.label}`}>
                {item.path ? (
                  <Link
                    className="block"
                    to={item.path}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="text-left"
                    onClick={() => handleHashClick(item.hash)}
                  >
                    {item.label}
                  </button>
                )}
              </span>
            ))}
            <button
              type="button"
              className="neon-button w-fit px-4 py-2 text-xs"
              onClick={() => handleHashClick("#contact")}
            >
              Let's Connect
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
