import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.1.105',
        port: '5059',
        pathname: '/Upload/ProfileImg/**'
      }
    ]
  }
};

export default nextConfig;
