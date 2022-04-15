/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.datocms-assets.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{
        loader:'@svgr/webpack',
        options: {
          "svgoConfig": {
            plugins: ["cleanupIDs"]
          }
        }
      }]
    });

    return config;
  }
}


module.exports = nextConfig
