"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is BitsAndPieces?",
    answer:
      "BitsAndPieces is a curated library of production-ready UI components built with React, Tailwind CSS, and Framer Motion. Each component is designed to be directly copied into your codebase and customized without dependencies or vendor lock-in.",
  },
  {
    question: "Do I need to install anything to use the components?",
    answer:
      "No installation is required. Just copy the component code, paste it into your project, and adjust it to your needs. The components rely on standard React and Tailwind, so they work in nearly any modern setup.",
  },
  {
    question: "Are the components customizable?",
    answer:
      "Yes. Every component is built with utility classes and minimal abstraction, which makes them easy to style, redesign, and extend. You have full control over layout, motion, colors, and behavior.",
  },
  {
    question: "Is BitsAndPieces free to use?",
    answer:
      "Yes, the project is completely open-source and free for both personal and commercial use. You can use, modify, and distribute the components without restrictions.",
  },
  {
    question: "Can I contribute components or improvements?",
    answer:
      "Absolutely. Contributions are welcome! You can submit new components, bug fixes, or enhancements through the GitHub repository. Check the contribution guidelines before creating a pull request.",
  },
  {
    question: "Do the components support dark mode?",
    answer:
      "Yes. All components use Tailwind’s dark mode modifiers to ensure they adapt to light and dark modes automatically.",
  },
  {
    question: "Will you be adding more components?",
    answer:
      "Yes. New components and variations are added on a rolling basis. The goal is to continually improve and expand the library based on real-world use cases and community feedback.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900 w-full">
      <div className="container px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg"
          >
            Everything you need to know about the library and how it works.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "rounded-2xl border transition-all duration-200",
                  isOpen
                    ? "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 shadow-lg"
                    : "bg-white/50 dark:bg-neutral-900/50 border-transparent hover:bg-white dark:hover:bg-neutral-900 hover:border-neutral-200 dark:hover:border-neutral-800"
                )}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span
                    className={cn(
                      "text-lg font-medium transition-colors",
                      isOpen
                        ? "text-neutral-900 dark:text-white"
                        : "text-neutral-700 dark:text-neutral-300"
                    )}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      "flex items-center justify-center w-8 h-8 rounded-full border transition-colors",
                      isOpen
                        ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border-neutral-900 dark:border-white"
                        : "bg-transparent border-neutral-200 dark:border-neutral-700 text-neutral-500"
                    )}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
