"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  once?: boolean;
}

export default function AnimateOnScroll({
  children,
  className,
  delay,
  direction = "up",
  duration = 0.6,
  once,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: once ?? true, margin: "-100px" });

  const initialPosition = {
    up: { x: 0, y: 40 },
    down: { x: 0, y: -40 },
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
  }[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...initialPosition }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...initialPosition }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
