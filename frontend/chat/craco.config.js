const CracoLessPlugin = require('craco-less');
// const { getThemeVariables } = require('antd/dist/theme');
const webpack = require('webpack');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          // lessOptions: {
          //   modifyVars: getThemeVariables({
          //     dark: true, // 开启暗黑模式
          //   }),
          //   javascriptEnabled: true,
          // },
        },
      },
    },
  ],
  webpack: {
    plugins: {
      add: [
        new webpack.ProvidePlugin({
          process: 'process/browser.js',
        })
      ]
    },
    configure: {
      module: {
        rules: [
          {
            type: 'javascript/auto',
            test: /\.mjs$/,
            use: [],
          },
        ],
      },
    },
  },
};