"use client";

import { cn } from "@/lib/utils";

interface GridDividerProps {
  side?: "left" | "right";
}

export function GridDivider({ side = "left" }: GridDividerProps) {
  return (
    <div
      className={cn(
        "row-span-full row-start-1 max-sm:hidden",
        "border-x border-x-(--grid-line-color)",
        "bg-fixed bg-size-[10px_10px]",
        side === "left" &&
          "col-start-2 bg-[repeating-linear-gradient(315deg,var(--grid-line-color)_0,var(--grid-line-color)_1px,transparent_0,transparent_50%)]",
        side === "right" &&
          "col-start-3 bg-[repeating-linear-gradient(45deg,var(--grid-line-color)_0,var(--grid-line-color)_1px,transparent_0,transparent_50%)]"
      )}
    />
  );
}
