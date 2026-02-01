"use client";

import React, { useState } from "react";
import {
  BiCode,
  BiExpandAlt,
  BiCollapseAlt,
  BiCopy,
  BiCheck,
  BiLinkExternal,
} from "react-icons/bi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { cn } from "@/registry/bitsandpieces/lib/utils";

interface PreviewTabsProps {
  preview: React.ReactNode;
  code: React.ReactNode;
  rawCode?: string;
  className?: string;
}

export const PreviewTabs: React.FC<PreviewTabsProps> = ({
  preview,
  code,
  rawCode,
  className,
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (rawCode) {
      await navigator.clipboard.writeText(rawCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className={cn(
        "rounded-xl border border-border overflow-hidden shadow-sm",
        isFullScreen && "fixed inset-4 z-50 bg-background shadow-2xl",
        className,
      )}
    >
      <Tabs
        value={activeTab}
        onValueChange={(val) => setActiveTab(val as "preview" | "code")}
        className="h-full flex flex-col"
      >
        {/* Tab Header */}
        <div className="flex items-center justify-between border-b border-border bg-muted/30 px-4 py-2.5">
          <TabsList className="flex gap-1 bg-muted/50 p-1 rounded-lg">
            <TabsTrigger
              value="preview"
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-all rounded-md",
                activeTab === "preview"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50",
              )}
            >
              <span className="w-2.5 h-2.5 rounded-full border-2 border-current" />
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-all rounded-md",
                activeTab === "code"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50",
              )}
            >
              <BiCode className="h-3.5 w-3.5" />
              Code
            </TabsTrigger>
          </TabsList>

          {/* Toolbar Actions */}
          <div className="flex items-center gap-1">
            {/* Copy Button - only show on code tab */}
            {activeTab === "code" && rawCode && (
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
              >
                {copied ? (
                  <>
                    <BiCheck className="h-4 w-4 text-green-500" />
                    <span className="hidden sm:inline text-green-500">
                      Copied!
                    </span>
                  </>
                ) : (
                  <>
                    <BiCopy className="h-4 w-4" />
                    <span className="hidden sm:inline">Copy code</span>
                  </>
                )}
              </button>
            )}

            {/* Open in v0 - placeholder */}
            <button
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
              title="Open in v0 (coming soon)"
            >
              <BiLinkExternal className="h-4 w-4" />
              <span className="hidden sm:inline">Open in v0</span>
            </button>

            {/* Full Screen Toggle */}
            <button
              onClick={() => setIsFullScreen(!isFullScreen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
            >
              {isFullScreen ? (
                <BiCollapseAlt className="h-4 w-4" />
              ) : (
                <BiExpandAlt className="h-4 w-4" />
              )}
              <span className="hidden sm:inline">
                {isFullScreen ? "Exit" : "Expand"}
              </span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          <TabsContent value="preview" className="p-0 m-0 h-full">
            <div className="flex items-center justify-center min-h-[350px] p-8 bg-background bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] bg-center">
              {preview}
            </div>
          </TabsContent>

          <TabsContent value="code" className="p-0 m-0 h-full">
            <div className="overflow-auto bg-[#0d1117] max-h-[500px]">
              {code}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

// Export a simpler wrapper for MDX usage
export const ComponentPreview: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center min-h-[200px] p-8 rounded-lg border border-border bg-background",
        className,
      )}
    >
      {children}
    </div>
  );
};
