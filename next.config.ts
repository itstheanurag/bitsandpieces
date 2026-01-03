import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: isProd ? "export" : undefined,
  basePath: isProd ? "/bitsandpieces" : "",
  assetPrefix: isProd ? "/bitsandpieces/" : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/**",
      },
    ],
  },
  reactStrictMode: true,
};

const withMDX = createMDX();
export default withMDX(nextConfig);
