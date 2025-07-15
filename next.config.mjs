/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 静的エクスポート
  trailingSlash: true,
  images: {
    unoptimized: true, // 静的エクスポート時は画像最適化を無効
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
