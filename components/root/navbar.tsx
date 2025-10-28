"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ThemeToggle } from "./themes";
import { LayoutGrid, Github } from "lucide-react";
import { CornerPlusSigns } from "../bits/border/corner-plus-signs";

export function Navbar() {
  const navItems = [
    {
      label: "Components",
      href: "/docs/pieces",
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
      className="fixed z-50 top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl"
    >
      <CornerPlusSigns className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-md shadow-neutral-200/50 dark:shadow-neutral-900/50">
        <nav className="flex items-center justify-between px-6 py-3">
          <Link
            href="/"
            className="text-lg font-bold text-neutral-700 dark:text-neutral-300"
          >
            Bits&Pieces
          </Link>

          <div className="flex items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.label === "GitHub" ? "_blank" : "_self"}
                className="flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </nav>
      </CornerPlusSigns>
    </motion.div>
  );
}
