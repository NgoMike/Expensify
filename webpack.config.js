const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => { // webpack can export object or fn with env
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('bundle_styles.css');

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',  // check if in prod. If yes: minify bundle with just source map
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true                      // always fallback to serving html for client side rendering of routes
    }
  };
};

