import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    // ✅ Let production builds succeed even if ESLint finds errors
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  swcMinify: true,
}

export default nextConfig