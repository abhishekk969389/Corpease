"use client";

import { motion } from "framer-motion";
import { ReactNode, ElementType } from "react";

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  duration?: number;
  once?: boolean;
  as?: ElementType;
}

export default function AnimateIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  duration = 0.5,
  once = true,
  as = "div",
}: AnimateInProps) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  const MotionComponent = motion[as as keyof typeof motion] as ElementType;

  return (
    <MotionComponent
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
