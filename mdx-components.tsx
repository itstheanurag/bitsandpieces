import { useMDXComponents as getDocsMDXComponents } from "nextra-theme-docs";

import { ComponentPreview } from "@/components/docs/component-preview";

const docsComponents = getDocsMDXComponents();

export function useMDXComponents(
  components?: Record<string, React.ComponentType>,
) {
  return {
    ...docsComponents,
    ComponentPreview,
    ...components,
  };
}
