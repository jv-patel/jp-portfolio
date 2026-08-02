"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiPython,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const TECH_CARDS = [
  { icon: SiReact, label: "React", color: "#61DAFB", pos: "left-[-8%] top-[8%]", delay: 0 },
  { icon: SiNextdotjs, label: "Next.js", color: "#FFFFFF", pos: "right-[-6%] top-[4%]", delay: 0.4 },
  { icon: SiNodedotjs, label: "Node.js", color: "#8CC84B", pos: "left-[-10%] top-[46%]", delay: 0.8 },
  { icon: SiMongodb, label: "MongoDB", color: "#47A248", pos: "right-[-10%] top-[42%]", delay: 1.2 },
  { icon: SiExpress, label: "Express", color: "#FFFFFF", pos: "left-[2%] bottom-[-6%]", delay: 1.6 },
  { icon: SiPython, label: "Python", color: "#FFD43B", pos: "right-[4%] bottom-[-8%]", delay: 2.0 },
  { icon: FaJava, label: "Java", color: "#EA2D2E", pos: "left-[30%] top-[-10%]", delay: 2.4 },
  { icon: SiTailwindcss, label: "Tailwind", color: "#38BDF8", pos: "right-[26%] bottom-[-14%]", delay: 2.8 },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6", pos: "left-[46%] bottom-[-12%]", delay: 3.2 },
];

export default function FloatingTechCards() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block">
      {TECH_CARDS.map(({ icon: Icon, label, color, pos, delay }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + delay * 0.15, duration: 0.6 }}
          className={`absolute ${pos}`}
        >
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
            transition={{
              duration: 5 + (delay % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
            className="glass flex items-center gap-2 rounded-2xl px-3 py-2 shadow-luxury"
          >
            <Icon size={18} color={color} aria-hidden />
            <span className="text-xs font-medium text-text-secondary">{label}</span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
