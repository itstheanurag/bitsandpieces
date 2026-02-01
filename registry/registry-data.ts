import React from "react";

export type RegistryItem = {
  name: string;
  component: React.ComponentType;
  path: string;
  title: string;
  description: string;
};

export const registry: Record<string, RegistryItem> = {};
