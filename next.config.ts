import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";

const nextConfig: NextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  experimental: {
    mdxRs: false,
    viewTransition: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
  },
});

export default withMDX(nextConfig);
