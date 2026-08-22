"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

export function Reveal({
  children,
  mode = "scroll",
  delay = 0,
  className,
}: {
  children: ReactNode;
  mode?: "mount" | "scroll";
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const hidden = { opacity: 0, y: 16 };
  const shown = { opacity: 1, y: 0 };
  const transition = { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const };

  const revealClassName = ["motion-reveal", className].filter(Boolean).join(" ");

  if (mode === "mount") {
    return (
      <motion.div
        className={revealClassName}
        initial={reduce ? false : hidden}
        animate={shown}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={revealClassName}
      initial={reduce ? false : hidden}
      whileInView={shown}
      viewport={{ once: true, amount: 0.3 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
