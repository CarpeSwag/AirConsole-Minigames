var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
   template: __dirname + '/src/screen.html',
   filename: 'screen.html',
   inject: 'body'
});

module.exports = {
   entry: __dirname + '/src/screen.js',
   module: {
      loaders: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
         }
      ]
   },
   output: {
      filename: 'screen.js',
      path: __dirname + '/../build/screen'
   },
   plugins: [HTMLWebpackPluginConfig]
};

