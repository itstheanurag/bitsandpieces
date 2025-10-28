"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  /** The text to display in or near the divider. */
  label?: string;
  /** Additional Tailwind CSS classes to apply. */
  className?: string;
  /** Line color */
  lineColor?: string;
  /** Label text color */
  textColor?: string;
  /** Padding inside container */
  padding?: string;
  /** Variant: defines where divider appears */
  variant?: "top" | "bottom" | "left" | "right" | "center";
}

export function SectionDivider({
  label,
  className,
  lineColor = "bg-neutral-200 dark:bg-neutral-800",
  textColor = "text-neutral-600 dark:text-neutral-400",
  padding = "py-8",
  variant = "center",
}: SectionDividerProps) {
  const variants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1 },
  };

  // Shared line class
  const lineBase = cn(lineColor, "absolute");

  const positions: Record<string, string> = {
    top: "top-0 left-0 w-full h-px",
    bottom: "bottom-0 left-0 w-full h-px",
    left: "left-0 top-0 h-full w-px",
    right: "right-0 top-0 h-full w-px",
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.4 }}
      className={cn(
        "relative flex w-full items-center justify-center",
        padding,
        className
      )}
    >
      {/* Outline lines */}
      {["top", "bottom", "left", "right"].map(
        (pos) =>
          (variant === "center" || variant === pos) && (
            <div key={pos} className={cn(lineBase, positions[pos])} />
          )
      )}

      {/* Optional label */}
      {label && (
        <span
          className={cn(
            "relative z-10 px-4 bg-background/80 backdrop-blur-sm text-sm font-medium",
            textColor
          )}
        >
          {label}
        </span>
      )}
    </motion.div>
  );
}
