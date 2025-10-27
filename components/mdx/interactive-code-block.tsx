"use client";

import * as React from "react";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { registryData as bitsRegistry } from "@/__registry__/registry.bits";
import { registryData as piecesRegistry } from "@/__registry__/registry.pieces";
import { Button } from "@/components/ui/button";
import { Code, Eye, EyeOff } from "lucide-react";

const registryData = { ...bitsRegistry, ...piecesRegistry };
type RegistryEntry = (typeof registryData)[keyof typeof registryData];

interface ComponentCodeBlockProps {
  name: string;
}

export const ComponentCodeBlock: React.FC<ComponentCodeBlockProps> = ({
  name,
}) => {
  const [showCode, setShowCode] = React.useState(false);

  const componentCode = React.useMemo(() => {
    const entry = (registryData as unknown as Record<string, RegistryEntry>)[
      name
    ];
    return entry?.code;
  }, [name]);

  if (!componentCode) {
    return null;
  }

  return (
    <div className="my-4 rounded-lg border bg-neutral-50 dark:bg-neutral-900">
      <div>
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
            <Code className="w-4 h-4" />
            <span>Component Code</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowCode(!showCode)}
            className="text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800"
          >
            {showCode ? (
              <>
                <EyeOff className="w-4 h-4 mr-2" /> Hide Code
              </>
            ) : (
              <>
                <Eye className="w-4 h-4 mr-2" /> Show Code
              </>
            )}
          </Button>
        </div>
        {showCode && (
          <div className="p-4 pt-0">
            <DynamicCodeBlock lang="tsx" code={componentCode} />
          </div>
        )}
      </div>
    </div>
  );
};
