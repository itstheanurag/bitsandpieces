import dynamic from "next/dynamic";
import React from "react";

export type RegistryItem = {
  name: string;
  component: React.ComponentType<any>;
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
      import("@/registry/bitsandpieces/animated-form/animated-form").then(
        (m) => m.AnimatedForm,
      ),
    ),
    path: "registry/bitsandpieces/animated-form/animated-form.tsx",
  },
};
