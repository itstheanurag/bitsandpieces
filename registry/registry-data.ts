import React from "react";

// Import main components
import { MultiStepForm } from "./bitsandpieces/forms/multi-step-form";

// Import example components
import NameEmailPasswordForm from "@/examples/forms/multi-step/name-email-password-form";
import PersonalDetailsMultiStepForm from "@/examples/forms/multi-step/personal-details-multi-step-form";
import ShippingBillingForm from "@/examples/forms/multi-step/shipping-billing-form";

export type RegistryItemType = "component" | "example";

export type RegistryItem = {
  name: string;
  type: RegistryItemType;
  component: React.ComponentType<Record<string, unknown>>;
  path: string;
  title: string;
  description: string;
  dependencies?: string[];
  parentComponent?: string; // For examples, points to the main component name
};

export const registry: Record<string, RegistryItem> = {
  // Main Components
  "multi-step-form": {
    name: "multi-step-form",
    type: "component",
    component: MultiStepForm as unknown as React.ComponentType<
      Record<string, unknown>
    >,
    path: "registry/bitsandpieces/forms/multi-step-form.tsx",
    title: "Multi Step Form",
    description:
      "A flexible multi-step form builder with animations and validation.",
    dependencies: ["motion", "lucide-react", "clsx", "tailwind-merge"],
  },

  // Example Variants
  "multi-step-form-basic": {
    name: "multi-step-form-basic",
    type: "example",
    component: NameEmailPasswordForm as unknown as React.ComponentType<
      Record<string, unknown>
    >,
    path: "examples/forms/multi-step/name-email-password-form.tsx",
    title: "Basic Example",
    description: "Simple name, email, password form example",
    parentComponent: "multi-step-form",
  },

  "multi-step-form-personal": {
    name: "multi-step-form-personal",
    type: "example",
    component: PersonalDetailsMultiStepForm as unknown as React.ComponentType<
      Record<string, unknown>
    >,
    path: "examples/forms/multi-step/personal-details-multi-step-form.tsx",
    title: "Personal Details",
    description: "Multi-step form for collecting personal information",
    parentComponent: "multi-step-form",
  },

  "multi-step-form-shipping": {
    name: "multi-step-form-shipping",
    type: "example",
    component: ShippingBillingForm as unknown as React.ComponentType<
      Record<string, unknown>
    >,
    path: "examples/forms/multi-step/shipping-billing-form.tsx",
    title: "Shipping & Billing",
    description: "Shipping and billing address form example",
    parentComponent: "multi-step-form",
  },
};

// Helper function to get parent component info
export function getParentComponent(exampleName: string): RegistryItem | null {
  const item = registry[exampleName];
  if (!item || item.type !== "example" || !item.parentComponent) {
    return null;
  }
  return registry[item.parentComponent] || null;
}

// Helper function to get all examples for a component
export function getExamplesForComponent(componentName: string): RegistryItem[] {
  return Object.values(registry).filter(
    (item) => item.type === "example" && item.parentComponent === componentName,
  );
}
