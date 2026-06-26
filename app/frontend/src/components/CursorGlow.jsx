import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [visible, setVisible] = useState(false);

  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);

  const slow = { stiffness: 180, damping: 24, mass: 0.8 };
  const fast = { stiffness: 700, damping: 32 };

  const sx = useSpring(mx, slow);
  const sy = useSpring(my, slow);
  const dx = useSpring(mx, fast);
  const dy = useSpring(my, fast);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    function onMove(e) {
      setVisible(true);
      mx.set(e.clientX);
      my.set(e.clientY);
    }
    function onLeave() { setVisible(false); }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [mx, my]);

  if (!visible) return null;

  return (
    <>
      {/* Large ambient blob */}
      <motion.div
        className="fixed pointer-events-none"
        style={{
          x: sx, y: sy,
          translateX: "-50%", translateY: "-50%",
          width: 520, height: 520,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,240,255,0.05), transparent 55%)",
          zIndex: 0,
        }}
      />
      {/* Ring */}
      <motion.div
        className="fixed pointer-events-none rounded-full"
        style={{
          x: sx, y: sy,
          translateX: "-50%", translateY: "-50%",
          width: 44, height: 44,
          border: "1px solid rgba(0,240,255,0.4)",
          boxShadow: "0 0 12px rgba(0,240,255,0.15)",
          zIndex: 9999,
        }}
      />
      {/* Dot */}
      <motion.div
        className="fixed pointer-events-none rounded-full"
        style={{
          x: dx, y: dy,
          translateX: "-50%", translateY: "-50%",
          width: 7, height: 7,
          background: "#00f0ff",
          boxShadow: "0 0 10px rgba(0,240,255,1), 0 0 22px rgba(0,240,255,0.5)",
          zIndex: 9999,
        }}
      />
    </>
  );
}
