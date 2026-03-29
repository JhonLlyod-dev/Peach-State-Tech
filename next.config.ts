import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "peachstate.tech", // non-www
          },
        ],
        missing: [
          { type: "query", key: "qb-b" },
          { type: "query", key: "qb-p" },
        ],
        destination: "https://www.peachstate.tech/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;