"use client";

import React, { useState } from "react";
import { cn } from "@/registry/bitsandpieces/lib/utils";
import { BiCheck, BiCopy } from "react-icons/bi";
type PackageManager = "npm" | "pnpm" | "yarn" | "bun";
type InstallMethod = "cli" | "manual";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

interface InstallationTabsProps {
  componentName: string;
  dependencies?: string[];
  className?: string;
}

const packageManagerCommands: Record<
  PackageManager,
  { install: string; exec: string }
> = {
  npm: { install: "npm install", exec: "npx" },
  pnpm: { install: "pnpm add", exec: "pnpm dlx" },
  yarn: { install: "yarn add", exec: "yarn dlx" },
  bun: { install: "bun add", exec: "bunx" },
};

export const InstallationTabs: React.FC<InstallationTabsProps> = ({
  componentName,
  dependencies = [],
  className,
}) => {
  const [method, setMethod] = useState<InstallMethod>("cli");
  const [packageManager, setPackageManager] = useState<PackageManager>("pnpm");
  const [copied, setCopied] = useState(false);

  const cliCommand = `${packageManagerCommands[packageManager].exec} shadcn@latest add ${SITE_URL}/r/${componentName}.json`;
  const manualCommand =
    dependencies.length > 0
      ? `${packageManagerCommands[packageManager].install} ${dependencies.join(" ")}`
      : "# No additional dependencies required";

  const currentCommand = method === "cli" ? cliCommand : manualCommand;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(currentCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("my-6", className)}>
      {/* Method Tabs */}
      <div className="flex items-center gap-1 mb-4">
        <button
          onClick={() => setMethod("cli")}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-md transition-colors",
            method === "cli"
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground hover:bg-muted",
          )}
        >
          CLI
        </button>
        <button
          onClick={() => setMethod("manual")}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-md transition-colors",
            method === "manual"
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground hover:bg-muted",
          )}
        >
          Manual
        </button>
      </div>

      {/* Instructions */}
      <p className="text-sm text-muted-foreground mb-3">
        {method === "cli"
          ? "Run the following command"
          : "Install the required dependencies"}
      </p>

      {/* Package Manager Tabs + Command */}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        {/* Package Manager Pills */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
          {(Object.keys(packageManagerCommands) as PackageManager[]).map(
            (pm) => (
              <button
                key={pm}
                onClick={() => setPackageManager(pm)}
                className={cn(
                  "px-3 py-1 text-xs font-mono rounded transition-colors",
                  packageManager === pm
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {pm}
              </button>
            ),
          )}
        </div>

        {/* Command Display */}
        <div className="relative group">
          <pre className="p-4 overflow-x-auto text-sm font-mono text-foreground">
            <code>{currentCommand}</code>
          </pre>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 p-2 rounded-md bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors opacity-0 group-hover:opacity-100"
            aria-label="Copy command"
          >
            {copied ? (
              <BiCheck className="w-4 h-4 text-green-500" />
            ) : (
              <BiCopy className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Manual Method Extra Steps */}
      {method === "manual" && (
        <div className="mt-4 text-sm text-muted-foreground">
          <p className="mb-2">
            Then copy the component from the <strong>Code</strong> tab above.
          </p>
        </div>
      )}
    </div>
  );
};
