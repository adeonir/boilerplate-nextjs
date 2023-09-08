const path = require('node:path')

module.exports = {
  "*.{js,jsx,ts,tsx}": (filenames) =>
  `pnpm next lint --fix . ${filenames.join(' --file ')}`
}
