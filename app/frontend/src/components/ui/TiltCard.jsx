import React, { useState } from "react";
import { motion } from "framer-motion";

function TiltCard({ children, className = "", tiltStrength = 7, ...props }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  function handleMove(event) {
    if (window.innerWidth < 768) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotate({
      x: -((y - centerY) / tiltStrength),
      y:  ((x - centerX) / tiltStrength),
    });
    setGlowPos({
      x: (x / rect.width)  * 100,
      y: (y / rect.height) * 100,
    });
  }

  function handleLeave() {
    setRotate({ x: 0, y: 0 });
    setHovered(false);
    setGlowPos({ x: 50, y: 50 });
  }

  return (
    <motion.div
      className={`tilt-layer ${className}`}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
        scale: hovered ? 1.04 : 1,
      }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 700,
        boxShadow: hovered
          ? "0 40px 80px -10px rgba(0,0,0,0.65), 0 0 50px rgba(0,240,255,0.18), 0 0 100px rgba(168,85,247,0.1)"
          : "0 10px 30px -10px rgba(0,0,0,0.3)",
        position: "relative",
        overflow: "hidden",
      }}
      {...props}
    >
      {/* Mouse-follow radial glow */}
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(220px circle at ${glowPos.x}% ${glowPos.y}%, rgba(0,240,255,0.09), transparent 70%)`,
        }}
      />
      {/* Top edge shimmer when hovered */}
      {hovered && (
        <div
          className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-px"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(0,240,255,0.6) ${glowPos.x}%, transparent)`,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}

export default TiltCard;
