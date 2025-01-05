import nextMDX from "@next/mdx";

import rehypePrettyCode from "rehype-pretty-code";
import { transformerColorHighlight } from "shiki-transformer-color-highlight";

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: {
    dark: "github-dark",
    light: "github-light",
  },
  transformers: [transformerColorHighlight()],
  keepBackground: false,
  bypassInlineCode: false,
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactStrictMode: false,
};

export default withMDX(nextConfig);
