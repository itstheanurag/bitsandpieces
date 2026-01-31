"use client";

import React from "react";
import Link from "next/link";
import { BiCommand, BiLogoGithub, BiSearchAlt2 } from "react-icons/bi";
import { ThemeToggle } from "../root/theme";
import Image from "next/image";

import { Container } from "../layout/container";

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-3">
      <Container>
        <div className="flex items-center justify-between px-6 py-3 bg-card/60 backdrop-blur-xl border border-border rounded-lg shadow-sm">
          {/* Left */}
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.png"
                alt="Logo"
                width={32}
                height={32}
                className="rounded-md"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
              <Link
                href="#bits"
                className="hover:text-foreground transition-colors"
              >
                Bits
              </Link>
              <Link
                href="#pieces"
                className="hover:text-foreground transition-colors"
              >
                Pieces
              </Link>
              <Link
                href="#features"
                className="hover:text-foreground transition-colors"
              >
                Features
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-3 px-4 py-2 border border-border rounded-md text-xs text-muted-foreground cursor-pointer transition-all hover:bg-muted/50">
              <BiSearchAlt2 size={14} />
              <span>Search...</span>
              <span className="flex items-center gap-1 bg-muted px-2 py-0.5 rounded-md border border-border">
                <BiCommand size={24} />
                <span>K</span>
              </span>
            </div>

            <div className="flex items-center">
              <ThemeToggle />

              <Link
                href="https://github.com"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors p-2"
              >
                <BiLogoGithub size={24} />
              </Link>

              <button className="hidden sm:block px-6 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-bold hover:opacity-90 transition-all active:scale-95 shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};
