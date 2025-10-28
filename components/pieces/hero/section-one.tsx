"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroSectionOneProps {
  badge?: {
    label: string;
    href: string;
  };
  title: string;
  description: string;
  cta: {
    primary: {
      label: string;
      href: string;
    };
    secondary: {
      label: string;
      href: string;
    };
  };
  logos?: React.ReactNode;
  className?: string;
}

export function HeroSectionOne({
  badge,
  title,
  description,
  cta,
  logos,
  className,
}: HeroSectionOneProps) {
  return (
    <section
      className={cn(
        " w-full h-screen flex items-center justify-center bg-neutral-100 dark:bg-neutral-950 overflow-hidden",
        className
      )}
    >
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {badge && (
          <motion.a
            href={badge.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 px-3 py-1 text-sm font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
          >
            {badge.label}
          </motion.a>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 flex gap-4"
        >
          <a
            href={cta.primary.href}
            className="px-6 py-3 font-semibold text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
          >
            {cta.primary.label}
          </a>
          <a
            href={cta.secondary.href}
            className="px-6 py-3 font-semibold text-neutral-900 dark:text-neutral-100 bg-transparent border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
          >
            {cta.secondary.label}
          </a>
        </motion.div>

        {logos && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-12"
          >
            {logos}
          </motion.div>
        )}
      </div>
    </section>
  );
}
