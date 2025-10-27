"use client";

import { SimpleFrame } from "@/components/bits/border/simple-frame";

export function SimpleFrameDemo() {
  return (
    <SimpleFrame>
      <div className="p-4 text-center text-slate-600 dark:text-slate-400">
        Content for Simple Frame
      </div>
    </SimpleFrame>
  );
}