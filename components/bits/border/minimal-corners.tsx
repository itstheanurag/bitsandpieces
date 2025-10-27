"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface MinimalCornersProps {
  children: React.ReactNode;
  className?: string;
}

export function MinimalCorners({ children, className }: MinimalCornersProps) {
  const outerClass = "relative px-8 py-6 rounded-lg";
  const innerClass = "relative z-10";

  return (
    <div className={cn(outerClass, className)}>
      <div className="absolute top-0 left-0 w-3 h-0.5 bg-slate-400 dark:bg-slate-600"></div>
      <div className="absolute top-0 left-0 w-0.5 h-3 bg-slate-400 dark:bg-slate-600"></div>
      <div className="absolute top-0 right-0 w-3 h-0.5 bg-slate-400 dark:bg-slate-600"></div>
      <div className="absolute top-0 right-0 w-0.5 h-3 bg-slate-400 dark:bg-slate-600"></div>
      <div className="absolute bottom-0 left-0 w-3 h-0.5 bg-slate-400 dark:bg-slate-600"></div>
      <div className="absolute bottom-0 left-0 w-0.5 h-3 bg-slate-400 dark:bg-slate-600"></div>
      <div className="absolute bottom-0 right-0 w-3 h-0.5 bg-slate-400 dark:bg-slate-600"></div>
      <div className="absolute bottom-0 right-0 w-0.5 h-3 bg-slate-400 dark:bg-slate-600"></div>
      <div className={innerClass}>{children}</div>
    </div>
  );
}
