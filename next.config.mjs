/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',

      },
    ],
  },
   async redirects() {
    return [
      // Basic redirect
      {
        source: '/product/Add',
        destination: '/dashboard/product/Add',
        permanent: true,
      },

    ]
  },
};

export default nextConfig;
