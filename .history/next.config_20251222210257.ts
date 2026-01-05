import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* This helps the DS418 CPU by not trying to resize images on the fly */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;