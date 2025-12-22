import { codeToHtml, BundledLanguage } from "shiki";

/**
 * Server-side syntax highlighting using Shiki.
 * Returns highlighted HTML string.
 */
export async function highlightCode(
  code: string,
  lang: BundledLanguage = "tsx"
): Promise<string> {
  const html = await codeToHtml(code, {
    lang,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
  });
  return html;
}
