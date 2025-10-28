"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

const faqs = [
  {
    question: "What is BitsAndPieces?",
    answer:
      "BitsAndPieces is a collection of copy-paste React components for building modern web applications. It's built with Tailwind CSS and Framer Motion.",
  },
  {
    question: "Is it free?",
    answer:
      "Yes, BitsAndPieces is open-source and free to use in your projects.",
  },
  {
    question: "Can I contribute?",
    answer:
      "Absolutely! We welcome contributions. Please check our GitHub repository for contribution guidelines.",
  },
  {
    question: "How do I use the components?",
    answer:
      "You can simply copy the code for the component you want to use and paste it into your project. The components are self-contained and easy to integrate.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="container px-4 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 dark:text-neutral-100">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full mt-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <AccordionItem value={`item-${index}`} className="border-none">
                <AccordionTrigger className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-400 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
