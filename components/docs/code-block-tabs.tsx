"use client";

import React, { useState } from "react";
import { BiCopy, BiCheck } from "react-icons/bi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { cn } from "@/registry/bitsandpieces/lib/utils";
interface PackageManagerCode {
  npm: string;
  pnpm: string;
  yarn: string;
  bun: string;
}

interface CodeBlockTabsProps {
  code: PackageManagerCode;
  className?: string;
}

export const CodeBlockTabs: React.FC<CodeBlockTabsProps> = ({
  code,
  className,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<keyof PackageManagerCode>("npm");

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const packageManagers: (keyof PackageManagerCode)[] = [
    "npm",
    "pnpm",
    "yarn",
    "bun",
  ];

  return (
    <div
      className={cn(
        "rounded-lg border border-border overflow-hidden bg-muted/30",
        className,
      )}
    >
      <Tabs
        value={activeTab}
        onValueChange={(val) => setActiveTab(val as keyof PackageManagerCode)}
      >
        {/* Tab Header with Package Manager Options */}
        <div className="flex items-center justify-between border-b border-border bg-muted/50 px-3">
          <TabsList className="flex gap-1 py-2">
            {packageManagers.map((pm) => (
              <TabsTrigger
                key={pm}
                value={pm}
                className={cn(
                  "px-3 py-1.5 text-xs font-medium transition-colors rounded-md",
                  activeTab === pm
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {pm}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
            aria-label="Copy code"
          >
            {copied ? (
              <BiCheck className="h-4 w-4 text-emerald-500" />
            ) : (
              <BiCopy className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Code Content */}
        {packageManagers.map((pm) => (
          <TabsContent key={pm} value={pm} className="p-0 m-0">
            <pre className="p-4 overflow-x-auto text-sm">
              <code className="text-foreground font-mono">{code[pm]}</code>
            </pre>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

// Pre-configured for common installation patterns
export const InstallCodeBlock: React.FC<{
  packages: string;
  className?: string;
}> = ({ packages, className }) => {
  return (
    <CodeBlockTabs
      className={className}
      code={{
        npm: `npm i ${packages}`,
        pnpm: `pnpm add ${packages}`,
        yarn: `yarn add ${packages}`,
        bun: `bun add ${packages}`,
      }}
    />
  );
};
