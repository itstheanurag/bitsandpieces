"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface CornerDotSquareProps {
  children: React.ReactNode;
  className?: string;
}

export function CornerDotSquare({ children, className }: CornerDotSquareProps) {
  const outerClass =
    "relative border border-neutral-400 dark:border-neutral-600";
  const innerClass = "relative z-10";

  return (
    <div className={cn(outerClass, className)}>
      {/* top-left */}
      <div className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-neutral-200 dark:bg-neutral-600 "></div>
      {/* top-right */}
      <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-neutral-200 dark:bg-neutral-600 "></div>
      {/* bottom-left */}
      <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-neutral-200 dark:bg-neutral-600 "></div>
      {/* bottom-right */}
      <div className="absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-neutral-200 dark:bg-neutral-600 "></div>{" "}
      <div className={innerClass}>{children}</div>
    </div>
  );
}
