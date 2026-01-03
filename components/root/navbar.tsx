"use client";

import Link from "next/link";
import { Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./themes/ThemeToggle";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg tracking-tight"
          >
            <Image
              src="/logo.png"
              alt="Bits&Pieces"
              width={40}
              height={40}
              className="rounded-lg"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link
              href="/docs"
              className="hover:text-foreground transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/browse"
              className="hover:text-foreground transition-colors"
            >
              Components
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
          >
            <Link
              href="https://github.com/itstheanurag/bitsandpieces"
              target="_blank"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
          >
            <Link href="https://twitter.com/itstheanurag" target="_blank">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
