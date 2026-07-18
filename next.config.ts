import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

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
      // Consolidate duplicate Talitrix articles into the primary one
      // to fix keyword cannibalization for "justin hawkins talitrix"
      {
        source: "/blog/talitrix-steps-into-the-spotlight-as-justice-tech-demand-surges-in-georgia",
        destination: "/blog/justin-hawkins-talitrix-biometric-wristbands-in-georgia",
        permanent: true,
      },
      {
        source: "/blog/talitrix-emerges-in-alpharetta-with-a-bold-vision-for-modernizing-community-supervision",
        destination: "/blog/justin-hawkins-talitrix-biometric-wristbands-in-georgia",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;