"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface ScanLineProps {
  children: React.ReactNode;
  className?: string;
}

export function ScanLine({ children, className }: ScanLineProps) {
  const outerClass =
    "relative px-8 py-6 rounded-lg border-2 border-slate-700 overflow-hidden group";
  const innerClass = "relative z-10";

  return (
    <div className={cn(outerClass, className)}>
      <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-slate-400 dark:via-slate-600 to-transparent -translate-y-full group-hover:translate-y-[400%] transition-transform duration-1000"></div>
      <div className={innerClass}>{children}</div>
    </div>
  );
}
