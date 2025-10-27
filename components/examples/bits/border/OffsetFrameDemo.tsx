"use client";

import { OffsetFrame } from "@/components/bits/border/offset-frame";

export function OffsetFrameDemo() {
  return (
    <OffsetFrame>
      <div className="p-4 text-center text-slate-600 dark:text-slate-400">
        Content for Offset Frame
      </div>
    </OffsetFrame>
  );
}
