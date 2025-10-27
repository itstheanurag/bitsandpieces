"use client";

import { MinimalCorners } from "@/components/bits/border/minimal-corners";

export function MinimalCornersDemo() {
  return (
    <MinimalCorners>
      <div className="p-4 text-center text-slate-600 dark:text-slate-400">
        Content for Minimal Corners
      </div>
    </MinimalCorners>
  );
}
