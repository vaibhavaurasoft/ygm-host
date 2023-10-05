/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  staticPageGenerationTimeout :100,
  images: {
    domains: ['https://admin.yourglobalmentors.com/'],
  },
  output: 'standalone',
}

module.exports = nextConfig
