"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface CornerLinesProps {
  children: React.ReactNode;
  className?: string;
}

export function CornerLines({ children, className }: CornerLinesProps) {
  const outerClass = "relative px-8 py-6";
  const innerClass = "relative z-10";

  return (
    <div className={cn(outerClass, className)}>
      <div className="absolute top-0 left-0 w-6 h-0.5 bg-slate-400 dark:bg-slate-600 -translate-y-1"></div>
      <div className="absolute top-0 left-0 w-0.5 h-6 bg-slate-400 dark:bg-slate-600 -translate-x-1"></div>
      <div className="absolute top-0 right-0 w-6 h-0.5 bg-slate-400 dark:bg-slate-600 -translate-y-1"></div>
      <div className="absolute top-0 right-0 w-0.5 h-6 bg-slate-400 dark:bg-slate-600 translate-x-1"></div>
      <div className="absolute bottom-0 left-0 w-6 h-0.5 bg-slate-400 dark:bg-slate-600 translate-y-1"></div>
      <div className="absolute bottom-0 left-0 w-0.5 h-6 bg-slate-400 dark:bg-slate-600 -translate-x-1"></div>
      <div className="absolute bottom-0 right-0 w-6 h-0.5 bg-slate-400 dark:bg-slate-600 translate-y-1"></div>
      <div className="absolute bottom-0 right-0 w-0.5 h-6 bg-slate-400 dark:bg-slate-600 translate-x-1"></div>
      <div className={innerClass}>{children}</div>
    </div>
  );
}
