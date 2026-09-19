import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mzcleaners.co.uk" }],
        destination: "https://mzcleaners.co.uk/:path*",
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;