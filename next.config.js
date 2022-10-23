/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/signin',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/signin',
        permanent: true,
      },
    ]
  },
}
