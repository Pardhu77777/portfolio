import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Bot,
  Brain,
  Camera,
  Church,
  Clapperboard,
  Code2,
  Component,
  Cross,
  Cpu,
  Database,
  FileCode,
  GitBranch,
  Globe,
  Heart,
  Laptop,
  MessageCircle,
  Monitor,
  Music,
  Orbit,
  Paintbrush,
  Palette,
  PenTool,
  Rocket,
  Sparkles,
  Terminal,
  Film,
  Video,
  Wand2,
} from "lucide-react";

function BrandBadge({ label, size }) {
  const fontSize = Math.max(10, Math.round(size * 0.45));
  return (
    <div
      className="flex items-center justify-center rounded-md border border-white/15 bg-black/40 text-[10px] font-semibold uppercase tracking-wide text-white"
      style={{ width: size, height: size, fontSize }}
    >
      {label}
    </div>
  );
}

function makeBadge(label, color) {
  return { type: "badge", label, color };
}

const iconSet = [
  makeBadge("Ps", "#00f0ff"),
  makeBadge("Pr", "#a855f7"),
  makeBadge("Ae", "#f43f5e"),
  makeBadge("Gpt", "#22c55e"),
  makeBadge("Gem", "#3b82f6"),
  makeBadge("JS", "#f59e0b"),
  makeBadge("TS", "#00f0ff"),
  makeBadge("CSS", "#a855f7"),
  { Icon: Paintbrush, color: "#00f0ff" },
  { Icon: Clapperboard, color: "#a855f7" },
  { Icon: Sparkles, color: "#f43f5e" },
  { Icon: Bot, color: "#00f0ff" },
  { Icon: MessageCircle, color: "#3b82f6" },
  { Icon: Brain, color: "#f59e0b" },
  { Icon: Orbit, color: "#22c55e" },
  { Icon: Cross, color: "#f43f5e" },
  { Icon: Church, color: "#a855f7" },
  { Icon: BookOpen, color: "#00f0ff" },
  { Icon: Heart, color: "#f59e0b" },
  { Icon: Camera, color: "#00f0ff" },
  { Icon: Video, color: "#a855f7" },
  { Icon: Music, color: "#f43f5e" },
  { Icon: GitBranch, color: "#3b82f6" },
  { Icon: Database, color: "#22c55e" },
  { Icon: Cpu, color: "#f59e0b" },
  { Icon: Monitor, color: "#00f0ff" },
  { Icon: Palette, color: "#a855f7" },
  { Icon: PenTool, color: "#22c55e" },
  { Icon: Wand2, color: "#3b82f6" },
  { Icon: Globe, color: "#f59e0b" },
  { Icon: Code2, color: "#00f0ff" },
  { Icon: Laptop, color: "#a855f7" },
  { Icon: Film, color: "#22c55e" },
  { Icon: Rocket, color: "#f43f5e" },
  { Icon: Terminal, color: "#00f0ff" },
  { Icon: FileCode, color: "#a855f7" },
  { Icon: Component, color: "#22c55e" },
];

function createIcons() {
  return iconSet.map((icon, index) => {
    const size = 20 + Math.random() * 24;
    return {
      id: index,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      size,
      opacity: 0.08 + Math.random() * 0.12,
      blur: Math.random() > 0.5,
      duration: 15 + Math.random() * 25,
      delay: Math.random() * 10,
      direction: Math.random() > 0.5 ? 1 : -1,
      color: icon.color,
      Icon: icon.Icon,
      type: icon.type,
      label: icon.label,
    };
  });
}

const dots = Array.from({ length: 15 }, (_, index) => ({
  id: index,
  size: 2 + Math.random() * 4,
  left: Math.random() * 100,
  top: Math.random() * 100,
  opacity: 0.1 + Math.random() * 0.15,
  duration: 18 + Math.random() * 20,
}));

function FloatingIcons() {
  const icons = useMemo(() => createIcons(), []);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 768 : true
  );

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 768);
    }

    function handleMove(event) {
      if (!isDesktop) return;
      const x = (event.clientX / window.innerWidth - 0.5) * 20;
      const y = (event.clientY / window.innerHeight - 0.5) * 20;
      setMouse({ x, y });
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMove);
    };
  }, [isDesktop]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {icons.map((item) => (
        <motion.div
          key={item.id}
          className="absolute"
          style={{
            left: `${item.initialX}%`,
            top: `${item.initialY}%`,
            opacity: item.opacity,
            filter: item.blur ? "blur(1px)" : "none",
          }}
          animate={{
            y: [0, item.direction * 50, 0],
            x: [0, item.direction * 20, 0],
            rotate: [0, item.direction * 15, 0],
            translateX: isDesktop ? mouse.x * (item.blur ? 0.3 : 0.5) : 0,
            translateY: isDesktop ? mouse.y * (item.blur ? 0.3 : 0.5) : 0,
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.type === "badge" ? (
            <BrandBadge label={item.label} size={item.size} />
          ) : (
            <item.Icon size={item.size} color={item.color} />
          )}
        </motion.div>
      ))}
      {dots.map((dot) => (
        <motion.span
          key={`dot-${dot.id}`}
          className="absolute rounded-full"
          style={{
            width: dot.size,
            height: dot.size,
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            background:
              dot.id % 2 === 0 ? "rgba(0, 240, 255, 0.6)" : "rgba(168, 85, 247, 0.6)",
            opacity: dot.opacity,
          }}
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: dot.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export default FloatingIcons;
