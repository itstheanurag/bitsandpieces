"use client";

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
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}