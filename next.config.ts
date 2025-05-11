import type { NextConfig } from "next"

export const myConfig = {
  protocol: 'http',
  IP: '192.168.1.105',
  port: '5059'
}

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: myConfig.protocol as "http" | "https" | undefined,
        hostname: myConfig.IP,
        port: myConfig.port,
        pathname: '/Upload/**'
      }
    ]
  }
};

export default nextConfig
