import { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    "../!(node_modules)/*.stories.@(tsx|mdx)"
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
  staticDirs: [
    {
      from: '../public',
      to: 'public'
    }
  ],
  webpackFinal: async (config) => {
    const fileLoaderRule = config.module?.rules?.find((rule: any) => rule?.test && rule.test?.test('.svg'))

    if(fileLoaderRule)
    (fileLoaderRule as any).exclude = /\.svg$/; 

    // svgs
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

    console.log(config)
    if (config.resolve)
    config.resolve.alias = {
      ...config.resolve.alias,
      '@lib': path.resolve(__dirname, "../lib"),
      '@ui': path.resolve(__dirname, "../ui"),
      '@views': path.resolve(__dirname, "../views"),
    };

    return config
  }
}

export default config;