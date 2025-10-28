"use client";
import { BentoGrid } from "@/components/pieces/bento/grid-one";
import {
  Copy,
  Wind,
  Palette,
  Code,
  Layers,
  Package,
  Smartphone,
  Zap,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: (
      <Palette className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
    ),
    title: "Themeable",
    description:
      "Customize every aspect of the component to fit your brand's design system.",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    id: 2,
    icon: <Zap className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />,
    title: "Blazingly Fast",
    description: "Optimized for performance with minimal footprint.",
  },
  {
    id: 3,
    icon: <Code className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />,
    title: "Developer First",
    description: "Built with TypeScript and a clean, intuitive API.",
  },
  {
    id: 4,
    icon: <Layers className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />,
    title: "50+ Components",
    description: "A comprehensive library of UI components.",
    className: "lg:col-span-2",
  },
  {
    id: 5,
    icon: (
      <Smartphone className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
    ),
    title: "Responsive",
    description: "Looks great on all screen sizes, from mobile to desktop.",
  },
  {
    id: 6,
    icon: (
      <Package className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
    ),
    title: "Modular",
    description: "Import only the components you need.",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 dark:text-neutral-100 mb-12">
          Why BitsAndPieces?
        </h2>
        <BentoGrid features={features} />
      </div>
    </section>
  );
}
