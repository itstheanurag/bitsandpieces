
"use client";

import { FloatingNavbar } from "@/components/pieces/navbar/floating";
import React from "react";

export function FloatingNavbarDemo() {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="w-full h-[200vh] bg-gray-100 dark:bg-gray-900">
      <FloatingNavbar navItems={navItems} />
    </div>
  );
}
