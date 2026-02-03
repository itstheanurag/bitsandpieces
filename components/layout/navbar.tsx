"use client";

import React, { useState, useEffect } from "react";
import { BiLogoGithub } from "react-icons/bi";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/registry/bitsandpieces/lib/utils";

import { ThemeToggle } from "../root/theme";
import { Button } from "@/components/ui/button";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-border/70 py-3 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)]"
          : "bg-transparent border-transparent py-5",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={28}
                  height={28}
                  className="rounded-md"
                />
                <span className="absolute -inset-1 rounded-lg bg-gradient-to-br from-foreground/20 to-transparent opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <span className="font-semibold text-lg tracking-tight text-foreground">
                bits&pieces
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1 rounded-full border border-border/70 bg-muted/50 p-1 text-sm">
              {[
                { label: "Components", href: "/#components" },
                { label: "Blocks", href: "/#blocks" },
                { label: "Templates", href: "/#templates" },
                { label: "Docs", href: "/docs" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground hover:bg-background/70"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex"
            >
              <Link
                className="flex items-center gap-2"
                href="https://github.com/itstheanurag/bitsandpieces"
              >
                <BiLogoGithub className="size-4" />
                GitHub
              </Link>
            </Button>
            <button
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/70 bg-muted/40 text-foreground"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? (
                <FiX className="size-4" />
              ) : (
                <FiMenu className="size-4" />
              )}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="md:hidden mt-3 rounded-xl border border-border/70 bg-background/90 backdrop-blur-xl p-3 shadow-lg">
            <div className="flex flex-col gap-2 text-sm">
              {[
                { label: "Components", href: "/#components" },
                { label: "Blocks", href: "/#blocks" },
                { label: "Templates", href: "/#templates" },
                { label: "Docs", href: "/docs" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="https://github.com/itstheanurag/bitsandpieces"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50"
              >
                GitHub
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};
