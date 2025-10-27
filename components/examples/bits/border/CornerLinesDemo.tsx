"use client";

import { CornerLines } from "@/components/bits/border/corner-lines";

export function CornerLinesDemo() {
  return (
    <CornerLines>
      <div className="p-4 text-center text-slate-600 dark:text-slate-400">
        Content for Corner Lines
      </div>
    </CornerLines>
  );
}
