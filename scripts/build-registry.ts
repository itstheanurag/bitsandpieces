import { execSync } from "child_process";
import fs from "fs";
import path from "path";

async function buildRegistry() {
  console.log("Building registry...");

  try {
    console.log("Running shadcn build...");
    execSync("bunx shadcn build", { stdio: "inherit" });
    const outputDir = path.join(process.cwd(), "public", "r");
    if (fs.existsSync(outputDir)) {
      const files = fs.readdirSync(outputDir);
      console.log(
        `Registry built successfully! Generated ${files.length} files in public/r/`,
      );
    } else {
      console.error("Output directory public/r/ not found.");
    }
  } catch (error) {
    console.error("Failed to build registry:", error);
    process.exit(1);
  }
}

buildRegistry();
