/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    staticFolder: '/static',
  },
  images: {
    domains: ['127.0.0.1'],
  },
}

module.exports = nextConfig
