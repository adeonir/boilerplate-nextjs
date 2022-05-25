/// <reference types="vitest" />
/// <reference types="vite/client" />

import { resolve as pathResolve } from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const resolve = (path: string) => pathResolve(__dirname, path)

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '~': resolve('src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
})
