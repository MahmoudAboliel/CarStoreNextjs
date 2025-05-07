import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.1.102',
        port: '5059',
        pathname: '/Upload/**'
      }
    ]
  }
};

export default nextConfig;
