/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: "/:first",
        destination: "/api/v1/gradient/:first",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
