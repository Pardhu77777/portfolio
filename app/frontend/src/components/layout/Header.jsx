import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";

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

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 12);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  function handleHashClick(hash) {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate(`/${hash}`);
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }

  const isActive = (item) => item.path && location.pathname === item.path;
  const linkClass = (item) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      isActive(item) ? "bg-white/15 text-white" : "text-muted hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-40 px-3 pt-3">
      <div
        className={`mx-auto flex h-16 max-w-site items-center justify-between rounded-full border px-3 pl-6 transition duration-300 ${
          scrolled
            ? "border-white/15 bg-[#1e3a8a]/90 shadow-[0_12px_40px_-18px_rgba(11,27,63,0.8)]"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link to="/" className="font-display text-[17px] font-bold tracking-tight">
          <span className="text-gradient">Pardhu</span> <span className="text-ink">Mopidevi</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) =>
            item.path ? (
              <Link key={item.label} to={item.path} className={linkClass(item)}>
                {item.label}
              </Link>
            ) : (
              <button key={item.label} type="button" className={linkClass(item)} onClick={() => handleHashClick(item.hash)}>
                {item.label}
              </button>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" className="btn-grad hidden h-10 px-5 md:inline-flex" onClick={() => handleHashClick("#contact")}>
            Let's Connect
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-site rounded-3xl border border-white/15 bg-[#1e3a8a] p-3 shadow-2xl md:hidden">
          <nav className="flex flex-col">
            {navItems.map((item) =>
              item.path ? (
                <Link key={item.label} to={item.path} className={`${linkClass(item)} py-3 text-[15px]`}>
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  type="button"
                  className={`${linkClass(item)} py-3 text-left text-[15px]`}
                  onClick={() => handleHashClick(item.hash)}
                >
                  {item.label}
                </button>
              )
            )}
          </nav>
          <button type="button" className="btn-grad mt-2 w-full" onClick={() => handleHashClick("#contact")}>
            Let's Connect <ArrowRight size={16} />
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
