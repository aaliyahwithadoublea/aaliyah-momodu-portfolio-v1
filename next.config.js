/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  reactStrictMode: true,
  // Turbopack configuration for faster compilation and better HMR
  // Turbopack has better hot module replacement than webpack
  turbopack: {},
  // Optimize compilation
  swcMinify: true,
  // Reduce initial bundle size
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

module.exports = nextConfig;
