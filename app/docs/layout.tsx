import { Layout } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "@/app/globals.css";
import type { ReactNode } from "react";
import { DocsNavbar } from "@/components/docs/docs-navbar";

export const metadata = {
  title: "Bits&Pieces Documentation",
  description: "Premium React UI Components - Documentation",
};

const navbar = <DocsNavbar />;

export default async function DocsLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pageMap = await getPageMap();

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/icon.png" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/itstheanurag/bitsandpieces/tree/main/content"
          sidebar={{
            defaultMenuCollapseLevel: 10,
            toggleButton: false,
          }}
          editLink="Edit this page on GitHub"
          feedback={{
            content: "Question? Give us feedback →",
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
