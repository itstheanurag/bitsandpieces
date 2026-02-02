import React from "react";

// Example registry - independent of everything
// Maps example names to their component and file path
export type ExampleItem = {
  name: string;
  component: React.ComponentType<Record<string, unknown>>;
  path: string;
  title: string;
  parentComponent: string;
};

export const exampleRegistry: Record<string, ExampleItem> = {
  "multi-step-form-basic": {
    name: "multi-step-form-basic",
    component: React.lazy(
      () => import("@/examples/forms/multi-step/name-email-password-form"),
    ),
    path: "examples/forms/multi-step/name-email-password-form.tsx",
    title: "Basic Example",
    parentComponent: "multi-step-form",
  },
  "multi-step-form-personal": {
    name: "multi-step-form-personal",
    component: React.lazy(
      () =>
        import("@/examples/forms/multi-step/personal-details-multi-step-form"),
    ),
    path: "examples/forms/multi-step/personal-details-multi-step-form.tsx",
    title: "Personal Details",
    parentComponent: "multi-step-form",
  },
  "multi-step-form-shipping": {
    name: "multi-step-form-shipping",
    component: React.lazy(
      () => import("@/examples/forms/multi-step/shipping-billing-form"),
    ),
    path: "examples/forms/multi-step/shipping-billing-form.tsx",
    title: "Shipping & Billing",
    parentComponent: "multi-step-form",
  },
};

// Helper function to get example by name
export function getExample(name: string): ExampleItem | null {
  return exampleRegistry[name] || null;
}

// Helper function to get all examples for a parent component
export function getExamplesForComponent(parentName: string): ExampleItem[] {
  return Object.values(exampleRegistry).filter(
    (example) => example.parentComponent === parentName,
  );
}
