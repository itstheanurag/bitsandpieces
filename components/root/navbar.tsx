"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./themes";
import { LayoutGrid, Github, Menu } from "lucide-react";
import { useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: "Components",
      href: "/browse",
      icon: <LayoutGrid className="size-5" />,
      external: false,
    },
    {
      label: "GitHub",
      href: "https://github.com/itstheanurag/bitsandpieces",
      icon: <Github className="size-5" />,
      external: true,
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2">
        <div
          className={`flex items-center justify-between rounded-md px-3 py-2 transition-all bg-blur backdrop-blur-sm ${
            isScrolled ? "shadow-lg" : ""
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Bits&Pieces"
              width={40}
              height={40}
              className="rounded-lg"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md p-2 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                >
                  {item.icon}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 rounded-md p-2 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                >
                  {item.icon}
                </Link>
              )
            )}

            <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-700 mx-2" />

            <ThemeToggle />
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button className="rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
