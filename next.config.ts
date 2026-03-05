import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Site-Tuba",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
