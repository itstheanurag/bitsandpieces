import * as React from "react";
import { loadComponent, RegistryEntry } from "@/registry/index"; // ✅ fixed import
import registryData from "@/registry/registry.internal"; // ✅ stays fine

export const ComponentPreview: React.FC<{ name: string }> = ({ name }) => {
  const Preview = React.useMemo(() => {
    const entry = (registryData as unknown as Record<string, RegistryEntry>)[
      name
    ];
    if (!entry) {
      return (
        <div className="text-red-500">
          Component '{name}' not found in registry.
        </div>
      );
    }

    // const Component = loadComponent(entry.path);
    // return <Component />;
  }, [name]);

  return (
    <div className="flex items-center justify-center bg-card rounded-lg border h-64">
      <React.Suspense
        fallback={
          <div className="text-muted-foreground flex items-center justify-center text-sm">
            Loading...
          </div>
        }
      >
        {Preview}
      </React.Suspense>
    </div>
  );
};
