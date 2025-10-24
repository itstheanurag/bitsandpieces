"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Rocket, User, X, Menu } from "lucide-react";
import { useState } from "react";
import { NavbarProps } from "./types";

const MorphingNavbar = ({ logo, navItems, buttons, children }: NavbarProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const defaultNavItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  const itemsToRender = navItems || defaultNavItems;

  return (
    <nav className="w-full bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 px-4 sm:px-6 py-3 sm:py-4">
      {children ? (
        <>{children}</>
      ) : (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-7xl mx-auto bg-slate-900 rounded-2xl shadow-xl backdrop-blur-md border border-slate-800"
        >
          <div className="px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              {logo || (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Rocket className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400" />
                  </motion.div>
                </motion.div>
              )}

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-6 lg:gap-10 relative">
                {itemsToRender.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveIndex(index);
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative py-2 text-gray-300 font-medium text-sm lg:text-base cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span
                      className={
                        activeIndex === index ? "text-emerald-400" : ""
                      }
                    >
                      {item.label}
                    </span>

                    {activeIndex === index && (
                      <motion.div
                        layoutId="underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}

                    {hoveredIndex === index && activeIndex !== index && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-400/50 rounded-full"
                      />
                    )}
                  </motion.a>
                ))}

                {/* Desktop Buttons */}
                {buttons || (
                  <div className="flex items-center gap-3 ml-4 pl-4 border-l border-slate-700">
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ rotate: { duration: 0.6 } }}
                      className="p-2 lg:p-3 rounded-lg text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition"
                    >
                      <User className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(16,185,129,0.5)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 lg:px-5 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold shadow-lg text-sm lg:text-base"
                    >
                      Launch App
                    </motion.button>
                  </div>
                )}
              </div>

              {/* Mobile Menu Toggle */}
              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden text-emerald-400"
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
                  transition={{ duration: 0.3 }}
                  className="md:hidden overflow-hidden w-full"
                >
                  <div className="py-3 sm:py-4 space-y-2">
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
                        transition={{ delay: index * 0.08 }}
                        whileHover={{
                          x: 8,
                          backgroundColor: "rgba(16,185,129,0.1)",
                        }}
                        className={`flex items-center px-4 py-3 rounded-lg font-medium transition-colors ${
                          activeIndex === index
                            ? "text-emerald-400 bg-emerald-500/10 border-l-4 border-emerald-400"
                            : "text-gray-400"
                        }`}
                      >
                        {item.label}
                        {activeIndex === index && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-auto w-2 h-2 rounded-full bg-emerald-400"
                          />
                        )}
                      </motion.a>
                    ))}

                    {/* Mobile Buttons */}
                    {buttons || (
                      <div className="flex flex-col items-center gap-3 mt-4 pt-4 border-t border-slate-700">
                        <motion.button
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ rotate: { duration: 0.6 } }}
                          className="p-3 rounded-lg text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition w-full"
                        >
                          <User className="w-5 h-5 mx-auto" />
                        </motion.button>
                        <motion.button
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 25px rgba(16,185,129,0.6)",
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="px-5 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold shadow-lg w-full"
                        >
                          Launch App
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

export { MorphingNavbar };
