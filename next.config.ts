import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoPath = isGithubPages ? "/knowei_website" : "";

const nextConfig: NextConfig = {
  basePath: repoPath,
  assetPrefix: isGithubPages ? "/knowei_website/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: repoPath,
  },
};

export default nextConfig;