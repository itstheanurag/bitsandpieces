import dynamic from "next/dynamic";
import React from "react";

export type RegistryItem = {
  name: string;
  component: React.ComponentType;
  path: string;
  title: string;
  description: string;
};

export const registry: Record<string, RegistryItem> = {
  "multi-step-form": {
    name: "multi-step-form",
    title: "Multi Step Form",
    description: "A beautiful account creation form with progressive steps.",
    component: dynamic(() =>
      import("@/registry/bitsandpieces/forms/multi-step-form").then(
        (m) => m.MultiStepForm,
      ),
    ),
    path: "registry/bitsandpieces/forms/multi-step-form.tsx",
  },
  "side-depth-button": {
    name: "side-depth-button",
    title: "Side Depth Button",
    description: "A tactile button that mimics physical depth.",
    component: dynamic(() =>
      import("@/registry/bitsandpieces/buttons/button").then(
        (m) => m.SideDepthButton,
      ),
    ),
    path: "registry/bitsandpieces/buttons/button.tsx",
  },
};
