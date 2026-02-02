"use client";

import React, { useState } from "react";
import { ComponentCard, ComponentItem } from "./componen-card";
import {
  FiMousePointer,
  FiToggleLeft,
  FiLayout,
  FiBell,
  FiBox,
  FiType,
  FiLayers,
  FiCreditCard,
} from "react-icons/fi";

import { HiSparkles } from "react-icons/hi";
import { BsLayoutSidebar } from "react-icons/bs";

import { cn } from "@/registry/bitsandpieces/lib/utils";

export interface Category {
  id: string;
  label: string;
}

export const CATEGORIES: Category[] = [
  { id: "all", label: "All" },
  { id: "components", label: "Components" },
  { id: "blocks", label: "Blocks" },
  { id: "templates", label: "Templates" },
];

export const COMPONENTS: ComponentItem[] = [
  {
    id: "1",
    name: "Tactile Button",
    description: "Realistic depth with complex shadow layering.",
    category: "component",
    icon: FiMousePointer,
    isNew: true,
  },
  {
    id: "3",
    name: "Elastic Toggle",
    description: "Spring-based state transitions.",
    category: "component",
    icon: FiToggleLeft,
  },
  {
    id: "12",
    name: "Pricing Block",
    description: "Three-tier pricing section with toggle.",
    category: "block",
    icon: FiLayout,
    isNew: true,
  },
  {
    id: "7",
    name: "Pulse Badge",
    description: "Attention-grabbing notification indicator.",
    category: "component",
    icon: FiBell,
  },
  {
    id: "13",
    name: "SaaS Dashboard",
    description: "Full layout with sidebar and header.",
    category: "template",
    icon: BsLayoutSidebar,
    isNew: true,
  },
  {
    id: "5",
    name: "3D Tilt Card",
    description: "Mouse-aware perspective transforms.",
    category: "component",
    icon: FiBox,
  },
  {
    id: "4",
    name: "Fluid Type",
    description: "Responsive typography scale system.",
    category: "component",
    icon: FiType,
  },
  {
    id: "6",
    name: "Stack Reveal",
    description: "Scroll-triggered list animations.",
    category: "component",
    icon: FiLayers,
  },
];

export const Showcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredComponents =
    activeCategory === "all"
      ? COMPONENTS
      : COMPONENTS.filter((c) => c.category === activeCategory);

  return (
    <section className="py-20 bg-background" id="components">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Component Directory
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg text-base">
              Explore our collection of production-ready elements. Updated
              weekly with new blocks and templates.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center p-1 rounded-lg bg-muted border border-border">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
                  activeCategory === cat.id
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50",
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Container */}
        <div
          className={cn(
            "grid gap-4",
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
          )}
        >
          {filteredComponents.map((item) => (
            <ComponentCard key={item.id} item={item} />
          ))}

          {/* Empty state */}
          {filteredComponents.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted border border-border mb-4">
                <span className="text-muted-foreground text-xl">?</span>
              </div>
              <p className="text-muted-foreground font-medium">
                No items found in this category yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
