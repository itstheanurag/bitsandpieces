import fs from "fs/promises";
import path from "path";
import { glob } from "glob";
import {
  InternalRegistryItem,
  getComponentName,
  toTitleCase,
  toPascalCase,
  extractDependencies,
  extractExportName,
} from "../internal";

export async function processPieces(
  componentsPiecesDir: string,
  piecesRegistry: Record<string, InternalRegistryItem>,
  exampleMap: Record<string, { code: string; path: string }>,
  projectRoot: string
) {
  const files = await glob("**/*.tsx", { cwd: componentsPiecesDir });
  const type = "piece";
  const titleCaseType = type.charAt(0).toUpperCase() + type.slice(1);

  for (const file of files) {
    const absPath = path.join(componentsPiecesDir, file);
    const content = await fs.readFile(absPath, "utf8");

    const { dependencies, registryDependencies } = extractDependencies(content);
    const kebabName = getComponentName(file);

    // Use the actual exported component name as the title
    const exportName = extractExportName(content);
    const title =
      exportName !== "default" ? exportName : toTitleCase(kebabName);

    const pascalCaseName = toPascalCase(kebabName);

    const possibleExampleNames = [
      `${pascalCaseName}Demo`,
      `${pascalCaseName}Example`,
      pascalCaseName,
      kebabName,
    ];

    if (kebabName.startsWith("button-")) {
      const parts = kebabName.split("-");
      if (parts.length >= 2) {
        const category = toPascalCase(parts[1]);
        possibleExampleNames.push(`Button${category}GroupDemo`);
      }
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

    piecesRegistry[kebabName] = {
      name: kebabName,
      title,
      description: `A ${title} component for internal documentation.`,
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
