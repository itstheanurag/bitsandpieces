"use client ";

import { lazy, ComponentType } from "react";
// import registryData from "./registry.internal";

export interface RegistryEntry {
  name: string;
  title: string;
  description: string;
  path: string;
  code: string;
  dependencies: string[];
  registryDependencies: string[];
}

// export function getComponent(name: string): RegistryEntry | null {
//   return registryData[name] || null;
// }

// export function getAllComponents(): RegistryEntry[] {
//   return Object.values(registryData);
// }

const componentCache = new Map<string, ComponentType<any>>();

export function loadComponent(path: string): ComponentType<any> {
  if (componentCache.has(path)) {
    return componentCache.get(path)!;
  }

  const Component = lazy(async () => {
    try {
      // Remove leading @ and handle the path
      const cleanPath = path.replace(/^@\//, "");
      const module = await import(`@/${cleanPath}`);

      // Try to find the component export
      // Look for named exports that match common patterns
      const possibleExports = Object.keys(module).filter(
        (key) => key !== "default" && typeof module[key] === "function"
      );

      const componentExport = possibleExports[0] || "default";
      const Component = module[componentExport] || module.default;

      return { default: Component };
    } catch (error) {
      console.error(`Failed to load component from ${path}:`, error);
      return {
        default: () => (
          <div className="text-red-500">Failed to load component</div>
        ),
      };
    }
  });

  componentCache.set(path, Component);
  return Component;
}
