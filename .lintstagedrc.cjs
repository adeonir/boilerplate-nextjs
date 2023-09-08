module.exports = {
  "*.{js,jsx,ts,tsx}": (filenames) => [
    `pnpm next lint --fix . ${filenames.join(' --file ')}`,
    `pnpm vitest related --run ${filenames.join(' ')}`,
  ],
}
