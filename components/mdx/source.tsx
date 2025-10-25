import * as React from "react";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import registryData from "@/registry/registry.internal";
import { RegistryEntry } from "@/registry";

export const ComponentSource: React.FC<{ name: string }> = ({ name }) => {
  const value = (registryData as unknown as Record<string, RegistryEntry>)[name]
    ?.code;

  if (!value) {
    return null;
  }

  return <DynamicCodeBlock lang="tsx" code={value} />;
};
