import type { NextConfig } from "next"

type Props = {
  protocol: 'http' | 'https' | undefined,
  hostname: string;
  port: string;
  pathname: string;
}
export const myConfig: Props = {
  protocol: 'http',
  hostname: 'rentacar.somee.com',
  port: '',
  pathname: '/Upload/**'
};

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      myConfig
    ]
  }
};

export default nextConfig
