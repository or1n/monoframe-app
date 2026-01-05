import type { NextConfig } from "next";

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' https:;
  style-src 'self' 'unsafe-inline' https:;
  img-src 'self' data: https:;
  font-src 'self' https: data:;
  connect-src 'self' https:;
  frame-ancestors 'none';
  base-uri 'self';
`;

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "no-referrer-when-downgrade" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
  { key: "Content-Security-Policy", value: ContentSecurityPolicy.replace(/\n/g, " ") },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { unoptimized: true }, // Good for NAS CPU
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;