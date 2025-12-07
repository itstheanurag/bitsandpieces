"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "./themes";
import { LayoutGrid, Github } from "lucide-react";

export function Navbar() {
  const navItems = [
    {
      label: "Components",
      href: "/browse",
      icon: <LayoutGrid className="h-4 w-4" />,
    },
    {
      label: "GitHub",
      href: "https://github.com/itsTheAnurag/BitsAndPieces",
      icon: <Github className="h-4 w-4" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed z-50",
        "top-4 left-1/2 -translate-x-1/2",
        "w-[90%] max-w-5xl"
      )}
    >
      <nav
        className={cn(
          "flex items-center justify-between",
          "px-6 py-3",
          "bg-background/80 backdrop-blur-md",
          "border border-neutral-200 dark:border-neutral-700",
          "rounded-lg shadow inset-0"
        )}
      >
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2",
            "text-lg font-bold",
            "text-primary hover:text-foreground/90",
            "transition-colors"
          )}
        >
          <div className="bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 p-1 rounded-md">
            <LayoutGrid className="w-5 h-5" />
          </div>
          Bits&Pieces
        </Link>

        {/* Nav Items */}
        <div className={cn("flex items-center gap-4")}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.label === "GitHub" ? "_blank" : "_self"}
              className={cn(
                "flex items-center gap-2",
                "text-neutral-800 hover:text-neutral-600",
                "dark:text-neutral-200 hover:dark:text-neutral-400",
                "transition-colors cursor-pointer"
              )}
            >
              {item.icon}
            </Link>
          ))}

          <ThemeToggle />
        </div>
      </nav>
    </motion.div>
  );
}
