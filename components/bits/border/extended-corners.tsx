"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface ExtendedCornersProps {
  children: React.ReactNode;
  className?: string;
}

export function ExtendedCorners({ children, className }: ExtendedCornersProps) {
  const outerClass = "relative rounded-lg";
  const innerClass = "relative z-10";

  return (
    <div className={cn(outerClass, className)}>
      <div className="absolute top-0 left-0 w-10 h-0.5 bg-neutral-300 dark:bg-neutral-400 -translate-y-1"></div>
      <div className="absolute top-0 left-0 w-0.5 h-10 bg-neutral-300 dark:bg-neutral-400 -translate-x-1"></div>
      <div className="absolute top-0 right-0 w-10 h-0.5 bg-neutral-300 dark:bg-neutral-400 -translate-y-1"></div>
      <div className="absolute top-0 right-0 w-0.5 h-10 bg-neutral-300 dark:bg-neutral-400 translate-x-1"></div>
      <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-neutral-300 dark:bg-neutral-400 translate-y-1"></div>
      <div className="absolute bottom-0 left-0 w-0.5 h-10 bg-neutral-300 dark:bg-neutral-400 -translate-x-1"></div>
      <div className="absolute bottom-0 right-0 w-10 h-0.5 bg-neutral-300 dark:bg-neutral-400 translate-y-1"></div>
      <div className="absolute bottom-0 right-0 w-0.5 h-10 bg-neutral-300 dark:bg-neutral-400 translate-x-1"></div>
      <div className={innerClass}>{children}</div>
    </div>
  );
}
