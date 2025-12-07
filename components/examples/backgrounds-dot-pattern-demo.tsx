"use client";

import { DotPattern } from "@/components/bits/backgrounds/dot-pattern";
import { cn } from "@/lib/utils";

export function DotPatternDemo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-white dark:bg-neutral-950 px-20 pb-20 pt-8 shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Dot Pattern
      </p>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
}
