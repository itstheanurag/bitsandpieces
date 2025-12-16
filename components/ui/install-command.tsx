"use client";

import * as React from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface InstallCommandProps {
  /** Component name from registry */
  componentName: string;
  /** Base URL for the registry (optional, defaults to production) */
  registryUrl?: string;
  className?: string;
}

/**
 * InstallCommand - Displays a copyable CLI command for installing a component.
 *
 * Shows the shadcn CLI command to add a component from the registry.
 */
export function InstallCommand({
  componentName,
  registryUrl = "https://bitsandpieces.dev",
  className,
}: InstallCommandProps) {
  const [isCopied, setIsCopied] = React.useState(false);

  const command = `npx shadcn@latest add ${registryUrl}/r/${componentName}.json`;

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(command);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-lg",
        "bg-neutral-100 dark:bg-neutral-900",
        "border border-neutral-200 dark:border-neutral-800",
        className
      )}
    >
      <Terminal className="w-4 h-4 text-neutral-500 dark:text-neutral-400 flex-shrink-0" />
      <code className="flex-1 text-sm font-mono text-neutral-700 dark:text-neutral-300 overflow-x-auto">
        {command}
      </code>
      <button
        onClick={copyToClipboard}
        className="p-1.5 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors flex-shrink-0"
        aria-label="Copy install command"
      >
        {isCopied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
        )}
      </button>
    </div>
  );
}
