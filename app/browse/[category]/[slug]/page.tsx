import { notFound } from "next/navigation";
import { registryData as bitsRegistry } from "@/__registry__/registry.bits";
import { registryData as piecesRegistry } from "@/__registry__/registry.pieces";
import { registryMap, exampleRegistryMap } from "@/__registry__/registry.map";
import { ComponentView } from "@/components/component-view";


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

  const item = (registry as any)[slug];
  if (!item) return notFound();

  const Component = exampleRegistryMap[slug] || registryMap[slug];

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
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          {item.description}
        </p>
      </div>

      <ComponentView name={item.name} code={item.code} component={Component} />
    </div>
  );
}
