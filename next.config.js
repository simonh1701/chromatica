/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/api/v1/gradient/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
