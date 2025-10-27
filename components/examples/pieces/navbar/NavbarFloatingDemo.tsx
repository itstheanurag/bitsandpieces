"use client";

import { FloatingNavbar } from "@/components/pieces/navbar/floating";
import React, { useState } from "react";

export function FloatingNavbarDemo() {
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="px-4 py-2 rounded-md bg-neutral-800 text-neutral-50 hover:bg-neutral-700 transition-colors"
      >
        Show Floating Navbar
      </button>
      {isVisible && <FloatingNavbar navItems={navItems} />}
    </div>
  );
}
