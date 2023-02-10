// const path = require("path");
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    "../@(views|ui)/*.stories.mdx",
    "../@(views|ui)/*.stories.@(tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/nextjs",
  docs: {
    "autodocs": "tag"
  },
  core: {
    "builder": "@storybook/builder-webpack5"
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    const fileLoaderRule = config.module?.rules?.find((rule: any) => rule?.test && rule.test?.test('.svg'))

    if(fileLoaderRule)
    (fileLoaderRule as any).exclude = /\.svg$/; 

    config.module?.rules?.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/] 
      },
      use: [{
        loader: '@svgr/webpack',
        options: {
           svgoConfig: {
              plugins: [{
                 name: 'removeViewBox',
                 active: false
              }]
           }
        }}],
    })

    if (config.resolve)
    config.resolve.plugins = [new TsconfigPathsPlugin({ extensions: config.resolve.extensions }) as any]

    return config
  }
}

export default config;