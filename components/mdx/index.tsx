import defaultMdxComponents from "fumadocs-ui/mdx";
import { Tabs, Tab } from "fumadocs-ui/components/tabs";
import { Steps, Step } from "fumadocs-ui/components/steps";
import type { MDXComponents } from "mdx/types";
import { ComponentPreview } from "./preview";
import { ComponentSource } from "./source";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ComponentPreview,
    ComponentSource,
    Tabs,
    Tab,
    Steps,
    Step,
    ...components,
  };
}
