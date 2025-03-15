import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/project',  // Ensure Next.js knows the correct subdirectory
  trailingSlash: true,
};

export default nextConfig;
