/** @type {import('next').NextConfig} */

// Two deploy targets are supported:
//
//  • Vercel (default)  — a normal, fully-optimized Next.js build. Image
//    optimization is on, no base path. Nothing to configure.
//
//  • GitHub Pages      — a static export served from a repo subpath. The
//    Pages workflow sets NEXT_PUBLIC_BASE_PATH (e.g. /the_blume_marketing),
//    which switches this config into static-export mode.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const isStaticExport = basePath.length > 0;

const nextConfig = {
  reactStrictMode: true,
  ...(isStaticExport
    ? {
        output: "export",
        basePath,
        assetPrefix: basePath,
        trailingSlash: true,
      }
    : {}),
  images: {
    // The Next image optimizer can't run in a static export.
    unoptimized: isStaticExport,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
