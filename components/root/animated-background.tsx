"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  LayoutGrid,
  Copy,
  Wind,
  Palette,
  ChevronDown,
  Moon,
  Sun,
} from "lucide-react";

import React, { useState, useEffect } from "react";

const icons = [
  <ArrowRight key="arrow" className="text-neutral-200 dark:text-neutral-800" />,
  <Github key="github" className="text-neutral-200 dark:text-neutral-800" />,
  <LayoutGrid key="layout" className="text-neutral-200 dark:text-neutral-800" />,
  <Copy key="copy" className="text-neutral-200 dark:text-neutral-800" />,
  <Wind key="wind" className="text-neutral-200 dark:text-neutral-800" />,
  <Palette key="palette" className="text-neutral-200 dark:text-neutral-800" />,
  <ChevronDown key="chevron" className="text-neutral-200 dark:text-neutral-800" />,
  <Moon key="moon" className="text-neutral-200 dark:text-neutral-800" />,
  <Sun key="sun" className="text-neutral-200 dark:text-neutral-800" />,
];

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Render nothing on the server or until mounted on client
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
            scale: 0.3,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.05,
            scale: 0.8,
          }}
          transition={{
            duration: Math.random() * 5 + 5, // Random duration between 5 and 10 seconds
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute text-3xl"
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
}
