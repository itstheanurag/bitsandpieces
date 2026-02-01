"use client";

import React, { useState } from "react";
import { BiCode, BiExpandAlt, BiCollapseAlt } from "react-icons/bi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { cn } from "@/registry/bitsandpieces/lib/utils";
interface PreviewTabsProps {
  preview: React.ReactNode;
  code: React.ReactNode;
  className?: string;
}

export const PreviewTabs: React.FC<PreviewTabsProps> = ({
  preview,
  code,
  className,
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <div
      className={cn(
        "rounded-lg border border-border overflow-hidden",
        isFullScreen && "fixed inset-4 z-50 bg-background",
        className,
      )}
    >
      <Tabs
        value={activeTab}
        onValueChange={(val) => setActiveTab(val as "preview" | "code")}
        className="h-full flex flex-col"
      >
        {/* Tab Header */}
        <div className="flex items-center justify-between border-b border-border bg-muted/30 px-4 py-2">
          <TabsList className="flex gap-1">
            <TabsTrigger
              value="preview"
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-colors rounded-md",
                activeTab === "preview"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <span className="w-3 h-3 rounded-full border border-current" />
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-colors rounded-md",
                activeTab === "code"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <BiCode className="h-3 w-3" />
              Code
            </TabsTrigger>
          </TabsList>

          {/* Full Screen Toggle */}
          <button
            onClick={() => setIsFullScreen(!isFullScreen)}
            className="flex items-center gap-1.5 px-2 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
          >
            {isFullScreen ? (
              <BiCollapseAlt className="h-4 w-4" />
            ) : (
              <BiExpandAlt className="h-4 w-4" />
            )}
            <span className="hidden sm:inline">
              {isFullScreen ? "Exit Full" : "Full Screen"}
            </span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          <TabsContent value="preview" className="p-0 m-0 h-full">
            <div className="flex items-center justify-center min-h-[300px] p-8 bg-background">
              {preview}
            </div>
          </TabsContent>

          <TabsContent value="code" className="p-0 m-0 h-full">
            <div className="overflow-auto bg-muted/20">{code}</div>
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
