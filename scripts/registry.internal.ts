import fs from "fs/promises";
import path from "path";
import { glob } from "glob";

interface InternalRegistryItem {
  name: string;
  title: string;
  description: string;
  path: string; // Relative path to the component file
  code: string; // The actual source code
  dependencies: string[];
  registryDependencies: string[];
}

const projectRoot = process.cwd();
const componentsPiecesDir = path.join(projectRoot, "components", "pieces");

// 🆕 New registry folder + file path
const registryDir = path.join(projectRoot, "registry");
const internalRegistryJsonPath = path.join(
  registryDir,
  "registry.internal.json"
);

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

  // Ensure react is included if JSX or React hooks detected
  if (/from\s+["']react["']/.test(content) || content.includes("useState(")) {
    dependencies.add("react");
  }

  return {
    dependencies: Array.from(dependencies),
    registryDependencies: Array.from(registryDependencies),
  };
};

// Build internal registry
async function buildInternalRegistry() {
  console.log("🔍 Starting internal registry build for Fumadocs...");

  // 🆕 Ensure __registry__ folder exists
  await fs.mkdir(registryDir, { recursive: true });

  const registry: Record<string, InternalRegistryItem> = {};
  const componentFiles = await glob("**/*.tsx", { cwd: componentsPiecesDir });

  for (const file of componentFiles) {
    const absPath = path.join(componentsPiecesDir, file);
    const content = await fs.readFile(absPath, "utf8");

    const { dependencies, registryDependencies } = extractDependencies(content);
    const kebabName = getComponentName(file); // e.g. navbars-glass
    const title = toTitleCase(kebabName); // e.g. Navbars Glass

    registry[kebabName] = {
      name: kebabName,
      title,
      description: `A ${title} component for internal documentation.`,
      path: path.relative(projectRoot, absPath),
      code: content,
      dependencies,
      registryDependencies,
    };

    console.log(`✅ Processed: ${title}`);
  }

  await fs.writeFile(
    internalRegistryJsonPath,
    JSON.stringify(registry, null, 2)
  );
  console.log(
    `\n🎉 Internal registry built successfully at ${internalRegistryJsonPath}`
  );
  console.log(`Total components: ${Object.keys(registry).length}`);
}

buildInternalRegistry().catch((error) => {
  console.error("❌ Error building internal registry:", error);
  process.exit(1);
});
