"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const switchTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  const startViewTransition = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!document.startViewTransition) {
      switchTheme();
      return;
    }

    const x = event.clientX;
    const y = event.clientY;

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = document.startViewTransition(() => {
      switchTheme();
    });

    transition.ready.then(() => {
      const duration = 1000;

      requestAnimationFrame(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: duration,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      });
    });
  };

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={startViewTransition}
      className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors relative overflow-hidden"
      aria-label="Toggle theme"
    >
      <div key={theme}>
        {theme === "dark" ? (
          <BiSun size={24} className="text-foreground" />
        ) : (
          <BiMoon size={24} className="text-foreground" />
        )}
      </div>
    </button>
  );
}
