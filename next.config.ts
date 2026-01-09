import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === "production";
const repoPath = isGithubPages ? "/knowei_website" : "";

const nextConfig: NextConfig = {
  basePath: isGithubPages ? "/knowei_website" : "",
  basePath: repoPath,
  assetPrefix: isGithubPages ? "/knowei_website/" : "",
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: repoPath,
  },
};
export default nextConfig;