import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
