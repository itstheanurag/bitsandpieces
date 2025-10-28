import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "Bits & Pieces",
      // If you want to *remove the navbar entirely*:
      // enabled: false
    },
    links: [
      { text: "Docs", url: "/docs" },
      {
        text: "GitHub",
        url: "https://github.com/itstheanurag/bitsandpieces",
        external: true,
      },
    ],
    themeSwitch: {
      enabled: true,
      mode: "light-dark-system", // optional
    },
    githubUrl: "https://github.com/itstheanurag/bitsandpieces",
  };
}
