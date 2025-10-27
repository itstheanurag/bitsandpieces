"use client";

import * as React from "react";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { registryData as bitsRegistry } from "@/__registry__/registry.bits";
import { registryData as piecesRegistry } from "@/__registry__/registry.pieces";
import { Button } from "@/components/ui/button";
import { Code, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

const registryData = { ...bitsRegistry, ...piecesRegistry };
type RegistryEntry = typeof registryData[keyof typeof registryData];

interface ComponentDemoTabsProps {
  name: string;
  children: React.ReactNode;
}

export const ComponentDemoTabs: React.FC<ComponentDemoTabsProps> = ({
  name,
  children,
}) => {
  const [activeTab, setActiveTab] = React.useState<"preview" | "code">("preview");

  const exampleCode = React.useMemo(() => {
    const entry = (registryData as unknown as Record<string, RegistryEntry>)[name];
    return entry?.exampleCode;
  }, [name]);

  return (
    <div className="my-4 rounded-lg border bg-neutral-50 dark:bg-neutral-900">
      <div className="flex items-center justify-start p-2 border-b border-neutral-200 dark:border-neutral-800">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setActiveTab("preview")}
          className={cn(
            "text-sm font-medium",
            activeTab === "preview"
              ? "bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
              : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          )}
        >
          <Eye className="w-4 h-4 mr-2" /> Preview
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setActiveTab("code")}
          className={cn(
            "text-sm font-medium",
            activeTab === "code"
              ? "bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
              : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          )}
        >
          <Code className="w-4 h-4 mr-2" /> Code
        </Button>
      </div>
      <div className="p-4">
        {activeTab === "preview" && children}
        {activeTab === "code" && exampleCode && (
          <DynamicCodeBlock lang="tsx" code={exampleCode} />
        )}
        {activeTab === "code" && !exampleCode && (
          <p className="text-red-500">Example code not found for {name}.</p>
        )}
      </div>
    </div>
  );
};
