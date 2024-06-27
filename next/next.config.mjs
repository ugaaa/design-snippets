/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.NEXT_PUBLIC_STRAPI_DOMAIN],
  },
};

export default nextConfig;
