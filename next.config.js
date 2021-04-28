/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const withPWA = require('next-pwa')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProduction,
  },
  future: {
    webpack5: true,
  },
})
