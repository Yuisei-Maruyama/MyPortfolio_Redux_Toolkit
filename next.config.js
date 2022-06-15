/** @type {import('next').NextConfig} */
const path = require('path')
const pathSrc = path.resolve(__dirname, "./src")
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, '/src/styles')],
    prependData: `@import "${pathSrc}/styles/main.scss";`
    // additionalData: `@import "${pathSrc}/styles/main.scss";`,
  },
}

module.exports = nextConfig
