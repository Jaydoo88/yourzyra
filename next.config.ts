import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,      // don't fail prod builds on lint
  },
  typescript: {
    ignoreBuildErrors: true,       // don't fail prod builds on TS type errors
  },
  reactStrictMode: true,
}

export default nextConfig