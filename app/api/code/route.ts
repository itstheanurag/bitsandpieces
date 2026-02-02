import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { codeToHtml } from "shiki";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const filePath = searchParams.get("path");

  if (!filePath) {
    return NextResponse.json({ error: "Path is required" }, { status: 400 });
  }

  try {
    const fullPath = path.join(process.cwd(), filePath);
    const code = await fs.readFile(fullPath, "utf8");
    const html = await codeToHtml(code, {
      lang: "tsx",
      theme: "github-dark-default",
    });
    return NextResponse.json({ code, html });
  } catch (err) {
    console.error(`Error reading file: ${filePath}`, err);
    return NextResponse.json({ error: "Failed to read file" }, { status: 404 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { code } = body;

    if (!code) {
      return NextResponse.json({ error: "Code is required" }, { status: 400 });
    }

    const html = await codeToHtml(code, {
      lang: "tsx",
      theme: "github-dark-default",
    });

    return NextResponse.json({ html });
  } catch (err) {
    console.error("Error highlighting code:", err);
    return NextResponse.json(
      { error: "Failed to highlight code" },
      { status: 500 },
    );
  }
}
