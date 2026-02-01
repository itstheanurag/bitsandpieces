import fs from "fs/promises";
import path from "path";
import { registry } from "@/registry/registry-data";
import { PreviewTabs } from "./preview-tabs";
import { codeToHtml } from "shiki";

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
  let highlightedCode = "";

  try {
    code = await fs.readFile(filePath, "utf8");
    highlightedCode = await codeToHtml(code, {
      lang: "tsx",
      theme: "github-dark-default",
    });
  } catch (err) {
    console.error(
      `Error reading/highlighting component file: ${filePath}`,
      err,
    );
    code = "// Error loading component source";
    highlightedCode = `<pre><code>${code}</code></pre>`;
  }

  const PreviewComponent = item.component;

  return (
    <div className={className}>
      <PreviewTabs
        preview={<PreviewComponent />}
        rawCode={code}
        code={
          <div
            className="text-sm [&_pre]:p-4 [&_pre]:m-0 [&_pre]:bg-transparent [&_code]:bg-transparent"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        }
      />
    </div>
  );
}
