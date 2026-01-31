import fs from "fs/promises";
import path from "path";
import { registry } from "@/registry/registry-data";
import { PreviewTabs } from "./preview-tabs";

interface ComponentPreviewProps {
  name: string;
  className?: string;
}

export async function ComponentPreview({
  name,
  className,
}: ComponentPreviewProps) {
  const item = registry[name];

  if (!item) {
    return (
      <div className="p-4 border border-destructive rounded-lg text-destructive">
        Component "{name}" not found in registry.
      </div>
    );
  }

  // Read code from disk
  const filePath = path.join(process.cwd(), item.path);
  let code = "";
  try {
    code = await fs.readFile(filePath, "utf8");
  } catch (err) {
    console.error(`Error reading component file: ${filePath}`, err);
    code = "// Error loading component source";
  }

  const PreviewComponent = item.component;

  return (
    <div className={className}>
      <PreviewTabs
        preview={<PreviewComponent />}
        code={
          <pre className="p-4 text-sm font-mono overflow-auto max-h-[500px]">
            <code>{code}</code>
          </pre>
        }
      />
    </div>
  );
}
