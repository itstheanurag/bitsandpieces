"use client";

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import { motion } from "framer-motion";

/**
 * Defines the possible theme values.
 */
type Theme = "light" | "dark";

/**
 * Defines the shape of the ThemeContext.
 */
interface ThemeContextType {
  theme: Theme;
  toggleTheme: (event: React.MouseEvent) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Props for the ThemeProvider component.
 */
interface ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * Provides theme context to its children and manages theme state and transitions.
 *
 * @param {ThemeProviderProps} { children } - The children to be rendered within the theme provider.
 * @returns {React.FC<ThemeProviderProps>} The ThemeProvider component.
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationOrigin, setAnimationOrigin] = useState({ x: 0, y: 0 });
  const [previousTheme, setPreviousTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
      setPreviousTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme("dark");
      setPreviousTheme("dark");
    } else {
      setTheme("light");
      setPreviousTheme("light");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(
    (event: React.MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      setAnimationOrigin({ x, y });

      const nextTheme = theme === "light" ? "dark" : "light";
      setPreviousTheme(theme); // Save current theme before switching
      setIsAnimating(true);
      // Switch theme immediately
      setTheme(nextTheme);
    },
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      {isAnimating && (
        <motion.div
          key={`${previousTheme}-${theme}`}
          initial={{
            clipPath: `circle(150% at ${animationOrigin.x}px ${animationOrigin.y}px)`,
          }}
          animate={{
            clipPath: `circle(0% at ${animationOrigin.x}px ${animationOrigin.y}px)`,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className={`fixed inset-0 pointer-events-none z-50 ${
            previousTheme === "light" ? "bg-neutral-50" : "bg-neutral-950"
          }`}
          onAnimationComplete={() => setIsAnimating(false)}
        />
      )}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook to use the theme context.
 *
 * @returns {ThemeContextType} The theme context values (theme and toggleTheme).
 * @throws {Error} If used outside of a ThemeProvider.
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
