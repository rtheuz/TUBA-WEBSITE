import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  //basePath: "/TUBA-WEBSITE",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
