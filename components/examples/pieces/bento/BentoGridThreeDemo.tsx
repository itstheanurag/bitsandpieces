"use client";
import { Palette, Zap, Code, Layers, Smartphone, Package } from "lucide-react";
import { BentoGridThree } from "@/components/pieces/bento/grid-three";
import { motion } from "framer-motion";

export const ThemedPreview = () => {
  const colors = ["#DB2777", "#2563EB", "#059669", "#F97316"];

  return (
    <div className="flex gap-3">
      {colors.map((c) => (
        <motion.div
          key={c}
          whileHover={{ scale: 1.2 }}
          className="w-8 h-8 rounded-full border border-white/20 cursor-pointer"
          style={{ backgroundColor: c }}
        />
      ))}
    </div>
  );
};

export const SpeedPulse = () => (
  <motion.div
    className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400/20"
    animate={{ scale: [1, 1.3, 1] }}
    transition={{ repeat: Infinity, duration: 1 }}
  >
    <Zap className="w-8 h-8 text-yellow-500" />
  </motion.div>
);

export const CodePreview = () => (
  <pre className="text-xs font-mono text-left text-neutral-700 dark:text-neutral-300">
    {`import { Button } from "ui";

export function App() {
  return <Button variant="primary">Save</Button>;
}`}
  </pre>
);

export const ComponentGridVisual = () => (
  <motion.div
    className="grid grid-cols-4 gap-2 w-full"
    animate={{ opacity: [0.7, 1, 0.7] }}
    transition={{ repeat: Infinity, duration: 3 }}
  >
    {Array.from({ length: 12 }).map((_, i) => (
      <div
        key={i}
        className="w-full h-6 rounded-md bg-neutral-300/60 dark:bg-neutral-700/60"
      />
    ))}
  </motion.div>
);

export const ResponsivePreview = () => (
  <motion.div
    animate={{ borderRadius: ["8px", "20px", "8px"] }}
    transition={{ repeat: Infinity, duration: 3 }}
    className="w-24 h-14 bg-neutral-400/30 dark:bg-neutral-600/30"
  />
);

export const ModularBlocks = () => (
  <div className="flex gap-3">
    <motion.div
      className="w-10 h-10 rounded-md bg-neutral-300 dark:bg-neutral-700"
      drag
    />
    <motion.div
      className="w-10 h-10 rounded-md bg-neutral-300 dark:bg-neutral-700"
      drag
    />
  </div>
);

const features = [
  {
    id: 1,
    icon: (
      <Palette className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
    ),
    title: "Themeable",
    description:
      "Customize every aspect of the component to fit your brand's design system.",
    children: <ThemedPreview />,
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    id: 2,
    icon: <Zap className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />,
    title: "Blazingly Fast",
    description: "Optimized for performance with minimal footprint.",
    children: <SpeedPulse />,
  },
  {
    id: 3,
    icon: <Code className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />,
    title: "Developer First",
    description: "Built with TypeScript and a clean, intuitive API.",
    children: <CodePreview />,
  },
  {
    id: 4,
    icon: <Layers className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />,
    title: "50+ Components",
    description: "A comprehensive library of UI components.",
    className: "lg:col-span-2",
    children: <ComponentGridVisual />,
  },
  {
    id: 5,
    icon: (
      <Smartphone className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
    ),
    title: "Responsive",
    description: "Looks great on all screen sizes, from mobile to desktop.",
    children: <ResponsivePreview />,
  },
  {
    id: 6,
    icon: (
      <Package className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
    ),
    title: "Modular",
    description: "Import only the components you need.",
    children: <ModularBlocks />,
  },
];

export function BentoGridThreeDemo() {
  return (
    <div className="w-full bg-white dark:bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            A Better Way to Build
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Our component library is designed to be flexible, performant, and a
            joy to use. Here's what makes it special.
          </p>
        </div>
        <BentoGridThree features={features} />
      </div>
    </div>
  );
}
