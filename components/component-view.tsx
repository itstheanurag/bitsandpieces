"use client";

import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Copy } from "lucide-react";

interface ComponentViewProps {
  name: string;
  code: string;
  /** Optional pre-generated usage code */
  usageCode?: string;
  /** Optional pre-highlighted source HTML from Shiki */
  highlightedSource?: string;
  /** Optional pre-highlighted usage HTML from Shiki */
  highlightedUsage?: string;
  component: React.ComponentType<Record<string, unknown>>;
}

/**
 * Generate a basic usage code example from component name
 */
function generateUsageCode(name: string): string {
  const parts = name.split("-");
  const componentName = parts
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

  return `import { ${componentName} } from "@/components/pieces/${
    parts[0]
  }/${parts.slice(1).join("-")}"

export default function App() {
  return <${componentName} />
}`;
}

export function ComponentView({
  name,
  code,
  usageCode,
  highlightedSource,
  highlightedUsage,
  component: Component,
}: ComponentViewProps) {
  // Generate usage code if not provided
  const finalUsageCode = usageCode || generateUsageCode(name);

  const [isCopied, setIsCopied] = React.useState(false);
  const [copiedType, setCopiedType] = React.useState<"source" | "usage" | null>(
    null
  );

  const copyToClipboard = async (text: string, type: "source" | "usage") => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
    setCopiedType(type);
    setTimeout(() => {
      setIsCopied(false);
      setCopiedType(null);
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <Tabs defaultValue="preview" className="w-full">
        <div className="flex items-center justify-between pb-3">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
            <TabsTrigger value="code">Source</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent
          value="preview"
          className="border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-100 dark:bg-neutral-900 min-h-[400px] relative overflow-hidden p-0"
        >
          <div className="w-full min-h-[400px] relative transform-gpu overflow-auto bg-white dark:bg-neutral-950 rounded-lg flex items-center justify-center">
            {Component ? (
              <Component />
            ) : (
              <div className="flex items-center justify-center h-full text-neutral-500">
                Component not found
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="usage">
          <div className="relative rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden">
            <button
              onClick={() => copyToClipboard(finalUsageCode, "usage")}
              className="absolute top-3 right-3 z-10 p-2 rounded-md bg-neutral-800/50 hover:bg-neutral-700/50 transition-colors"
              aria-label="Copy usage code"
            >
              {isCopied && copiedType === "usage" ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4 text-neutral-400" />
              )}
            </button>
            {highlightedUsage ? (
              <div
                className="overflow-x-auto text-sm [&_pre]:p-4 [&_pre]:m-0 [&_pre]:bg-neutral-950"
                dangerouslySetInnerHTML={{ __html: highlightedUsage }}
              />
            ) : (
              <pre className="p-4 overflow-x-auto text-sm bg-neutral-950 text-neutral-50 font-mono">
                <code>{finalUsageCode}</code>
              </pre>
            )}
          </div>
        </TabsContent>

        <TabsContent value="code">
          <div className="relative rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden">
            <button
              onClick={() => copyToClipboard(code, "source")}
              className="absolute top-3 right-3 z-10 p-2 rounded-md bg-neutral-800/50 hover:bg-neutral-700/50 transition-colors"
              aria-label="Copy source code"
            >
              {isCopied && copiedType === "source" ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4 text-neutral-400" />
              )}
            </button>
            {highlightedSource ? (
              <div
                className="overflow-x-auto text-sm [&_pre]:p-4 [&_pre]:m-0 [&_pre]:bg-neutral-950"
                dangerouslySetInnerHTML={{ __html: highlightedSource }}
              />
            ) : (
              <pre className="p-4 overflow-x-auto text-sm bg-neutral-950 text-neutral-50 font-mono">
                <code>{code}</code>
              </pre>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
