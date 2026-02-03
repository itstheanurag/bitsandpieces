"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const startViewTransition = (event: React.MouseEvent<HTMLButtonElement>) => {
    const currentTheme = resolvedTheme ?? "light";
    const isDark = currentTheme === "dark";
    const nextTheme = isDark ? "light" : "dark";

    if (!document.startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    const x = event.clientX;
    const y = event.clientY;

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = document.startViewTransition(() => setTheme(nextTheme));

    transition.ready.then(() => {
      const duration = 650;
      const easing = "cubic-bezier(0.65, 0, 0.35, 1)";
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      requestAnimationFrame(() => {
        document.documentElement.animate(
          {
            clipPath: isDark ? clipPath.slice().reverse() : clipPath,
          },
          {
            duration,
            easing,
            pseudoElement: isDark
              ? "::view-transition-old(root)"
              : "::view-transition-new(root)",
          },
        );
      });
    });
  };

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={startViewTransition}
      className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-muted/40 text-foreground transition-colors hover:bg-muted/70"
      aria-label="Toggle theme"
    >
      <span className="absolute inset-0 rounded-full shadow-[inset_0_0_12px_rgba(255,255,255,0.06)]" />
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
      ) : (
        <Moon className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
}
