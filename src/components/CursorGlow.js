"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfigOuter = { damping: 25, stiffness: 250, mass: 0.5 };
  const springConfigInner = { damping: 35, stiffness: 450, mass: 0.1 };
  
  const cursorXSpring = useSpring(cursorX, springConfigOuter);
  const cursorYSpring = useSpring(cursorY, springConfigOuter);

  const cursorXSpringInner = useSpring(cursorX, springConfigInner);
  const cursorYSpringInner = useSpring(cursorY, springConfigInner);

  useEffect(() => {
    // Only enable on fine pointer (desktop) and non-reduced-motion environments
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glow */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] bg-[#C5A880]/15 blur-[6px] border border-[#C5A880]/30 -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[9999] bg-[#C5A880] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorXSpringInner,
          y: cursorYSpringInner,
        }}
      />
    </>
  );
}
