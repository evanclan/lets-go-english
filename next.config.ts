import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // R2 CDN URLs load in the browser; skip /_next/image proxy (avoids server-side fetch timeouts).
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/courses",
        destination: "/plan-fees/",
        permanent: true,
      },
      {
        source: "/courses/",
        destination: "/plan-fees/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
