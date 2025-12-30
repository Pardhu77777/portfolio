import React, { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Aperture, Camera, Code, Film, Headphones, Sparkles, Video } from "lucide-react";

const splashIcons = [
  { type: "icon", Icon: Aperture },
  { type: "icon", Icon: Camera },
  { type: "icon", Icon: Video },
  { type: "icon", Icon: Film },
  { type: "icon", Icon: Code },
  { type: "icon", Icon: Headphones },
  { type: "icon", Icon: Sparkles },
  { type: "image", src: "/assets/icons/html.png" },
  { type: "image", src: "/assets/icons/css.png" },
  { type: "image", src: "/assets/icons/js.png" },
  { type: "image", src: "/assets/icons/python.png" },
  { type: "image", src: "/assets/icons/photoshop.png" },
  { type: "image", src: "/assets/icons/premiere-pro.png" },
  { type: "image", src: "/assets/icons/after-effects.png" },
  { type: "image", src: "/assets/icons/vs-code.png" },
  { type: "image", src: "/assets/icons/obs.png" },
  { type: "image", src: "/assets/icons/vmix.png" },
  { type: "image", src: "/assets/icons/live-stream.png" },
];

function SplashScreen({ durationMs = 2400 }) {
  const icons = useMemo(() => {
    return Array.from({ length: 50 }, (_, index) => {
      const item = splashIcons[index % splashIcons.length];
      const delay = (index * 0.1) % 0.9;
      const size = 18 + (index % 6) * 6;
      const left = 6 + (index * 6.1) % 88;
      const opacity = 0.5 + (index % 4) * 0.1;
      return { ...item, delay, size, left, opacity };
    });
  }, []);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      document.body.style.overflow = original;
    }, durationMs);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = original;
    };
  }, [durationMs]);

  return (
    <motion.div
      className="splash-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {icons.map((item, index) => (
          <motion.div
            key={`rain-${index}`}
            className="absolute -top-16 text-cyan-200/80"
            style={{ left: `${item.left}%`, opacity: item.opacity }}
            initial={{ y: -80 }}
            animate={{ y: "120vh" }}
            transition={{ duration: 3.6, delay: item.delay, ease: "easeInOut" }}
          >
            {item.type === "image" ? (
              <img src={item.src} alt="" style={{ width: item.size, height: item.size }} />
            ) : (
              <item.Icon size={item.size} />
            )}
          </motion.div>
        ))}
      </div>
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-[0.5em] text-slate-400">
          Loading
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-gradient">Pardhu Mopidevi</h1>
        <div className="mx-auto mt-6 h-1 w-40 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full w-1/2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
            animate={{ x: ["-40%", "140%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default SplashScreen;
