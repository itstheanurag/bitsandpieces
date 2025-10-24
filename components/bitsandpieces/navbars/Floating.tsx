"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, ShoppingCart, X, Menu } from "lucide-react";
import { useState } from "react";
import { NavbarProps } from "./types";

const FloatingNavbar = ({ logo, navItems, buttons, children }: NavbarProps) => {
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
    <nav className="w-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 p-8">
      {children ? (
        <>{children}</>
      ) : (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-6xl mx-auto"
        >
          <div className={`bg-black/90 backdrop-blur-xl ${mobileOpen ? 'rounded-2xl' : 'rounded-full'} px-6 py-4 shadow-2xl border border-white/10`}>
            <div className="flex items-center justify-between">
              {logo || (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Zap className="w-7 h-7 text-yellow-400" />
                  </motion.div>
                  <span className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                    FloatNav
                  </span>
                </motion.div>
              )}

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-3">
                {itemsToRender.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveIndex(index);
                    }}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-2 rounded-full font-medium transition-all ${
                      activeIndex === index
                        ? "bg-linear-to-r from-cyan-500 to-pink-500 text-white shadow-lg"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <motion.span
                      initial={false}
                      animate={activeIndex === index ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {item.label}
                    </motion.span>
                  </motion.a>
                ))}

                {/* Action Buttons */}
                {buttons || (
                  <div className="flex items-center gap-2 ml-2">
                    <motion.button
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors relative"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 rounded-full text-xs flex items-center justify-center font-bold"
                      >
                        2
                      </motion.span>
                    </motion.button>
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(236, 72, 153, 0.5)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 rounded-full bg-linear-to-r from-pink-500 to-purple-600 text-white font-semibold"
                    >
                      Get Started
                    </motion.button>
                  </div>
                )}
              </div>

              {/* Mobile Toggle */}
              <motion.button
                whileTap={{ scale: 0.9, rotate: 180 }}
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
                  className="md:hidden mt-4 pt-4 border-t border-white/10"
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
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{
                        x: 10,
                        backgroundColor: "rgba(255,255,255,0.1)",
                      }}
                      className={`block px-4 py-3 rounded-lg text-gray-300 font-medium mb-2 ${
                        activeIndex === index
                          ? "bg-linear-to-r from-cyan-500/20 to-pink-500/20 text-white"
                          : ""
                      }`}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export { FloatingNavbar };
