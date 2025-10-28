"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface MinimalCornersProps {
  children: React.ReactNode;
  className?: string;
}

export function MinimalCorners({ children, className }: MinimalCornersProps) {
  const outerClass = "relative rounded-lg";
  const innerClass = "relative z-10";

  return (
    <div className={cn(outerClass, className)}>
      <div className="absolute top-0 left-0 w-3 h-0.5 bg-neutral-300 dark:bg-neutral-400"></div>
      <div className="absolute top-0 left-0 w-0.5 h-3 bg-neutral-300 dark:bg-neutral-400"></div>
      <div className="absolute top-0 right-0 w-3 h-0.5 bg-neutral-300 dark:bg-neutral-400"></div>
      <div className="absolute top-0 right-0 w-0.5 h-3 bg-neutral-300 dark:bg-neutral-400"></div>
      <div className="absolute bottom-0 left-0 w-3 h-0.5 bg-neutral-300 dark:bg-neutral-400"></div>
      <div className="absolute bottom-0 left-0 w-0.5 h-3 bg-neutral-300 dark:bg-neutral-400"></div>
      <div className="absolute bottom-0 right-0 w-3 h-0.5 bg-neutral-300 dark:bg-neutral-400"></div>
      <div className="absolute bottom-0 right-0 w-0.5 h-3 bg-neutral-300 dark:bg-neutral-400"></div>
      <div className={innerClass}>{children}</div>
    </div>
  );
}
