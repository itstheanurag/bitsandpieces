"use client";

import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { Search } from "nextra/components";
import { ThemeToggle } from "../root/theme";

export const DocsNavbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={28}
              height={28}
              className="rounded-md"
            />
            <span className="hidden sm:inline text-sm font-semibold tracking-tight">
              Bits&Pieces
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/docs" className="hover:text-foreground">
              Docs
            </Link>
            <Link href="/#components" className="hover:text-foreground">
              Components
            </Link>
            <Link href="/#blocks" className="hover:text-foreground">
              Blocks
            </Link>
            <Link href="/#templates" className="hover:text-foreground">
              Templates
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <Search
              placeholder="Search components"
              className="w-[220px] rounded-full border border-border/70 bg-muted/40 px-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
          <Link
            href="https://github.com/itstheanurag/bitsandpieces"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="GitHub repository"
          >
            <FiGithub className="h-4 w-4" />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
