"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const minDuration = 1400;

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / minDuration) * 100));
      setProgress(pct);
      if (elapsed >= minDuration) {
        clearInterval(interval);
        setTimeout(() => setDone(true), 200);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-8 bg-bg-primary"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-radial from-accent-violet/20 via-transparent to-transparent" />

          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="font-display text-3xl font-bold tracking-tight"
          >
            <span className="gradient-text">JP</span>
            <span className="ml-1 text-text-primary">.dev</span>
          </motion.div>

          <div className="h-1 w-56 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-accent-violet via-accent-blue to-accent-cyan shadow-glow"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
            Loading experience — {progress}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
