"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillBarProps {
  name: string;
  percentage: number;
  level: string;
  delay?: number;
}

const levelColors: Record<string, string> = {
  expert: "bg-accent",
  advanced: "bg-accent/80",
  intermediate: "bg-accent/60",
};

export default function SkillBar({
  name,
  percentage,
  level,
  delay = 0,
}: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-text-primary">{name}</span>
        <span className="text-xs text-text-secondary">
          {level} — {percentage}%
        </span>
      </div>
      <div className="w-full bg-border rounded-full h-2">
        <motion.div
          className={`h-2 rounded-full ${levelColors[level] || "bg-accent"}`}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${percentage}%` : 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
