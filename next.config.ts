import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The About page was removed at the client's request — keep old links working.
      { source: "/about", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
