"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface CornerDotsProps {
  children: React.ReactNode;
  className?: string;
}

export function CornerDots({ children, className }: CornerDotsProps) {
  const outerClass =
    "relative px-8 py-6 border border-slate-400 dark:border-slate-600";
  const innerClass = "relative z-10";

  return (
    <div className={cn(outerClass, className)}>
      {/* top-left */}
      <div className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-slate-400 dark:bg-slate-600 rounded-full"></div>
      {/* top-right */}
      <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-slate-400 dark:bg-slate-600 rounded-full"></div>
      {/* bottom-left */}
      <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-slate-400 dark:bg-slate-600 rounded-full"></div>
      {/* bottom-right */}
      <div className="absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-slate-400 dark:bg-slate-600 rounded-full"></div>{" "}
      <div className={innerClass}>{children}</div>
    </div>
  );
}
