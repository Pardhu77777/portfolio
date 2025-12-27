import React, { useState } from "react";
import { motion } from "framer-motion";

function TiltCard({ children, className = "", tiltStrength = 12, ...props }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  function handleMove(event) {
    if (window.innerWidth < 768) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotate({
      x: -((y - centerY) / tiltStrength),
      y: (x - centerX) / tiltStrength,
    });
  }

  function handleLeave() {
    setRotate({ x: 0, y: 0 });
    setHovered(false);
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
        scale: hovered ? 1.02 : 1,
      }}
      transition={{ duration: 0.2 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1200,
        boxShadow: hovered
          ? "0 25px 50px -12px rgba(0, 240, 255, 0.35)"
          : "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default TiltCard;
