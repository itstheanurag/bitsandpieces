"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface CurvedLCornersProps {
  children: React.ReactNode;
  className?: string;
}

export function CurvedLCorners({ children, className }: CurvedLCornersProps) {
  const outerClass = "relative px-8 py-6 rounded-lg";
  const innerClass = "relative z-10";

  return (
    <div className={cn(outerClass, className)}>
      <svg
        className="absolute top-0 left-0 w-6 h-6 -translate-x-1 -translate-y-1 text-slate-400 dark:text-slate-600"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M0 24 L0 6 Q0 0 6 0 L24 0"
          stroke={"currentColor"}
          strokeWidth="2"
        />
      </svg>
      <svg
        className="absolute top-0 right-0 w-6 h-6 translate-x-1 -translate-y-1 rotate-90 text-slate-400 dark:text-slate-600"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M0 24 L0 6 Q0 0 6 0 L24 0"
          stroke={"currentColor"}
          strokeWidth="2"
        />
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-6 h-6 -translate-x-1 translate-y-1 -rotate-90 text-slate-400 dark:text-slate-600"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M0 24 L0 6 Q0 0 6 0 L24 0"
          stroke={"currentColor"}
          strokeWidth="2"
        />
      </svg>
      <svg
        className="absolute bottom-0 right-0 w-6 h-6 translate-x-1 translate-y-1 rotate-180 text-slate-400 dark:text-slate-600"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M0 24 L0 6 Q0 0 6 0 L24 0"
          stroke={"currentColor"}
          strokeWidth="2"
        />
      </svg>
      <div className={innerClass}>{children}</div>
    </div>
  );
}
