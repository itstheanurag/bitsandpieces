import { useMDXComponents as getDocsMDXComponents } from "nextra-theme-docs";

import { ComponentPreview } from "@/components/docs/component-preview";
import { InstallationTabs } from "@/components/docs/installation-tabs";
import { PropsTable } from "@/components/docs/props-table";
import { CodeBlock } from "@/components/docs/code-block";

const docsComponents = getDocsMDXComponents();

export function useMDXComponents(
  components?: Record<string, React.ComponentType>,
) {
  return {
    ...docsComponents,
    ComponentPreview,
    InstallationTabs,
    PropsTable,
    CodeBlock,
    ...components,
  };
}
