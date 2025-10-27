"use client";

import { GlassNavbar } from "@/components/pieces/navbar/glass";
import { useState } from "react";

export function GlassNavbarDemo() {
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="px-4 py-2 rounded-md bg-neutral-800 text-neutral-50 hover:bg-neutral-700 transition-colors"
      >
        Show Glass Navbar
      </button>
      {isVisible && <GlassNavbar navItems={navItems} />}
    </div>
  );
}
