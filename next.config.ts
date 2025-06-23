import type { NextConfig } from "next";

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

module.exports = withVanillaExtract({
  reactStrictMode: true,
});

const nextConfig: NextConfig = {
};

export default nextConfig;
