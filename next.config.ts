import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-66c5c22c5ee44cf59854b6183fe23b92.r2.dev",
      },
    ],
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
