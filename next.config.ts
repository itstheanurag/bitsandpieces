import type { NextConfig } from "next";
import nextra from "nextra";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/**",
      },
    ],
  },
  reactStrictMode: true,
  compress: true,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      "nextra",
      "@radix-ui/react-tabs",
      "@radix-ui/react-label",
      "react-icons",
      "motion",
    ],
  },
};

const withNextra = nextra({
  contentDirBasePath: "/docs",
});

export default withNextra(nextConfig);
