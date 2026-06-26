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
  Layers,
  Mic,
  MessageCircle,
  Monitor,
  Music,
  Orbit,
  Paintbrush,
  Palette,
  PenTool,
  Radio,
  Rocket,
  Server,
  Shield,
  SlidersHorizontal,
  Sparkles,
  Star,
  Terminal,
  Film,
  Video,
  Wand2,
  Cloud,
  Zap,
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

function makeImage(src, label) {
  return { type: "image", src, label };
}

const iconSet = [
  makeImage(
    "https://pub-74e1ba505c0e439897158937c7718eb7.r2.dev/icons/photoshop.png",
    "Photoshop"
  ),
  makeImage(
    "https://pub-74e1ba505c0e439897158937c7718eb7.r2.dev/icons/premiere-pro.png",
    "Premiere Pro"
  ),
  makeImage(
    "https://pub-74e1ba505c0e439897158937c7718eb7.r2.dev/icons/after-effects.png",
    "After Effects"
  ),
  makeImage(
    "https://pub-74e1ba505c0e439897158937c7718eb7.r2.dev/icons/html.png",
    "HTML"
  ),
  makeImage(
    "https://pub-74e1ba505c0e439897158937c7718eb7.r2.dev/icons/css.png",
    "CSS"
  ),
  makeImage(
    "https://pub-74e1ba505c0e439897158937c7718eb7.r2.dev/icons/js.png",
    "JavaScript"
  ),
  makeImage(
    "https://pub-74e1ba505c0e439897158937c7718eb7.r2.dev/icons/python.png",
    "Python"
  ),
  makeImage(
    "https://pub-74e1ba505c0e439897158937c7718eb7.r2.dev/icons/java.png",
    "Java"
  ),
  makeImage(
    "https://pub-74e1ba505c0e439897158937c7718eb7.r2.dev/icons/vs%20code.png",
    "VS Code"
  ),
  makeImage(
    "https://pub-74e1ba505c0e439897158937c7718eb7.r2.dev/icons/obs.png",
    "OBS"
  ),
  makeImage(
    "https://pub-74e1ba505c0e439897158937c7718eb7.r2.dev/icons/vmix.png",
    "vMix"
  ),
  makeImage(
    "https://pub-74e1ba505c0e439897158937c7718eb7.r2.dev/icons/live%20stream.png",
    "Live Stream"
  ),
  makeImage(
    "https://pub-74e1ba505c0e439897158937c7718eb7.r2.dev/icons/camera.png",
    "Camera"
  ),
  makeImage(
    "https://pub-74e1ba505c0e439897158937c7718eb7.r2.dev/icons/mixing-board.png",
    "Mixing Board"
  ),
  { Icon: Paintbrush, color: "#00f0ff" },
  { Icon: Clapperboard, color: "#a855f7" },
  { Icon: Sparkles, color: "#f43f5e" },
  { Icon: Bot, color: "#00f0ff" },
  { Icon: Star, color: "#f59e0b" },
  { Icon: MessageCircle, color: "#3b82f6" },
  { Icon: Brain, color: "#f59e0b" },
  { Icon: Orbit, color: "#22c55e" },
  { Icon: Cross, color: "#f43f5e" },
  { Icon: Church, color: "#a855f7" },
  { Icon: Shield, color: "#60a5fa" },
  { Icon: BookOpen, color: "#00f0ff" },
  { Icon: Heart, color: "#f59e0b" },
  { Icon: Camera, color: "#00f0ff" },
  { Icon: Video, color: "#a855f7" },
  { Icon: Music, color: "#f43f5e" },
  { Icon: Mic, color: "#22c55e" },
  { Icon: Radio, color: "#f59e0b" },
  { Icon: GitBranch, color: "#3b82f6" },
  { Icon: Database, color: "#22c55e" },
  { Icon: Cpu, color: "#f59e0b" },
  { Icon: Server, color: "#a855f7" },
  { Icon: Cloud, color: "#00f0ff" },
  { Icon: Zap, color: "#f59e0b" },
  { Icon: Monitor, color: "#00f0ff" },
  { Icon: Palette, color: "#a855f7" },
  { Icon: PenTool, color: "#22c55e" },
  { Icon: SlidersHorizontal, color: "#60a5fa" },
  { Icon: Layers, color: "#f43f5e" },
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
      duration: 22 + Math.random() * 28,
      delay: Math.random() * 10,
      direction: Math.random() > 0.5 ? 1 : -1,
      color: icon.color,
      Icon: icon.Icon,
      type: icon.type,
      label: icon.label,
      src: icon.src,
    };
  });
}

const dots = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  size: 2 + Math.random() * 4,
  left: Math.random() * 100,
  top: Math.random() * 100,
  opacity: 0.1 + Math.random() * 0.15,
  duration: 24 + Math.random() * 22,
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
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Animated ambient background orbs */}
      <motion.div
        className="absolute left-[8%] top-[4%] h-[700px] w-[700px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,240,255,0.065), transparent 65%)" }}
        animate={{ x: [0, 60, 0], y: [0, -45, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[4%] top-[8%] h-[580px] w-[580px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.08), transparent 65%)" }}
        animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        className="absolute left-[38%] bottom-[8%] h-[500px] w-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(244,63,94,0.055), transparent 65%)" }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />
      <motion.div
        className="absolute left-[55%] top-[40%] h-[380px] w-[380px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.05), transparent 65%)" }}
        animate={{ x: [0, -35, 0], y: [0, 30, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut", delay: 9 }}
      />

      {icons.map((item) => (
        <motion.div
          key={item.id}
          className="absolute pointer-events-auto"
          style={{
            left: `${item.initialX}%`,
            top: `${item.initialY}%`,
            opacity: item.opacity,
            filter: item.blur ? "blur(1px)" : "none",
          }}
          animate={{
            y: [0, item.direction * 40, 0],
            x: [0, item.direction * 16, 0],
            rotate: [0, item.direction * 10, 0],
            translateX: isDesktop ? mouse.x * (item.blur ? 0.3 : 0.5) : 0,
            translateY: isDesktop ? mouse.y * (item.blur ? 0.3 : 0.5) : 0,
          }}
          whileHover={{
            scale: 1.2,
            opacity: 0.9,
            filter: "drop-shadow(0 0 10px rgba(0,240,255,0.6))",
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
          ) : item.type === "image" ? (
            <img
              src={item.src}
              alt={item.label}
              style={{ width: item.size, height: item.size }}
            />
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
