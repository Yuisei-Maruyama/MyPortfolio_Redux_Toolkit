/** @type {import('next').NextConfig} */
import path from 'path'
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    return config
  },
}

module.exports = nextConfig
