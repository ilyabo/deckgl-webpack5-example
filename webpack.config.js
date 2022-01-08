// NOTE: To use this example standalone (e.g. outside of deck.gl repo)
// delete the local development overrides at the bottom of this file

const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CONFIG = {
  mode: 'development',

  entry: {
    app: './app.js'
  },

  devtool: 'inline-source-map',

  resolve: {
    alias: {
      // From mapbox-gl-js README. Required for non-browserify bundlers (e.g. webpack):
      'mapbox-gl$': resolve('./node_modules/mapbox-gl/dist/mapbox-gl.js')
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: "./index.html"
    }),
  ],
};

// This line enables bundling against src in this repo rather than installed module
// module.exports = env => (env ? require('../../../webpack.config.local')(CONFIG)(env) : CONFIG);
module.exports = CONFIG;
