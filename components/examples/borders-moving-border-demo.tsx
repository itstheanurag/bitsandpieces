"use client";

import React from "react";
import { Button } from "@/components/bits/borders/moving-border";

export function MovingBorderDemo() {
  return (
    <div className="h-[20rem] flex items-center justify-center w-full">
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Click me
      </Button>
    </div>
  );
}
