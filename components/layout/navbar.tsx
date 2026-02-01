"use client";

import React, { useState, useEffect } from "react";
import { SideDepthButton } from "@/registry/bitsandpieces/buttons/button";
import { BiLogoGithub } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/registry/bitsandpieces/lib/utils";

import { ThemeToggle } from "../root/theme";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border py-3"
          : "bg-transparent py-5",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Image
            src="/logo.png"
            alt="Logo"
            width={24}
            height={24}
            className="rounded-md"
          />
          <span className="font-bold text-lg tracking-tight text-foreground font-mono">
            bits&pieces
          </span>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <SideDepthButton
            size="sm"
            className="hidden sm:flex rounded-md"
            asChild
          >
            <Link
              className="flex items-center gap-4"
              href="https://github.com/itstheanurag/bitsandpieces"
            >
              <BiLogoGithub className="size-5" />
              Star on GitHub
            </Link>
          </SideDepthButton>
        </div>
      </div>
    </nav>
  );
};
