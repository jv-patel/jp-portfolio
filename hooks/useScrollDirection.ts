"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollDirection() {
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    function onScroll() {
      const currentY = window.scrollY;
      setScrolled(currentY > 24);

      if (Math.abs(currentY - lastY.current) < 8) return;

      setDirection(currentY > lastY.current ? "down" : "up");
      lastY.current = currentY;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { direction, scrolled };
}
