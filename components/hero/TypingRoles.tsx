"use client";

import { useEffect, useState } from "react";
import { ROTATING_ROLES } from "@/constants/site";

export default function TypingRoles() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROTATING_ROLES[roleIndex];
    const typingSpeed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = currentRole.slice(0, text.length + 1);
        setText(next);
        if (next === currentRole) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        const next = currentRole.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <span className="gradient-text">
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-blink bg-accent-sky align-middle" />
    </span>
  );
}
