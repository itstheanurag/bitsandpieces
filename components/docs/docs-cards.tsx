"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiBox, FiLayout, FiLayers, FiTerminal } from "react-icons/fi";

const cards = [
  {
    title: "Installation",
    description:
      "Learn how to integrate Bits&Pieces into your React or Next.js project.",
    icon: <FiTerminal className="w-5 h-5" />,
    href: "/docs/installation",
    color: "from-blue-500/10 to-transparent",
    border: "group-hover:border-blue-500/30",
  },
  {
    title: "Components",
    description:
      "Browse our collection of accessible, copy-paste ready UI components.",
    icon: <FiBox className="w-5 h-5" />,
    href: "/docs/components",
    color: "from-emerald-500/10 to-transparent",
    border: "group-hover:border-emerald-500/30",
  },
  {
    title: "Blocks",
    description:
      "Pre-built, responsive sections to drop right into your pages.",
    icon: <FiLayout className="w-5 h-5" />,
    href: "/docs/blocks",
    color: "from-amber-500/10 to-transparent",
    border: "group-hover:border-amber-500/30",
  },
  {
    title: "Templates",
    description:
      "Full-page layouts designed for SaaS, portfolios, and dashboards.",
    icon: <FiLayers className="w-5 h-5" />,
    href: "/docs/templates",
    color: "from-purple-500/10 to-transparent",
    border: "group-hover:border-purple-500/30",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function DocsCards() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
    >
      {cards.map((card) => (
        <Link key={card.title} href={card.href} className="outline-none block">
          <motion.div
            variants={itemVariants}
            className={`group relative h-full flex flex-col p-6 rounded-2xl border border-border bg-card hover:bg-muted/30 transition-all duration-300 overflow-hidden ${card.border}`}
          >
            {/* Top right gradient accent */}
            <div
              className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${card.color} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
            />

            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-muted text-foreground border border-border/50 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="font-semibold text-lg text-foreground m-0">
                {card.title}
              </h3>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed m-0 flex-1">
              {card.description}
            </p>
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
}
