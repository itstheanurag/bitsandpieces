"use client";

import React, { useState } from "react";
import { cn } from "@/registry/bitsandpieces/lib/utils";
import { BiCheck, BiCopy, BiCode } from "react-icons/bi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { CodeViewer, escapeHtml } from "./code-viewer";

type PackageManager = "npm" | "pnpm" | "yarn" | "bun";
type InstallMethod = "cli" | "manual";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "";

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

      {method === "cli" ? (
        /* CLI Instructions */
        <>
          <p className="text-sm text-muted-foreground mb-3">
            Run the following command
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
        </>
      ) : (
        /* Manual Instructions */
        <>
          <p className="text-sm text-muted-foreground mb-3">
            Install dependencies and copy the component code
          </p>

          {/* Dependencies Command */}
          <div className="rounded-lg border border-border bg-card overflow-hidden mb-4">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
              <span className="text-sm font-medium">Dependencies</span>
              <div className="flex items-center gap-2">
                {(Object.keys(packageManagerCommands) as PackageManager[]).map(
                  (pm) => (
                    <button
                      key={pm}
                      onClick={() => setPackageManager(pm)}
                      className={cn(
                        "px-2 py-0.5 text-xs font-mono rounded transition-colors",
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
            </div>
            <div className="relative group">
              <pre className="p-4 overflow-x-auto text-sm font-mono text-foreground">
                <code>{manualCommand}</code>
              </pre>
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

          {/* Component Code Tabs — dynamically renders all files */}
          <RegistryFileTabs componentName={componentName} />
        </>
      )}
    </div>
  );
};

/** A file entry from the shadcn registry JSON. */
interface RegistryFile {
  path: string;
  content: string;
  type: string;
  target?: string;
}

/**
 * Fetches the registry JSON for a component and renders a tab
 * for every file it contains.
 */
function RegistryFileTabs({ componentName }: { componentName: string }) {
  const [files, setFiles] = React.useState<RegistryFile[]>([]);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    fetch(`/r/${componentName}.json`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.files) && data.files.length > 0) {
          setFiles(data.files);
        }
      })
      .catch((err) => console.error("Error loading registry:", err));
  }, [componentName]);

  if (files.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-card p-6 text-center text-sm text-muted-foreground">
        Loading component files…
      </div>
    );
  }

  /** Extract the filename from a path like "registry/foo/bar/types.ts" */
  const basename = (filePath: string) => filePath.split("/").pop() ?? filePath;

  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden">
      <Tabs
        value={String(activeIndex)}
        onValueChange={(val) => setActiveIndex(Number(val))}
        className="h-full flex flex-col"
      >
        <div className="flex items-center justify-between border-b border-border bg-muted/30 px-4 py-2 overflow-x-auto">
          <TabsList className="flex gap-1">
            {files.map((file, idx) => (
              <TabsTrigger
                key={file.path}
                value={String(idx)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-all rounded-md whitespace-nowrap",
                  activeIndex === idx
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50",
                )}
              >
                <BiCode className="h-3.5 w-3.5" />
                {basename(file.path)}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {files.map((file, idx) => (
          <TabsContent
            key={file.path}
            value={String(idx)}
            className="p-0 m-0 h-full"
          >
            <RegistryCodeViewer content={file.content} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

/**
 * Renders highlighted code from pre-fetched content.
 * Sends code to the /api/code endpoint for syntax highlighting.
 */
function RegistryCodeViewer({ content }: { content: string }) {
  const [code] = React.useState(content);
  const [highlightedHtml, setHighlightedHtml] = React.useState<string>("");

  React.useEffect(() => {
    fetch("/api/code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: content }),
    })
      .then((res) => res.json())
      .then((result) => {
        setHighlightedHtml(result.html || "");
      })
      .catch(() => {
        setHighlightedHtml(
          `<pre class="p-4 text-sm font-mono text-gray-300">${escapeHtml(content)}</pre>`,
        );
      });
  }, [content]);

  return <CodeViewer code={code} highlightedHtml={highlightedHtml} />;
}
