"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="relative flex items-center justify-center w-9 h-9 rounded-md 
                 border border-border bg-muted hover:bg-accent 
                 text-muted-foreground hover:text-accent-foreground 
                 transition-colors"
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{
          scale: 0.5,
          opacity: 0,
          rotate: theme === "light" ? -90 : 90,
        }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        exit={{
          scale: 0.5,
          opacity: 0,
          rotate: theme === "light" ? 90 : -90,
        }}
        transition={{ duration: 0.25 }}
        className="absolute"
      >
        {theme === "light" ? (
          <Sun className="w-4 h-4" />
        ) : (
          <Moon className="w-4 h-4" />
        )}
      </motion.div>
    </motion.button>
  );
};
