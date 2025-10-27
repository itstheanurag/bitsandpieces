"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface OffsetFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function OffsetFrame({ children, className }: OffsetFrameProps) {
  const outerClass =
    "relative px-8 py-6 rounded-lg border border-slate-700 dark:shadow-[4px_4px_0px_0px_rgba(51,65,85,1)] shadow-[4px_4px_0px_0px_rgba(203,213,225,1)]";

  return <div className={cn(outerClass, className)}>{children}</div>;
}
