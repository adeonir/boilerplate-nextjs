/// <reference types="vitest" />

import { resolve as pathResolve } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

const resolve = (path: string) => pathResolve(__dirname, path)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': resolve('src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/test.{ts,tsx}'],
    exclude: ['/node_modules/', '/.next/', 'src/components/**/stories.tsx'],
    setupFiles: './vitest.setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['html'],
      include: ['src/**/*.tsx'],
    },
  },
})
