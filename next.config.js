const withPWA = require('next-pwa')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  pwa: {
    dest: 'public',
    disable: !isProduction,
  },
  images: {
    domains: ['localhost'],
  },
})
