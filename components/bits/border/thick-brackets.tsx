"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface ThickBracketsProps {
  children: React.ReactNode;
  className?: string;
}

export function ThickBrackets({ children, className }: ThickBracketsProps) {
  const outerClass = "relative px-8 py-6 border border-slate-800";
  const innerClass = "relative z-10";

  return (
    <div className={cn(outerClass, className)}>
      <div className="absolute top-0 left-0 w-6 h-6 border-t-[3px] border-l-[3px] border-slate-400 dark:border-slate-600 -translate-x-1 -translate-y-1 rounded-tl"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-[3px] border-r-[3px] border-slate-400 dark:border-slate-600 translate-x-1 -translate-y-1 rounded-tr"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-[3px] border-l-[3px] border-slate-400 dark:border-slate-600 -translate-x-1 translate-y-1 rounded-bl"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[3px] border-r-[3px] border-slate-400 dark:border-slate-600 translate-x-1 translate-y-1 rounded-br"></div>
      <div className={innerClass}>{children}</div>
    </div>
  );
}
