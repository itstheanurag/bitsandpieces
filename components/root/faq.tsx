"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      "Yes. All components use Tailwind’s `text-foreground`, `bg-card`, `border-border`, and other theme-aware tokens to ensure they adapt to light and dark modes automatically.",
  },
  {
    question: "Will you be adding more components?",
    answer:
      "Yes. New components and variations are added on a rolling basis. The goal is to continually improve and expand the library based on real-world use cases and community feedback.",
  },
];

export function FAQ() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-20">
      <div className="container px-4 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                {/* Question Card */}
                <div className="rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                  <button
                    onClick={() => toggleIndex(index)}
                    className="flex w-full items-center justify-between p-5 text-left"
                  >
                    <span className="font-semibold text-primary">
                      {faq.question}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-primary ml-4"
                    >
                      ▼
                    </motion.span>
                  </button>
                </div>

                {/* Answer Panel */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 10 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="rounded-xl border border-border bg-muted/40 shadow-sm p-5 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
