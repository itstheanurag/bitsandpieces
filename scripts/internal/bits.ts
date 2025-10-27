import fs from "fs/promises";
import path from "path";
import { glob } from "glob";
import {
  InternalRegistryItem,
  getComponentName,
  toTitleCase,
  toPascalCase,
  extractDependencies,
} from "../internal"; // Assuming these are exported from build-registry.ts

export async function processBits(
  componentsBitsDir: string,
  bitsRegistry: Record<string, InternalRegistryItem>,
  exampleMap: Record<string, { code: string; path: string }>,
  projectRoot: string
) {
  const files = await glob("**/*.tsx", { cwd: componentsBitsDir });
  const type = "bit";
  const titleCaseType = type.charAt(0).toUpperCase() + type.slice(1);

  for (const file of files) {
    const absPath = path.join(componentsBitsDir, file);
    const content = await fs.readFile(absPath, "utf8");

    const { dependencies, registryDependencies } = extractDependencies(content);
    const kebabName = getComponentName(file);
    const title = toTitleCase(kebabName);

    const pascalCaseName = toPascalCase(kebabName);

    const possibleExampleNames = [
      `${pascalCaseName}Demo`,
      `${pascalCaseName}Example`,
      pascalCaseName,
      kebabName,
    ];

    if (pascalCaseName.startsWith("Border")) {
      const strippedName = pascalCaseName.substring("Border".length);
      possibleExampleNames.push(`${strippedName}Demo`);
      if (strippedName === "Borders") {
        possibleExampleNames.push("BorderDemo");
      }
    }
    if (pascalCaseName.startsWith("Shadow")) {
      const strippedName = pascalCaseName.substring("Shadow".length);
      possibleExampleNames.push(`${strippedName}Demo`);
    }

    console.log(
      `🔍 Looking for examples for '${kebabName}' (${pascalCaseName}):`
    );
    console.log(`   Trying: ${possibleExampleNames.join(", ")}`);

    let exampleData = null;
    let matchedExampleName = null;

    for (const exampleName of possibleExampleNames) {
      if (exampleMap[exampleName]) {
        exampleData = exampleMap[exampleName];
        matchedExampleName = exampleName;
        break;
      }
    }

    bitsRegistry[kebabName] = {
      name: kebabName,
      title,
      description: `A collection of ${title} bits.`,
      path: path.relative(projectRoot, absPath),
      code: content,
      ...(exampleData && {
        exampleCode: exampleData.code,
        examplePath: path.relative(projectRoot, exampleData.path),
      }),
      dependencies,
      registryDependencies,
    };

    if (exampleData && matchedExampleName) {
      if (!matchedExampleName.endsWith("GroupDemo")) {
        delete exampleMap[matchedExampleName];
      }
      console.log(
        `✅ Linked Example '${matchedExampleName}' to ${titleCaseType}: ${title}`
      );
    } else {
      console.log(`⚠️  No example found for ${titleCaseType}: ${title}`);
    }
    console.log(`✅ Processed ${titleCaseType}: ${title}`);
  }
}
