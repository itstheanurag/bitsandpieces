"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface CornerPlusSignsProps {
  children: React.ReactNode;
  className?: string;
}

export function CornerPlusSigns({ children, className }: CornerPlusSignsProps) {
  const outerClass =
    "relative border border-neutral-200 dark:border-neutral-600";
  const innerClass = "relative z-10";

  return (
    <div className={cn(outerClass, className)}>
      <div className="absolute top-0 left-0 w-3 h-3 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-x-0 h-0.5 bg-neutral-300 dark:bg-neutral-400 top-1/2 -translate-y-1/2"></div>
        <div className="absolute inset-y-0 w-0.5 bg-neutral-300 dark:bg-neutral-400 left-1/2 -translate-x-1/2"></div>
      </div>
      <div className="absolute top-0 right-0 w-3 h-3 translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-x-0 h-0.5 bg-neutral-300 dark:bg-neutral-400 top-1/2 -translate-y-1/2"></div>
        <div className="absolute inset-y-0 w-0.5 bg-neutral-300 dark:bg-neutral-400 left-1/2 -translate-x-1/2"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-3 h-3 -translate-x-1/2 translate-y-1/2">
        <div className="absolute inset-x-0 h-0.5 bg-neutral-300 dark:bg-neutral-400 top-1/2 -translate-y-1/2"></div>
        <div className="absolute inset-y-0 w-0.5 bg-neutral-300 dark:bg-neutral-400 left-1/2 -translate-x-1/2"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-3 h-3 translate-x-1/2 translate-y-1/2">
        <div className="absolute inset-x-0 h-0.5 bg-neutral-300 dark:bg-neutral-400 top-1/2 -translate-y-1/2"></div>
        <div className="absolute inset-y-0 w-0.5 bg-neutral-300 dark:bg-neutral-400 left-1/2 -translate-x-1/2"></div>
      </div>
      <div className={innerClass}>{children}</div>
    </div>
  );
}
