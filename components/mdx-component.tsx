import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { CodePreview } from "@/components/root/CodePreview"; // Import CodePreview

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    // Add custom components here
    CodePreview: CodePreview, // Register CodePreview
    ...components,
  };
}
