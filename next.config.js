/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'api.pupakindonesia.xyz',
      'laravel.pupakindonesia.xyz'
    ],
  },
}

module.exports = nextConfig
