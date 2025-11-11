"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Code, Zap, Users, Rocket } from "lucide-react"; // <-- icons (shadcn/lucide)

const fadeUp = (delay = 0): Variants => ({
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay },
  },
});

export function Features() {
  const features = [
    {
      icon: <Code className="w-10 h-10 text-primary" />,
      title: "Copy-Paste Code Snippets",
      description:
        "Save reusable components and utilities that you can instantly paste into any new project.",
    },
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "Lightning Fast Search",
      description:
        "Find your saved snippets within seconds using full-text search.",
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Collaborate With Teammates",
      description:
        "Share your snippets with your team or keep them private — your choice.",
    },
    {
      icon: <Rocket className="w-10 h-10 text-primary" />,
      title: "Get Started Instantly",
      description:
        "Zero setup — just create an account and start storing your bits and pieces.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container w-full max-w-7xl">
        {/* Title */}
        <motion.h2
          variants={fadeUp(0.1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-12"
        >
          Why BitsAndPieces?
        </motion.h2>

        {/* Bento Grid */}
        <motion.div
          variants={fadeUp(0.3)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="
            grid grid-cols-1
            sm:grid-cols-2
            md:grid-cols-4
            gap-6
          "
        >
          {features.map(({ icon, title, description }, i) => (
            <motion.div
              key={i}
              variants={fadeUp(0.2 * (i + 1))}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="
                rounded-xl
                border
                border-border
                p-6
                bg-muted/30
                backdrop-blur-sm
                shadow
                hover:shadow-lg
                transition-all
                hover:-translate-y-1
              "
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-muted-foreground text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
