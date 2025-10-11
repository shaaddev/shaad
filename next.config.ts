import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx"],
  experimental: {
    mdxRs: false,
    viewTransition: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
