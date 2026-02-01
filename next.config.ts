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
};

const withNextra = nextra({
  contentDirBasePath: "/docs",
});

export default withNextra(nextConfig);
