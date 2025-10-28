"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface CornerBracketsProps {
  children: React.ReactNode;
  className?: string;
}

export function CornerBrackets({ children, className }: CornerBracketsProps) {
  const outerClass = "relative px-8 py-6 ";
  const innerClass = "relative z-10";

  return (
    <div className={cn(outerClass, className)}>
      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-neutral-300 dark:border-neutral-400 -translate-x-1 -translate-y-1"></div>
      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-neutral-300 dark:border-neutral-400 translate-x-1 -translate-y-1"></div>
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-neutral-300 dark:border-neutral-400 -translate-x-1 translate-y-1"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-neutral-300 dark:border-neutral-400 translate-x-1 translate-y-1"></div>
      <div className={innerClass}>{children}</div>
    </div>
  );
}
