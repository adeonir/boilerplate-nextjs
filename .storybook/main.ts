import { resolve as pathResolve } from 'path'

import type { StorybookConfig } from '@storybook/nextjs'

const resolve = (path: string) => pathResolve(__dirname, path)

const config: StorybookConfig = {
  staticDirs: [resolve('../public')],
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    disableTelemetry: true,
  },
  webpackFinal: (config) => {
    // @ts-ignore
    config.resolve.alias = {
      ...config.resolve?.alias,
      '~': [resolve('../src/'), resolve('../')],
    }
    return config
  },
}

export default config
