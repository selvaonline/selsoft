/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  i18n,
  // Add output configuration to ensure proper client-side hydration
  output: 'standalone',
  // Ensure proper loading of scripts
  optimizeFonts: true,
  // Improve hydration
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
