"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X, Menu, Circle } from "lucide-react";
import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logo?: React.ReactNode;
  navItems?: NavItem[];
  buttons?: React.ReactNode;
  children?: React.ReactNode;
}

export function FloatingNavbar({
  logo,
  navItems,
  buttons,
  children,
}: NavbarProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const defaultNavItems = [
    { href: "#home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];

  const itemsToRender = navItems || defaultNavItems;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-2 sm:p-6">
      {children ? (
        children
      ) : (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-6xl mx-auto"
        >
          <div
            className={`bg-background/80 backdrop-blur-lg ${
              mobileOpen ? "rounded-lg" : "rounded-full"
            } sm:px-6 py-3 px-4 border border-border shadow-lg transition-all`}
          >
            {/* Top Row */}
            <div className="flex items-center justify-between">
              {/* Logo */}
              {logo || (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Circle className="w-6 h-6 text-primary" />
                </motion.div>
              )}

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-2 lg:gap-4">
                {itemsToRender.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveIndex(index);
                    }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className={`relative px-3 pt-2 pb-1 text-sm font-medium transition-all no-underline ${
                      activeIndex === index
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    {activeIndex === index && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-primary"
                      />
                    )}
                  </motion.a>
                ))}

                {/* Buttons */}
                {buttons || (
                  <div className="flex items-center gap-2 ml-3 pl-3 border-l border-border">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-full text-foreground hover:bg-accent transition-colors relative"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-bold">
                        2
                      </span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
                    >
                      Get Started
                    </motion.button>
                  </div>
                )}
              </div>

              {/* Mobile Toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden text-foreground"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {mobileOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="md:hidden mt-3 pt-3 border-t border-border"
                >
                  {itemsToRender.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveIndex(index);
                        setMobileOpen(false);
                      }}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 8 }}
                      className={`block px-4 py-2.5 rounded-lg text-sm font-medium mb-1 no-underline ${
                        activeIndex === index
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                      }`}
                    >
                      {item.label}
                    </motion.a>
                  ))}

                  {/* Mobile Buttons */}
                  {buttons || (
                    <div className="flex flex-col gap-3 mt-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative p-3 rounded-full bg-accent text-accent-foreground hover:bg-accent/80 transition-colors w-full flex justify-center"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-bold">
                          2
                        </span>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors w-full text-sm"
                      >
                        Get Started
                      </motion.button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
