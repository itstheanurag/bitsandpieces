"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  children?: React.ReactNode;
}

const getGridSpan = (index: number) => {
  switch (index) {
    case 0:
      return "md:col-span-3 md:row-span-2";
    case 1:
      return "md:col-span-2 md:row-span-1";
    case 2:
      return "md:col-span-2 md:row-span-2";
    case 3:
      return "md:col-span-2 md:row-span-2";
    case 4:
      return "md:col-span-3 md:row-span-1";
    case 5:
      return "md:col-span-2 md:row-span-1";
    default:
      return "md:col-span-3 md:row-span-1";
  }
};

export const BentoGridFour = ({ features }: { features: Feature[] }) => {
  return (
    <div
      className={cn(
        "grid gap-4",
        "grid-cols-1 sm:grid-cols-2 md:grid-cols-7",
        "auto-rows-[180px] md:auto-rows-[200px] lg:auto-rows-[240px]"
      )}
    >
      {features.map((feature: Feature, index: number) => (
        <BentoCardFour
          key={feature.id}
          index={index}
          className={getGridSpan(index)}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        >
          <>{feature.children}</>
        </BentoCardFour>
      ))}
    </div>
  );
};

const BentoCardFour = ({
  children,
  className,
  index,
  icon,
  title,
  description,
}: {
  children?: React.ReactNode;
  className?: string;
  index: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
    whileHover={{
      y: -6,
      scale: 1.01,
      boxShadow:
        "0 12px 40px -8px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.14)",
    }}
    className={cn(
      "relative group overflow-hidden rounded-md border p-6",
      "bg-neutral-100/80 dark:bg-neutral-900/70 backdrop-blur-sm",
      "border-neutral-300 dark:border-neutral-700",
      "transition-all duration-200",
      className
    )}
  >
    {/* Decorative subtle sheen */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent)] pointer-events-none" />

    {/* TOP SECTION */}
    <div className="flex flex-col gap-4 z-10 relative mb-10">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-neutral-200 dark:bg-neutral-800 shadow-sm">
          {icon}
        </div>
        <div className="tracking-tight">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            {title}
          </h3>
          <p className="text-sm  text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>

    {/* CHILDREN SHOWCASE AREA */}
    {children && (
      <div className={cn("p-4 flex items-center justify-center")}>
        {children}
      </div>
    )}
  </motion.div>
);
