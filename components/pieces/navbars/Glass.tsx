"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Search, Bell } from "lucide-react";
import { NavbarProps } from "./types";

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
    <nav className="w-full p-4 ">
      {children ? (
        <>{children}</>
      ) : (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="max-w-7xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl"
        >
          <div className="py-3 px-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              {logo || (
                <motion.div
                  whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold text-white cursor-pointer"
                >
                  <Sparkles className="w-6 h-6 sm:w-7 sm:h-7" />
                  <span>GlassNav</span>
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
                    className="relative px-4 py-2 text-sm sm:text-base text-white font-medium z-10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    {activeIndex === index && (
                      <motion.div
                        layoutId="glass-indicator"
                        className="absolute inset-0 bg-white/20 rounded-lg"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.a>
                ))}

                {/* Action Buttons */}
                {buttons || (
                  <div className="flex items-center gap-2 ml-4 pl-4 border-l border-white/20">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 sm:px-4 py-2 rounded-lg bg-white text-purple-600 font-semibold hover:shadow-lg transition-shadow"
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
                className="md:hidden text-white"
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
                        className={`block w-full px-4 py-2 sm:py-3 rounded-lg text-white font-medium text-base sm:text-lg ${
                          activeIndex === index ? "bg-white/20" : ""
                        }`}
                      >
                        {item.label}
                      </motion.a>
                    ))}

                    {/* Mobile Buttons */}
                    {buttons || (
                      <div className="flex flex-col items-center gap-3 mt-4 pt-4 border-t border-white/20">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-3 w-full rounded-lg bg-white text-neutral-600 font-semibold hover:shadow-lg transition-shadow"
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
