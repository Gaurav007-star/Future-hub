import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["127.0.0.1", "pexels.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/api/:path*", // Match API routes
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Adjust this to your domain or list of domains
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,POST,OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
