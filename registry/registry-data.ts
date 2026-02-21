import React from "react";

// Import main components only (no examples)
import { MultiStepForm } from "./bitsandpieces/forms/multi-step-form/multi-step-form";

export type RegistryItemType = "component";

export type RegistryItem = {
  name: string;
  type: RegistryItemType;
  component: React.ComponentType<Record<string, unknown>>;
  path: string;
  title: string;
  description: string;
  dependencies?: string[];
};

export const registry: Record<string, RegistryItem> = {
  // Main Components only
  "multi-step-form": {
    name: "multi-step-form",
    type: "component",
    component: MultiStepForm as unknown as React.ComponentType<
      Record<string, unknown>
    >,
    path: "registry/bitsandpieces/forms/multi-step-form/multi-step-form.tsx",
    title: "Multi Step Form",
    description:
      "A flexible multi-step form builder with animations and validation.",
    dependencies: ["motion", "lucide-react", "clsx", "tailwind-merge"],
  },
};

// Helper function to get component info
export function getRegistryItem(name: string): RegistryItem | null {
  return registry[name] || null;
}
