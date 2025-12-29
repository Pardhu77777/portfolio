import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Github, Instagram, Linkedin, Youtube } from "lucide-react";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pardhu-mopidevi", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com/Pardhu77777", Icon: Github },
  { label: "Instagram", href: "https://www.instagram.com/pardhu.77", Icon: Instagram },
  { label: "YouTube", href: "https://www.youtube.com/@7PMJourney", Icon: Youtube },
];

function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 py-2 text-sm text-slate-400">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-300/60 hover:text-cyan-200"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <div className="text-center md:text-left">
            <p>© 2026 Pardhu Mopidevi. All rights reserved.</p>
            <p>Built with passion for technology and media.</p>
          </div>

          <motion.a
            href="#top"
            className="flex items-center gap-2 text-sm text-slate-300 transition hover:text-cyan-200"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            Back to Top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10">
              <ArrowUp size={14} />
            </span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
