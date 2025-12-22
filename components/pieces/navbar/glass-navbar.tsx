"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

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

const GlassNavbar = ({ logo, navItems, buttons, children }: NavbarProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const defaultNavItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  const itemsToRender = navItems || defaultNavItems;

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4">
      {children ? (
        <>{children}</>
      ) : (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="max-w-7xl mx-auto bg-background/80 backdrop-blur-lg rounded-2xl border border-border shadow-xl"
        >
          <div className="py-2 px-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              {logo || (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold text-foreground cursor-pointer"
                >
                  <img
                    src="/logo.png"
                    alt="Bits&Pieces"
                    className="w-9 h-9 rounded-lg"
                  />
                </motion.div>
              )}

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-2 relative">
                {itemsToRender.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveIndex(index);
                    }}
                    className={`relative px-4 py-2 text-sm sm:text-base font-medium no-underline transition-colors ${
                      activeIndex === index
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {activeIndex === index && (
                      <motion.div
                        layoutId="glass-indicator"
                        className="absolute inset-0 bg-accent rounded-lg -z-10"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </motion.a>
                ))}

                {/* Action Buttons */}
                {buttons || (
                  <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 sm:px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Sign In
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
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {mobileOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="md:hidden overflow-hidden w-full"
                >
                  <div className="py-3 sm:py-4 space-y-2 sm:space-y-3">
                    {itemsToRender.map((item, index) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveIndex(index);
                          setMobileOpen(false);
                        }}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 10 }}
                        className={`block w-full px-4 py-2 sm:py-3 rounded-lg font-medium text-base sm:text-lg no-underline ${
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
                      <div className="flex flex-col items-center gap-3 mt-4 pt-4 border-t border-border">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-4 py-3 w-full rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                        >
                          Sign In
                        </motion.button>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export { GlassNavbar };
