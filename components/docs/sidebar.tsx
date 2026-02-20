"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  {
    title: "Getting Started",
    links: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
    ],
  },
  {
    title: "Components",
    links: [{ title: "Animated Form", href: "/docs/components/animated-form" }],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navContent = (
    <nav className="space-y-8 pr-4 pb-20">
      {navigation.map((section) => (
        <div key={section.title} className="flex flex-col">
          <h4 className="text-[0.8rem] font-medium text-foreground mb-3 px-2">
            {section.title}
          </h4>
          <ul className="space-y-0.5">
            {section.links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-2 py-1.5 text-[0.85rem] transition-colors rounded-lg ${
                      isActive
                        ? "text-foreground bg-accent/50 font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="lg:hidden fixed bottom-6 right-6 z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Desktop Version */}
      <div className="hidden lg:block h-full pr-4">{navContent}</div>

      {/* Mobile Version overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md p-6 pt-24 mt-0 lg:hidden overflow-y-auto"
          >
            {navContent}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
