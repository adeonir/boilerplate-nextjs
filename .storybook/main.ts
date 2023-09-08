/* eslint-disable @typescript-eslint/ban-ts-comment */
import { resolve as pathResolve } from 'node:path'

import type { StorybookConfig } from '@storybook/nextjs'

const resolve = (path: string) => pathResolve(__dirname, path)

const config: StorybookConfig = {
  staticDirs: ['../public'],
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-styling',
      options: {},
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  core: {
    disableTelemetry: true,
  },
  webpackFinal: (config) => {
    // @ts-ignore
    config.resolve.alias = {
      ...config.resolve?.alias,
      '~': [resolve('../src')],
    }
    return config
  },
}
export default config
