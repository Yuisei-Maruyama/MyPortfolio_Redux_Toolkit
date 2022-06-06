/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    return config
  },
}

module.exports = nextConfig
