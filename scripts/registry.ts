import fs from "fs/promises";
import path from "path";
import { glob } from "glob";

interface RegistryItem {
  name: string;
  type: string;
  title: string;
  description: string;
  dependencies: string[];
  registryDependencies: string[];
  files: { path: string; target: string; type: string }[];
}

const projectRoot = process.cwd();
const componentsPiecesDir = path.join(projectRoot, "components", "pieces");
const registryJsonPath = path.join(projectRoot, "registry.json");

// Convert "buttons/animated/one.tsx" → "buttons-animated-one"
const getComponentName = (filePath: string) =>
  filePath.replace(/\.tsx$/, "").replace(/\//g, "-");

// Convert kebab → Title Case
const toTitleCase = (kebab: string) =>
  kebab
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

// Extract imports and categorize dependencies
const extractDependencies = (content: string) => {
  const importRegex = /import\s+(?:[\s\S]*?)\s+from\s+["']([^"']+)["']/g;
  const matches = [...content.matchAll(importRegex)].map((m) => m[1]);

  const dependencies = new Set<string>();
  const registryDependencies = new Set<string>();

  for (const imp of matches) {
    if (imp.startsWith(".")) continue; // local relative import
    if (imp.startsWith("@/")) {
      // Registry-specific utils
      if (imp.includes("/utils")) registryDependencies.add("cn");
      continue;
    }
    dependencies.add(imp.split("/")[0]); // external pkg
  }

  // Always ensure react is included if JSX is detected
  if (/from\s+["']react["']/.test(content) || content.includes("useState(")) {
    dependencies.add("react");
  }

  return {
    dependencies: Array.from(dependencies),
    registryDependencies: Array.from(registryDependencies),
  };
};

// Build registry
async function buildRegistry() {
  console.log("🔍 Starting registry build...");

  const items: RegistryItem[] = [];
  const componentFiles = await glob("**/*.tsx", { cwd: componentsPiecesDir });

  for (const file of componentFiles) {
    const absPath = path.join(componentsPiecesDir, file);
    const content = await fs.readFile(absPath, "utf8");

    const { dependencies, registryDependencies } = extractDependencies(content);
    const kebabName = getComponentName(file); // e.g. navbars-glass
    const title = toTitleCase(kebabName); // e.g. Navbars Glass

    // Flatten the structure for target output (your desired path)
    const outputTarget = `components/pieces/${kebabName}.tsx`;

    items.push({
      name: kebabName,
      type: "registry:component",
      title,
      description: `A ${title} component.`,
      dependencies,
      registryDependencies,
      files: [
        {
          path: `components/pieces/${file}`, // source (your repo)
          target: outputTarget, // output (consumer's project)
          type: "registry:component",
        },
      ],
    });

    console.log(`✅ Processed: ${title}`);
  }

  items.sort((a, b) => a.name.localeCompare(b.name));

  const registry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "pieces",
    homepage: "https://github.com/itstheanurag/bitsandpieces",
    items,
  };

  await fs.writeFile(registryJsonPath, JSON.stringify(registry, null, 2));
  console.log(`\n🎉 Registry built successfully at ${registryJsonPath}`);
  console.log(`Total components: ${items.length}`);
}

buildRegistry().catch((error) => {
  console.error("❌ Error building registry:", error);
  process.exit(1);
});
