"use client";

import { useState, useEffect, useCallback } from "react";

interface TypingEffectProps {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function TypingEffect({
  strings,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
  className,
}: TypingEffectProps) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentString = strings[currentStringIndex] ?? "";

  const tick = useCallback(() => {
    if (isPaused) {
      setIsPaused(false);
      setIsDeleting(true);
      return;
    }

    if (isDeleting) {
      if (currentCharIndex > 0) {
        setCurrentCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(false);
        setCurrentStringIndex((prev) => (prev + 1) % strings.length);
      }
    } else {
      if (currentCharIndex < currentString.length) {
        setCurrentCharIndex((prev) => prev + 1);
      } else {
        setIsPaused(true);
      }
    }
  }, [isPaused, isDeleting, currentCharIndex, currentString.length, strings.length]);

  useEffect(() => {
    let delay: number;

    if (isPaused) {
      delay = pauseDuration;
    } else if (isDeleting) {
      delay = deletingSpeed;
    } else {
      delay = typingSpeed;
    }

    const timeout = setTimeout(tick, delay);
    return () => clearTimeout(timeout);
  }, [tick, isPaused, isDeleting, typingSpeed, deletingSpeed, pauseDuration]);

  const displayedText = currentString.slice(0, currentCharIndex);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse ml-0.5 text-accent">|</span>
    </span>
  );
}
