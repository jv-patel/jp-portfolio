"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setIsTouch(!hasHover);
    if (!hasHover) return;

    function onMove(e: MouseEvent) {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    }

    function onOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest("a, button, [data-magnetic], input, textarea"));
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isTouch) return null;

  return (
    <motion.div
      aria-hidden
      className="custom-cursor pointer-events-none fixed left-0 top-0 z-[100] rounded-full mix-blend-difference"
      style={{
        x,
        y,
        width: isHovering ? 48 : 32,
        height: isHovering ? 48 : 32,
        background:
          "radial-gradient(circle, rgba(139,92,246,0.9) 0%, rgba(56,189,248,0.4) 70%, transparent 100%)",
      }}
      transition={{ width: { duration: 0.2 }, height: { duration: 0.2 } }}
    />
  );
}
