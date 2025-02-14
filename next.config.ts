import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
        remotePatterns: [
            {
                hostname: "api.together.ai",
                protocol: "https",
                pathname: "/imgproxy",
            },
            {
        protocol: "https",
        hostname: "replicate.com",
      },
      {
        protocol: "https",
        hostname: "replicate.delivery",
      },
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com"
      }
        ]
    }
};

export default nextConfig;
