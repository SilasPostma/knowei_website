import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isGithubPages ? "/knowei_website" : "",
  assetPrefix: isGithubPages ? "/knowei_website/" : "",
};

export default nextConfig;