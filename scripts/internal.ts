import fs from "fs/promises";
import path from "path";
import { glob } from "glob";
import { processBits } from "./internal/bits";
import { processPieces } from "./internal/pieces";

export interface InternalRegistryItem {
  name: string;
  title: string;
  description: string;
  path: string;
  code: string;
  exampleCode?: string;
  examplePath?: string;
  dependencies: string[];
  registryDependencies: string[];
}

const projectRoot = process.cwd();
const componentsExamplesDir = path.join(projectRoot, "components", "examples");
const registryDir = path.join(projectRoot, "__registry__");

export const getComponentName = (filePath: string) =>
  path.basename(filePath).replace(/\.tsx$/, "");

export const toTitleCase = (kebab: string) =>
  kebab
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

export const toKebabCase = (pascalOrTitleCase: string) =>
  pascalOrTitleCase
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
    .toLowerCase();

export const toPascalCase = (kebab: string) =>
  kebab
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");

export const extractDependencies = (content: string) => {
  const importRegex = /import\s+(?:[\s\S]*?)\s+from\s+["']([^"']+)["']/g;
  const matches = [...content.matchAll(importRegex)].map((m) => m[1]);

  const dependencies = new Set<string>();
  const registryDependencies = new Set<string>();

  for (const imp of matches) {
    if (imp.startsWith(".")) continue;
    if (imp.startsWith("@/")) {
      if (imp.includes("/utils")) registryDependencies.add("cn");
      continue;
    }
    dependencies.add(imp.split("/")[0]);
  }

  if (/from\s+["']react["']/.test(content) || content.includes("useState(")) {
    dependencies.add("react");
  }

  return {
    dependencies: Array.from(dependencies),
    registryDependencies: Array.from(registryDependencies),
  };
};

export const extractExportName = (content: string) => {
  const matchFunc = content.match(
    /export\s+(?:function|const)\s+([a-zA-Z0-9_]+)/
  );
  if (matchFunc) return matchFunc[1];

  const matchNamed = content.match(/export\s*\{\s*([a-zA-Z0-9_]+)\s*(?:\}|,)/);
  if (matchNamed) return matchNamed[1];

  return "default";
};

async function buildInternalRegistry() {
  console.log("🔍 Starting internal registry build...");

  const componentsBitsDir = path.join(projectRoot, "components", "bits");
  const componentsPiecesDir = path.join(projectRoot, "components", "pieces");

  await fs.mkdir(registryDir, { recursive: true });

  const bitsRegistry: Record<string, InternalRegistryItem> = {};
  const piecesRegistry: Record<string, InternalRegistryItem> = {};

  // 1. Load all example files into a map with original content
  const exampleFilesMap: Record<string, { code: string; path: string }> = {};
  const exampleFiles = await glob("**/*.tsx", { cwd: componentsExamplesDir });

  console.log(`\n📂 Found ${exampleFiles.length} example files:`);

  for (const file of exampleFiles) {
    const absPath = path.join(componentsExamplesDir, file);
    const content = await fs.readFile(absPath, "utf8");
    const exampleName = path.basename(file, ".tsx");

    console.log(`   - ${exampleName} (from ${file})`);

    exampleFilesMap[exampleName] = {
      code: content,
      path: absPath,
    };
  }

  console.log(`\n📦 Processing Bits...`);
  await processBits(
    componentsBitsDir,
    bitsRegistry,
    exampleFilesMap,
    projectRoot
  );

  console.log(`\n📦 Processing Pieces...`);
  await processPieces(
    componentsPiecesDir,
    piecesRegistry,
    exampleFilesMap,
    projectRoot
  );

  // 3. Process remaining examples with fallback linking
  console.log(`\n🔗 Attempting fallback linking for remaining examples...`);
  const remainingExampleNames = Object.keys(exampleFilesMap);

  for (const exampleName of remainingExampleNames) {
    const exampleData = exampleFilesMap[exampleName];

    // Try multiple patterns for fallback
    const patterns = [
      { key: toKebabCase(exampleName.replace(/Demo$/, "")), type: "both" },
      { key: toKebabCase(exampleName.replace(/Example$/, "")), type: "both" },
      { key: toKebabCase(exampleName.replace(/StylesDemo$/, "")), type: "bit" },
      { key: toKebabCase(exampleName), type: "both" },
    ];

    let linked = false;

    for (const { key, type } of patterns) {
      if (type === "both" || type === "piece") {
        if (piecesRegistry[key]) {
          piecesRegistry[key].exampleCode = exampleData.code;
          piecesRegistry[key].examplePath = path.relative(
            projectRoot,
            exampleData.path
          );
          console.log(`Fallback: Linked '${exampleName}' to Piece: ${key}`);
          delete exampleFilesMap[exampleName];
          linked = true;
          break;
        }
      }

      if (type === "both" || type === "bit") {
        if (bitsRegistry[key]) {
          bitsRegistry[key].exampleCode = exampleData.code;
          bitsRegistry[key].examplePath = path.relative(
            projectRoot,
            exampleData.path
          );
          console.log(`Fallback: Linked '${exampleName}' to Bit: ${key}`);
          delete exampleFilesMap[exampleName];
          linked = true;
          break;
        }
      }
    }

    if (!linked) {
      console.log(`Fallback: Could not link: ${exampleName}`);
    }
  }

  // 4. Warn about any unlinked examples
  console.log(`\nFinal unlinked examples:`);
  const finalUnlinked = Object.keys(exampleFilesMap);
  if (finalUnlinked.length === 0) {
    console.log(`   None! All examples linked successfully.`);
  } else {
    for (const exampleName of finalUnlinked) {
      console.warn(`   - ${exampleName}.tsx`);
    }
  }

  // 5. Generate TypeScript files
  const bitsFileContent = `// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated by buildInternalRegistry.ts

export const registryData = ${JSON.stringify(bitsRegistry, null, 2)} as const;

export default registryData;
`;
  const piecesFileContent = `// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated by buildInternalRegistry.ts

export const registryData = ${JSON.stringify(piecesRegistry, null, 2)} as const;

export default registryData;
`;

  const bitsRegistryPath = path.join(registryDir, "registry.bits.ts");
  const piecesRegistryPath = path.join(registryDir, "registry.pieces.ts");

  await fs.writeFile(bitsRegistryPath, bitsFileContent, "utf8");
  await fs.writeFile(piecesRegistryPath, piecesFileContent, "utf8");

  console.log(`\n registry.bits.ts and registry.pieces.ts built successfully!`);
  console.log(`Total bits: ${Object.keys(bitsRegistry).length}`);
  console.log(`Total pieces: ${Object.keys(piecesRegistry).length}`);

  // Summary of examples
  const bitsWithExamples = Object.values(bitsRegistry).filter(
    (b) => b.exampleCode
  ).length;
  const piecesWithExamples = Object.values(piecesRegistry).filter(
    (p) => p.exampleCode
  ).length;
  console.log(
    `\nBits with examples: ${bitsWithExamples}/${
      Object.keys(bitsRegistry).length
    }`
  );
  console.log(
    `Pieces with examples: ${piecesWithExamples}/${
      Object.keys(piecesRegistry).length
    }`
  );

  // 6. Generate Registry Map
  console.log("\n Generating registry map...");
  const mapImports: string[] = [];
  const mapEntries: string[] = [];

  const allItems = { ...bitsRegistry, ...piecesRegistry };

  for (const [key, item] of Object.entries(allItems)) {
    const exportName = extractExportName(item.code);
    const importPath = "@/" + item.path.replace(/\.tsx?$/, "");
    const alias = `Component_${key.replace(/-/g, "_")}`;

    if (exportName === "default") {
      mapImports.push(`import ${alias} from "${importPath}";`);
    } else {
      mapImports.push(
        `import { ${exportName} as ${alias} } from "${importPath}";`
      );
    }

    mapEntries.push(`  "${key}": ${alias},`);
  }

  const mapFileContent = `// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// Generated by buildInternalRegistry.ts

import * as React from "react";

${mapImports.join("\n")}

const exampleRegistryMap: Record<string, React.ComponentType<any>> = {};

${Object.entries(allItems)
  .filter(([_, item]) => item.examplePath)
  .map(([key, item]) => {
    // We rely on the fact that examplePath is relative to projectRoot
    // e.g. "components/examples/LayoutBentoGridDemo.tsx"
    const exampleImportPath = "@/" + item.examplePath!.replace(/\.tsx?$/, "");
    const exampleName = extractExportName(item.exampleCode!);
    return `import { ${exampleName} as Example_${key.replace(
      /-/g,
      "_"
    )} } from "${exampleImportPath}";\nexampleRegistryMap["${key}"] = Example_${key.replace(
      /-/g,
      "_"
    )};`;
  })
  .join("\n")}

export const registryMap: Record<string, React.ComponentType<any>> = {
${mapEntries.join("\n")}
};

export { exampleRegistryMap };
`;

  const mapRegistryPath = path.join(registryDir, "registry.map.ts");
  await fs.writeFile(mapRegistryPath, mapFileContent, "utf8");
  console.log(` registry.map.ts built successfully!`);
}

buildInternalRegistry().catch((error) => {
  console.error(" Error building internal registry:", error);
  process.exit(1);
});
