import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: { unoptimized: true }, // Good for NAS CPU
};
export default nextConfig;