import React from "react";
import { ArrowUp, Instagram, Linkedin, Youtube } from "lucide-react";

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pardhu-mopidevi", Icon: Linkedin, hover: "hover:bg-[#0a66c2]" },
  { label: "Instagram", href: "https://www.instagram.com/pardhu.77", Icon: Instagram, hover: "hover:bg-[#e1306c]" },
  { label: "YouTube", href: "https://www.youtube.com/@7PMJourney", Icon: Youtube, hover: "hover:bg-[#ff0000]" },
];

export function SocialIcons({ size = "h-10 w-10" }) {
  return (
    <div className="flex items-center gap-2">
      {socialLinks.map(({ label, href, Icon, hover }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className={`flex ${size} items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition duration-200 hover:-translate-y-0.5 hover:border-transparent ${hover}`}
        >
          <Icon size={17} />
        </a>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer id="footer" className="relative">
      <div className="h-px w-full bg-white/10" />
      <div>
        <div className="container-site flex flex-col items-center justify-between gap-5 py-8 md:flex-row">
          <SocialIcons size="h-9 w-9" />
          <p className="text-sm text-muted">
            © 2026 <span className="font-semibold text-gradient">Pardhu Mopidevi</span>. All rights reserved.
          </p>
          <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="group inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-white">
            Back to Top
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 transition group-hover:-translate-y-0.5">
              <ArrowUp size={15} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
