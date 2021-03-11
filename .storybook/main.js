module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/addon-options',
    '@storybook/addon-backgrounds',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
        backgrounds: false,
      }
    }
  ],
  webpackFinal: async (config, { configType }) => {
    config.optimization.splitChunks.chunks = 'initial';
    config.module.rules.push({
      test: /\.(stories|story)\.[tj]sx?$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: {
            prettierConfig: {
              printWidth: 100,
              singleQuote: false,
            },
          },
        }, 
      ],
      exclude: [/node_modules/],
      enforce: 'pre',
    });

    return config;
  },
};