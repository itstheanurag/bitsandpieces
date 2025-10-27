"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface SimpleFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function SimpleFrame({ children, className }: SimpleFrameProps) {
  const outerClass = "relative px-8 py-6 rounded-lg border-2 border-slate-700 dark:border-slate-600";

  return <div className={cn(outerClass, className)}>{children}</div>;
}
