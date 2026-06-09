/** @type {import('next').NextConfig} */

// When building for GitHub Pages (a project site served from /<repo>),
// set NEXT_PUBLIC_BASE_PATH=/the_blume_marketing in the CI environment.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    // Static export can't use the Next image optimizer.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
