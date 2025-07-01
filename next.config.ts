// next.config.js

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  reactStrictMode: true,
  // Add any production options below
  swcMinify: true,
  images: {
    domains: ['onlinepianoplayer.com'], // adjust as needed
  },
};

module.exports = withVanillaExtract(nextConfig);
