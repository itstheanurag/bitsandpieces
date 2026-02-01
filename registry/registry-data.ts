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
  "animated-form": {
    name: "animated-form",
    title: "Animated Form",
    description: "A beautiful account creation form with progressive steps.",
    component: dynamic(() =>
      import("@/registry/bitsandpieces/forms/animated-form").then(
        (m) => m.AnimatedForm,
      ),
    ),
    path: "registry/bitsandpieces/forms/animated-form.tsx",
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
