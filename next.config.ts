import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "favikon-medias.s3.eu-west-3.amazonaws.com",
      },
      {
        hostname: "favikon-creator.s3.eu-west-3.amazonaws.com",
      },
      {
        hostname: "static-cdn.jtvnw.net",
      },
      {
        hostname: "randomuser.me",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;