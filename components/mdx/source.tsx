import * as React from "react";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { registryData as bitsRegistry } from "@/__registry__/registry.bits";
import { registryData as piecesRegistry } from "@/__registry__/registry.pieces";

const registryData = { ...bitsRegistry, ...piecesRegistry };
type RegistryEntry = typeof registryData[keyof typeof registryData];

export const ComponentSource: React.FC<{ name: string }> = ({ name }) => {
  const value = (registryData as unknown as Record<string, RegistryEntry>)[name]
    ?.code;

  if (!value) {
    return null;
  }

  return <DynamicCodeBlock lang="tsx" code={value} />;
};
