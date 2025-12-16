import { notFound } from "next/navigation";
import { registryData as bitsRegistry } from "@/__registry__/registry.bits";
import { registryData as piecesRegistry } from "@/__registry__/registry.pieces";
import { registryMap, exampleRegistryMap } from "@/__registry__/registry.map";
import { ComponentView } from "@/components/component-view";
import { InstallCommand } from "@/components/ui/install-command";
import { highlightCode } from "@/lib/highlight";

export async function generateStaticParams() {
  const bitsParams = Object.keys(bitsRegistry).map((slug) => ({
    category: "bits",
    slug,
  }));

  const piecesParams = Object.keys(piecesRegistry).map((slug) => ({
    category: "pieces",
    slug,
  }));

  return [...bitsParams, ...piecesParams];
}

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

/**
 * Generate usage code example for a component
 */
function generateUsageCode(name: string, category: string): string {
  const parts = name.split("-");
  const componentName = parts
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

  const importPath =
    category === "pieces"
      ? `@/components/pieces/${parts[0]}/${parts.slice(1).join("-")}`
      : `@/components/bits/${parts[0]}/${parts.slice(1).join("-")}`;

  return `import { ${componentName} } from "${importPath}"

export default function App() {
  return (
    <${componentName} />
  )
}`;
}

export default async function ComponentPage(props: PageProps) {
  const params = await props.params;
  const { category, slug } = params;

  const registry =
    category === "bits"
      ? bitsRegistry
      : category === "pieces"
      ? piecesRegistry
      : null;

  if (!registry) return notFound();

  const item = (
    registry as Record<
      string,
      { name: string; title: string; description: string; code: string }
    >
  )[slug];
  if (!item) return notFound();

  const Component = exampleRegistryMap[slug] || registryMap[slug];

  // Generate usage code
  const usageCode = generateUsageCode(item.name, category);

  // Highlight code server-side
  const [highlightedSource, highlightedUsage] = await Promise.all([
    highlightCode(item.code, "tsx"),
    highlightCode(usageCode, "tsx"),
  ]);

  return (
    <div className="container max-w-5xl py-10 px-6">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-neutral-500 mb-2 capitalize">
          <span>{category}</span>
          <span>/</span>
          <span>{item.title}</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2 text-neutral-900 dark:text-neutral-100">
          {item.title}
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
          {item.description}
        </p>

        {/* Installation Command */}
        <div className="space-y-2">
          <h2 className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
            Installation
          </h2>
          <InstallCommand componentName={item.name} />
        </div>
      </div>

      <ComponentView
        name={item.name}
        code={item.code}
        usageCode={usageCode}
        highlightedSource={highlightedSource}
        highlightedUsage={highlightedUsage}
        component={Component}
      />
    </div>
  );
}
