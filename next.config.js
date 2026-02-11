/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.media.jio.com',
        port: '',
        pathname: '/tvpimages/**',
      },
    ],
  },
}

module.exports = nextConfig
