"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface HeroSectionOneProps {
  className?: string;
}

export function HeroSectionOne({ className }: HeroSectionOneProps) {
  const router = useRouter(); // ✅ use this instead of navigate()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "flex flex-col items-center justify-center min-h-screen text-center px-4",
        "bg-white dark:bg-slate-950",
        className
      )}
    >
      <motion.div
        variants={itemVariants}
        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(200,200,200,0.1)_0%,rgba(255,255,255,0)_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0)_50%)]"
      />
      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100"
      >
        Building blocks for the modern web.
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400"
      >
        A collection of copy-paste{" "}
        <span className="font-mono bg-slate-100 dark:bg-slate-800 px-1 rounded">
          bits
        </span>{" "}
        and installable{" "}
        <span className="font-mono bg-slate-100 dark:bg-slate-800 px-1 rounded">
          pieces
        </span>{" "}
        to build your next project faster.
      </motion.p>
      <motion.div variants={itemVariants} className="mt-8">
        <Button onClick={() => router.push("/docs")} size="lg">
          Browse Components
        </Button>
      </motion.div>
    </motion.div>
  );
}
