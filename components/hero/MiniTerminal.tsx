"use client";

import { useEffect, useState } from "react";
import { TERMINAL_LINES } from "@/constants/site";

export default function MiniTerminal() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let cancelled = false;

    function typeNext() {
      if (cancelled) return;
      if (lineIndex >= TERMINAL_LINES.length) {
        lineIndex = 0;
        setLines([]);
      }
      const target = TERMINAL_LINES[lineIndex];
      charIndex++;
      setCurrentText(target.slice(0, charIndex));

      if (charIndex >= target.length) {
        setTimeout(() => {
          if (cancelled) return;
          setLines((prev) => [...prev, target]);
          setCurrentText("");
          lineIndex++;
          charIndex = 0;
          setTimeout(typeNext, 500);
        }, 800);
      } else {
        setTimeout(typeNext, 45);
      }
    }

    typeNext();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="glass w-full max-w-sm rounded-2xl p-4 font-mono text-sm shadow-luxury">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <span className="ml-2 text-xs text-text-secondary">portfolio.sh</span>
      </div>
      <div className="min-h-[110px] space-y-1.5 text-text-secondary">
        {lines.map((line, i) => (
          <p key={i}>
            <span className="text-accent-cyan">$</span> {line}
          </p>
        ))}
        <p>
          <span className="text-accent-cyan">$</span> {currentText}
          <span className="animate-blink">▍</span>
        </p>
      </div>
    </div>
  );
}
