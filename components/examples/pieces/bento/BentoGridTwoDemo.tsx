"use client";
import React, { useState, useEffect } from "react";
import { BentoGrid } from "@/components/pieces/bento/grid-two";
import {
  Cloud,
  Code,
  Database,
  Layout,
  Lock,
  Palette,
  Rocket,
  Server,
} from "lucide-react";

const iconProps = { className: "w-6 h-6 text-neutral-700 dark:text-neutral-300" };

const items = [
  { id: 1, icon: <Palette {...iconProps} />, title: "Design System", description: "Colors, typography, and spacing.", span: "md:col-span-2" },
  { id: 2, icon: <Layout {...iconProps} />, title: "Layouts", description: "Responsive grid and flexbox utilities." },
  { id: 3, icon: <Code {...iconProps} />, title: "Components", description: "Buttons, forms, and more." },
  { id: 4, icon: <Rocket {...iconProps} />, title: "Deployment", description: "CI/CD and hosting solutions." },
  { id: 5, icon: <Database {...iconProps} />, title: "Databases", description: "SQL and NoSQL solutions.", span: "md:col-span-2" },
  { id: 6, icon: <Server {...iconProps} />, title: "APIs", description: "REST and GraphQL endpoints." },
  { id: 7, icon: <Lock {...iconProps} />, title: "Authentication", description: "Secure user login and registration." },
  { id: 8, icon: <Cloud {...iconProps} />, title: "Cloud Storage", description: "File storage and CDN.", span: "md:col-span-3" },
];

export function BentoGridTwoDemo() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-white dark:bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            Responsive Bento Grid
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            A flexible, responsive bento grid that adapts to any screen size and number of items.
          </p>
        </div>

        <BentoGrid items={items} isLoading={isLoading} />
      </div>
    </div>
  );
}
