"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import { Sun, Moon } from "lucide-react"; // Assuming lucide-react is available for icons

/**
 * ThemeToggle Component
 *
 * A button component that allows users to toggle between light and dark themes.
 * It displays a sun icon for light mode and a moon icon for dark mode,
 * with a subtle animation on click.
 *
 * @returns {React.FC} The ThemeToggle component.
 */
export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="relative flex items-center justify-center w-10 h-10 rounded-full focus:outline-none"
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ scale: 0.5, opacity: 0, rotate: theme === "light" ? -90 : 90 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        exit={{ scale: 0.5, opacity: 0, rotate: theme === "light" ? 90 : -90 }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        {theme === "light" ? (
          <Sun className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
        ) : (
          <Moon className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
        )}
      </motion.div>
    </motion.button>
  );
};
