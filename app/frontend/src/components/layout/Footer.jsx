import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Instagram, Linkedin, Youtube } from "lucide-react";

const socialLinks = [
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/pardhu-mopidevi", Icon: Linkedin,  accent: "#0077b5" },
  { label: "Instagram", href: "https://www.instagram.com/pardhu.77",          Icon: Instagram, accent: "#e1306c" },
  { label: "YouTube",   href: "https://www.youtube.com/@7PMJourney",           Icon: Youtube,   accent: "#ff0000" },
];

function Footer() {
  return (
    <footer id="footer" className="relative border-t border-white/[0.06] py-10 text-sm text-slate-500">
      {/* Top gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none" />
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-purple-500/[0.03] to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
          {/* Socials */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, Icon, accent }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-colors duration-200"
                whileHover={{
                  scale: 1.15,
                  color: accent,
                  borderColor: `${accent}40`,
                  boxShadow: `0 0 18px ${accent}35, 0 0 40px ${accent}15`,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.18 }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-center space-y-0.5">
            <p className="text-[13px] text-slate-400">
              © 2026{" "}
              <span className="text-gradient-cyan font-semibold">Pardhu Mopidevi</span>
              . All rights reserved.
            </p>
            <p className="text-[12px] text-slate-600">
              Built with passion for technology and media.
            </p>
          </div>

          {/* Back to top */}
          <motion.a
            href="#top"
            className="flex items-center gap-2 text-[13px] text-slate-500 transition hover:text-cyan-300"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            Back to Top
            <motion.span
              className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]"
              whileHover={{ borderColor: "rgba(0,240,255,0.35)", boxShadow: "0 0 16px rgba(0,240,255,0.2)" }}
            >
              <ArrowUp size={14} />
            </motion.span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
