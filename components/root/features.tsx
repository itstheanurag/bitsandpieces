import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Copy, Moon, Box, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export function Features() {
  const [isExpanded, setIsExpanded] = useState(false);

  const features = [
    {
      title: "Bits & Pieces",
      description:
        "A clear architectural distinction between small, copyable utilities (Bits) and large, installable components (Pieces).",
      icon: <Box className="w-7 h-7" />,
      className: "md:col-span-2 md:row-span-2",
      gradient:
        "from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950",
    },
    {
      title: "Copy & Paste",
      description:
        "Simply copy the source code. No complex dependency trees or bulky npm packages.",
      icon: <Copy className="w-7 h-7" />,
      className: "md:col-span-1 md:row-span-1",
      gradient:
        "from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900",
    },
    {
      title: "Modern Stack",
      description:
        "Optimized for Next.js 14+, Tailwind CSS, and ultra-smooth Framer Motion animations.",
      icon: <Code2 className="w-7 h-7" />,
      className: "md:col-span-1 md:row-span-2",
      gradient:
        "from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900",
    },
    {
      title: "Dark Mode Ready",
      description:
        "Native dark mode support built into every single bit and piece.",
      icon: <Moon className="w-7 h-7" />,
      className: "md:col-span-1 md:row-span-1",
      gradient:
        "from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950",
    },
    {
      title: "Premium Aesthetics",
      description:
        "Curated neutral color palettes and high-end design patterns for a professional look.",
      icon: <Box className="w-7 h-7" />,
      className: "md:col-span-1 md:row-span-1",
      gradient:
        "from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900",
    },
    {
      title: "Accessible by Design",
      description:
        "WCAG AA compliant components ensuring your applications are usable by everyone.",
      icon: <Box className="w-7 h-7" />,
      className: "md:col-span-1 md:row-span-1",
      gradient:
        "from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950",
    },
  ];


  return (
    <section className="py-32 w-full relative overflow-hidden bg-white dark:bg-neutral-950">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_60%_60%_at_50%_-20%,rgba(0,0,0,0.05),transparent)] dark:bg-[radial-gradient(ellipse_60%_60%_at_50%_-20%,rgba(255,255,255,0.05),transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-neutral-900 dark:text-white"
          >
            Built for excellence.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-500 dark:text-neutral-400 text-xl max-w-2xl mx-auto font-medium"
          >
            Every component is meticulously crafted to provide the best possible
            developer and user experience.
          </motion.p>
        </div>

        <div className="overflow-hidden rounded-lg border-t border-l border-neutral-200 dark:border-neutral-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <AnimatePresence mode="popLayout">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className={cn(
                    "group relative overflow-hidden bg-white dark:bg-neutral-900 border-r border-b border-neutral-200 dark:border-neutral-800 p-10 flex flex-col justify-between hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all duration-500",
                    feature.className
                  )}
                >
                  {/* Card Gradient Background */}
                  <div
                    className={cn(
                      "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br",
                      feature.gradient
                    )}
                  />

                  <div className="relative z-10">
                    <div className="mb-6 inline-flex items-center justify-center rounded-md bg-neutral-100 dark:bg-neutral-800 p-4 text-neutral-900 dark:text-white shadow-inner group-hover:scale-110 transition-transform duration-500">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-black text-neutral-900 dark:text-white tracking-tight mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-base leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative piece for Bento feel */}
                  <div className="absolute right-[-10%] bottom-[-10%] w-32 h-32 rounded-md bg-neutral-100/50 dark:bg-neutral-800/10 blur-2xl group-hover:bg-neutral-200/50 dark:group-hover:bg-neutral-200/5 transition-colors duration-500" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

       
      </div>
    </section>
  );
}
