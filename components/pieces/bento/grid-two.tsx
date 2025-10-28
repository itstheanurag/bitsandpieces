"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  span?: string; // e.g. "md:col-span-2"
}

export const BentoGrid = ({
  items,
  isLoading = false,
}: {
  items: BentoItem[];
  isLoading?: boolean;
}) => {
  return (
    <div
      className={cn(
        "grid gap-5",
        // 1 card on mobile
        "grid-cols-1",
        // 2 cards on small screens
        "sm:grid-cols-2",
        // 3 cards on medium screens
        "md:grid-cols-3",
        // 4 cards on large screens
        "lg:grid-cols-4",
        // optional: 5 on XL screens if you want super wide
        "xl:grid-cols-5"
      )}
    >
      {items.map((item) =>
        isLoading ? (
          <SkeletonCard key={item.id} />
        ) : (
          <BentoCard key={item.id} className={item.span}>
            <div className="flex flex-col gap-3">
              <motion.div
                whileHover={{ scale: 1.15, rotate: 4 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-12 h-12 rounded-lg bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center"
              >
                {item.icon}
              </motion.div>

              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </BentoCard>
        )
      )}
    </div>
  );
};

const BentoCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{
      y: -6,
      boxShadow:
        "0 6px 30px -8px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.06)",
    }}
    transition={{ duration: 0.35, ease: "easeOut" }}
    className={cn(
      "relative rounded-lg p-6 backdrop-blur-sm",
      "bg-neutral-100/80 dark:bg-neutral-900/60",
      "border border-neutral-200 dark:border-neutral-800",
      "transition-all duration-300",
      className
    )}
  >
    {children}

    {/* 🌈 Subtle corner highlight gradient */}
    <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.20),transparent)]" />
  </motion.div>
);

const SkeletonCard = () => (
  <div className="relative rounded-3xl p-6 bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
    <div className="animate-pulse space-y-3">
      <div className="w-12 h-12 rounded-xl bg-neutral-300 dark:bg-neutral-700" />
      <div className="w-2/3 h-4 bg-neutral-300 dark:bg-neutral-700 rounded" />
      <div className="w-1/2 h-3 bg-neutral-300 dark:bg-neutral-700 rounded" />
    </div>
    {/* ✨ Shimmer sweep */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_1.6s_infinite]" />
  </div>
);
