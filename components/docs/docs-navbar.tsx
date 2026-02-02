"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { ThemeToggle } from "../root/theme";

export const DocsNavbar = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-border bg-background/80 backdrop-blur-md px-6">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <Image
          src="/logo.png"
          alt="Logo"
          width={28}
          height={28}
          className="rounded"
        />
      </Link>

      {/* Right side actions */}
      <div className="flex items-center gap-3">
        {/* GitHub Link */}
        <Link
          href="https://github.com/itstheanurag/bitsandpieces"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          aria-label="GitHub repository"
        >
          <FiGithub className="h-5 w-5" />
        </Link>

        <ThemeToggle />
      </div>
    </nav>
  );
};
