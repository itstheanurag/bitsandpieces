
import React from "react";
import { BorderStyle } from "@/components/bits/border/types";
import { cn } from "@/lib/utils";

interface BorderDemoProps {
  borderStyle: BorderStyle;
}

export function BorderDemo({ borderStyle }: BorderDemoProps) {
  const content = (
    <div className={cn("relative z-10 p-8", borderStyle.innerClass)}>
      <p className="text-center text-lg font-semibold">{borderStyle.name}</p>
    </div>
  );

  return (
    <div className={cn("relative w-full max-w-xs mx-auto", borderStyle.outerClass)}>
      {borderStyle.contentWrapper ? borderStyle.contentWrapper(content) : content}
    </div>
  );
}
