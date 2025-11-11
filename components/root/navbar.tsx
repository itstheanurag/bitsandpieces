"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "./themes";
import { LayoutGrid, Github } from "lucide-react";

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
      <nav className="flex items-center justify-between px-6 py-3 bg-background/80 backdrop-blur-md border border-border">
        <Link
          href="/"
          className="text-lg font-bold text-primary hover:text-foreground/90 transition-colors"
        >
          Bits&Pieces
        </Link>

        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.label === "GitHub" ? "_blank" : "_self"}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
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
