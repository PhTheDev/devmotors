import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.cosmicjs.com",
      },
    ],
  },
};

export default nextConfig;
