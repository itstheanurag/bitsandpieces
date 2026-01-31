import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "Bits&Pieces Documentation",
  description: "Premium React UI Components - Documentation",
};

const logo = (
  <div className="flex items-center gap-2">
    <Image
      src="/logo.png"
      alt="Logo"
      width={28}
      height={28}
      className="rounded"
    />
    <span className="font-bold text-lg">Bits&Pieces</span>
  </div>
);

const navbar = (
  <Navbar
    logo={logo}
    projectLink="https://github.com/itstheanurag/bitsandpieces"
  />
);

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
            defaultMenuCollapseLevel: 1,
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
