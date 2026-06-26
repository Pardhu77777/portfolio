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
  { type: "image", src: "https://pub-74e1ba505c0e439897158937c7718eb7.r2.dev/icons/html.png" },
  { type: "image", src: "https://pub-74e1ba505c0e439897158937c7718eb7.r2.dev/icons/css.png" },
  { type: "image", src: "https://pub-74e1ba505c0e439897158937c7718eb7.r2.dev/icons/js.png" },
  { type: "image", src: "https://pub-74e1ba505c0e439897158937c7718eb7.r2.dev/icons/python.png" },
  { type: "image", src: "https://pub-74e1ba505c0e439897158937c7718eb7.r2.dev/icons/photoshop.png" },
  { type: "image", src: "https://pub-74e1ba505c0e439897158937c7718eb7.r2.dev/icons/premiere-pro.png" },
  { type: "image", src: "https://pub-74e1ba505c0e439897158937c7718eb7.r2.dev/icons/after-effects.png" },
  { type: "image", src: "https://pub-74e1ba505c0e439897158937c7718eb7.r2.dev/icons/vs%20code.png" },
  { type: "image", src: "https://pub-74e1ba505c0e439897158937c7718eb7.r2.dev/icons/obs.png" },
  { type: "image", src: "https://pub-74e1ba505c0e439897158937c7718eb7.r2.dev/icons/vmix.png" },
  { type: "image", src: "https://pub-74e1ba505c0e439897158937c7718eb7.r2.dev/icons/live%20stream.png" },
];

function SplashScreen({ durationMs = 2600 }) {
  const icons = useMemo(() => {
    return Array.from({ length: 50 }, (_, index) => {
      const item = splashIcons[index % splashIcons.length];
      const delay = (index * 0.1) % 0.9;
      const size = 18 + (index % 6) * 6;
      const left = 6 + (index * 6.1) % 88;
      const opacity = 0.4 + (index % 4) * 0.12;
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
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.7 }}
    >
      {/* Falling icons rain */}
      <div className="absolute inset-0 overflow-hidden">
        {icons.map((item, index) => (
          <motion.div
            key={`rain-${index}`}
            className="absolute -top-16 text-cyan-200/70"
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

      {/* Center content with orbital rings */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Outer orbital ring */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 300, height: 300,
            border: "1px dashed rgba(168,85,247,0.22)",
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full"
            style={{
              background: "#a855f7",
              boxShadow: "0 0 8px #a855f7, 0 0 16px rgba(168,85,247,0.5)",
            }}
          />
        </motion.div>

        {/* Inner orbital ring */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 210, height: 210,
            border: "1px solid rgba(0,240,255,0.25)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full"
            style={{
              background: "#00f0ff",
              boxShadow: "0 0 10px #00f0ff, 0 0 20px rgba(0,240,255,0.5)",
            }}
          />
        </motion.div>

        {/* Center glow */}
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{ width: 160, height: 160, background: "radial-gradient(circle, rgba(0,240,255,0.15), transparent 70%)" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Text content */}
        <motion.div
          className="relative text-center px-8"
          initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
        >
          <motion.p
            className="text-[10px] uppercase tracking-[0.6em] text-slate-500"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Loading
          </motion.p>
          <motion.h1
            className="mt-3 text-3xl font-bold text-gradient"
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Pardhu Mopidevi
          </motion.h1>
          {/* Progress bar */}
          <motion.div
            className="mx-auto mt-6 h-[3px] w-44 overflow-hidden rounded-full bg-white/[0.07]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #00f0ff, #a855f7, #f43f5e)",
              }}
              animate={{ x: ["-50%", "150%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default SplashScreen;
