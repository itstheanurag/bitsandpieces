"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiLogoGithub } from "react-icons/bi";
import { FiMenu, FiX } from "react-icons/fi";

import { cn } from "@/registry/bitsandpieces/lib/utils";
import { ThemeToggle } from "../root/theme";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Components", href: "/docs" },
  { label: "Blocks", href: "/#blocks" },
  { label: "Templates", href: "/#templates" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, [menuOpen]);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-border/70 py-3 "
          : "bg-transparent border-transparent py-5",
      )}
    >
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-2">
            <Link href="/" className="shrink-0">
              <Image
                src="/logo.png"
                alt="Logo"
                width={28}
                height={28}
                className="rounded-md"
                priority
              />
            </Link>

            <div className="hidden md:flex items-center p-1 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:bg-background/70 hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 shrink-0">
            <ThemeToggle />

            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex shrink-0 w-[96px]"
            >
              <Link
                href="https://github.com/itstheanurag/bitsandpieces"
                className="flex items-center justify-center gap-2"
              >
                <BiLogoGithub className="h-4 w-4" />
                GitHub
              </Link>
            </Button>

            <button
              className="md:hidden inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border/70 bg-muted/40 text-foreground"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? (
                <FiX className="h-4 w-4" />
              ) : (
                <FiMenu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 rounded-xl border border-border/70 bg-background/90 backdrop-blur-xl p-3 shadow-lg">
            <div className="flex flex-col gap-2 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="https://github.com/itstheanurag/bitsandpieces"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
              >
                GitHub
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
