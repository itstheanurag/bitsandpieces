"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Box,
  CheckCircle2,
  Sliders,
  Smartphone,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "No Runtime Abstraction",
    description:
      "Components are copied to your project. You own the code. No wrapper hell.",
  },
  {
    icon: <Box className="h-6 w-6" />,
    title: "Tree-shakable",
    description:
      "Import only what you need. Keep your bundle size tiny and performant.",
  },
  {
    icon: <CheckCircle2 className="h-6 w-6" />,
    title: "Accessible",
    description:
      "Built on Radix UI primitives. WAI-ARIA compliant out of the box.",
  },
  {
    icon: <Sliders className="h-6 w-6" />,
    title: "Customizable",
    description:
      "Styled with Tailwind CSS. Easy to opt-out or extend with your theme.",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Responsive",
    description:
      "Mobile-first design principles applied to every single component.",
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Type Safe",
    description:
      "Written in TypeScript. Props are fully typed with TSDoc comments.",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Engineered for modern applications
          </h2>
          <p className="text-muted-foreground text-lg">
            We've obsessed over the details so you don't have to. Focus on
            building your product, not rebuilding the wheel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card/80 transition-colors"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
