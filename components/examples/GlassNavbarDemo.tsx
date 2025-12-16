"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { GlassNavbar } from "@/components/pieces/navbar/glass-navbar";

export function GlassNavbarDemo() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-10">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="px-6 py-3 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900 font-medium hover:opacity-90 transition-opacity"
      >
        {isVisible ? "Hide Navbar" : "Show Navbar"}
      </button>

      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Click the button to toggle the navbar preview
      </p>

      {isVisible &&
        typeof document !== "undefined" &&
        createPortal(<GlassNavbar />, document.body)}
    </div>
  );
}
